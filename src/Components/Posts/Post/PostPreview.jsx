import React from 'react'

const PostPreview = ({width,media,title}) => {
    return (
        
            <div className={`card  p-1 ${width}`} >
                <img src={media} className="card-img-top" alt="..."/>
                <div className="card-body d-flex flex-column justify-content-between">
                    <p className="card-text">{title}</p>
                    <button className="btn btn-myprimary">Read more</button>
                </div>
            </div>
        
    )
}

export default PostPreview
