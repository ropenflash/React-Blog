import express from 'express'
import bodyParser from 'body-parser'
import withDB from '../db/db'
import path from 'path'

const app=express()

app.use(express.static(path.join(__dirname,'/build')))
app.use(bodyParser.json())

app.get('/api/articles/:name',async(req,res)=>{
        withDB(async(db)=>{
            const articleName=req.params.name
            const articleInfo=await db.collection('articles').findOne({name:articleName})
            res.status(200).json(articleInfo)
        },res)      
})

app.post('/api/articles/:name/upvote',async(req,res)=>{
    
        withDB(async(db)=>{
            const articleName=req.params.name
            const articleInfo=await db.collection('articles').findOne({name:articleName})

            if(articleInfo){
                await db.collection('articles').updateOne({name:articleName},
                 {'$set':{
                     upvotes:articleInfo.upvotes+1
                 }})
             }
             const updatedArticleInfo=await db.collection('articles').findOne({name:articleName})
             res.status(200).json(updatedArticleInfo)
        },res)
})


app.post('/api/articles/:name/add-comment',(req,res)=>{
    const articleName=req.params.name
    const {name,text}=req.body
        
    withDB(async(db)=>{
        const articleInfo=await db.collection('articles').findOne({name:articleName})
        await db.collection('articles').updateOne({name:articleName},{
            '$set':{
                comments:articleInfo.comments.concat({name,text})
            }
        })
        const updatedArticleInfo=await db.collection('articles').findOne({name:articleName})
        res.status(200).json(updatedArticleInfo)

    },res)
    
})

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/build/index.html'))
})

app.listen(8080,()=>{
    console.log('listenting on port 8080')
})