// GET ELEMENT BY ID
var banner = document.getElementById('page-banner');
// console.info(banner);

var bookList = document.getElementById('book-list');
// console.log(bookList);

// GET ELEMENT BY CLASS OR TAG
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

// THE QUERY SELECTOR
var book = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(book); // always return html collection

var books = document.querySelectorAll('#book-list li');
// console.log(books); // always return node-list, do not need array method

// books.forEach(book => console.log(book));

// CHANGING TEXT AND HTML CONTENT
books = document.querySelectorAll('#book-list li .name');
books.forEach((book => book.textContent += ' (judul kitab)'))

bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Kitab Mafatihul Ilmi</h2>';
bookList.innerHTML += '<p>Kitab Mafatihul Ilmi selanjutnya ...</p>';

// NODES
// banner = document.querySelector('#page-banner');
// console.log('#banner node type is:', banner.nodeType); //There are 12 different node types, refer to w3school
// console.log('#banner node name is:', banner.nodeName);
// console.log('#banner node has child:', banner.hasChildNodes());

const clonedBanner = banner.cloneNode(false);
console.log(clonedBanner);

// TRAVERSING THE DOM
// console.log('Banner parent node is:', banner.parentNode);
// console.log('Banner parent element is:', banner.parentElement);
// console.log('Banner top-level parent element is:', banner.parentElement.parentElement);
// console.log('book-list children is:', bookList.children);

// console.log('book-list next sibling is: ', bookList.nextSibling); // line break is also a text
// console.log('book-list next element sibling is: ', bookList.nextElementSibling); 
// console.log('book-list next previous sibling is: ', bookList.previousSibling);
// console.log('book-list next previous element sibling is: ', bookList.previousElementSibling); 

bookList.previousElementSibling.querySelector('p').innerHTML += '<br /> yang wajib diketahui setiap muslim dan muslimah';


// EVENTS
var btns = document.querySelectorAll('#book-list .delete');

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();

        const li = e.target.parentElement;
        
        // parent.removeChild()
        li.parentNode.removeChild(li);
    })
})

// STYLE & CLASSES

var li = document.querySelector('li:last-child');

li.style.color = "red";
li.style.marginTop = "60px";

// this is will work but there is another way to do it. You probably forget to add space so several classes don not added properly
li.className += " name";  

li.classList.add('name'); // its better way to do this