// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:



  var getElementsByClassName = function(className) {
    var results = [];
    var checkNodes = function(node) {
      // If the element contains the class className
      if (node.classList && node.classList.contains(className)) {
        // Add it to our result
        results.push(node);
      }

      // If the element contains child nodes
      if (node.childNodes) {
        // Loop through each child node
        for (var i = 0; i < node.childNodes.length; i++){
        checkNodes(node.childNodes[i])
        }
        // _.each(element.childNodes, function(item) {
        //   // Recursively call findElementsContainingClass until we've looped through all child nodes
        //   findElementsContainingClass(item);
        // });
      }
    }
    // Start our recursive function
    checkNodes(document.body);
    return results
  }