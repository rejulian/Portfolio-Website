import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    AOS.init({
      duration: 1200
    })
  },[])

  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
