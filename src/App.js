import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header'
import './App.css'
import Testimonial from './components/Testimonial';
import Blog from './components/Blog'
// import img from './images/loading.gif'
function App() {
  return (
    <>
      {/* <div className="loader_bg">
         <div className="loader"><img src={img} alt="#" /></div>
      </div> */}
    <Header/>
    <Blog/>
    <Testimonial/>
    <ContactUs/>
    <Footer/>

    </>
    );
}

export default App;
