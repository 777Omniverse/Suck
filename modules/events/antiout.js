module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events",
  dependencies: {
		"fs-extra": "",
		"path": ""
}
};



module.exports.run = async({ event, api, Threads, Users }) => {
  const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
  const { join } =  global.nodemodule["path"];
  
   const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Kolkata").format("HH:mm:ss")
var thu = moment.tz('Asia/Kolkata').format('dddd');
     if (thu == 'Sunday') thu = 'Sunday'
  if (thu == 'Monday') thu = 'Monday'
  if (thu == 'Tuesday') thu = 'Tuesday'
  if (thu == 'Wednesday') thu = 'Wednesday'
  if (thu == "Thursday") thu = 'Thursday'
  if (thu == 'Friday') thu = 'Friday'
  if (thu == 'Saturday') thu = 'Saturday'
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
  
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "leave by yourself" : "kicked by admin";
 if (type == "tự rời") {
const path = join(__dirname, "cache", "antiout","randomgif");
	const gifPath = join(path, `tb.mp3`);///không thêm được
  const hhh = join(__dirname, "cache", "antiout","randomgif");
	const gifhh = join(hhh, `tc.mp3`);//thêm được
	const randomPath = readdirSync(join(__dirname, "cache", "antiout", "randomgif"));
	 if (randomPath.lenth != 0) {
		const pathRandom = join(__dirname, "cache", "antiout", "randomgif",`${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
}
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage({body: `[ 𝗔𝗡𝗧𝗜𝗢𝗨𝗧 ] - 𝗖𝗮𝗻'𝘁 𝗮𝗱𝗱 𝗺𝗼𝗿𝗲 𝘁𝗼 𝘁𝗵𝗶𝘀 𝗲𝘃𝗶𝗹 𝗮𝗿𝗺𝘆 ${name} 𝗝𝗼𝗶𝗻 𝗚𝗿𝗼𝘂𝗽\n[ 𝘁𝗶𝗺𝗲 ] ➣ ${timeNow} `, attachment: createReadStream(gifPath) },event.threadID)
   } else api.sendMessage({body:`[ 𝗔𝗡𝗧𝗜𝗢𝗨𝗧 ] - 𝐀𝐝𝐮𝐮𝐮 𝗹𝗼𝘃𝗲𝗿 ${name} 𝗠𝗶𝗻𝗲 𝗷𝘂𝘀𝘁 𝗲𝘀𝗰𝗮𝗽𝗲𝗱 𝘁𝗵𝗲 𝗴𝗿𝗼𝘂𝗽 𝗯𝘂𝘁 𝗰𝗼𝘂𝗹𝗱𝗻'𝘁 𝗲𝘀𝗰𝗮𝗽𝗲 𝘆𝗼𝘂𝗿 𝗵𝗮𝗻𝗱𝘀 ! \n『 𝐓𝗶𝗺𝗲 』➣ ${timeNow} `,attachment: createReadStream(gifhh) }, event.threadID);
  })
 }
}