class Army {
	constructor(cmdr = '', unitArr = []) {
		this.commander = cmdr;
		this.infantry = unitArr[0];
		this.cavalry = unitArr[1];
		this.artillery = unitArr[2];
	}
	
	parseUnits(unitObj = {}) {
		if (unitObj === null || typeof unitObj !== 'object')  {
			return 'iuo';
		}
	}
}


module.exports = Army;
