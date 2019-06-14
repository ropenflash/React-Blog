import React from 'react'
import {articles} from './article-content'
import ArticlesList from '../components/ArticlesList'
import NotFound from './NotFound'
const ArticlePage=({match})=>{
    
    const name=match.params.name
    const article=articles.find(article=>article.name===name)
    if(!article) return <NotFound/>
    const otherArticles=articles.filter(otherArticle=>otherArticle.name!==article.name)
    return (
        <React.Fragment>
        
        
        <h1>{article.title}</h1>
        {article.content.map((paragraph,key)=>(<p key={key}>{paragraph}</p>))}
        <h3>Related Articles:</h3>    
        <ArticlesList articles={otherArticles}/>
        </React.Fragment>
        
        )
    
    
}


export default ArticlePage