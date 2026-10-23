const fs = require("fs");
const path = require("path");

const root = __dirname;
const files = ["102.txt", "106.txt", "164.txt", "199.txt", "207.txt"];

function parseFile(name) {
  const raw = fs.readFileSync(path.join(root, name), "utf8");
  const lines = raw.split(/\r?\n/);
  let code = "";
  let title = "";
  const items = [];
  const notes = [];
  let current = null;
  const itemRe = /^(?:\*\s*)?(\d+(?:[.\-]\d+)+)\.?\s*(.*)$/;

  for (const rawLine of lines) {
    const line = rawLine.replace(/([A-Za-zƏəĞğİıÖöŞşÜüÇç])\t+([A-Za-zƏəĞğİıÖöŞşÜüÇç])/g, "$1$2").replace(/[ \t]+/g, " ").trim();
    if (!line || line === "*") continue;

    const titleMatch = line.match(/^Maddə\s+(\d+)\.\s*(.+)$/);
    if (titleMatch) {
      code = titleMatch[1];
      title = titleMatch[2].trim();
      continue;
    }

    if (/^Qeyd\b/i.test(line)) {
      notes.push(line);
      continue;
    }

    if (line.startsWith("(") || line.startsWith("*(") || line.startsWith("* (")) {
      if (current) current.notes.push(line.replace(/^\*\s*/, ""));
      continue;
    }

    const m = line.match(itemRe);
    if (m && (m[1] === code || m[1].startsWith(code + ".") || m[1].startsWith(code + "-"))) {
      const id = m[1];
      const text = (m[2] || "").trim();
      const existing = items.find((it) => it.id === id);
      if (existing) {
        if (text.length > existing.text.length) existing.text = text;
        current = existing;
        continue;
      }
      current = { id, text, notes: [] };
      items.push(current);
      continue;
    }

    if (current) current.text = (current.text ? current.text + "\n" : "") + line;
  }

  const ids = new Set(items.map((it) => it.id));
  for (const it of items) {
    const parts = it.id.split(".");
    const parent = parts.length > 2 ? parts.slice(0, -1).join(".") : null;
    it.parent = parent && ids.has(parent) ? parent : null;
    it.article = code;
    it.repealed = /^Çıxarılmışdır\.?$/i.test(it.text.trim());
    it.notes = [...new Set(it.notes)];
    it.text = it.text
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean)
      .join("\n");
  }

  return { code, title, notes: [...new Set(notes)], items };
}

function loadExtras() {
  const file = path.join(root, "js", "data.js");
  if (!fs.existsSync(file)) return { titles: {}, overlaps: [] };
  const vm = require("vm");
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync(file, "utf8"), sandbox);
  const extra = sandbox.window.GUZESHT || {};
  const titles = {};
  for (const art of Object.values(extra.articles || {})) {
    for (const it of art.items || []) titles[it.code] = it.title || "";
  }
  return { titles, overlaps: extra.overlaps || [] };
}

function loadQuestions(fileName, key) {
  const file = path.join(root, "js", fileName);
  if (!fs.existsSync(file)) return [];
  const vm = require("vm");
  const sandbox = { window: {}, globalThis: {} };
  sandbox.globalThis = sandbox;
  vm.runInNewContext(fs.readFileSync(file, "utf8"), sandbox);
  return sandbox.window[key] || sandbox[key] || [];
}

function loadVatMatrix() {
  const file = path.join(root, "js", "vat-matrix.js");
  if (!fs.existsSync(file)) return { cols: [], rows: {} };
  const vm = require("vm");
  const sandbox = { window: {}, globalThis: {} };
  sandbox.globalThis = sandbox;
  vm.runInNewContext(fs.readFileSync(file, "utf8"), sandbox);
  return sandbox.window.VAT_MATRIX || sandbox.VAT_MATRIX || { cols: [], rows: {} };
}

