// Helpful Risk Emulator is a Discord bot by Canada Jones and JupiterSky

// Grab Discord object
var Discord = require('discord.js');

// Grab bot key
var auth = require('./auth.json');

//Get filesystem library
var fs = require('fs');

// Initialize Discord Bot
var client = new Discord.Client();

// Error handler
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));

// Declare status variables and objects
// Main object
var hre = {}

 client.on('ready', () => {
    console.log('Connected');
    console.log('Logged in as: ');
    console.log(client.clientuser + '(id)');
});

client.on('message', message =>{
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.content.substring(0, 1) == '!') {
        var args = message.content.substring(1).split(' ');
        var cmd = args[0];
       
        
		args = args.splice(1);
		switch(cmd) {
            // !info
            case 'icecream':
                message.channel.send('This is a test of our new bot!');
            break;
			// !load
			case 'cookielist':
				var rawdata = fs.readFileSync('HREObject.json');  
				var protoHRE = JSON.parse(rawdata);
				hre = protoHRE
				message.channel.send('Successfully loaded!');
			break;
		 }
     }
});
client.login(auth.token);