const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);
        
        if(command === `${prefix}help`) {
            const embed = new discord.MessageEmbed()
            .setTitle("Help Command")
            .addField("Loading . . . . .", "Finding Help Command."),
             embed2 = new discord.MessageEmbed()
            .setTitle("Help")
            .addField(`My preifx is \`${prefix}\``,`**__Modules__**`)
            .addField(` <:moderation:812785213720887307> \`/help-moderation\``, `Displays all the moderation commands.`)
            .addField(` <:ticket:812785257120006154> \`/help-ticket\``,`Displays all ticket commands.`)
            .addField(` <:info:812785161421979649> \`/help-utility\``,`Displays all the utility commands.`)
            .addField(` <:Approved:812785893017518090> \`/help-custom\``,`Displays all the custom commands.`)
            .addField(` <:help:812785348059856926> \`/help-support\``,`Displays all the support commands.`)
            .addField(`Support Server`, `**[Click Here!](https://discord.gg/4ZtG6zKkge)**`, true)
            .setTimestamp( )
            .setColor('FF0000')
            
            message.channel.send(embed).then(m => {
                setTimeout(function() { m.edit(embed2) }, 1000);
            })
            message.delete().catch( e =>{});
            console.log(`Help Command was used in ${message.guild.name} in channel ${message.channel.name} by ${message.author.username}.`)
    
        }

        
    })
}