import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Upload />} path="/upload" />
        <Route element={<Home />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
