const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);

        if(command === `${prefix}help-support`) {
            const embed = new discord.MessageEmbed()
            .setTitle("Support Command")
            .addField("Loading . . . . .", "Finding Support Command."), embed2 = new discord.MessageEmbed()
            .setTitle("Support Commands")
            .addField(`Commands`, `These are all the commands in the Support module.`)
            .addField(`\`/support-server\``, `Displays a invite to the support server.`)
            .addField(`\`/developers\``, `Displays all the developers that work on the bot.`)
            .addField(`\`/htu\``, `Displays a little info on how to use the bot.`)
            .setTimestamp( )
            .setColor('FF0000')
            message.channel.send(embed).then(m => {
                setTimeout(function() { m.edit(embed2) }, 1000);
            })
            message.delete().catch( e =>{});
            console.log(`Support Command was used in ${message.guild.name} in channel ${message.channel.name} by ${message.author.username}.`)
    
        }
        })
}