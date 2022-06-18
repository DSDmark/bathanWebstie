const { Client, MessageMedia } = require('whatsapp-web.js');
const MEMES = require('random-memes');
const qrcode = require('qrcode-terminal');
const Commands = require('../data/commands.js');

const client = new Client();


//TODO GENERATE QR CODE

client.on("qr", async(qr) => {
  qrcode.generate(qr, { small: true });
});

//TODO MAKE CONNECTION BY QR CODE
client.on("qr", (qr) => {
  console.log("QR RECEIVED", qr);
});

client.on("ready", () => {
  console.log("Client is ready!");
});

//? REPLY THE MASSAGES
client.on("message",(message) => {
if(checkCommands()){
    message.reply(checkCommands(message.body.toLowerCase()).toString());
}
});

//* MAKING THE MEMES
client.on("message", async (message) => {
  if (message.body === "--random-memes") {
  let ranMemes = await  MEMES.random();
  let memeImg = await MessageMedia.fromUrl(ranMemes.image);
    try {
     client.sendMessage(ranMemes.caption,message.reply(memeImg))
    } catch {
      console.log();
    }
  }
});

client.initialize();
// ? CHACKING THE COMMANDS
function checkCommands(commands) {
  return Commands.map((e) => {
    let commanCommands = e["comman-command"];
    let sudoCommands = e["sudo-commands"][commands];
    let replyCommands = e["reply-commands"][commands];
    if (sudoCommands) {
      return (sudoCommands === undefined || null ? false : (sudoCommands + ". " + commanCommands).toUpperCase());
    }else if(replyCommands){
      return (replyCommands === undefined || null ? false : (replyCommands + ". " + commanCommands).toUpperCase());
    }
  });
}
checkCommands("hello")