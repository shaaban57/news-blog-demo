import React from 'react'
import PostPreview from './PostPreview';

const Post = ({id,news,handlePrevClick}) => {
    if(news.articles){
        const Demo= ({id,news})=>{return(
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
                                
                        
                        )};
        const View= ({id,news})=>{
            return(news.articles.map((article)=>{
                return( article._id===id?
                    
                            <div className="col-sm-12 col-md-9">
                                <div className="card">
                                    <img src={article.media} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h4 className="card-text">{article.title}</h4>
                                        </div>
                                        <em>written by: {article.author!==null?article.author:"Unknown"}</em>
                                        <p className="small">{article.published_date}</p>
                                        <p className="">{article.summary}</p>
                                        <div className="text-end">
                                        <button type="button" class="btn btn-light">
                                        <a href={article.link} target="_blank" rel="noreferrer" className="text-decoration-none" >source post</a>
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        
                    :<></>
                    
                    )
        }))}
        const Sugg =({id,news})=>{
            return(
                <div className="col-sm-12 col-md-3 p-4">
                    <div className="row  ">
                        <div className="col-sm-6 col-md-12 p-2 card">
                            <PostPreview handlePrevClick={handlePrevClick} width="col-12 " media={news.articles[7].media} title={news.articles[7].title} id={news.articles[7]._id}/>
                        </div>
                        <div className="col-sm-6 col-md-12 p-2 card">
                            <PostPreview handlePrevClick={handlePrevClick} width="col-12 " media={news.articles[8].media} title={news.articles[8].title} id={news.articles[8]._id}/>
                        </div>
                        <div className="col-sm-6 col-md-12 p-2 card">
                            <PostPreview handlePrevClick={handlePrevClick} width="col-12 " media={news.articles[9].media} title={news.articles[9].title} id={news.articles[9]._id}/>
                        </div>
                        <div className="col-sm-6 col-md-12 p-2 card">
                            <PostPreview handlePrevClick={handlePrevClick} width="col-12 " media={news.articles[10].media} title={news.articles[10].title} id={news.articles[10]._id}/>
                        </div>
                    </div>
                </div>
        )}
        return(
            <div className="container">
                
                <div className="row">
                        {id==="demo"?
                        <Demo id={id} news={news}/>
                        :<View id={id} news={news}/>}
                        <Sugg id={id} news={news}/>
                </div>  
            </div>
                )
    }
    else{return(<></>)}
}

export default Post
