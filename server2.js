const express = require('express')
const app = express()

app.use((request,response,next)=>{
	console.log('Server2 Requested!');
	console.log('Request From',request.get('Host'));
	console.log('Request URL',request.url);
	next()
})

app.get('/cars',(request,response)=>{
	const cars = [
		{id:'001',name:'Bentz',price:199},
		{id:'002',name:'Mazda',price:109},
		{id:'003',name:'Jetta',price:120},
	]
	response.send(cars)
})

app.listen(5002,(err)=>{
	if(!err) console.log('Server2 Started. To get cart data please access: http://localhost:5002/cars');
})
