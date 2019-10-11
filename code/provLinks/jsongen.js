// JSON File Generator by Canada Jones

const fs = require('fs');

var landProvList = ['for', 'wes', 'nor', 'owo', 'dno', 'ska', 'swe', 'ost', 'lap', 'kol', 'fin', 'mmm', 'ura', 'rus', 'kar', 'est', 'lat', 'lit']; 
var seaProvList = ['WTH', 'WTF', 'ETH', 'ALA', 'MAL', 'BAY', 'BOB', 'SEA'];

var linkedList = {
	landProv: {},
	seaProv: {}
};

for (let i=0; i < landProvList.length; i++) {
	linkedList.landProv[landProvList[i]] = ['a'];
	console.log(landProvList[i])
	console.log(linkedList.landProv[landProvList[i]]);
}

for (let i=0; i < seaProvList.length; i++) {
	linkedList.seaProv[seaProvList[i]] = ['a'];
	console.log(seaProvList[i]);
	console.log(linkedList.seaProv[seaProvList[i]]);
}

fs.writeFileSync('struct.json', JSON.stringify(linkedList, null, '\t'));