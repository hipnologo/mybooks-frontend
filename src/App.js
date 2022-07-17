import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBooksComponent from './components/ListBooksComponent';
import AddBookComponent from './components/AddBookComponent';
import ErrorPageComponent from "./components/ErrorPageComponent";
import ListLanguagesComponent from "./components/ListLanguagesComponent";
import ManageLanguagesComponent from "./components/ManageLanguagesComponent";
import HamburgerMenu from "./components/HamburgerMenu";
import HomeComponent from "./components/HomeComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderComponent />
      <HamburgerMenu />
      <Routes>
          <Route index element={<HomeComponent />} />
          <Route path="/" element={<HomeComponent />}></Route>
          <Route path="/mybooks" element={<ListBooksComponent />}></Route>
          <Route path="/books" element={<ListBooksComponent />}></Route>
          <Route path="/add-book" element={<AddBookComponent />}></Route>
          <Route path="/edit-book/:id" element={<AddBookComponent />}></Route>
          <Route path="/languages" element={<ListLanguagesComponent />}></Route>
          <Route path="/manage-languages" element={<ManageLanguagesComponent />}></Route>
          <Route path="/manage-languages/:id" element={<ManageLanguagesComponent />}></Route>
          <Route path = "*" element={<ErrorPageComponent/>}></Route>
      </Routes>
      <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
