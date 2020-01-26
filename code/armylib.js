/**
 * Army object type
 * @typedef {Object} ArmyObj
 * @property {string} type String identifying what kind of object this is. Will be set to 'armyObj' for this object.
 * @property {number} uuid Incremental universally unique id
 * @property {string} prov Name of province unit is stationed in
 * @property {string} cmdr The commander the unit is attached to
 * @property {Object} levelone Container for level one units
 * @property {number} levelone.infantry Amount of infantry units
 * @property {number} levelone.cavalry Amount of cavalry units
 * @property {number} levelone.artillery Amount of artillery units
 * @property {Object} leveltwo Container for level one units
 * @property {number} leveltwo.infantry Amount of infantry units
 * @property {number} leveltwo.cavalry Amount of cavalry units
 * @property {number} leveltwo.artillery Amount of artillery units
 * @property {Object} levelthree Container for level one units
 * @property {number} levelthree.infantry Amount of infantry units
 * @property {number} levelthree.cavalry Amount of cavalry units
 * @property {Object} levelthree.artillery Amount of artillery units
*/

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
	 * @returns {ArmyObj} Army class object, or an error object with the key 'err' describing the error
	*/
	constructor(cmdr = '', unitArr = [], uProv = '') {
		if (typeof cmdr != 'string' || typeof unitArr != 'object' || typeof uProv != 'string') {
			return {err: 'ica'};
		}
		
		this.type = 'ArmyObj';
		this.uuid = persistentCount++;
		
		this.prov = uProv;
		this.commander = cmdr;
		this.levelone = {
			infantry: unitArr[0][0],
			cavalry: unitArr[0][1],
			artillery: unitArr[0][2]
		}
		this.leveltwo = {
			infantry: unitArr[1][0],
			cavalry: unitArr[1][1],
			artillery: unitArr[1][2]
		}
		this.levelthree = {
			infantry: unitArr[2][0],
			cavalry: unitArr[2][1],
			artillery: unitArr[2][2]
		}
	}
	static assignIDUUID(armyObj, armyList) {
		if (armyObj === null || typeof armyObj != 'object' || armyList === null || armyList != 'object') {
			return 'ifc';
		}
	}

	/**
	 * Unit order parser
	 * 
	 * @param {array} unitArray The unitArray array, passed from parseOrder
	 */
	static parseUnits(unitArray = []) {
		if (unitArray === null || typeof unitObj != 'object')  {
			return 'iuo';
		}


	}
	/**
   	 * Clean exit function; saves the persistent counter to disk
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
		if (typeof armyO != 'object'|| typeof amount != 'object' || typeof newProv != 'string' || typeof cmdr != 'string') {
			return 'inp';
		}
		armyO.levelone.infantry
		armyO.levelone.cavalry
		if (cmdr === null) {
			return new Army('', [amount[0], amount[1], amount[2]], newProv);
		}
		else {
			return new Army(cmdr, [amount[0], amount[1], amount[2]], newProv);
		}		
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
