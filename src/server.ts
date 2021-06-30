import express from 'express';
import 'reflect-metadata';
import './database'

const app = express();

app.listen(3000, () => console.log('Server is running!'));

app.get('/test', (request, response) => {
    
    return response.send("Ola NLW!");
})

app.post('/test-post', (request, response) => {
    return response.send("Ola NLW!")
})