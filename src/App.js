//import './App.css';
import Sidebar from './components/SidebarComponent'
import Header from './components/HeaderComponent'
import About from './components/aboutComponents/AboutComponent'
import Projects from './components/ProjectsComponent';
import Contact from './components/ContactComponent';
import Footer from './components/FooterComponent';

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
