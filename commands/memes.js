const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require('snekfetch');


exports.run = async (client, message, args) => {

  
  const validuser = new Discord.RichEmbed()
.setColor("#d1ae18")
.setDescription(`**You can only use commands in **<#733384173217120285>`)
if (message.channel.name != "🤖│bot-commands") return message.reply(validuser).then(msg => msg.delete(6000));
  
  const cantban = new Discord.RichEmbed()
      .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> | We're out of epic memes, Try again later**")
  
  
  try {
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/dankmemes.json?sort=top&t=week')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send(cantban);
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new Discord.RichEmbed()
        .setColor(0x00A2E8)
        .setTitle(allowed[randomnumber].data.title)
        .setImage(allowed[randomnumber].data.url)
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed)
    } catch (err) {
        return console.log(err);
    }
}

module.exports.config = {
name: "meme",
aliases: ["memes"]
}