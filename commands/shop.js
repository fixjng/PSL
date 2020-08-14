const Discord = require("discord.js");
const colors = require('../colours.json')
const db = require('quick.db')

module.exports.run = async(bot, message, args) => {

const validuser = new Discord.RichEmbed()
.setColor("#d1ae18")
.setDescription(`**You can only use commands in **<#733384173217120285>`)
if (message.channel.name != "🤖│bot-commands") return message.reply(validuser).then(msg => msg.delete(6000));
  
           const lol = new Discord.RichEmbed()
          .setColor("#d1ae18")
           .setAuthor("Points Shop", message.author.displayAvatarURL)
            .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
  .setDescription(`**150 Points | <@&732945997382287382>\n250 Points | <@&732945995364696095>\n400 Points | <@&732945993309487174>\n650 Points | <@&732961689728843776>\n800 Points | <@&732946116571562024>\n1000+ Points | <@&732946184087404624>**`)
           await message.channel.send(lol)


  
}


module.exports.config = {
name: "shop",
aliases: []
}