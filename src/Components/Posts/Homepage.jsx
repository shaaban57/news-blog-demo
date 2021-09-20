import React from 'react'
import PostPreview from './Post/PostPreview'

const Homepage = ({news}) => {
    if(news.articles){
        return(
            <div className="container mt-3">
                <div className="row ">
                    <PostPreview width="col-md-6 col-sm-12" media={news.articles[1].media} title={news.articles[1].title}/>
                    <PostPreview width="col-md-3 col-sm-6" media={news.articles[2].media} title={news.articles[2].title}/>
                    <PostPreview width="col-md-3 col-sm-6" media={news.articles[3].media} title={news.articles[3].title}/>
                </div>
            </div>

            
        )
    }
    else return (
        <div>
            
        </div>
    )
}

export default Homepage
