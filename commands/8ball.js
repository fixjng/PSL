const Discord = module.require('discord.js');

exports.run = async(bot, message, args) => {
  
          const noperms = new Discord.RichEmbed()
 .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please ask a question**")
   
   const validuser = new Discord.RichEmbed()
.setColor("#d1ae18")
.setDescription(`**You can only use commands in **<#733384173217120285>`)
if (message.channel.name != "🤖│bot-commands") return message.reply(validuser).then(msg => msg.delete(6000));
          
          
     if(!args[0]) return message.channel.send(noperms);         
          
  if (!args[1]) {
    bot.errMsg(message);
    return;
  }
  let answers = [
    'Oh hell no',
    'I guess so',
    'Without a doubt',
    'Yes, definitely',
    'Nah',
    'Probably',
    'Most likely',
    'Probably not',
    'Yes',
    'Im not sure',
    'I better not tell you now',
    'Yessir',
    'Why not',
    'That is a no from me',
    'Without a doubt'
  ];
  let answerr = answers[Math.floor(Math.random()*answers.length)];
  let msg = new Discord.RichEmbed()
  .setTitle(':8ball: | 8ball')
.setColor("#d1ae18")
  .addField('Question', args.slice(0).join(' '))
  .addField('Answer', answerr);
  message.channel.send(msg);
}

module.exports.config = {
name: "8ball",
aliases: []
}