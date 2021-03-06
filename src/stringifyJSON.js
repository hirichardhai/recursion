// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	if (typeof obj === 'string') {
		return '"' + obj + '"';
	} else if (typeof obj === 'boolean') {
		return obj.toString();
	} else if (typeof obj === 'number') {
		return obj.toString();
	} else if (obj === null) {
		return 'null';
	} else if (typeof obj === 'undefined') {
		return 'undefined';
	} else if (Array.isArray(obj)) {
		var stringArray = obj.map(function(obj) {
			return stringifyJSON(obj)
		});
		return '[' + stringArray + ']';
	} else if (typeof obj === 'object') {
		var objKeysAndValues = [];
		for (var key in obj) {
			if (stringifyJSON(obj[key]) === 'undefined') {
				return '{}';
			} 
			objKeysAndValues.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
		} 
		return '{' + objKeysAndValues.join(',') + '}';
	}
}