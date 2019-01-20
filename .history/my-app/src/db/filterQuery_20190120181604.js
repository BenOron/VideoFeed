var filtered = workItems.filter(function(element) {
  // Create an array using `.split()` method
  var cats = element.category.split(" ");

  // Filter the returned array based on specified filters
  // If the length of the returned filtered array is equal to
  // length of the filters array the element should be returned
  return (
    cats.filter(function(cat) {
      return filtersArray.indexOf(cat) > -1;
    }).length === filtersArray.length
  );
});
