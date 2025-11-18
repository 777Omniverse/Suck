const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.4",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 6,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["you look like innocent😊", "don't call me Bot oi call me hubby😁","Do not disturb again and again I am busy with my girlfriend🙄","I don't talk to the poor😑","don't come so close love will happen😛😍","say baby do you love me😜","hey my love i am in no mood to joke😏","Say what is the work, don't be shy😚","you  don't have any work eat whole day eat and spend  whole  day on messanger🤔","shutup alway bot bot you don't have any work🧐","Tell me no one is watching🥱","oh my baby give me one kiss since many days don't kiss me💋💋","go away I don't have any other work do you keep bothering me all the time😤","Hey my wife how are you🤪😝","come inbox can't talk here🤭","Don't call me I am busy🙄","hey you are the one i don't know😂","i am your heartbeat💓💓","You are insulting by saying robot robot😬","dont call me bot call me hubby🤗","i can't see anythingI😎","do not want to talk to you🤐","will you marry me?❣👰🤵","i'm here what happened sweetheart🥴","keep quiet or else i will come out and break your teeth🦷👈","Seeing the boss, you have no other work🖐👊","you keeps on talking all the time🤕","take a shower first","i am blind😎","yes tell me🤫","Hey baby come here give a kiss💋 here and give two kisses💋💋 here","hey man i'm in no mood to joke😔","don't bother me i will kiss😌🖐","don't come so close love will happen🥺","will you marry me?🥰","Go away, you have no business🤷","when you see,you keeps on talking😒","marry me","Hey baby come here give a kiss here and give two kisses here","hey man i'm in no mood to joke🙂","Block your bf call me😝"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gn")) {
     return api.sendMessage("️❤️ Good Night too darling 🥰", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "gm")) {
     return api.sendMessage("❤️ Good Morning too baby 🥰", threadID);
   };


  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤕")) {
     return api.sendMessage("Don't think too much you will be admit in the hospital", threadID);
   };

  
  if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😎")) {
     return api.sendMessage("Don't show me your attitude❌", threadID);
   };

  
  if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😆")) {
     return api.sendMessage("Don't laugh too much i don't like ", threadID);
   };


    if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "love you")) {
     return api.sendMessage("now you are in love with me baby", threadID);
   };


      if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("you're falling in love", threadID);
   };

  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello")) {
     return api.sendMessage("Hi-hello how are you 💖🤍✨", threadID);
   };


  if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "🙈")) {
     return api.sendMessage("oh please don't shy infront of me ", threadID);
   };

  
   if ((event.body.toLowerCase() == "emma") || (event.body.toLowerCase() == "@emma")) {
     return api.sendMessage("❤️don't mention her name idiot stay away from her bakla😈", threadID);
   };


  if ((event.body.toLowerCase() == "🤡") || (event.body.toLowerCase() == "🤪")) {
     return api.sendMessage("You have mental problems that's why you are making such a face", threadID);
   };


  if ((event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😡")) {
     return api.sendMessage("Don't show this anger to me, if I show it, you will be left", threadID);
   };


    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😚😙")) {
     return api.sendMessage("my baby wants to kiss me come baby do it fastt", threadID);
   };

  
   if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("Do you want go in heaven🙄😈", threadID);
   };

  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
     return api.sendMessage("Don't show me your innocent face😈", threadID);
   };

  
   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "by")) {
     return api.sendMessage("BYe don't come again ❤️ ", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `😜${name}😜, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }