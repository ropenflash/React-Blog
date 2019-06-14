import React,{useState} from 'react'


export default function AddCommentForm({articleName,setArticleInfo}) {
    const [username,setUsername]=useState('')
    const [commentText,setCommentText]=useState('')

    const addComment=async()=>{
        const result=await fetch(`/api/articles/${articleName}/add-comment`,{
            method:'post',
            body:JSON.stringify({name:username,text:commentText}),
            headers:{
                'Content-Type':'application/json',
            }
        })
        const body=await result.json()
        setArticleInfo(body)
        setUsername('')
        setCommentText('')
    }

    return (
        <div className="add-comment ">
            <h3 className="mt-2">Add Comment</h3>
            <label> 
            Name:
            </label>
             <input className="ml-5" type="text" value={username} onChange={(event)=>{setUsername(event.target.value)}}/>          
            
            <br/>
            <label>
               
            Comment: </label>
             <textarea  className="ml-4" rows="4" cols="50" value={commentText} onChange={(event)=>{setCommentText(event.target.value)}}></textarea>
              
              <br/>
              <button className="btn btn-dark mb-2" onClick={addComment}>Add Comment</button>
        </div>
    )
}
