import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import CadastroVideo from './pages/cadastro/Video';
import Home from './pages/Home';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () =>  {
  return <div>Pagina 404</div>
};

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={ Home } exact/>
    <Route path="/cadastro/video" component={ CadastroVideo } exact/>
    <Route path="/cadastro/categoria" component={ CadastroCategoria } exact/>
    <Route component={Pagina404} />
  </Switch>
   
  </BrowserRouter>,
  document.getElementById('root')
);

