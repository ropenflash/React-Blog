import express from 'express'
import bodyParser from 'body-parser'
const app=express()

app.use(bodyParser.json())

const articlesInfo={
    
    'learn-react':{
        upvotes:0,
        comments:[]
        
    },
    'learn-redux':{
        upvotes:0,
        comments:[]
        
    },
    'underscore.js':{
        upvotes:0,
        comments:[]
        
    },
}

app.post('/api/articles/:name/upvote',(req,res)=>{
    const articleName=req.params.name
    articlesInfo[articleName].upvotes++
    res.status(200).send(`${articleName} has ${articlesInfo[articleName].upvotes} upvotes! `)
})


app.post('/api/articles/:name/add-comment',(req,res)=>{
    const articleName=req.params.name
    const {username,text}=req.body
    articlesInfo[articleName].comments.push({username,text})
    res.status(200).send(` ${JSON.stringify(articlesInfo[articleName])} `)
})


app.listen(8081,()=>{
    console.log('listenting on port 8081')
})