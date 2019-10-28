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
	 * @param {string} cmdr Commander UID reference (string)
	 * @param {array} unitArr An array of unit amounts
	 * @param {string} uProv Province name reference (string)
	 * @returns {object} Army class object, or an error object with the key 'a' describing the error
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
	 * @param {object} unitObj A object of type and class Army
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
	 * Move units from a army to another
	 * @param {object} armyO Army object we're performing operations on
	 * @param {string} newProv Name of the province we're moving into
	 * @param {array} amount Amount of soldiers we're moving
	 * @returns {object} New army object with values taken from the input army object
	 */
	static moveUnits(armyO, newProv, amount, cmdr) {
		if (typeof armyO != 'object'|| typeof amount !='number' || typeof newProv != 'string' || typeof cmdr != 'string') {
			return 'inp';
		}
		armyO.infantry -= amount[0];
		armyO.cavalry -= amount[1];
		armyO.artillery -= amount[2];

		return new Army('')
		
	}
	/**
	 * Move whole army to new province
	 * @param {string} newProv The name of the province to be moved to (strings)
	 */
	updateProv(newProv = '') {
		if (typeof newProv != 'string' || !(provList.landProv.hasOwnProperty(newProv) || provList.seaProv.hasOwnProperty(newProv))) {
			return 'inp';
		}
		
		this.prov = newProv;
	}
}


module.exports = Army;
