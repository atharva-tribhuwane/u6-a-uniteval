import logo from './logo.svg';
import './App.css';
import {Login} from "./components/Login";
import {Home} from "./components/Home";
import {Routes, Route} from "react-router-dom";
import {Prodindi} from "./components/Prodindi";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="prod/:id" element={<Prodindi />}></Route>
      </Routes>
    </div>
  );
}

export default App;
