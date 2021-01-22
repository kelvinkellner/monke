const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.BOT_TOKEN; //set to: process.env.BOT_TOKEN for Heroku deployment, set to: config.LOCAL_TOKEN for local testing

client.on('ready', () => {
    console.log('Monke running.');
});

client.on('message', message => { //this event is fired, whenever the bot sees a new message
    if (message.isMemberMentioned(client.user)) { //we check, whether the bot is mentioned, client.user returns the user that the client is logged in as
        message.channel.send('no');
        message.channel.send('monke');
        message.channel.send('',{files: ['./assets/monke.png']});
    }
});

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

// THIS  MUST  BE  THIS  WAY
client.login(token); // BOT_TOKEN is the Client Secret