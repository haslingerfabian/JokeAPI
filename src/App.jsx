import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Programmer from './components/Programmer';
import Pun from "./components/Pun";
import Layout from "./components/Layout";
import Home from "./components/Home";
import NoPage from "./components/NoPage";
import Special from "./components/Special";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="Programmer" element={<Programmer />} />
              <Route path="Pun" element={<Pun />} />
              <Route path="Special" element={<Special />} />
              <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
