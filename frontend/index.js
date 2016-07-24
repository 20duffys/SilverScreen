window.onload = function() {
  console.log('Silver screen!');

  // ***************** part 1: Silverscreen API ***************** //

  // Get the elements:
  var searchBox = document.getElementById('search-box');
  var searchBoxDiv = document.getElementById('search-box-div');
  var searchBtn = document.getElementById('search-btn');
  var charsInfoContainer = document.getElementById('info-container-characters');
  var addToFavesBtn = document.getElementById('add-to-faves-btn');
  var nameAddToFaves = '';
rsrrs




var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
url += '?' + $.param({
  'api-key': "d9563caa2d474236b9d936a1f726dd37"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
