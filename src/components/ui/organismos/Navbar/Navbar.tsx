import Button from "../../atomos/Button/Button";
import IconButton from "../../atomos/IconButton/IconButton";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-[#9DBEBB]">
      <div className="flex p-4 gap-4 items-center">
        <img src="/src/assets/icons/logo.svg" alt="" width={65} />
        <p className="text-center font-semibold text-xl">BookSwap</p>
      </div>
      <div>
        <input
          type="search"
          className="w-80 p-2 rounded"
          placeholder="Buscar por nombre, autor o genero"
        />
      </div>
      <div className="flex p-4 gap-4">
        <Button variant="primary">Mi cuenta</Button>
        <IconButton variant="standard">
          <img src="/src/assets/icons/shopping_cart.svg" alt="" width={24} />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
