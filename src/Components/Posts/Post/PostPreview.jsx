import React from 'react'
import { Link } from 'react-router-dom'

const PostPreview = ({width,media,title,id,handlePrevClick}) => {
    return (
        
            <div className={`card  p-1 ${width}`} onClick={()=>{handlePrevClick(id)}}>
                <Link className="text-decoration-none" to="/post">
                <img src={media} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="card-title">
                        <p className="card-text ">{title}</p>
                    </div>
                </div>
                </Link>
            </div>
        
    )
}

export default PostPreview
