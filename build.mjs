// يولّد support.html وprivacy.html من src/*.html بحقن بريد الدعم (المتغيّر الوحيد في config.js) نصًا ثابتًا. تشغيل: node build.mjs
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
const email = readFileSync("config.js", "utf8").match(/SUPPORT_EMAIL\s*=\s*"([^"]+)"/)?.[1];
if (!email) throw new Error("SUPPORT_EMAIL غير موجود في config.js");
for (const f of readdirSync("src").filter((n) => n.endsWith(".html")))
  writeFileSync(f, readFileSync(`src/${f}`, "utf8").replaceAll("__SUPPORT_EMAIL__", email));
