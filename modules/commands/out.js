module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "DũngUwU",
  description: "out box",
  commandCategory: "Hệ Thống",
  usages: "[tid]",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
  var id;
  if (!args.join(" ")) {
    id = event.threadID;
  } else {
    id = parseInt(args.join(" "));
  }
  return api.sendMessage('𝗥𝗲𝗰𝗶𝘃𝗲𝗱 𝗴𝗿𝗼𝘂𝗽 𝗼𝘂𝘁 𝗼𝗿𝗱𝗲𝗿 𝗳𝗿𝗼𝗺 𝗮𝗱𝗺𝗶𝗻!', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
}