import Navbar from "./components/ui/organismos/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import BookDetails from "./pages/BookDetails/BookDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/*<Route path="/" Component={Home} />*/}
        <Route path="/" Component={BookDetails} />
        {/* Aqui ponen las rutas de las paginas */}
      </Routes>
    </Router>
  );
}

export default App;
