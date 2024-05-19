import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Aboutme from './components/Aboutme';
import Experience from './components/Experience';
import Proyects from './components/Proyects';

function App() {
  return (
    <div className="App">
     
       
       <Main></Main>
       <Aboutme></Aboutme>
       <Experience></Experience>
       <Proyects></Proyects>
      
       
      
    </div>
  );
}

export default App;

