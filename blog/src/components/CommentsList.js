import React from 'react'

export default function CommentsList({comments}) {
    return (
        <>
        <h3>Comments:</h3>
        {comments.map((comment,key)=>(
            <div key={key} className="comment">
            <h4>{comment.name}</h4>
            <p>{comment.text}</p>
            </div>
        )
        )}
        </>
        )
}
