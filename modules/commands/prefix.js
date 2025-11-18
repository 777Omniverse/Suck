module.exports.config = {
  name: "prefix",	
  version: "4.0.0", 
  hasPermssion: 0,
  credits: "Vtuan",
  description: "sos", 
  commandCategory: "Hệ Thống",
  usages: "",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event, Threads }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const moment = require("moment-timezone");
  var times = moment.tz("Asia/Kolkata").format("HH:mm:ss || D/MM/YYYY")
  var thu = moment.tz('Asia/Kolkata').format('dddd');
moment.tz('Asia/Kolkata').format('dddd');
  if (thu == 'Sunday') thu = 'Sunday'
  if (thu == 'Monday') thu = 'Monday'
  if (thu == 'Tuesday') thu = '𝐓uesday'
  if (thu == 'Wednesday') thu = 'Wednesday'
  if (thu == "Thursday") thu = 'Thursday'
  if (thu == 'Friday') thu = 'Friday'
  if (thu == 'Saturday') thu = 'Saturday'
  var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;
  const timeStart = Date.now();
  const tdung = require('./../../img/gaivip.json');
  var image1 = tdung[Math.floor(Math.random() * tdung.length)].trim();
  var image2 = tdung[Math.floor(Math.random() * tdung.length)].trim();
  function vtuanhihi(image,vtuandz,callback){
    request(image).pipe(fs.createWriteStream(__dirname + `/`+vtuandz)).on("close", callback);
  }
  if (body.toLowerCase() == "Prefix" || (body.toLowerCase() == "prefix")) {
    let callback = function () {
          return api.sendMessage({
        body: `====『 𝙿𝚁𝙴𝙵𝙸𝚇 』====\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n→𝙿𝚛𝚎𝚏𝚒𝚡 Aluminum Door: ${prefix}\n→𝙿𝚛𝚎𝚏𝚒𝚡 System: ${global.config.PREFIX}\n→Bot Name: ${global.config.BOTNAME}\n→Existing Bots ${client.commands.size} Command\n→𝑃𝑖𝑛𝑔: ${Date.now() - timeStart}ms\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『  ${thu} || ${times} 』`,
        attachment: [fs.createReadStream(__dirname + `/1.png`), fs.createReadStream(__dirname + `/2.png`)]
      }, event.threadID, () => {
        fs.unlinkSync(__dirname + `/1.png`);
        fs.unlinkSync(__dirname + `/2.png`);
      },event.messageID);
    };
        vtuanhihi(image1,'1.png',()=>{vtuanhihi(image2,'2.png',callback)})
 }
}

module.exports.run = async ({ api, event, args, Threads }) => {}


