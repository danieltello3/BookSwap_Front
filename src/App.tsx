import Navbar from "./components/ui/organismos/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import BookDetails from "./pages/BookDetails/BookDetails";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import UserConfig from "./pages/UserConfig/UserConfig";
import Chat from "./pages/Chat/Chat";
import ShoppingHistory from "./pages/ShoppingHistory/ShoppingHistory";
import Blog from "./pages/Blog/Blog";
import BookPublicate from "./pages/BookPublicate/BookPublicate";
import ListaDeDeseos from "./pages/ListaDeDeseos/ListaDeDeseos";

import Publicate from "./pages/BookPublicate/Publicate";
import Checkout from "./pages/Checkout/Checkout";
import Tracking from "./pages/Tracking/Tracking";
import RespuestaPago from "./pages/RespuestaPago/RespuestaPago";
import BookCategory from "./pages/BookCategory/BookCategory";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/bookdetails/:id" Component={BookDetails} />
        <Route path="/listadedeseos" Component={ListaDeDeseos} />
        <Route path="/login" Component={Login} />
        <Route path="/categoria/:id" Component={BookCategory} />
        <Route path="/register" Component={Register} />
        <Route path="/userConfig" Component={UserConfig}/>
        <Route path="/chat" Component={Chat} />
        <Route path="/shoppingHistory" Component={ShoppingHistory} />
        <Route path="/blog" Component={Blog} />
        <Route path="/bookPublicate" Component={BookPublicate} />
        <Route path="/publicate" Component={Publicate} />
        <Route path="/checkout" Component={Checkout} />
        <Route path="/tracking" Component={Tracking} />
        <Route path="/confirmation" Component={RespuestaPago} />
        {/* Aqui ponen las rutas de las paginas */}
      </Routes>
    </Router>
  );
}

export default App;
