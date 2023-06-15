import Menu from './components/menu/Menu';
import './App.css';
import Cardapio from './pages/cardapio/Cardapio';
import Inicio from './pages/inicio/Inicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Sobre from './pages/sobre/Sobre';
import Footer from './components/footer/Footer';
import NotFound from './pages/notFound/NotFound';
import Prato from './pages/prato/Prato';


function App() {

  return (
    <main>
      <Router>
        <Menu/>
        <Routes>
          <Route path='/' element={<Header/>}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio/>}/>
            <Route path='sobre' element={<Sobre/>}/> 
          </Route>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/prato/:id' element={<Prato/>}/>
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
}

export default App;
