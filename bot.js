const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.BOT_TOKEN; //set to: process.env.BOT_TOKEN for Heroku deployment, set to: config.LOCAL_TOKEN for local testing

client.on('ready', () => {
    console.log('Monke running.');
});

client.on('message', message => { //this event is fired, whenever the bot sees a new message
    if (message.isMemberMentioned(client.user)) { //we check, whether the bot is mentioned, client.user returns the user that the client is logged in as
        // Join the same voice channel of the author of the message
        message.channel.send('no');
        message.channel.send('monke');
        message.channel.send('',{files: ['./assets/monke.png']});
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play('./assets/monke-noises.mp3');
            dispatcher.on('start', () => {
                console.log('audio.mp3 is now playing!');
            });
            dispatcher.on('finish', () => {
                console.log('audio.mp3 has finished playing!');
                connection.disconnect();
            });
            dispatcher.on('error', console.error);
        }
    }
});

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

// THIS  MUST  BE  THIS  WAY
client.login(token); // BOT_TOKEN is the Client Secret