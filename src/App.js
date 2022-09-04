import './App.css';
import "./assets/js/script.js";
import Header from './components/Header/Header';
import Livros from './components/Livros/Livros';
import Bienal from './components/Bienal/Bienal';
import Sobremim from './components/Sobremim/Sobremim';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Livros />
      <Bienal />
      <Sobremim />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
