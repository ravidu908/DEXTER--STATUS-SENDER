//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dextermd556@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";  
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FvTmt1M2VlR1Q2YjFMdWpLRVBOY3M2bW5nZEVOZDhLaC90eCtCT2xVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzI1QkdmNDlva1dBRldZaE5NRVVoL1h2QURTQ3pGeHVlMXdUSU03VlVYMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTk1QOWdQM2g5d29tc1BQRUZVVGNid0l2a3JoZFJhQkpVclNZK0ZiZ1g0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4ZjROd1pHTWNnaUNwSERndEZUOHdUcjdWNHBCOUJYZUVJcWVwOUUyaUV3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndKbFJtWmJ2amlMNFF2NDhGWXk5aTkrY0UyNFh4MzFrVFRybDE4VUhyV2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZ3NStiSi8vS1pWUXgxVmFxN21hc0lHTmtCRHBNZGEranZYWmZVZ2pXMkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0xZekk3SjVtZlZKSlVTZkh3WEtxcDUrVFlOS29mUWFWNzhObU1zK2ZXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicW5XQnhidHJwREZPQkdXUGR6ZkNtUEJPMzBTbTI0Ny9Idkd5SFBUdlhpZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii8xbnNFUFBzcFB5VExjdHI4WHFWMzdEb3JlUkpTZmUrYS9qb293R2VEVVVJT3JHcWlMcThCTUlRbE1kV0R6WDBXVjFFTFhhZU0ydmJjMjM2ZXJGZmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI5LCJhZHZTZWNyZXRLZXkiOiI1M1VWVldOSGdsUGpJNDZBUHVaUDJKRitMNlZsdnh6enYzazRBd1dGWXpBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU3NjU2MTgxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjcyNTZBRTExQUMzNTdDNjk1M0JDNEZGNTI3QzQ4RkQwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAyMDUxNDl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImtyRmN6TnFqUkh1MUo5T091TnJ0N0EiLCJwaG9uZUlkIjoiOTZkZGY5OWEtYjIyOS00MmY0LWE4OGUtNmU5M2ZjMmRhNTFkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFqU1FZelJEZ0I2T1pBbG9Ca3ZYbVVHSDY1dz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTDY5azQwT3hOY1gvcHJMajhreGd4R0tCRVk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVzhQU1JXNEEiLCJtZSI6eyJpZCI6Ijk0NzU3NjU2MTgxOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4qSE8J2ZsvCdmojwnZmx8J2ZtPCdmoEg8J2ZvPCdmoEg8J2Zs/CdmoHwnZmw8J2ZsvCdmbog8J2Zv/CdmoHwnZm+8J2ZtvCdmoHwnZmw8J2ZvPCdmbDwnZqBX19f4qSEIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMNnEzS0lIRU0zK29MUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI3WERrOEpONTBJVUNFL0Y3ZERGR2FGNE0xYlhRVUZmanpBNm1sYklKSmdVPSIsImFjY291bnRTaWduYXR1cmUiOiI3eCtrMkxhY1NSdXFYUVl0UUVaRGZRVEFoeVloZXpVa3Rsc0tYVG9qSnY0dFZ3VUJNaUJqVjQyQkpyenMyekw0WVNCSkI5b1NkRmxkTkRtYnFFT0JCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSU1QcWcxeGY0VHY3RE9zdy9MZEpqTFlheDVsaGtCRTRkLzA3eHMvVFdhby93T3dWd1Q5VjJsWEk4RVFqOFZiUFI3RzNSK2JTenRNdXJtcmoxTFJyaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1NzY1NjE4MToyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmUxdzVQQ1RlZENGQWhQeGUzUXhSbWhlRE5XMTBGQlg0OHdPcHBXeUNTWUYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAyMDUxNDZ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🇱🇰 P͢O͢W͢E͢R͢ B͢Y͢ R͢C͢D͢ M͢D͢",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RCD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
