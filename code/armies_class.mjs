class Army {
	constructor(cmdr = '', unitArr = []) {
		if (typeof cmdr == 'string') {
			this.commander = cmdr;
		}
		this.infantry = unitArr[0];
		this.cavalry = unitArr[1];
		this.artillery = unitArr[2];
	}
}

function parseUnits(unitObj = {}) {
	console.log(unitObj);
	return {"units": 0};
}

export default {"parseUnits": parseUnits, "Army": Army};
