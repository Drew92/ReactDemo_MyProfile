//import './App.css';
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import About from './components/aboutComponents'
import Projects from './components/projectComponents';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" class="w3-black">
      <Sidebar/>
      <div class="w3-padding-large" id="main">         
          <Header/>
          <About/>       
          <Projects/>
          <Contact/>
          <Footer/>          
      </div>
    </div>
  );
}

export default App;
