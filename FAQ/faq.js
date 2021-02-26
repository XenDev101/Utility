const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);

if(command ===`${prefix}faq-1`) {
    const embed = new discord.MessageEmbed()
    
    .setTitle(`FAQ 1`)
    .addField(`Whats the prefix?`, `The prefix for <@798613502470127616> is \`/\``)
    .setTimestamp( )
    .setColor('FF0000')
    
    message.channel.send(embed)
    message.delete().catch(e =>{});
    console.log(`FAQ 1 Command was used in ${message.guild.name} in channel ${message.channel.name} by ${message.author.username}`)
}

if(command === `${prefix}faq-2`) {
    const embed = new discord.MessageEmbed()
    
    .setTitle(`FAQ 2`)
    .addField(`How do I invite the bot?`, `If you want to invite the bot to your server the invite link is; https://discord.com/oauth2/authorize?client_id=798613502470127616&scope=bot&permissions=8`)
    .setTimestamp( )
    .setColor('FF0000')
    
    message.channel.send(embed)
    message.delete().catch(e =>{});
    console.log(`FAQ 2 Command was used in ${message.guild.name} in channel ${message.channel.name} by ${message.author.username}`)
}
if(command === `${prefix}faq-3`) {
    const embed = new discord.MessageEmbed()
    
    .setTitle(`FAQ 3`)
    .addField(`Who made the bot?`, `<@680394000368533525> is proud the owner and creator of Utility.`)
    .setTimestamp( )
    .setColor('FF0000')
    
    message.channel.send(embed)
    message.delete().catch(e =>{});
    console.log(`FAQ 3 Command was used in ${message.guild.name} in channel ${message.channel.name} by ${message.author.username}`)
}
if(command === `${prefix}faq-4`) {
    const embed = new discord.MessageEmbed()
    
    .setTitle(`FAQ 4`)
    .addField(`Can I help?`, `Yes and no, if you want to help us make Utility bigger and better you will need a couple of key skills. If you want to know more DM <@680394000368533525>`)
    .setTimestamp( )
    .setColor('FF0000')

    message.channel.send(embed)
    message.delete().catch(e =>{});
    console.log(`FAQ 4 Command was used in ${message.guild.name} in channel ${message.channel.name} by ${message.author.username}`)
}
if(command === `${prefix}faq-5`) {
    const embed = new discord.MessageEmbed()
    
    .setTitle(`FAQ 5`)
    .addField(`When was the bot created?`, `<@798613502470127616> was created on January 12th 2021.`)
    .setTimestamp( )
    .setColor('FF0000')
    
    message.channel.send(embed)
    message.delete().catch(e =>{});
    console.log(`FAQ 5 Command was used in ${message.guild.name} in channel ${message.channel.name} by ${message.author.username}`)
}
if(command === `${prefix}faq-6`) {
    const embed = new discord.MessageEmbed()
    
    .setTitle(`FAQ 6`)
    .addField(`What are some of the bots functions?`, `If you run the command \`/help\` you will be able to see all the bots modules. By running the modules you can see what commands and functions the bot has to offer.`)
    .setTimestamp( )
    .setColor('FF0000')
    
    message.channel.send(embed)
    message.delete().catch(e =>{});
    console.log(`FAQ 6 Command was used in ${message.guild.name} in channel ${message.channel.name} by ${message.author.username}`)
}
if(command === `${prefix}faq-7`) {
    const embed = new discord.MessageEmbed()
    
    .setTitle(`FAQ 7`)
    .addField(`Why is the bot offline?`, `The bot is offline for 1 of 2 reasons. 1. The owner is sleeping. 2. The bot has crashed.`)
    .setTimestamp( )
    .setColor('FF0000')
    
    message.channel.send(embed)
    message.delete().catch(e =>{});
    console.log(`FAQ 7 Command was used in ${message.guild.name} in channel ${message.channel.name} by ${message.author.username}`)
}
if(command === `${prefix}faq-8`) {
    const embed = new discord.MessageEmbed()
    
    .setTitle(`FAQ 8`)
    .addField(`Who are the Developers?`, `If you run the command \`/developers\` you will be able to see all the people that work on the bot.`)
    .setTimestamp( )
    .setColor('FF0000')
    
    message.channel.send(embed)
    message.delete().catch(e =>{});
    console.log(`FAQ 8 Command was used in ${message.guild.name} in channel ${message.channel.name} by ${message.author.username}`)
}
if(command === `${prefix}faq-9`) {
    const embed = new discord.MessageEmbed()
    
    .setTitle(`FAQ 9`)
    .addField(`What inspired you to create the bot?`, `What inspired me to create the bot was how people could make a bot and it grow to be successful. So I made this bot to see if I would like it.`)
    .setTimestamp( )
    .setColor('FF0000')
    
    message.channel.send(embed)
    message.delete().catch(e =>{});
    console.log(`FAQ 9 Command was used in ${message.guild.name} in channel ${message.channel.name} by ${message.author.username}`)
}

})
}