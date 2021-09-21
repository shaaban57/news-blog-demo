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



function App() {
  
  const [news, setnews] = useState({});
  const [articleId, setarticleId] = useState("");

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
    
    console.log(data);

    
  
  
  };
  const handlePrevClick=(id)=>{
    setarticleId(id);
    
  }
  

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
              <Header />
              <Latest news={news}/>
              <Homepage handlePrevClick={handlePrevClick} news={news}/>
              <FinancePrev handlePrevClick={handlePrevClick} news={news}/>
              <NewsPrev handlePrevClick={handlePrevClick} news={news}/>
              <BusinessPrev handlePrevClick={handlePrevClick} news={news}/>
              <EntertainmentPrev handlePrevClick={handlePrevClick} news={news}/>
              <SciencePrev handlePrevClick={handlePrevClick} news={news}/>
              <Latest news={news}/>
              
          </Route>
          <Route exact path='/news'>
            <NewsPage news={news}/>
          </Route>
          <Route exact path="/finance">
            <FinancePage news={news}/>
          </Route>
          <Route exact path="/business">
            <BusinessPage news={news}/>
          </Route>
          <Route exact path="/entertainment">
            <EntertainmentPage news={news}/>
          </Route>
          <Route exact path="/science">
            <SciencePage news={news}/>
          </Route>
          <Route exact path="/post">
            <Post id={articleId} news={news}/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
