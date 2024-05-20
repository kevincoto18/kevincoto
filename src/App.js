import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Aboutme from './components/Aboutme';
import Experience from './components/Experience';
import Proyects from './components/Proyects';
import Tecnologias from './components/Tecnologias';

function App() {
  return (
    <div className="App">
     
       
       <Main></Main>
       <Aboutme></Aboutme>
       <Tecnologias></Tecnologias>
       <Experience></Experience>
       <Proyects></Proyects>
       
      
       
      
    </div>
  );
}

export default App;

