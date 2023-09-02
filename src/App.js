import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Books from './components/Books';

function App() {
  return (
    <>
      <div className="mainContainer">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Books />} />
            <Route path="categories" element={<Categories />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
