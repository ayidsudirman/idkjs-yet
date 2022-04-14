// Get Element By ID
var banner = document.getElementById('page-banner');
// console.info(banner);

var bookList = document.getElementById('book-list');
// console.log(bookList);

// Get Element By Class or Tag
var titles = document.getElementsByClassName('title'); 
// console.log(titles);

// Return NOT an Array, its an HTML Collection
// console.log(Array.isArray(titles)); // false
// console.log(Array.isArray(Array.from(titles))); // true

// titles.forEach(function(title){
//     console.log(title); 
// }) // Err: titles.forEach is not a function

Array.from(titles).forEach(function(title){
    console.log(title);
})

// Array.from(titles).forEach(title => console.log(title)); // Arrow Fn


var lis = document.getElementsByTagName('li');
// console.log(lis);

for (i=0; i < lis.length; i++) { 
    // console.log(lis[i]);
} // also to cycle HTML Collection, but forEach is prefer one