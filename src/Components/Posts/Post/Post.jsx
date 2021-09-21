import React from 'react'

const Post = ({id,news}) => {
    if(news.articles){
        return(
            id==="demo"?
                <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-9">
                                    <div className="card">
                                        <img src="https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg" className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <div className="card-title">
                                                <h5 className="card-text">"this is demo news in case the api didn't feel good today"</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-3"></div>
                            </div>
                        </div>
            
            
            :news.articles.map((article)=>{
                return( article._id===id?
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-9">
                                    <div className="card">
                                        <img src={article.media} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <div className="card-title">
                                                <h5 className="card-text">{article.title}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-3"></div>
                            </div>
                        </div>
                        :<div></div>)
            }))
    }
    else{return(<div></div>)}
}

export default Post
