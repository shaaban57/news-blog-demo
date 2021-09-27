import React from 'react'
import PostPreview from './Post/PostPreview'

const Homepage = ({news}) => {
    if(news.articles){
        return(
            <div className="container mt-3">
                <div className="row ">
                    <div className="col-12 col-sm-6">
                        <PostPreview width="col-md-12 col-sm-12"  id={news.articles[1]._id} media={news.articles[1].media} title={news.articles[1].title}/>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="row ">
                        <PostPreview width="col-md-5 col-sm-12 mb-2 me-2"  id={news.articles[2]._id} media={news.articles[2].media} title={news.articles[2].title}/>
                        <PostPreview width="col-md-6 col-sm-12"  id={news.articles[3]._id} media={news.articles[3].media} title={news.articles[3].title}/>
                        </div>
                    </div>
                    
                    
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
