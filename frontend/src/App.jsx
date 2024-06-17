import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import './App.css';
import  Home  from './Home/Home';
import {BrowserRouter , Routes , Route} from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
       <BrowserRouter>
       <Header />
       <Routes>
         <Route path='/' element={<ProductList/>}/>
         <Route path='/users' element={<Home/>}/>
       </Routes>
       <Footer />
       </BrowserRouter>  
    </div>
  );
};

export default App;
