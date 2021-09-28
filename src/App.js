import React ,{useState,useEffect}from "react";
import "./App.css"
import { HashRouter as Router, Route ,Switch} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header";
import Latest from "./Components/Latest/Latest";
import Homepage from "./Components/Posts/Homepage";
import FinancePrev from "./Components/Posts/FinancePrev";
import NewsPrev from "./Components/Posts/NewsPrev"
import BusinessPrev from "./Components/Posts/BusinessPrev";
import EntertainmentPrev from "./Components/Posts/EntertainmentPrev";
import SciencePrev from "./Components/Posts/SciencePrev";
import Footer from "./Components/Footer";
import FinancePage from "./Components/FinancePage"
import BusinessPage from "./Components/BusinessPage"
import NewsPage from "./Components/NewsPage"
import EntertainmentPage from "./Components/EntertainmentPage"
import SciencePage from "./Components/SciencePage"
import ScrollToTop from "./Components/scrollToTop";
import Post from "./Components/Posts/Post/Post";
import ContentLoader from 'react-content-loader'
import ContactUs from "./Components/ContactUs";


function App() {
  const [news, setnews] = useState({});
const [loading, setloading] = useState(true)
  const fetchData= async ()=> {
    const respons =    await fetch("https://free-news.p.rapidapi.com/v1/search?q=Elon%20Musk&lang=en", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "free-news.p.rapidapi.com",
        "x-rapidapi-key": "e018646840msh8c3fc826caecc49p1fb0f8jsn55ed3aa151b9"
      }
    })
    const data= await respons.json();
    setnews(data);
    setloading(false);
    
    
  };
  const MyLoader = () => (<div className="p-1">
    <ContentLoader animate={false}  viewBox="0 0 380 280">
       
      <rect x="20" y="20" rx="15" ry="15" width="340" height="140" />
      <rect x="20" y="180" rx="14" ry="14" width="340" height="40" />
      <rect x="20" y="240" rx="13" ry="13" width="340" height="40" />
    </ContentLoader>
    </div>
  )
  

  useEffect(() => {
    fetchData();
  },[])

  return (
    <Router>
      <ScrollToTop />
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path='/'>
              <div className="mt-5"></div>
              <Header />
              {loading?
              <div className="row">
                <div className="col-sm-8 col-md-6 p-2"><MyLoader /></div>
                <div className="col-sm-4 col-md-3 p-2"><MyLoader /></div>
                <div className="col-sm-4 col-md-3 p-2"><MyLoader /></div>
                <div className="col-sm-8 col-md-3 p-2"><MyLoader /></div>
                <div className="col-sm-8 col-md-3 p-2"><MyLoader /></div>
                <div className="col-sm-4 col-md-6 p-2"><MyLoader /></div>
              </div>
              :<div><Latest  news={news}/>
              <Homepage  news={news}/>
              <FinancePrev  news={news}/>
              <NewsPrev  news={news}/>
              <BusinessPrev  news={news}/>
              <EntertainmentPrev  news={news}/>
              <SciencePrev  news={news}/>
              <Latest  news={news}/>
              </div>
              }
              
          </Route>
          <Route exact path='/news'>
            <NewsPage  news={news}/>
          </Route>
          <Route exact path="/finance">
            <FinancePage  news={news}/>
          </Route>
          <Route exact path="/business">
            <BusinessPage  news={news}/>
          </Route>
          <Route exact path="/entertainment">
            <EntertainmentPage  news={news}/>
          </Route>
          <Route exact path="/science">
            <SciencePage  news={news}/>
          </Route>
          <Route exact path="/demo">
            <Post id="demo" news={news} />
          </Route>
          {news.articles?
          news.articles.map((article)=>{return(<Route exact path={`/${article._id}`}>
            <Post id={article._id} news={news} />
          </Route>)})
          :<></>  
        }
          <Route exact path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
