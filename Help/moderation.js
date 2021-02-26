const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);

    if(command === `${prefix}help-moderation`) {
        const embed = new discord.MessageEmbed()
        .setTitle("Moderation Command")
        .addField("Loading . . . . .", "Finding Moderation Command."), embed2 = new discord.MessageEmbed()
        .setTitle("Moderation Commands")
        .addField(`Commands`, `These are all the commands in the Moderation module.`)
        .addField(`\`/warn\``, `Warns the mentioned user.`)
        .addField(`\`/dm\``, `Sends a DM to the mentioned user.`)
        .addField(`\`/kick\``, `Kicks the mentioned user.`)
        .addField(`\`/ban\``, `Bans the mentioned user. CURRENTLY UNAVAILABLE.`)
        .addField(`\`/say\``, `Says the message context.`)
        .addField(`\`/esay\``, `Says the message context in a embed.`)
        .setTimestamp( )
        .setColor('FF0000')
        message.channel.send(embed).then(m => {
            setTimeout(function() { m.edit(embed2) }, 1000);
        })
        message.delete().catch( e =>{});
        console.log(`Moderation Command was used in ${message.guild.name} in channel ${message.channel.name} by ${message.author.username}.`)

    }
    })
}