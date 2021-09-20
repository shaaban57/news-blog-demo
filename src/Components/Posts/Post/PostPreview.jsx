import React from 'react'

const PostPreview = ({width,media,title}) => {
    return (
        
            <div className={`card  p-1 ${width}`} >
                <img src={media} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="card-title">
                        <p className="card-text">{title}</p>
                    </div>
                </div>
            </div>
        
    )
}

export default PostPreview
