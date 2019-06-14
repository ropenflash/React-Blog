import React,{useState,useEffect} from 'react'
import {articles} from './article-content'
import ArticlesList from '../components/ArticlesList'
import NotFound from './NotFound'
import CommentsList from '../components/CommentsList';
import UpvoteSection from '../components/UpvoteSection';


const ArticlePage=({match})=>{
    const name=match.params.name
    
    const article=articles.find(article=>(article.name===name
    ))
   
    const [articleInfo,setArticleInfo]=useState({upvotes:0,comments:[]})

    useEffect(()=>{
        const fetchData=async()=>{
            const result=await fetch(`/api/articles/${name}`)
            const body=await result.json()
           
            setArticleInfo(body)
        }
        fetchData()
      
    },[name])

    if(!article) return <NotFound/>
    const otherArticles=articles.filter(otherArticle=>otherArticle.name!==article.name)
    return (
        <React.Fragment>
        <h1>{article.title}</h1>
        <UpvoteSection upvotes={articleInfo.upvotes} articleName={name} setArticleInfo={setArticleInfo}/>
        {article.content.map((paragraph,key)=>(<p key={key}>{paragraph}</p>))}
        <CommentsList comments={articleInfo.comments}/>
        <h3>Related Articles:</h3>    
        <ArticlesList articles={otherArticles}/>
        </React.Fragment>
        
        )
    
    
}


export default ArticlePage