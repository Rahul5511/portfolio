import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Sidebar from "./component/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginUsedComponent from "./TestComponents/LoginUsedComponent";
import FirebaseAnalytics from "./Firebase/FirebaseAnalytics";
import WelcomeMessage from "./TestComponents/WelcomeMessage";
import AboutPage from "./pages/AboutPage";
import ReduxComponent from "./TestComponents/ReduxComponent";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import LottieControl from "./pages/LottieControl";

function App() {

  return (
    <>
    <Sidebar/>
    <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/about" element={<AboutPage/>}/>
     <Route path="/resume" element={<Resume/>}/>
     <Route path="/contact" element={<Contact/>}/>
  </Routes>
    </>
   
  );
}

export default App;






<div className="App">
<LoginUsedComponent/>
</div>

