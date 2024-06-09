import './App.css';
import AddStudent from './components/AddStudent';
import DeleteStudent from './components/DeleteStudent';
import Home from './components/Home';
import SearchStudent from './components/SearchStudent';

function App() {
  return (
    <div>
      <Home/>
      <AddStudent/>
      <SearchStudent/>
      <DeleteStudent/>
    </div>
  );
}

export default App;
