import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from '../../scrollToTop'

const PostPreview = ({width,media,title,id,handlePrevClick}) => {
    return (
        
            <div className={`card  p-1 ${width}`} onClick={()=>{handlePrevClick(id)}}>
                <ScrollToTop />
                <Link className="text-decoration-none" to={`/${id}`}>
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
