// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var result = [];

  function search(element) {
  	var classes = element.classList;
  	if (classes && classes.contains(className)) {
  		result.push(element);
  	}
  	for (var i = 0; i < element.childNodes.length; i++) {
  		search(element.childNodes[i]);
  	}
  }

  search(document.body);
  return result;
};
