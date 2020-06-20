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

// Grab the army handler
const Army = require('./armylib.js');

// Error handler
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));

// Declare status variables and objects
// Main object
// eslint-disable-next-line no-unused-vars
var hre = {
	playerData: {},
	mapData: {
		dno: {
			armies: {}
		}
	},
	gameData: {
		armyDB: {}
	} 
};

// Sign-in status message
// When starting the bot, this'll tell us that everything is set and that we're ready to go
client.on('ready', () => {
	console.log('Connected');
	console.log('Logged in as: ');
	console.log(client.user.username + ' (id: '+ client.user.id +')');
});

/**
 * Register event handler for messages, this spins off everything else
 */
client.on('message', message =>{
	// Our bot needs to know if it will execute a command
	// It will listen for messages that will start with `!`
	
	if (message.content.substring(0, 1) == '!' || message.content.substring(0, 1) == '#') {
		
		
	}
});
client.login(auth.token);


/*
// Inter-Process Communications
// For DebugIO access

var ipc = require('node-ipc');

ipc.config.id = 'helpfulrisk';
ipc.config.retry = 1500;

ipc.serve(function() {
		// eslint-disable-next-line no-unused-vars
		ipc.server.on('consoleInput', function(data, socket){
				ipc.log(data);
			}
		)
	}
);

ipc.server.start();

function advLog(str1) {
	let b = {};
	b.a = str1;
	ipc.server.broadcast('consoleLog', b);
}
*/