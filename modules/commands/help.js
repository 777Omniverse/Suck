module.exports.config = {
    name: "help",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "DC-Nam",//mod lại by táo táo
    description: "Xem danh sách lệnh và info",
    commandCategory: "Danh sách lệnh",
    usages: "[tên lệnh/all]",
    cooldowns: 5
};
module.exports.languages = {
    "vi": {},
    "en": {}
}
module.exports.run = async function({
    api,
    event,
    args,
  Currencies,
  __GLOBAL
}) {
const { events } = global.client;
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  const { commands } = global.client;
    const {
        threadID: tid,
        messageID: mid,
        senderID: sid
    } = event
    var type = !args[0] ? "" : args[0].toLowerCase()
    var msg = "",
        array = [],
        i = 0
    const cmds = global.client.commands
    const TIDdata = global.data.threadData.get(tid) || {}
    var prefix = TIDdata.PREFIX || global.config.PREFIX
    if (type == "all") {
        for (const cmd of cmds.values()) {
            msg += `💞${++i}. ${cmd.config.name}: ${cmd.config.description}\n`
        }
        return api.sendMessage(msg, tid, mid)
    }
    if (type == "all") return
    if (type) {
        for (const cmd of cmds.values()) {
            array.push(cmd.config.name.toString())
        }
        if (!array.find(n => n == args[0].toLowerCase())) {
            const stringSimilarity = require('string-similarity')
            commandName = args.shift().toLowerCase() || ""
            var allCommandName = [];
            const commandValues = cmds['keys']()
            for (const cmd of commandValues) allCommandName.push(cmd)
            const checker = stringSimilarity.findBestMatch(commandName, allCommandName)
            if (checker.bestMatch.rating >= 0.5) command = client.commands.get(checker.bestMatch.target)
            msg = `=== 『 HELP 』 ===\n━━━━━━━━━━━━━━━━\n[⚜️] ➜ Command not found '${type}' in the system.\n[⚜️] ➜ Similar command found '${checker.bestMatch.target}'`
            api.sendMessage(msg, tid, mid)
        }
        const cmd = cmds.get(type).config
        msg = `[🧸] ➜ Name: ${cmd.name} ( ${cmd.version} )\n[🔗] ➜ Power: ${TextPr(cmd.hasPermssion)}\n[👤] ➜ Author: ${cmd.credits}\n[💬] ➜ Author: ${cmd.description}\n[🧩] ➜ Belongs To The Group: ${cmd.commandCategory}\n[🌟] ➜ Using: ${cmd.usages}\n[⏰] ➜ Time For: ${cmd.cooldowns}s`
        api.sendMessage(msg, tid, mid)
    } else {
        CmdCategory()
        array.sort(S("nameModule"))
        for (const cmd of array) {
          msg1 = `======『 𝗛𝗘𝗟𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 』======\n\n`
            msg += `[💝] ➜ Belongs To The Group: ${cmd.cmdCategory.toUpperCase()}\n[🧸] ➜ Total: ${cmd.nameModule.length} Command\n[⚜️]➜ This Command Has Powers That Anyone Can Use: ${TextPr(cmd.permission)}\n[🔎] ➜ The Command: ${cmd.nameModule.join(", ")}\n\n`
        }
        msg += `[🔗] ➜ The Boots Current Order Book Is Available
: ${cmds.size}\n[😻] ➜ You Release Your Emotions "❤️" If You Want To View System Information 𝗯𝗼𝘁\n━━━━━━━━━━━━━━━━━━\n[💜] ➜ Using: Content "${prefix}𝗵𝗲𝗹𝗽 + Command Name" To See Details On How To Use The Command\n[💙] ➜ Using : Content "${prefix}𝗵𝗲𝗹𝗽 𝗮𝗹𝗹" Save All Commands Available On The Bot
\n\n⏰===『 ${timeNow} 』===⏰`
        api.sendMessage({body: msg1 + msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://webapi.chaocacbannhe.repl.co/phongcanh')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
    }
  module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "❤") return; 
 api.unsendMessage(handleReaction.messageID);
        var msg = `===== [ BOT INFORMATION  ] =====\n\n[💮] ➜ Currently Bots  is already online ${hours} Hours ${minutes} Minutes ${seconds} Seconds\n[⚙️] ➜ Current Version Of The Bot: ${global.config.version}\n[🔗] ➜ Obey Orders: ${commands.size}\n🖨️ Current: ${events.size} Event Command\n[👥] ➜ Total Users: ${global.data.allUserID.length}\n[🏘️] ➜ Total Group: ${global.data.allThreadID.length}\n[💓] ➜ 𝗣𝗿𝗲𝗳𝗶𝘅 𝗯𝗼𝘁: ${prefix}`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://webapi.chaocacbannhe.repl.co/phongcanh')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID); 
  }
    function CmdCategory() {
        for (const cmd of cmds.values()) {
            const {
                commandCategory,
                hasPermssion,
                name: nameModule
            } = cmd.config
            if (!array.find(i => i.cmdCategory == commandCategory)) {
                array.push({
                    cmdCategory: commandCategory,
                    permission: hasPermssion,
                    nameModule: [nameModule]
                })
            } else {
                const find = array.find(i => i.cmdCategory == commandCategory)
                find.nameModule.push(nameModule)
            }
        }
    }
}

function S(k) {
    return function(a, b) {
        let i = 0;
        if (a[k].length > b[k].length) {
            i = 1
        } else if (a[k].length < b[k].length) {
            i = -1
        }
        return i * -1
    }
}

function TextPr(permission) {
    p = permission
    return p == 0 ? "Member" : p == 1 ? "Supervisor" : p = 2 ? "ADMINBOT" : "Governor"
      }