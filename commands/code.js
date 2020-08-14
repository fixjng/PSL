const Discord = require("discord.js");
const bot = new Discord.Client();
const db = require("quick.db");
exports.run = async (client, message, args) => {

    let redeemcode = args.join("")
    
let l = db.get(`25dropp_${message.guild.id}`)
if(l === null) return db.set(`25dropp_${message.guild.id}`, 0)
  
let re = db.get(`25dropuserr_${message.guild.id}. ${message.author.id}`)
if(re === null) return db.set(`25dropuserr_${message.guild.id}`, 1)

                     const xx = new Discord.RichEmbed()
           .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a code to redeem!**")
                     
                     
                     const lx = new Discord.RichEmbed()
           .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You already redeemed this code!**")                     
                     
    
    if(!args[0]) return message.reply(xx)

  const ex = new Discord.RichEmbed()
           .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> This code is out of use [25 uses]!**")
  
  
    const lol = new Discord.RichEmbed()
           .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> This code is out of use [1 uses]!**")
    
                 
    
                             
                                    
if (redeemcode === "zyniscute") { 
      if (l > 25) return message.reply(ex)
   if (re === 2) return message.reply(lx)


      let uses = 1;
  let set = 2;
       let reward = 20;
      
       db.set(`25dropuserr_${message.guild.id}. ${message.author.id}`, set)
      db.add(`25dropp_${message.guild.id}`, uses)
     db.add(`money_${message.guild.id}_${message.author.id}`, reward)
             
   let reportschannel = message.guild.channels.find(`name`, "redeemed");


          const actualchanel = new Discord.RichEmbed()
.setColor("#d1ae18")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
.setDescription(`**<:zynSuccess:725709845411528704> Congratulations! You redeemed the code drop, ${l}**`)
.addField("Reward", "15 Points")
          
    reportschannel.send(`${l} uses, ${message.author}`);
        message.channel.send(actualchanel)
      
} else{
                   const ex = new Discord.RichEmbed()
           .setColor("#d1ae18")
                   .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setDescription(`<:zynError:725707818304405515> **${redeemcode} is not a valid code!**`)
                   message.reply(ex)
  } 
  
}
module.exports.config = {
name: "redeem",
aliases: []
}