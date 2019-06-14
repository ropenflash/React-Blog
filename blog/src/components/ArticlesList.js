import React from 'react'
import {Link} from 'react-router-dom'
const ArticlesList =({articles})=>{
    return(
   <React.Fragment>
   {articles.map((article,key)=>{
            return(
            
            <Link  key={key} className="article" to={`/article/${article.name}`}>
            <h1>{article.title}</h1>
            <p>{article.content[0].substring(0,150)}......</p>
            </Link>
            
            )
            
        }
        )
            
        }
   </React.Fragment>
    
        )
    
}

export default ArticlesList