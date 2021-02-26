const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);

        if(command === `${prefix}support-server`) {
            const embed = new discord.MessageEmbed()
            
            .setTitle(`Utility Support Server`)
            .setDescription(`Our support server is https://discord.gg/4ZtG6zKkge ! If you need help request it there.`)
            .setImage('https://cdn.discordapp.com/attachments/810513158845628467/810560017941659658/utility_pfp_thing.PNG')
            .setTimestamp( )
            .setColor('FF0000')

            message.channel.send(embed)
            message.delete().catch( e =>{});
            console.log(`Support Serer Command was used in ${message.guild.name} in channel ${message.channel.name} by ${message.author.username}.`)
    
        }
        })
}