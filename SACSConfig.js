//++++++++++++++++++++
//+ SACSConfig.js    +
//++++++++++++++++++++
var crypto = require('crypto'),
	algorithm = 'aes-256-ctr',
	password = 'abcdbzzzzakuku';

module.exports = {
	"environment": "https://api.test.sabre.com",
	"userId": "q139ezoc7qcsyzay",
	"group": "DEVCENTER",
	"domain": "EXT",
	"clientSecret": "HmiNR7u7",
	"formatVersion": "V1",

	encrypt: function (text) {
		var cipher = crypto.createCipher(algorithm, password);
		var crypted = cipher.update(text, 'utf8', 'hex');
		crypted += cipher.final('hex');
		return crypted;
	},
	decrypt: function (text) {
		var decipher = crypto.createDecipher(algorithm, password);
		var dec = decipher.update(text, 'hex', 'utf8');
		dec += decipher.final('utf8');
		return dec;
	}
}