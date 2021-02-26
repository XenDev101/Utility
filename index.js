const discord = require ('discord.js')
const {  prefix, token } = require ('./config.json')
const client = new discord.Client();
const help = require ('./Help/help')
const esay = require ('./Commands/esay')
const say = require ('./Commands/say')
const moderation = require ('./Help/moderation')
const ticket = require ('./Help/ticket')
const utility = require ('./Help/utility')
const supports = require ('./Support/support-server')
const custom = require ('./Help/custom');
const developers = require('./Support/developers');
const support = require ('./Help/support');
const faq = require('./FAQ/faq');
const cheslea = require('./Custom/cheslea');
const htu = require('./Support/htu');
const intro = require('./Ticket/intro');
const done = require('./Ticket/done');
const uptime = require('./Commands/uptime');
const ping = require('./Commands/ping');
const serverinfo = require('./Commands/serverinfo');
const total = require('./Commands/total');
const membercount = require('./Commands/membercount');
const invite = require('./Commands/invite');
const avatar = require('./Commands/avatar');
const botping = require('./Commands/botping');
const user = require('./Commands/user');
const stats = require('./Commands/stats');
const vote = require('./Commands/vote');




client.once('ready', () => {
    console.log('Online!')
});
client.on('ready', () => {
  client.user.setActivity(`over ${client.guilds.cache.size} servers. || Waiting for commands.`, { type: 'WATCHING'});
})

client.on('message', async message => {
    if(message.channel.type == "dm") return;
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const member = message.author.username
    
    client.snipes = new Map()

    client.on('messageDelete', message => {

client.snipes.set(message.channel.id, {
content:message.content,
author:message.author.tag,
image:message.attachments.first() ? message.attachments.first().proxyURL : null
      })
})
  if(command === 'dm') {
    let dUser = message.guild.member(message.mentions.users.first())
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('Sorry you to not have permissions to DM.')
    if(!dUser) return message.channel.send('Can not find user.')
    let dMessage = args.join(" ").slice(22);
    dUser.send(`You were DM'ed in ${message.guild.name}, this is the message : ${dMessage}`)
      const embed = new discord.MessageEmbed()
      .setDescription(`** *${dUser} has been DM'ed. this was the message : ${dMessage}* **`)
      message.channel.send(embed)
      message.delete().catch(e => {});
  }
  if(command === 'warn') {
    let dUser = message.guild.member(message.mentions.users.first())
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('Sorry you to not have permissions to warn.')
    if(!dUser) return message.channel.send('Can not find user.')
    let dMessage = args.join(" ").slice(22);
    dUser.send(`You were warned in ${message.guild.name} for: ${dMessage}`)
      const embed = new discord.MessageEmbed()
      .setDescription(`** *${dUser} has been warned for: ${dMessage}* **`)
      .setColor('#ff0000')
      message.channel.send(embed)
      message.delete().catch(e => {});
  }

});



client.on("message", message => {
const member = message.author.username

if (!message.guild) return;
if (message.content.startsWith('/kick')) {
  if (!message.member.hasPermission(["KICK_MEMBERS"])) return message.channel.send('You need to have the permmission "KICK_MEMBERS"!')
  message.delete().catch(e => {});
  console.log('Kick command used by', member)
const user = message.mentions.users.first();
if (user) {
  const member = message.guild.member(user);
    if (member) {
      member.kick("Optional reason that will display in the audit logs").then(() => {
        message.channel.send(`Successfully kicked ${user.tag}.`);
      }).catch(err => {
        message.channel.send("I was unable to kick the member");
        console.error(err);
        member.roles.cache.has('724113809249140787');
      });
    } else {
      message.channel.send("That user isn't in this guild!");
    }
} else {
  message.channel.send("You didn't mention the user to kick!");
  
}

}const swearWords = ["Nigga", "NIGGA", "nigga"];
if (swearWords.some(word => message.content.includes(word))) {
  const embed = new discord.MessageEmbed()
  .setTitle('Blacklisted word detected!')
  .setDescription("Stop saying these words! If you continue a staff member will go through with an offical warning.")
  .addField("Stop breaking the rules.")
  .setFooter("This is an automated message by the Bot.")
  .setTimestamp()
  .setColor(0xA30000)

message.delete().catch(e => {});
console.log('No No Word was deleted! Sent by', member)
message.channel.send(embed)
}
});


help(client)
esay(client)
say(client)
moderation(client)
ticket(client)
utility(client)
custom(client)
supports(client)
developers(client)
support(client)
faq(client)
cheslea(client)
htu(client)
intro(client)
done(client)
uptime(client)
ping(client)
serverinfo(client)
total(client)
membercount(client)
invite(client)
avatar(client)
botping(client)
user(client)
stats(client)
vote(client)



client.login(token)