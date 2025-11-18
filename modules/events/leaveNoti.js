module.exports.config = {
	name: "leaveNoti",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "HĐGN",//Mod by H.Thanh
	description: "Thông báo Bot hoặc người rời khỏi nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};
const checkttPath = __dirname + '/../commands/tuongtac/checktt/'


module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const path = join(__dirname, "cache", "leaveGif", "randomgif");
    if (existsSync(path)) mkdirSync(path, { recursive: true });

    const path2 = join(__dirname, "cache", "leaveGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function ({ api, event, Users, Threads }) {
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
    const { createReadStream, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
  var fullYear = global.client.getTime("fullYear");
  	var getHours = await global.client.getTime("hours");
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:s");
    const hours = moment.tz("Asia/Kolkata").format("HH");
    const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
    const iduser = event.logMessageData.leftParticipantFbId;
    const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "managed": ;
	const path = join(__dirname, "cache", "leaveGif","randomgif");
	const pathGif = join(path, `${threadID}`);
	var msg, formPush

	if (existsSync(checkttPath + threadID + '.json')) {
        const threadData = JSON.parse(readFileSync(checkttPath + threadID + '.json'));
        const userData_week_index = threadData.week.findIndex(e => e.id == event.logMessageData.leftParticipantFbId);
        const userData_day_index = threadData.day.findIndex(e => e.id == event.logMessageData.leftParticipantFbId);
        const userData_total_index = threadData.total.findIndex(e => e.id == event.logMessageData.leftParticipantFbId);
        if (userData_total_index != -1) {
            threadData.total.splice(userData_total_index, 1);
        }
        if (userData_week_index != -1) {
            threadData.week.splice(userData_week_index, 1);
        }
        if (userData_day_index != -1) {
            threadData.day.splice(userData_day_index, 1);
        }

        writeFileSync(checkttPath + threadID + '.json', JSON.stringify(threadData, null, 4));
    }
    if (existsSync(path)) mkdirSync(path, { recursive: true });

(typeof data.customLeave == "undefined") ? msg = "→ 𝙂𝙊𝙊𝘿𝘽𝙔𝙀 {name} 𝙎𝘼𝙏𝙄𝙎𝙁𝙄𝙀𝘿 {type} 𝙁𝙍𝙊𝙈 𝙏𝙃𝙀 𝙂𝙍𝙊𝙐𝙋 !!!\n[🔎]→ 𝑈𝑟𝑙 𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘: m.me/{iduser}\n[🤖]→ 𝙏𝙃𝘼𝙉𝙆 𝙔𝙊𝙐 {name} 𝘼𝘾𝘾𝙊𝙈𝙋𝘼𝙉𝙄𝙀𝘿 𝙐𝙎 𝙄𝙉 𝙏𝙃𝙀 𝙃𝙐𝙏 𝙫𝙞𝙖\n◆━━━━━━━━━━━━━◆\n[❤️‍🔥]→ 𝙂𝙍𝙊𝙐𝙋 𝙊𝙐𝙏 𝙏𝙄𝙈𝙀: 𝙎𝙀𝙎𝙎𝙄𝙊𝙉 {session} || {time}\n[👉]→ 𝙊𝙐𝙏 𝘿𝘼𝙏𝙀: {fullYear}" : msg = data.customLeave;
	msg = msg
    .replace(/\{iduser}/g, iduser)
    .replace(/\{name}/g, name)
    .replace(/\{type}/g, type)
    .replace(/\{session}/g, hours <= 10 ? "𝙗𝙧𝙞𝙜𝙝𝙩" : 
    hours > 10 && hours <= 12 ? "𝗹𝘂𝗻𝗰𝗵" :
    hours > 12 && hours <= 18 ? "𝗮𝗳𝘁𝗲𝗿𝗻𝗼𝗼𝗻" : "𝗶")
    .replace(/\{fullYear}/g, fullYear)
    .replace(/\{time}/g, time);  

	const randomPath = readdirSync(join(__dirname, "cache", "leaveGif", "randomgif"));

	if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif) }
	else if (randomPath.length != 0) {
		const pathRandom = join(__dirname, "cache", "leaveGif", "randomgif",`${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
		formPush = { body: msg, attachment: createReadStream(pathRandom) }
	}
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}