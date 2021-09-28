import React from 'react'
import PostPreview from './PostPreview';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Post = ({id,news}) => {
    if(news.articles){
        const Demo= ({id,news})=>{return(
                                <div className="col-sm-12 col-md-9">
                                    <div className="card">
                                        <LazyLoadImage effect="blur" src="https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg" className="card-img-top" alt="..."/>
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
                                    <LazyLoadImage effect="blur" src={article.media} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h4 className="card-text">{article.title}</h4>
                                        </div>
                                        <em>written by: {article.author!==null?article.author:"Unknown"}</em>
                                        <p className="small">{article.published_date}</p>
                                        <p className="">{article.summary}</p>
                                        <div className="text-end">
                                        <button type="button" className="btn btn-light">
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
            let firstSugg =news.articles[Math.floor(Math.random()*news.articles.length)];
            let secondSugg,thirdSugg,fourthSugg;
                
                if(news.articles.indexOf(firstSugg)<10)
                    {
                    if(firstSugg._id===id){firstSugg=news.articles[news.articles.indexOf(firstSugg)+1];}
                     secondSugg =news.articles[news.articles.indexOf(firstSugg)+1]
                     if(secondSugg._id===id){secondSugg=news.articles[news.articles.indexOf(secondSugg)+1];}
                     thirdSugg =news.articles[news.articles.indexOf(secondSugg)+1]
                     if(thirdSugg._id===id){thirdSugg=news.articles[news.articles.indexOf(thirdSugg)+1];}
                     fourthSugg =news.articles[news.articles.indexOf(thirdSugg)+1]
                     if(fourthSugg._id===id){fourthSugg=news.articles[news.articles.indexOf(fourthSugg)+1];}
                    }  
                    else{
                    if(firstSugg._id===id){firstSugg=news.articles[news.articles.indexOf(firstSugg)-1];}
                    secondSugg =news.articles[news.articles.indexOf(firstSugg)-1]
                    if(secondSugg._id===id){secondSugg=news.articles[news.articles.indexOf(secondSugg)-1];}
                    thirdSugg =news.articles[news.articles.indexOf(secondSugg)-1]
                    if(thirdSugg._id===id){thirdSugg=news.articles[news.articles.indexOf(thirdSugg)-1];}
                    fourthSugg =news.articles[news.articles.indexOf(thirdSugg)-1]
                    if(fourthSugg._id===id){fourthSugg=news.articles[news.articles.indexOf(fourthSugg)-1];}
                    }          
                
            
            return(
                <div className="col-sm-12 col-md-3 p-4">
                    <div className="row  ">
                        <div className="col-sm-6 col-md-12 p-2 card">
                            <PostPreview  width="col-12 " media={firstSugg.media} title={firstSugg.title} id={firstSugg._id}/>
                        </div>
                        <div className="col-sm-6 col-md-12 p-2 card">
                            <PostPreview  width="col-12 " media={secondSugg.media} title={secondSugg.title} id={secondSugg._id}/>
                        </div>
                        <div className="col-sm-6 col-md-12 p-2 card">
                            <PostPreview  width="col-12 " media={thirdSugg.media} title={thirdSugg.title} id={thirdSugg._id}/>
                        </div>
                        <div className="col-sm-6 col-md-12 p-2 card">
                            <PostPreview  width="col-12 " media={fourthSugg.media} title={fourthSugg.title} id={fourthSugg._id}/>
                        </div>
                    </div>
                </div>
        )}
        return(
            <div className="container mt-5">
                
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
