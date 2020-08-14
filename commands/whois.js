const Discord = require("discord.js");
var moment = require('moment');





exports.run = (bot, message, args) => {
   
  
 const validuser = new Discord.RichEmbed()
.setColor("#d1ae18")
.setDescription(`**You can only use commands in **<#733384173217120285>`)
if (message.channel.name != "🤖│bot-commands") return message.reply(validuser).then(msg => msg.delete(6000));
          
  
  
  let inline = true
    let resence = true
  
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author || message.guild.members.get(args[0])
let arr = message.guild.members.filter(a => !a.user.bot).array().sort((b, a) => b.joinedTimestamp - a.joinedTimestamp) 
let map = arr.indexOf(member) + 1


let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
  let x12;
  let x13;
  let x15;
    

  if (member.hasPermission("ADMINISTRATOR")) x12 = "Server Admin |  "
  if (!member.hasPermission("ADMINISTRATOR")) x12 = ""
  
  if (member.hasPermission("BAN_MEMBERS")) x13 = "Server Moderator"
  if (!member.hasPermission("BAN_MEMBERS")) x13 = ""
  
  
    if (member.hasPermission("ADMINISTRATOR")) x = "Administrator, "
  if (!member.hasPermission("ADMINISTRATOR")) x = ""
    
    //Denetim kaydı
    if (member.hasPermission("VIEW_AUDIT_LOG")) x2 = "View Audit Log, "
  if (!member.hasPermission("VIEW_AUDIT_LOG")) x2 = ""
    
    //Sunucuyu yönet
    if (member.hasPermission("MANAGE_GUILD")) x3 = "Manage Guild, "
  if (!member.hasPermission("MANAGE_GUILD")) x3 = ""
    
    //Rolleri yönet
    if (member.hasPermission("MANAGE_ROLES")) x4 = "Manage Roles, "
if (!member.hasPermission("MANAGE_ROLES")) x4 = ""

    
    //Kanalları yönet
    if (member.hasPermission("MANAGE_CHANNELS")) x5 = "Manage Channels, "
    if (!member.hasPermission("MANAGE_CHANNELS")) x5 = ""

    
    //üyeleri at
    if (member.hasPermission("KICK_MEMBERS")) x6 = "Kick Members, "
    if (!member.hasPermission("KICK_MEMBERS")) x6 = ""
 
    
    //üyeleri yasakla
    if (member.hasPermission("BAN_MEMBERS")) x7 = "Ban Members, "
    if (!member.hasPermission("BAN_MEMBERS")) x7 = ""
    
    //mesajları yönet
    if (member.hasPermission("MANAGE_MESSAGES")) x8 = "Manage Messages, "
    if (!member.hasPermission("MANAGE_MESSAGES")) x8 = ""
   
    
    //kullanıcı adlarını yönet
    if (member.hasPermission("MANAGE_NICKNAMES")) x9 = "Manage Nickname , "
    if (!member.hasPermission("MANAGE_NICKNAMES")) x9 = ""
 
    
    //emojileri yönet
    if (member.hasPermission("MANAGE_EMOJIS")) x10 = "Manage Emojis, "
    if (!member.hasPermission("MANAGE_EMOJIS")) x10 = ""
 
  

    //webhookları yönet
    if (member.hasPermission("MANAGE_WEBHOOKS")) x11 = "Manage Webhooks"
    if (!member.hasPermission("MANAGE_WEBHOOKS")) x11 = ""
    
   
const obama = member.roles.size - 1

let embed = new Discord.RichEmbed()
               
.setAuthor(member.user.tag, member.user.displayAvatarURL)
.setThumbnail((member.user.displayAvatarURL))
.setColor("#d1ae18")
.addField("👋 Joined", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY ")}`, true)
.addField("⏳ Join Position", `${map}`, true)   
.addField("🙌 Registered", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY ")}`, true)
 .addField(`👤 Roles [${obama}]`, `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `${roles}`).join(" ") || "No Roles"}`)
 .addField("🔨 Acknowledgements", `${x12}` + `${x13}` || "Server Member")
.setFooter(`${member.user.tag} : ${member.user.id}`)
    
 message.channel.send(embed);

           
    }

module.exports.config = {
name: "whois",
aliases: []
}