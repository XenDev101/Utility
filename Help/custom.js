const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);

        if(command === `${prefix}help-custom`) {
            const embed = new discord.MessageEmbed()
            .setTitle("Custom Command")
            .addField("Loading . . . . .", "Finding Custom Command."), embed2 = new discord.MessageEmbed()
            .setTitle("Custom Commands")
            .addField(`Commands`, `These are all the commands in the Custom module.`)
            .addField(`\`/chelsea\``, `Displays a custom text.`)
            .setTimestamp( )
            .setColor('FF0000')
            message.channel.send(embed).then(m => {
                setTimeout(function() { m.edit(embed2) }, 1000);
            })
            message.delete().catch( e =>{});
            console.log(`Custom Command was used in ${message.guild.name} in channel ${message.channel.name} by ${message.author.username}.`)
    
        }
        })
}