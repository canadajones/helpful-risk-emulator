var Discord = require('discord.js');

var auth = require('./auth.json');

var fs = require('fs');

// Initialize Discord Bot
var client = new Discord.Client();
var cookiesandmilk={}

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));


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
            // !icecream
            case 'icecream':
                message.channel.send('Here! Delicious, delicious ice cream provided by <<White Blob>>! https://cdn.discordapp.com/attachments/358563735792779269/509158234397999115/Ice_Cream_dessert_02.png');
            break;
            // Just add any case commands if you want to..
			// !ohyeah
			case 'ohyeah':
				message.channel.send('OH YEAH! https://www.youtube.com/watch?v=TfLcC1o85bo');
			break;
			// !killgeneralbot
			case 'killgeneralbot':
				message.channel.send('MURDER!');
				setTimeout( function(){process.exit(0);}, 1000)
			break;
			// !goodkebab
			case 'goodkebab':
				message.channel.send('Want an actual kebab? Here! https://cdn.discordapp.com/attachments/358563735792779269/509161456252616734/steak-kebabs-12.png');
			break;
			// !goodburger
			case 'goodburger':
				message.channel.send('Psst. Whisper, so Spam cannot hear us. Here is a *good* burger: https://cdn.discordapp.com/attachments/358563735792779269/509162037516042271/20150728-homemade-whopper-food-lab-35-1500x1125.png')
			break;
			// !executeorder66
			case 'executeorder66':
				message.channel.send('***BEEEEP*** ***BOOOOP*** EXECUTING ORDER 66... PROCESS STARTED. EXPLOSIVES PRIMED. OPENING GAS VENTS... PREPARING FINAL SOLUTION... Nah, I am just kidding. ***OR AM I?***')
			break;
			// !reichtangle
			case 'reichtangle':
				message.channel.send('https://media.discordapp.net/attachments/508882018025865237/509130003661717510/PSX_20181105_142036.jpg?width=657&height=657');
			break;
			// !cookie
			case 'cookie':
				var nameGiven = '';							
						for (let i = 0; i < args.length; i++) {
							// Print each iteration to the console
							if (nameGiven==''){
								nameGiven = nameGiven + '' + args[i]
							}
							else {
								nameGiven = nameGiven + ' ' + args[i]
							}
							
						}
				message.channel.send('*gives ' + nameGiven + ' a cookie with milk*' );
				if (!cookiesandmilk.hasOwnProperty(nameGiven)) {
					cookiesandmilk[nameGiven] = {};
				}
				if (!cookiesandmilk[nameGiven].hasOwnProperty('amount')) {
					cookiesandmilk[nameGiven].amount = 0;
				}
				cookiesandmilk[nameGiven].amount++
				var jsonData = JSON.stringify(cookiesandmilk, null, "\t");
				fs.writeFile("cookies.json", jsonData, function(err) {
				if (err) {
					console.log(err);
				}
				});
			break;
			// !editrole
			case 'editrole':
				switch(args[0]) {
					//change color of role
					case 'color':
						message.member.highestRole.setColor(args[1])
							.then(updated => message.channel.send('Role color changed to ' + args[1] + '.'))
							.catch(function(error) {
								console.log(error);
								message.channel.send('Sorry, that is not a valid color name or hex value.')
							});
					break;
					//can you be @mentioned
					case 'mention':
						if (args[1]=='true'||args[1]=='false') {
							message.member.highestRole.setMentionable(args[1])
								.then(updated => message.channel.send('Mentionability set to "' + args[1] + '".'))
								.catch(function(error) {
									console.log(error);
									message.channel.send('Sorry, but something went wrong. What went wrong is beyond be. I will check the logs.');
								});
							}
						break;
						//is your role displayed separately
					case 'hoist':
						if (args[1]=='true'||args[1]=='false') {
							message.member.highestRole.setHoist(args[1])
							.then(updated => message.channel.send('Hoist set to "' + args[1] + '".'))
							.catch(function(error) {
								console.log(error);
								message.channel.send('Sorry, but something went wrong. What went wrong is beyond be. I will check the logs.');
							});
						}
					break;
					//change role name
					case 'name':
						var nameGiven = '';							
						for (let i = 1; i < args.length; i++) {
							// Print each iteration to the console
							if (nameGiven==''){
								nameGiven = nameGiven + '' + args[i]
							}
							else {
								nameGiven = nameGiven + ' ' + args[i]
							}
							
						}
						message.member.highestRole.setName(nameGiven)
							.then(updated => message.channel.send('Name set to "' + nameGiven + '".'))
							.catch(function(error) {
							console.log(error);
							message.channel.send('Sorry, but something went wrong. What went wrong is beyond be. I will check the logs.');
						});
					break;
					//sorry
					default:
						message.channel.send('Please use the following template to ensure that your role will actually survive this: !editrole [color, name, mention, hoist] [valid input for selected command].');
					break;
				}
			
			break;
			// !kick
			case 'kick':
				var nameGiven = '';							
				for (let i = 0; i < args.length; i++) {
					// Print each iteration to the console
					if (nameGiven==''){
						nameGiven = nameGiven + '' + args[i]
					}
					else {
					nameGiven = nameGiven + ' ' + args[i]
					}
				}
				
				message.channel.send('**Kicks ' + nameGiven + '**');
			break;
			// !cookielist
			case 'cookielist':
				var rawdata = fs.readFileSync('cookies.json');  
				var protocookie = JSON.parse(rawdata);
				cookiesandmilk = protocookie;
				var tempString = JSON.stringify(cookiesandmilk, null, "\t");
				message.channel.send('```javascript\n' + tempString + '\n```');
			break;
		 }
     }
});
client.login(auth.token);