// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:



var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'number') {
    return obj.toString();
  } else if (obj === null) {
    return 'null';
  } else if (obj === undefined) {
    return '<remove>';
  } else if (typeof obj === 'boolean') {
    return obj.toString();
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'function') {
    return '<remove>';
  } else if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      let string = '[';
      for (let i = 0; i < obj.length; i++) {
        string += stringifyJSON(obj[i]) + ',';
      }
      if (obj.length > 0) {
        return string.slice(0, -1) + ']';
      } else {
        return string + ']';
      }
    } else {
      let keyValues = [];
      for (let key in obj) {
        if (stringifyJSON(obj[key]) === '<remove>') {
          return '{}';
        }
        keyValues.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
      return '{' + keyValues.join(',') + '}';
    }
  }
};