// Helpful Risk Emulator is a Discord bot by Canada Jones and JupiterSky

// Grab Discord object
var Discord = require('discord.js');

// Grab bot key
const auth = require('./auth.json');

// Get filesystem library
const fs = require('fs');

// Initialize Discord Bot
var client = new Discord.Client();

// Grab the order parser
const parseOrders = require('./orderparser.js');

// Error handler
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));

// Declare status variables and objects
// Main object
// eslint-disable-next-line no-unused-vars
var hre = {};


client.on('ready', () => {
	console.log('Connected');
	console.log('Logged in as: ');
	console.log(client.user.username + ' (id: '+ client.user.id +')');
});

client.on('message', message =>{
	// Our bot needs to know if it will execute a command
	// It will listen for messages that will start with `!`
	
	if (message.content.substring(0, 1) == '!' || message.content.substring(0, 1) == '#') {
		
		var args = message.content.substring(1).split(' ');
		var cmd = args[0];
		args = args.splice(1);
		switch(cmd) {
			// !info
			case 'info': {
				message.channel.send('This is a test of our new bot!');
			break;
			}	
		
			// !ping
			case 'ping': {
				message.channel.send('Pong! <@' + message.author.id + '>');
			break;
			}
			
			// !quack
			case 'quack': {
				let a = Math.floor(Math.random()*100) + 1;
				if (a == 100) {
					message.channel.send('***H J O N K***');
					break;
				}
				message.channel.send('*ominous quack*');
			break;
			}

			// !WHERESTHEAIRSUPPORT
			case 'WHERESTHEAIRSUPPORT': {
				message.channel.send('INCOMING!');
			break;
			}
			
			// !debug
			case 'debug': {
				message.channel.send('```js\n' + JSON.stringify(hre) + '```');
			break;
			}

			// !setvalue
			case 'setvalue': {
				hre[args[0]] = args[1];
				message.channel.send('Set key ' + args[0] + ' to ' + args[1] + '.');
			break;
			}
			
			// !save
			case 'save': {
				try {
					fs.writeFileSync('HREObject.json', JSON.stringify(hre));
					message.channel.send('Successfully saved!');
				}
				catch (err) {
					console.error(err);
					break;
				}
			break;
			}

			// !load
			case 'load': {
				let rawdata = fs.readFileSync('HREObject.json');  
				hre = JSON.parse(rawdata);
				message.channel.send('Successfully loaded!');
				break;
			}

			// !move
			case 'move' : {
				console.log(parseOrders(['dno', 'nor' ,{}], 'mov'));
			break;
			}
		}
	}
});
client.login(auth.token);

