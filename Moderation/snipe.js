const discord = require("discord.js")
const client = new discord.Client()
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);

if(command === `${prefix}snipe`) {
    
    const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.channel.send("There is no deleted message!")

    const embed = new discord.MessageEmbed()

    .setAuthor(msg.author, message.author.displayAvatarURL({ dynamic: true }))
    .addField('Content Of the Message :', msg.content)
    .setColor('FF0000')
    .setFooter(" Requested by " + message.author.tag , message.author.avatarURL())
    .setTimestamp()
    if(msg.image)embed.setImage(msg.image)

    message.channel.send(embed)
    console.log(`Snipe command was used in ${message.guild.name} in channel ${message.channel.name} by ${message.author.username}`)
}

    })
}