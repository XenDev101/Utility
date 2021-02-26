const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);


if(command === `${prefix}intro`) {
    const intro = new discord.MessageEmbed()
    .setTitle(`Thanks for creating a ticket!`)
    .setDescription(`Welcome to ${message.guild.name} ticket system. \nI will be assisting you today! How can I help?`)
    .setFooter(`- ${message.guild.name} Staff Team.`)
    .setTimestamp( )
    .setColor('FF0000')
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('Sorry you do not have the right permission to run this command.')
    message.channel.send(intro)
    message.delete().catch(e =>{});
    console.log(`Intro Command was used in ${message.guild.name} in channel ${message.channel.name} by ${message.author.username}.`)
  }
})
}