const { titles, overlaps } = loadExtras();
const questions102 = loadQuestions("questions-102.js", "Q102");
const questions164 = loadQuestions("questions-164.js", "Q164");
const questions106 = loadQuestions("questions-106.js", "Q106");
const questions199 = loadQuestions("questions-199.js", "Q199");
const questions207 = loadQuestions("questions-207.js", "Q207");
const vatMatrix = loadVatMatrix();
const articles = files.map(parseFile);
for (const art of articles) {
  for (const it of art.items) it.title = titles[it.id] || "";
}
const ids = articles.flatMap((a) => a.items.map((i) => i.id));
const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dup.length) throw new Error("Duplicate ids: " + dup.join(", "));

const byId = Object.fromEntries(articles.flatMap((a) => a.items.map((i) => [i.id, i])));
if (!byId["102.1.6"].text.includes("200 manat")) throw new Error("102.1.6 parse failed");
if (!byId["102.1.6"].title) throw new Error("102.1.6 title missing");
if (!byId["102.1-1"].text.includes("800 manat")) throw new Error("102.1-1 parse failed");
if (!byId["102.1.3.1"].text.includes("Təhsil və ya müalicə")) throw new Error("102.1.3.1 continuation missing");
if (!byId["164.1.34-2"].text.includes("aqrotexniki")) throw new Error("164.1.34-2 truncated");
if (!articles.find((a) => a.code === "164").notes.some((n) => n.startsWith("Qeyd"))) {
  throw new Error("164 qeyd missing");
}
if (byId["164.1.64"].notes.some((n) => n.startsWith("Qeyd"))) throw new Error("qeyd stuck on last item");

const htmlPath = path.join(root, "app.html");
let html = fs.readFileSync(htmlPath, "utf8");
if (!html.includes("__DATA_JSON__")) throw new Error("placeholder missing");
const known = new Set(articles.flatMap((a) => a.items.map((it) => it.id)));
const cleanOverlaps = overlaps
  .map((o) => ({
    id: o.id,
    title: o.title,
    hint: o.hint || "",
    duration: o.duration || "",
    taxes: o.taxes || [],
    items: (o.items || []).filter((it) => known.has(it.code))
  }))
  .filter((o) => o.items.length);
const vatUnknown = Object.keys(vatMatrix.rows || {}).filter((id) => !known.has(id));
if (vatUnknown.length) throw new Error("Unknown VAT matrix ids: " + vatUnknown.join(", "));
const json = JSON.stringify({ articles, overlaps: cleanOverlaps, questions102, questions164, questions106, questions199, questions207, vatMatrix }).replace(/</g, "\\u003c");
html = html.replace("__DATA_JSON__", json);
fs.writeFileSync(path.join(root, "index.html"), html);

const counts = articles.map((a) => `${a.code}:${a.items.length}`).join(" ");
const titled = articles.reduce((n, a) => n + a.items.filter((it) => it.title).length, 0);
function checkBank(list, re, label) {
  const qIds = new Set(list.map((q) => q.itemId));
  const unknownQ = [...qIds].filter((id) => !known.has(id));
  if (unknownQ.length) throw new Error("Unknown " + label + " items: " + unknownQ.join(", "));
  const leaked = list.filter((q) => re.test(q.q + q.answer + (q.explain || "") + q.options.join(" ")));
  if (leaked.length) throw new Error("Article number leaked in " + label + ": " + leaked[0].q);
}
checkBank(questions102, /102\.\d/, "q102");
checkBank(questions164, /164\.\d/, "q164");
checkBank(questions106, /106\.\d/, "q106");
checkBank(questions199, /199\.\d/, "q199");
checkBank(questions207, /207\.\d/, "q207");
console.log("wrote index.html", counts, "total", ids.length, "titles", titled, "overlaps", cleanOverlaps.length, "q102", questions102.length, "q164", questions164.length, "q106", questions106.length, "q199", questions199.length, "q207", questions207.length, "vat", Object.keys(vatMatrix.rows).length);
