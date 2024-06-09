import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudent from './components/AddStudent';
import DeleteStudent from './components/DeleteStudent';
import Home from './components/Home';
import SearchStudent from './components/SearchStudent';
import ViewStudent from './components/ViewStudent';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<AddStudent/>}/>
      <Route path='/search' element={<SearchStudent/>}/>
      <Route path='/delete' element={<DeleteStudent/>}/>
      <Route path='/viewall' element={<ViewStudent/>}/>
      </Routes></BrowserRouter>
  );
}

export default App;
