import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import AnsOfquestion from "./Components/AnsOfQustion/AnsOfquestion";


function App() {
  return (
    <div>

   <Navbar/>
   <Main/>
   <AnsOfquestion/>
   <Footer/>

    </div>
  );
}

export default App;