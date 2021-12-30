const express = require('express')
const app = express()

app.use((request,response,next)=>{
	console.log('Server1 Requested!');
	console.log('Request From',request.get('Host'));
	console.log('Request URL',request.url);
	next()
})

app.get('/students',(request,response)=>{
	const students = [
		{id:'001',name:'tom',age:18},
		{id:'002',name:'jerry',age:19},
		{id:'003',name:'tony',age:120},
	]
	response.send(students)
})

app.listen(5001,(err)=>{
	if(!err) console.log('Server1 Started. To get student data please access: http://localhost:5001/students');
})
