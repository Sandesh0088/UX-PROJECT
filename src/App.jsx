import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Features from "./components/Features";
import Popup from "./components/Popup";
import Footer from "./components/Footer";

function App(){
    return (
 
        <div className="min-h-screen bg-sky-50 text-neutral-900">
            <Navbar/>
                <Home/>
               
                <Aboutus/>
                <Features/>
                <Footer/>
            </div>
    
    );
}
export default App;