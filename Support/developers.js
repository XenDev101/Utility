const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);

        if(command === `${prefix}developers`) {
            const embed = new discord.MessageEmbed()

            .setTitle('Utility Developers')
            .setDescription(`These are our developers of Utility, they put hard work into Utility and they deserve credit. \n \n**Head Developer** : <@680394000368533525> \n**Developer** : <@705301166233223220>`)
            .setTimestamp( )
            .setColor(`FF0000`)


            message.channel.send(embed)
            message.delete().catch( e =>{});
            console.log(`Developers Command was used in ${message.guild.name} in channel ${message.channel.name} by ${message.author.username}.`)
    
        }
        })
}