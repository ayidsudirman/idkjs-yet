// 9. THROW ERROR
const getTodos = async () => {

  const response = await fetch('todos/isaac.json');
  
  if (response.status !== 200) {
    throw new Error('error fetch the data');
  }
  
  const data = await response.json(); 

  return data;

};


getTodos()
  .then(data => console.log('resolved: ', data))
  .catch(err => console.log('rejected: ', err.message));


// 8. ASYNC & AWAIT
// async example
// const getTodos = async () => {

// };

// const test = getTodos();
// console.log(test); // return promise

// const getTodos = async () => {
//   const response = await fetch('todos/isaac.json');
//   const data = await response.json(); // json() is used to get data from fetch()
//   // console.log(data);
//   return data;

// };

// const test = getTodos();
// console.log(test); // still cant get the data, because its still a promise (have to be resolved or rejected)

// console.log(1);
// console.log(2);

// // still use then() inside calling async function (not inside an sync function it self) for getting the data.
// getTodos()
//   .then(data => console.log('promise resolved: ', data)) // remove curly braces if only one line
//   .catch(err => console.log(err));

// console.log(3);
// console.log(4);

// 7. FETCH API

// fetch('todos/isaac.json').then(response => {
//   // const data = JSON.parse(response) // won't work
//   console.log('resolved: ', response);
//   return response.json()
// }).then(data => {
//   console.log(data);
// }).catch((err)=>{
//   console.log('rejected: ', err)
// });

// 6. PROMISES

// promise example
// const getSomething = () => {
// 	return new Promise((resolve, reject) => {
// 		// fetch something
// 		resolve('some data');
// 		// reject('some error');
// 	})
// };

// // getSomething().then( (data) => {
// // 	console.log(data);
// // }, (err) => {
// // 	console.log(err);
// // });

// getSomething().then( data => {
// 	console.log(data);
// }).catch( err => {
// 	console.log(err);
// })

// const getTodos = (resource) => {

//   return new Promise((resolve, reject) => {

//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);        
//         // callback(undefined, data);
// 		resolve(data);
//       } else if (request.status === 404) {        
//         // callback("could not fetch data", undefined);
// 		reject('error getting resources');
//       }
//     });

//     request.open("GET", resource);
//     request.send();
//   });
// };

// getTodos('todos/ayid.json').then((data) => {
// 	console.log('promise 1 resolved: ', data);
// 	// getTodos('todos/isaac').then(()=>{}) // instead of this line, better below 
// 	return getTodos('todos/isaac.json');
// }).then(data => {
// 	console.log('promise 2 resolved: ', data);
// 	return getTodos('todos/khaulah.json');
// }).then( data => {
// 	console.log('promise 3 resolved: ', data);
// }).catch((err) => {
// 	console.log('promise rejected: ', err);
// })

// 5. CALLBACK HELL
// const getTodos = (resource ,callback) => {
// 	const request = new XMLHttpRequest();

// 	request.addEventListener("readystatechange", () => {
// 		if (request.readyState === 4 && request.status === 200) {
// 		  const data = JSON.parse(request.responseText)
// 	  //   console.log(request, request.responseText);
// 		  callback(undefined, data);
// 	  } else if (request.status === 404) {
// 	  //   console.log("the data could not be fetched");
// 		  callback('could not fetch data', undefined);
// 	  }
// 	});

// 	request.open("GET", resource);
// 	request.send();
//   };

//   getTodos( 'todos/ayid.json', (err, data) => {
// 	  console.log(data);
// 	  getTodos( 'todos/isaac.json', (err, data) => {
// 		  console.log(data);
// 		  getTodos( 'todos/khaulah.json', (err, data) => {
// 			  console.log(data);
// 		  })
// 	  })
//   });

// 4. USING JSON

// const getTodos = (callback) => {
// 	const request = new XMLHttpRequest();

// 	request.addEventListener("readystatechange", () => {
// 		if (request.readyState === 4 && request.status === 200) {
// 		  const data = JSON.parse(request.responseText)
// 	  //   console.log(request, request.responseText);
// 		  callback(undefined, data);
// 	  } else if (request.status === 404) {
// 	  //   console.log("the data could not be fetched");
// 		  callback('could not fetch data', undefined);
// 	  }
// 	});

// 	request.open("GET", "todos.json");
// 	request.send();
//   };

//   getTodos( (err, data) => {
// 	  console.log('callback fired');
// 	  // console.log(err, data);
// 	  if (err) {
// 		  console.log(err)
// 	  } else {
// 		  console.log(data)
// 	  }

//   });

// 3. STATUS CODE & 4. CALLBACK FUNCTION

// const getTodos = (callback) => {
// 	const request = new XMLHttpRequest();

// 	request.addEventListener("readystatechange", () => {
// 	  // console.log(request, request.readyState);
// 	  if (request.readyState === 4 && request.status === 200) {
// 	  //   console.log(request, request.responseText);
// 		  callback(undefined, request.responseText);
// 	  } else if (request.status === 404) {
// 	  //   console.log("the data could not be fetched");
// 		  callback('could not fetch data', undefined);
// 	  }
// 	});

// 	request.open("GET", "https://jsonplaceholder.typicode.com/todos");
// 	request.send();
//   };

//   console.log(1);
//   console.log(2);

//   getTodos( (err, data) => {
// 	  console.log('callback fired');
// 	  // console.log(err, data);
// 	  if (err) {
// 		  console.log(err)
// 	  } else {
// 		  console.log(data)
// 	  }

//   });

//   console.log(3);
//   console.log(4);

// 2. HTTP REQUEST
// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
// 	// console.log(request, request.readyState);
// 	if (request.readyState === 4 ) {
// 		console.log(request.responseText)
// 	}
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// request.send();

// 1. ASNYCHRONOUS VS SYNCHRONOUS
// console.log('1');
// setTimeout(() => {
//     console.log('Callback function fired');
// }, 2000)
// console.log('2');
// console.log('3');
