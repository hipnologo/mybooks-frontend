//import './App.css';
import './css/landing.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBooksComponent from './components/ListBooksComponent';
import ManageBookComponent from './components/ManageBookComponent';
import ErrorPageComponent from "./components/ErrorPageComponent";
import ListLanguagesComponent from "./components/ListLanguagesComponent";
import ManageLanguagesComponent from "./components/ManageLanguagesComponent";
import HamburgerMenu from "./components/HamburgerMenu";
import HomeComponent from "./components/HomeComponent";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import ForgotPasswordComponent from "./components/ForgotPasswordComponent";
import ListAuthorsComponent from "./components/ListAuthorsComponent";
import ManageAuthorsComponent from "./components/ManageAuthorsComponent";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <HeaderComponent />
      <HamburgerMenu />
      <Routes>
          <Route index element={<HomeComponent />} />
          <Route path="/" element={<HomeComponent />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/register" element={<RegisterComponent />}></Route>
          <Route path="/forgot_password" element={<ForgotPasswordComponent />}></Route>
          <Route path="/books" element={<ListBooksComponent />}></Route>
          <Route path="/manage-books" element={<ManageBookComponent />}></Route>
          <Route path="/manage-books/:id" element={<ManageBookComponent />}></Route>
          <Route path="/languages" element={<ListLanguagesComponent />}></Route>
          <Route path="/manage-languages" element={<ManageLanguagesComponent />}></Route>
          <Route path="/manage-languages/:id" element={<ManageLanguagesComponent />}></Route>
          <Route path="/authors" element={<ListAuthorsComponent />}></Route>
          <Route path="/manage-authors" element={<ManageAuthorsComponent />}></Route>
          <Route path="/manage-authors/:id" element={<ManageAuthorsComponent />}></Route>
          <Route path = "*" element={<ErrorPageComponent/>}></Route>
      </Routes>
      <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
