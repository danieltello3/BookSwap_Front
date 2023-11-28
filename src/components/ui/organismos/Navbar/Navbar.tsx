import Button from "../../atomos/Button/Button";
import IconButton from "../../atomos/IconButton/IconButton";
import logo from "../../../../assets/imgs/Logo.png";
import { useState } from "react";
import {
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage
} from "../../../../utils/localStorage.utils";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const token = getTokenFromLocalStorage();

  const handleLogout = () => {
    removeTokenFromLocalStorage();
    setShowMenu(false);
    navigate("/");
  };
  const menu = [
    {
      texto: "Ver y editar perfil",
      accion: () => {
        navigate("/userConfig");
        setShowMenu(false);
      }
    },
    { texto: "Vender libro", accion: () => {} },
    { texto: "Ver lista de deseos", accion: () => {} },
    { texto: "Ver historial de compras", accion: () => {} },
    { texto: "Cerrar sesión", accion: handleLogout }
  ];
  return (
    <div className="flex items-center justify-between bg-[#9DBEBB]">
      <div className="flex p-4 gap-4 items-center">
        <img src={logo} alt="" width={48} />
        <p className="text-center font-semibold text-xl">BookSwap</p>
      </div>
      <div>
        <input
          type="search"
          className="w-80 p-2 rounded"
          placeholder="Buscar por nombre, autor o género"
        />
      </div>
      <div className="flex p-4 gap-4">
        <Button
          variant="primary"
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}>
          Mi cuenta
        </Button>
        {showMenu && !token ? (
          <div className="absolute top-16 flex flex-col bg-white rounded justify-center z-50">
            <div
              className="py-2 px-4 hover:bg-teal-700/20 cursor-pointer"
              onClick={() => {
                navigate("/login");
                setShowMenu(false);
              }}>
              Ingresar
            </div>
            <div
              className="py-2 px-4 hover:bg-teal-700/20 cursor-pointer"
              onClick={() => {
                navigate("/register");
                setShowMenu(false);
              }}>
              Registrarse
            </div>
          </div>
        ) : null}
        {showMenu && token ? (
          <div className="absolute top-16 flex flex-col bg-white rounded justify-center z-50">
            {menu.map((item) => (
              <div
                className="py-2 px-4 hover:bg-teal-700/20 cursor-pointer"
                key={item.texto}
                onClick={item.accion}>
                {item.texto}
              </div>
            ))}
          </div>
        ) : null}

        <IconButton variant="standard">
          <img src="/src/assets/icons/shopping_cart.svg" alt="" width={24} />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
