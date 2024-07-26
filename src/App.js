
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Fitness from "./components/Fitness";
import Lifestyle from "./components/Lifestyle";
import Tech from "./components/Tech";
import Wellnes from "./components/Wellnes";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/styles.scss";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return(

    <>
    <Router>
      <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/fitness" element={<Fitness/>}/>
          <Route path="/lifestyle" element={<Lifestyle/>}/>
          <Route path="/tech" element={<Tech/>}/>
          <Route path="/wellness" element={<Wellnes/>}/>
        </Routes>
      <Footer/>
    </Router>
    
    
    
    
    </>



  );

}

export default App;
