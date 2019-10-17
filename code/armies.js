function Army(cmdr = '', unitArr = []) {
	if (typeof cmdr != 'string'){
		return null;
	}
			
	if (typeof unitArr != 'object') {
		return null;
	} 
	this.commander = cmdr;
	this.infantry = unitArr[0];
	this.cavalry = unitArr[1];
	this.artillery = unitArr[2];
}

function parseUnits(unitObj = {}) {
	console.log(unitObj);
	return {"units": 0};
}
module.exports = {"parseUnits": parseUnits, "Army": Army};
