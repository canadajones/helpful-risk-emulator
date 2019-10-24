// Get fs library
const fs = require('fs');

// Get province list file
const provList = require('./provLinks/provLinks.json');

var persistentCount = fs.readFileSync('count.json');
persistentCount = Number(JSON.parse(persistentCount).a);

if(isNaN(persistentCount)) throw 'counter not a number';


class Army {
	/**
	 * Army class constructor
	 * @constructor
	 * @param {String} cmdr Commander UID reference (string)
	 * @param {Array} unitArr An array of unit amounts
	 * @param {String} uProv Province name reference (string)
	 */
	constructor(cmdr = '', unitArr = [], uProv = '') {
		if (typeof cmdr != 'string' || typeof unitArr != 'object' || typeof uProv != 'string') {
			return {err: 'ica'};
		}
		
		this.type = 'ArmyObj';
		this.uuid = persistentCount++;
		
		this.prov = uProv;
		this.commander = cmdr;
		this.infantry = unitArr[0];
		this.cavalry = unitArr[1];
		this.artillery = unitArr[2];
	}
	
	/**
	 * Unit order parser
	 * @param {Object} unitObj A object of type and class Army
	 */
	static parseUnits(unitObj = {}) {
		if (unitObj === null || typeof unitObj != 'object')  {
			return 'iuo';
		}
	}
	/**
	 * Clean exit function; terminates all open strings in the Army class
	 */
	static cleanExit() {
		fs.writeFileSync('count.json', JSON.stringify({"a": persistentCount}));
	}

	/**
	 * 
	 * @param {String} newProv The name of the province to be moved to (strings)
	 */
	updateProv(newProv = '') {
		if (typeof newProv != 'string' || !(provList.landProv.hasOwnProperty(newProv) || provList.seaProv.hasOwnProperty(newProv))) {
			return 'inp';
		}
		
		this.prov = newProv;
	}
}


module.exports = Army;
