const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);

        if(command === `${prefix}help-utility`) {
            const embed = new discord.MessageEmbed()
            .setTitle("Utility Command")
            .addField("Loading . . . . .", "Finding Utility Command."), embed2 = new discord.MessageEmbed()
            .setTitle("Utility Commands")
            .addField(`Commands`, `These are all the commands in the Utility module.`)
            .addField(`\`/serverinfo\``, `DIsplays some info about the server.`)
            .addField(`\`/stats\``, `Displays the bots stats. CURRENTLY UNAVAILABLE.`)
            .addField(`\`/membercount\``, `Displays the Member Count of the server.`)
            .addField(`\`/total\``, `Displays the total members the bot is watching.`)
            .addField(`\`/ping\``, `Displays the bots ping.`)
            .addField(`\`/uptime\``, `Displays how long the bot has been online.`)
            .addField(`\`/invite\``, `Displays a invite to invite the bot.`)
    
            .setTimestamp( )
            .setColor('FF0000')
            message.channel.send(embed).then(m => {
                setTimeout(function() { m.edit(embed2) }, 1000);
            })
            message.delete().catch( e =>{});
            console.log(`Utility Command was used in ${message.guild.name} in channel ${message.channel.name} by ${message.author.username}.`)
    
        }
        })
}