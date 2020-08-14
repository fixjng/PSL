const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const colours = require("./colours.json");
const superagent = require("superagent")
const db = require("quick.db")

const bot = new Discord.Client({disableEveryone: false});
 bot.snipes = new Map();
const events = require('./events.js')
events.run(bot);




const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
let cooldown = new Set();
let cdseconds = 90000;

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }
console.log(`Successfully loaded ${jsfile.length} files.`);
    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});





bot.on("guildMemberAdd", function(message) {
   if ( message.guild.id === '732943196711288833') {
  let guild = message.guild;
  let member = message;


  const embed = new Discord.RichEmbed()
   .setColor("#d1ae18")
 .setDescription(`**You have arrived at the Pro Stucid League Season 1: P.S.L:S1 server ${member} \n-We hope you enjoy your stay!**`)
  .setImage("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")

  guild.channels.find(`name`, "👋│welcome").send(embed);
   }
   });


bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;
 const mention = new Discord.RichEmbed()
 .setTitle("PSL's Prefix is")
      .setDescription(
        "```+```"
      )
     .setColor("#d1ae18");

    const mentionRegex = RegExp(`^<@!${bot.user.id}>$`);
    const mentionRegexPrefix = RegExp(`^<@!${bot.user.id}> `);

    if (message.content.match(mentionRegex))
      return message.channel.send(mention);
});


bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;


      let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

})


bot.on("message", async message => {
  
  let user = message.author
  if (message.channel.name != "🎥│psl-media") return;
  
  
 const args = message.content.split(' ').slice(1);
 const amount = args.join(' ');
  
          const hx = new Discord.RichEmbed()
       .setColor("#d1ae18")
          .setAuthor("Suggestion", user.user.displayAvatarURL)
          .setDescription(amount)
  
          message.delete()
  message.channel.send(hx)
  
});

bot.on("ready", () => {
     console.log(`${bot.user.username} is online`)
   

 


   let watching = [
        
         `You`
        
    ]

    setInterval(function() {
        let watchinging = watching[Math.floor(Math.random() * watching.length)];
        bot.user.setActivity(watchinging, {type: "Watching"});

    }, 7000)


})

//bot.on('voiceStateUpdate', (oldMember, newMember) =>{
 
 // let message = newMember;
  
//  if(oldMember.voiceChannel.members.size === 0) return;
  
//  let channel = oldMember.voiceChannel
 //if (oldMember.voiceChannel.content.includes === "Room") return channel.delete
  
  //let chan = message.guild.channels.find('name', name) 
  
  // if(message.voiceChannel.members.size === 0) return chan.delete();
  
//});
 

bot.login(botconfig.token)