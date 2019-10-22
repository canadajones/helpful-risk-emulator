// Get province list file
const provList = require('./provLinks/provLinks.json');

var constantCount = 0;
class Army {
	constructor(cmdr = '', unitArr = [], uProv = '') {
		if (typeof cmdr != 'string' || typeof unitArr != 'object' || typeof uProv == 'string') {
			return {err: 'ica'};
		}
		this.type = 'ArmyObj';
		this.uuid = constantCount++;
		
		this.prov = uProv;
		this.commander = cmdr;
		this.infantry = unitArr[0];
		this.cavalry = unitArr[1];
		this.artillery = unitArr[2];
	}
	
	static parseUnits(unitObj = {}) {
		if (unitObj === null || typeof unitObj != 'object')  {
			return 'iuo';
		}
	}

	updateProv(newProv = '') {
		if (typeof newProv != 'string' || !(provList.landProv.hasOwnProperty(newProv) || provList.seaProv.hasOwnProperty(newProv))) {
			return 'inp';
		}
		
		this.prov = newProv;
		

	}
}


module.exports = Army;
