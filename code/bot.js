// Helpful Risk Emulator is a Discord bot by Canada Jones and JupiterSky

// Grab Discord object
var Discord = require('discord.js');

// Grab bot key
const auth = require('./auth.json');

// Get filesystem library
const fs = require('fs');

// Initialize Discord Bot
var client = new Discord.Client();

// Get province list file
const provList = require('./provLinks/provLinks.json');

// Get river registry file
const riverList = require('./provLinks/riverList.json');

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

		}
	}
});
client.login(auth.token);

// Function to sanity check, add additional info to, and organize order info
function parseOrder(argList = [], orderCMD = "") {
	// Create array that'll store the order info
	var movesArr = ['', '', '', {}, []];
	if (orderCMD) {
		if (typeof argList[0] == 'string' && typeof argList[1] == 'string' && typeof argList[2] == 'string') {
			if (orderCMD == 'mov' || orderCMD == 'atk' || orderCMD == 'def') {
				movesArr[0] = orderCMD;
				if (argList[0] == argList[0].toLowerCase() && provList.landProv.hasOwnProperty(argList[0])) {
					movesArr[1] = argList[0];
					
					if (riverList.landProv.hasOwnProperty(argList[0])) {
						for (let i=0; i < riverList.landProv[argList[0]].length; i++){
							if (riverList.landProv[argList[0]][i] == argList[1]) {
								movesArr[4] = ['river'];
								break;
							}
						}
					}
					
					if (argList[1] == argList[1].toLowerCase && provList.landProv.hasOwnProperty(argList[1])){
						movesArr[2] = argList[1];
					}

					else if (argList[1] == argList[1].toUpperCase && provList.seaProv.hasOwnProperty(argList[1])) {
						movesArr[2] = argList[1];
						movesArr[4][movesArr[4].length] = 'bLoad';
					}
					
					else {
						// invalid end province
						return 'iep';
					}
				}
				else {
					// invalid start position
					return 'isp';
				}
				movesArr[3] = {'units': 0};
				return movesArr;
			}
		}
		else {
			// too few arguments, or invalid argument type
			return 'iat';
		}
	}
	else {
		// invalid function call
		return 'ifc';
	}
}