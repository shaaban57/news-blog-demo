import React from 'react'
import PostPreview from './Post/PostPreview'
const NewsPrev =({news}) => {
    if(news.articles){
        let newArticles=[];
        let i=0;
        while(i<news.articles.length){
            if(newArticles.length===4)break;
            if(news.articles[i].topic==="news"){
                newArticles.push(news.articles[i])
            }
            i++;
        }
        
        return(
            <div>
                <div className=" mt-5">
                    <div className="latest col-sm-12 ps-2 d-flex align-items-center">News</div>
                </div>
                <div className="container mt-3">
                
                    <div className="row ">
                        {newArticles.length>=1?<PostPreview width="col-md-3 col-sm-3"  id={newArticles[0]._id} media={newArticles[0].media} title={newArticles[0].title}/>:<PostPreview  id="demo" width="col-md-3 col-sm-3" media={"https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg"} title={"this is demo news in case the api didn't feel good today"}/>}
                        {newArticles.length>=2?<PostPreview width="col-md-3 col-sm-3"  id={newArticles[1]._id} media={newArticles[1].media} title={newArticles[1].title}/>:<PostPreview  id="demo" width="col-md-3 col-sm-3" media={"https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg"} title={"this is demo news in case the api didn't feel good today"}/>}
                        {newArticles.length>=3?<PostPreview width="col-md-3 col-sm-3"  id={newArticles[2]._id} media={newArticles[2].media} title={newArticles[2].title}/>:<PostPreview  id="demo" width="col-md-3 col-sm-3" media={"https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg"} title={"this is demo news in case the api didn't feel good today"}/>}
                        {newArticles.length===4?<PostPreview width="col-md-3 col-sm-3"  id={newArticles[3]._id} media={newArticles[3].media} title={newArticles[3].title}/>:<PostPreview  id="demo" width="col-md-3 col-sm-3" media={"https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg"} title={"this is demo news in case the api didn't feel good today"}/>}
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

export default NewsPrev
