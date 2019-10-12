// Get province list file
const provList = require('./provLinks/provLinks.json');

// Get river registry file
const riverList = require('./provLinks/riverList.json');

// Function to sanity check, add additional info to, and organize order info
function parseOrder(argList = [], orderCMD = "") {
	// Create array that'll store the order info
	var movesArr = ['', '', '', {}, []];
	
	// Check if all necessary arguments have been passed
	if (orderCMD) {
		// Check that all arguments are of the correct type (they'll be undefined if they haven't been passed)
		if (typeof argList[0] == 'string' && typeof argList[1] == 'string' && typeof argList[2] == 'object') {
			// Check if it is a valid simple command
			if (orderCMD == 'mov' || orderCMD == 'atk' || orderCMD == 'def') {
				// Put the order command into the return array
				movesArr[0] = orderCMD;
				
				// Check if we're moving from a land province
				if (argList[0] == argList[0].toLowerCase() && provList.landProv.hasOwnProperty(argList[0])) {
					
					// Put the start province into the return array
					movesArr[1] = argList[0];
					
					// Check if we're moving across a river
					if (riverList.landProv.hasOwnProperty(argList[0])) {
						for (let i=0; i < riverList.landProv[argList[0]].length; i++){
							if (riverList.landProv[argList[0]][i] == argList[1]) {
								movesArr[4] = ['river'];
								break;
							}
						}
					}
					
					// If we're moving from one land province to another, no problem
					if (argList[1] == argList[1].toLowerCase() && provList.landProv.hasOwnProperty(argList[1])){
						movesArr[2] = argList[1];
					}

					// If we're moving from a land province to a sea province, we're moving a boat or loading untis into a boat, therefore b(oat)Load
					else if (argList[1] == argList[1].toUpperCase() && provList.seaProv.hasOwnProperty(argList[1])) {
						movesArr[2] = argList[1];
						movesArr[4][movesArr[4].length] = 'bLoad';
					}
					
					else {
						// invalid end province
						return 'iep';
					}
				}

				// Check if we're moving from a sea province
				else if (argList[0] == argList[0].toUpperCase() && provList.seaProv.hasOwnProperty(argList[0])) {
					// Put the start province into the return array
					movesArr[1] = argList[0];
					
					// Check if we're trying to move up a river
					if (riverList.seaProv.hasOwnProperty(argList[0])) {
						for (let i=0; i < riverList.seaProv[argList[0]].length; i++){
							if (riverList.seaProv[argList[0]][i] == argList[1]) {
								movesArr[4] = ['moveRiver'];
								break;
							}
						}
					}
					
					// IF we're going from one sea province to another, no problem
					if (argList[1] == argList[1].toUpperCase() && provList.seaProv.hasOwnProperty(argList[1])){
						movesArr[2] = argList[1];
					}
					
					// If we're moving from sea to land, we need to log it
					else if (argList[1] == argList[1].toLowerCase() && provList.seaProv.hasOwnProperty(argList[1])) {
						movesArr[2] = argList[1];
						movesArr[4][movesArr[4].length] = 'bUnload';
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
				
				// Put the unit object into the return array
				movesArr[3] = {'units': 0};
				
				// Return the order array
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
module.exports = parseOrder;