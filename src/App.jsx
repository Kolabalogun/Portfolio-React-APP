
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeaderSection from './components/HeaderSection';

import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
     <HeaderSection/>
     <About />
     <Portfolio /> 
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
