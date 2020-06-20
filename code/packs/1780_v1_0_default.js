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
				if (a > 95) {
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
			case 'move': {
				message.channel.send('```js\n' + JSON.stringify(parseOrders([args[0], args[1] ,{}], 'mov'), null, '\t') + '```');
			break;
			}
			
			// !armytest 
			case 'armytest': {
				message.channel.send('```js\n' + JSON.stringify(new Army("Keynes", [[4, 3, 2], [6, 2, 1], [1, 6, 4]], "owo"), null, '\t')+ '```');
			break;
			}

			// !cleanexit
			case 'cleanexit':{
				Army.cleanExit();
				process.exit(0);
			}
		}