const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);

        if(command === `${prefix}help-ticket`) {
            const embed = new discord.MessageEmbed()
            .setTitle("Ticket Command").addField("Loading . . . . .", "Finding Ticket Command."), embed2 = new discord.MessageEmbed()
            .setTitle("Ticket Commands")
            .addField(`Commands`, `These are all the commands in the Ticket module.`)
            .addField(`\`/intro\``, `Displays a intro message.`)
            .addField(`\`/done\``, `Displays a done message.`)
            .setTimestamp( )
            .setColor('FF0000')
            message.channel.send(embed).then(m => {
                setTimeout(function() { m.edit(embed2) }, 1000);
            })
            message.delete().catch( e =>{});
            console.log(`Ticket Command was used in ${message.guild.name} in channel ${message.channel.name} by ${message.author.username}.`)
    
        }
        })
}