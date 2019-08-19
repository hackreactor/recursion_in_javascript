// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(name) {
  // Your code here
  var results = [];

  function checkNode(node) {
    var parts = node.className.split(' ');
    if (parts.indexOf(name) >= 0) results.push(node);

    for (var i = 0; i < node.children.length; i++) {
      checkNode(node.children[i]);
    }
  }

  checkNode(document.body);
  return results;
}
