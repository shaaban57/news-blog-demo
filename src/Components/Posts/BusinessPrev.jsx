import React from 'react'
import PostPreview from './Post/PostPreview'
const BusinessPrev =({news}) => {
    if(news.articles){
        let bussArticles=[];
        let i=0;
        while(i<news.articles.length){
            if(bussArticles.length===5)break;
            if(news.articles[i].topic==="business"){
                bussArticles.push(news.articles[i])
            }
            i++;
        }
        
        return(
            <div>
                <div className=" mt-5">
                    <div className="latest col-sm-12 ps-2 d-flex align-items-center">BUSINESS</div>
                </div>
                <div className="container mt-3">
                
                    <div className="row ">
                        <div className="col-12 col-sm-6">
                            {bussArticles.length>=1?<PostPreview width="col-md-12 col-sm-12"  id={bussArticles[0]._id} media={bussArticles[0].media} title={bussArticles[0].title}/>:<PostPreview  id="demo" width="col-md-12 col-sm-12" media={"https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg"} title={"this is demo news in case the api didn't feel good today"}/>}
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="row">
                                {bussArticles.length>=2?<PostPreview width="col-md-5 mb-2 me-2 col-sm-12" id={bussArticles[1]._id} media={bussArticles[1].media} title={bussArticles[1].title}/>:<PostPreview  id="demo" width="col-md-5 mb-2 me-2 col-sm-12" media={"https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg"} title={"this is demo news in case the api didn't feel good today"}/>}
                                {bussArticles.length===3?<PostPreview width="col-md-6 col-sm-12"  id={bussArticles[2]._id} media={bussArticles[2].media} title={bussArticles[2].title}/>:<PostPreview  id="demo" width="col-md-6 col-sm-12" media={"https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg"} title={"this is demo news in case the api didn't feel good today"}/>}
                            </div>
                            
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

export default BusinessPrev
