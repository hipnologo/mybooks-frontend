import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBooksComponent from './components/ListBooksComponent';
import AddBookComponent from './components/AddBookComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route index element={<ListBooksComponent />} />
        <Route path="/" element={<ListBooksComponent />}></Route> 
        <Route path="/mybooks" element={<ListBooksComponent />}></Route>
        <Route path="/books" element={<ListBooksComponent />}></Route>
        <Route path="/add-book" element={<AddBookComponent />}></Route>
        <Route path="/edit-book/:id" element={<AddBookComponent />}></Route>
      </Routes>
      <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
