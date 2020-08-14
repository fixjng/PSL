const Discord = require("discord.js");


module.exports.run = async(bot, message, args) => {

    let boticon = bot.user.displayAvatarURL;
  
 const embed = new Discord.RichEmbed()
 .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
  .setColor("#d1ae18")
 .setAuthor("PSL Help Menu", boticon)
  .addField("Community [5]", "```Serverinfo, Whois, Avatar, Membercount, New [Ticket], Close [Ticket], Members```")
 .addField("Points [5]", "```Points, Leaderboard, Shop, Buy, Sell```")
 .addField("Hosts [2]", "```Host, Winner```")
 .addField("Staff [4]", "```Poll, Logs, Claim, Snipe, Blacklist, Setnick```")
 .addField("Administrator [4]", "```Reset, Announce, Add, Remove```")
 .setFooter("Made by zyn#6969")
 
 message.channel.send("Check your Dms!").then(msg => msg.delete(5000));
 message.author.send(embed)
  message.delete()
};


module.exports.config = {
name: "help",
aliases: []
}