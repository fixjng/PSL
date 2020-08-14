const Discord = require("discord.js");
const db = require('quick.db')

module.exports.run = async(bot, message, args) => {


    const validuser = new Discord.RichEmbed()
 .setColor("#d1ae18")
.setDescription(`**<:zynError:725707818304405515> You can only open tickets in <#733310238090068018>**`)
if (message.channel.name != "🔓│create-tickets") return message.channel.send(validuser).then(msg => msg.delete(10000));

  
let closeedticket = new Discord.RichEmbed()
        .setColor("#d1ae18")
          .setDescription(`**<:zynError:725707818304405515> Please provide a reason to open the ticket.**`)


let ex = new Discord.RichEmbed()
          .setColor("#d1ae18")
          .setDescription(`**<:zynError:725707818304405515> You already have a ticket opened.**`)

let hey = new Discord.RichEmbed()
          .setColor("#d1ae18")
          .setDescription(`**<:zynError:725707818304405515> You are blacklisted from creating tickets.**`)




 let reason = args.slice(0).join(' ')
 if(!reason) return message.channel.send(closeedticket).then(msg => msg.delete(4000));
message.delete()
  



  let user = message.guild.members.get(message.author.id).displayName
  
  let human = message.author.username
 
  

  
const name = `case-${human}`
 if (message.guild.channels.exists('name', name)) { return message.reply(ex) } else;    
                                        

let men = message.author


  
const chaaanel = new Discord.RichEmbed()
.setColor("#d1ae18")
.setAuthor(`${user}, Your ticket has been opened.`, message.author.displayAvatarURL)
.setDescription("**Please explain your issue in detail as staff arrive, Thank you!**")
.addField("**Reason**", reason)
.setFooter("Use +close to close the ticket.")


   
 message.guild.createChannel(name, { type: "text"}).then(
      (chan) => {
      chan.overwritePermissions(message.guild.roles.find('name', '@everyone'), {
         'VIEW_CHANNEL': false
      })
      chan.overwritePermissions(message.guild.roles.find('name', '[Owner]'), {
          'VIEW_CHANNEL': true,
        'SEND_MESSAGES': true
      })
              chan.overwritePermissions(message.guild.roles.find('name', '[Executive]'), {
          'VIEW_CHANNEL': true,
        'SEND_MESSAGES': true
      })
              chan.overwritePermissions(message.guild.roles.find('name', '[Manager]'), {
          'VIEW_CHANNEL': true,
        'SEND_MESSAGES': true
      })
              chan.overwritePermissions(message.guild.roles.find('name', '[Administrator]'), {
          'VIEW_CHANNEL': true,
        'SEND_MESSAGES': true
      })
              chan.overwritePermissions(message.guild.roles.find('name', '[Moderator]'), {
          'VIEW_CHANNEL': true,
        'SEND_MESSAGES': true
      })
              chan.overwritePermissions(message.guild.roles.find('name', '[Staff]'), {
          'VIEW_CHANNEL': true,
        'SEND_MESSAGES': true
      })
      chan.overwritePermissions(message.author.id, {'VIEW_CHANNEL': true, 'SEND_MESSAGES': true, 'MENTION_EVERYONE': false})
        let category = message.guild.channels.find(c => c.name == "[🗳] P.S.L Tickets" && c.type == "category");
        if(!category) return message.channel.send("Tickets category not found")
    
 chan.setParent(category.id)
chan.send(`${message.author}`)  
chan.send(chaaanel) 
      



const actualchanel = new Discord.RichEmbed()
.setColor("#d1ae18")
.setDescription(`**<:zynSuccess:725709845411528704> Your support ticket was opened,** <#${chan.id}>`)
   message.channel.send(actualchanel).then(msg => msg.delete(6000));
message.delete()
        
        
        
    const logsopen = new Discord.RichEmbed()
   .setAuthor("Ticket Opened", bot.user.displayAvatarURL)
 .setColor("#d1ae18")
    .setTimestamp()
    .setThumbnail(message.guild.iconURL)
    .addField("**Ticket**", chan.name)
    .addField("**Reason**", reason)

    
    let reportschannel = message.guild.channels.find(`name`, "🔐│ticket-logs");
  if(!reportschannel) return message.channel.send(" ");
 
    message.delete().catch(O_o=>{});
    reportschannel.send(logsopen);


        
      })

      
}


module.exports.config = {
name: "new",
aliases: []
}