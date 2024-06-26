import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Table />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
