// ASNYCHRONOUS VS SYNCHRONOUS
	// console.log('1');
	// setTimeout(() => {
	//     console.log('Callback function fired');
	// }, 2000)
	// console.log('2');
	// console.log('3');

// HTTP REQUEST
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
	// console.log(request, request.readyState);
	if (request.readyState === 4 ) {
		console.log(request.responseText)
	}
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();
