
import './App.css';
import Header from './components/Header';
import Conteudo from './componentes/Conteudo';
import Footer from './components/Footer';
import Content from './components/Content'



function App() {
  return (
   <>

    <Header logo="assets/jojo.png" titulo="Catálogo de Jojos"/>
    <Content />
    <Footer author="Iara Elise"/>
   </>
  );
}

export default App;
