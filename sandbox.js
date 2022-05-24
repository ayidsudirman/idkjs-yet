// 5. CALLBACK HELL
const getTodos = (resource ,callback) => {
	const request = new XMLHttpRequest();
  
	request.addEventListener("readystatechange", () => {
		if (request.readyState === 4 && request.status === 200) {
		  const data = JSON.parse(request.responseText)
	  //   console.log(request, request.responseText);
		  callback(undefined, data);
	  } else if (request.status === 404) {
	  //   console.log("the data could not be fetched");
		  callback('could not fetch data', undefined);
	  }
	});
  
	request.open("GET", resource);
	request.send();
  };
  
  getTodos( 'todos/ayid.json', (err, data) => {
	  console.log(data);
	  getTodos( 'todos/isaac.json', (err, data) => {
		  console.log(data);
		  getTodos( 'todos/khaulah.json', (err, data) => {
			  console.log(data);
		  })
	  })  
  });

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