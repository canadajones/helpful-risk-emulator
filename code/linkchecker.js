// Province Link Checker, by Canada Jones

// Get 'fs' library
const fs = require('fs');

// Get province object file
const obj = require('./provLinks.json');

const landProvs = Object.keys(obj.landProv);
const seaProvs = Object.keys(obj.seaProv);

// Get the number of land provinces
var objLandLgt = landProvs.length;

// Get the number of sea provinces
var objSeaLgt = seaProvs.length;

// Make arrays to store the status of each province link
var landProvChecks = [];
var seaProvChecks = [];

// Define persistent counter to assign all possible values 
let co = 0; 

// Iterate through all the provinces in 'obj.landProv'
for (let i = 0; i < objLandLgt; i++) {
	
	// Define 'curLink' to be the province we're checking the links of
	let curLink = landProvs[i];
	
	// Iterate through all the province links in the current province
	for (let ii=0; ii < obj.landProv[curLink].length; ii++) {
		

		// Define chkLink to be the current link 
		let chkLink = "";
		chkLink = obj.landProv[curLink][ii];
		
		// Add 'curLink' to the current string
		landProvChecks[co] = curLink;
		
		// Add '-' ot the current string
		landProvChecks[co] += '-';
		
		// Add 'chkLink' to the current string
		landProvChecks[co] += chkLink;
		
		// Add ': ' to the current string
		landProvChecks[co] += ': ';
		
		// Check if we're checking a link towards a sea province
		if (obj.landProv.hasOwnProperty(chkLink)) {
			// Iterate through links of the 'chkLink' province
			for (let iii = 0; iii< obj.landProv[chkLink].length; iii++ ) {
				// Check if link exists, if so log a 'c' and break
				if (obj.landProv[chkLink][iii] == curLink) {
					landProvChecks[co] += 'c';
					break;
				}
				// If no province link has been found, log a 'v' and break
				else if (iii == obj.landProv[chkLink].length - 1) {
					landProvChecks[co] += 'v';
					break;
				}
			}
		}
		else if (obj.seaProv.hasOwnProperty(chkLink)) {
			for (let iii = 0; iii< obj.seaProv[chkLink].length; iii++ ) {
				if (obj.seaProv[chkLink][iii] == curLink) {
					landProvChecks[co] += 'c';
					break;
				}
				else if (iii == obj.seaProv[chkLink].length - 1) {
					landProvChecks[co] += 'v';
					break;
				}
			}	
		}
		else {
			landProvChecks[co] += 'Invalid province link!'
		}
		co++;
	}
}

co = 0; 

for (let i = 0; i < objLandLgt; i++) {
	
	let curLink = landProvs[i];
	for (let ii=0; ii < obj.landProv[curLink].length; ii++) {
		
		let chkLink = "";
		chkLink = obj.landProv[curLink][ii];
		
		landProvChecks[co] = curLink;
		
		landProvChecks[co] += '-';
		
		landProvChecks[co] += chkLink;
		
		landProvChecks[co] += ': ';
		console.log(chkLink);
		if (obj.landProv.hasOwnProperty(chkLink)) {
			for (let iii = 0; iii< obj.landProv[chkLink].length; iii++ ) {
			
				if (obj.landProv[chkLink][iii] == curLink) {
					console.log('h' + co);
					landProvChecks[co] += 'c';
					break;
				}
				else if (iii == obj.landProv[chkLink].length - 1) {
					console.log('i');
					landProvChecks[co] += 'v';
					break;
				}
			}
		}
		else if (obj.seaProv.hasOwnProperty(chkLink)) {
			for (let iii = 0; iii< obj.seaProv[chkLink].length; iii++ ) {
				if (obj.seaProv[chkLink][iii] == curLink) {
					console.log('h' + co);
					landProvChecks[co] += 'c';
					break;
				}
				else if (iii == obj.seaProv[chkLink].length - 1) {
					console.log('i');
					landProvChecks[co] += 'v';
					break;
				}
			}	
		}
	
		console.log(co);
		co++;
	}
console.log('i: ' + co);
}
console.log(landProvChecks);
console.log(seaProvChecks);