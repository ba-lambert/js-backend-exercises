import express from 'express';

const app = express()

app.get('/welcome',(res)=>{
    res.send('welcome docker')
})

app.listen(process.env.PORT || 3000,()=>{
    console.log('sever started')
})