import React from 'react'

export default function UpvoteSection({upvotes,articleName,setArticleInfo}) {
    const upvoteArticle=async()=>{
        const result=await fetch(`/api/articles/${articleName}/upvote`,{
            method:'post'
        })
        const body=await result.json()
        setArticleInfo(body)
    }
    return (
        <div>  
            <button className="btn btn-dark btn-secondary" onClick={upvoteArticle}>Add Upvote</button>
               <span className="ml-2">This post has been upvoted {upvotes} times</span>
          
        </div>
    )
}
