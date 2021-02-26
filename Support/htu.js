const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);

if(command === `${prefix}htu`) {
    const embed = new discord.MessageEmbed()

    .setTitle('**__How to use Utility__**')
    .addField(`How do I use Utility?`, `You can simply use <@798613502470127616> by typing \`/\` and whatever you would like to use. For example \`/help\` gives you information on the bots current commands.`)
    .addField(`The slash is requred for the bot to recognize your command\`/\`request.`, `EX. \`help\` would have no output. If you do \`/help\` the bot will say a bunch of commands.`)
    .setFooter('This command was made by Chelsea B.')
    .setTimestamp( )
    .setColor('FF0000')

    message.channel.send(embed)
    message.delete().catch(e =>{})
    console.log(`How To Use command was used in ${message.guild.name} in channel ${message.channel.name} by ${message.author.username}`)
}
})
}
