import Navbar from "./components/ui/organismos/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import UserConfig from "./pages/UserConfig/UserConfig";
import Chat from "./pages/Chat/Chat";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/userConfig" Component={UserConfig}/>
        <Route path="/chat" Component={Chat} />
        {/* Aqui ponen las rutas de las paginas */}
      </Routes>
    </Router>
  );
}

export default App;
