import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/sections/projects/Projects';
import { Footer } from './layout/foofer/Footer';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Particle } from './components/particle/Particle';

function App() {
  return (
    <div className="App">
      <Particle/>
      <Header />
      <Main />
      <Projects />
      <Skills />
      <Contacts/>
      <Footer />
      
    </div>
  );
}

export default App;
