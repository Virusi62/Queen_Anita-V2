//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "254 104 916091";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEFQaXZRNlUxWGFjcWJIbTI1bGtGbUc1YzFLckpBUldCUVpFL0x4SFduUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEttYUxZN0ZyMFdtWmRXZDdDWEhqN1A4N2hEMTVyY3hKNjAxOEtSVlJXdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SU9JTDFiZSszZjg3SXoxTVR1aGE1Z1hoODhGUEI3VGNoTUZZZEVaUTNFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4SEZ0K3AxSkNqS0JQR1hpTU5ZUnhwRjQ0bDNEQmtaQ0N6SWZqVm8xblN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFMazNZVWE3K0hrcHNpYmpRYjhlU0FOSU05VWFrUnFEUG9RMDNpYXJZMXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNkVm1TaHViT3hJLzRXMGNRY2dXdWRMdFdoMTMyOFh1RDdmbW9rbWVyUmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlBjRmpWanNpdkw2alRJN1d3T0srT1d1QnVFaHhkZnBQN1Btc1JQenRuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnZSa0FtVm5mTnVBYTlWa3RTMVZNSG1XL2F2aHJ0Vy9ucGNJZ3BzQUpFUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImYxbGJ0SjlBd0xxc1Njd29pMHlrKzA3ODNyYWY0N0R2VW53aWF4MlJiRlhXeE5UMFR0N1BGNEZaSGVkc2FSYUdRdEliZTNyUndoOFlhY0pRNGorS2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiIreFJGdGV4bG5NblUxVUtFdkpJL3ovOTBsNmFqZmJLb2NxZ0FuTkttVUdRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDEwNDkxNjA5MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3RkZBNDA4MENEQjVBRUJFQ0RCMTcwNEZFMzk4N0MyOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyOTc5NTg1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVbTc4cjlpQlNqQzBnYWFGOG94WkJRIiwicGhvbmVJZCI6IjcyZjc5MGExLTYwMGItNGZjZC04NDVkLWY5NWRlNjk2YTc5MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6R0lDZUVzTGxScnVPN1RHNGNmL1FaUS9CY2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3JPdkovRVpLQm0wcDJYdEFOUmpEREZqN3E4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFKQzdZTTdHIiwibWUiOnsiaWQiOiIyNTQxMDQ5MTYwOTE6MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSy9yazRRRUVPeXB5clVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZnYxTVI0bStTa0FuZkk2RG9OUWRsMFVPam5wbTVGMVFwc0dRRGtTWlAwRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUnV5R1YzTzU1RHc2bmI3WUY5UTRCTXR1Y29DYUlNdWRhS3lMWCtnaVVoWVhJWU4welpzb0hFTEQrNlE3cHRVS2hHc0hiTXcwbWQzQ2E2ZkoxTU43QVE9PSIsImRldmljZVNpZ25hdHVyZSI6InBwc3kreUR4bHkwYkR1eEZpa3c0eElIcnB4ZUFSZmtRMkhseG9Xd1p5TVpqY3FCVi9KTXJPSTEvL1AwdWVuT3pqVTZscnIydnlITTNQbVB5TWE5RGdnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTA0OTE2MDkxOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDc5VEVlSnZrcEFKM3lPZzZEVUhaZEZEbzU2WnVSZFVLYkJrQTVFbVQ5QiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjk3OTU4MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMKzUifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "POROR-HIGH",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "ALVIN MD",
  ownername: process.env.OWNER_NAME || "Mistah X",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
