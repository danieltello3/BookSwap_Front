import { FaComment, FaStore, FaCommentDollar ,FaRegFileAlt,FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogNavbar = () => {
  return (
    <div className="w-0 md:w-1/4 lg:w-1/5 h-0 md:h-screen overflow-y-hidden bg-white shadow-lg">
      <div className="p-5 bg-white sticky top-0">
        <img
          className="border border-indigo-100 shadow-lg rounded"
          src="http://lilithaengineering.co.za/wp-content/uploads/2017/08/person-placeholder.jpg"
          alt="User Avatar"
        />
        <div className="pt-2 border-t mt-5 w-full text-center text-xl text-gray-600">
          Some Person
        </div>
        <div className="pt-2 w-full text-center text-sm text-gray-500">
        Creación de una aplicación de mensajería usando el patrón de arquitectura Peer to Peer
        </div>
      </div>
      <div className="w-full h-screen antialiased flex flex-col hover:cursor-pointer">
        <Link
          to="/chat"
          className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold"
        >
          <FaComment className="text-gray-600 text-2xl pr-1 pt-1 float-right" /> Chat
        </Link>
        <Link
          to="/"
          className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold"
        >
          <FaStore className="text-gray-600 text-2xl pr-1 pt-1 float-right" /> Tienda
        </Link>
        <Link
          to="/ShoppingHistory"
          className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold"
        >
          <FaRegFileAlt className="text-gray-600 text-2xl pr-1 pt-1 float-right" /> Historial
        </Link>
        <Link
          to="/BookPublicate"
          className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold"
        >
          <FaCommentDollar className="text-gray-600 text-2xl pr-1 pt-1 float-right" /> Vender
        </Link>
        <Link
          to="/Contacts"
          className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold"
        >
          <FaUserFriends className="text-gray-600 text-2xl pr-1 pt-1 float-right" /> Contactos
        </Link>
      </div>
    </div>
  );
};

export default BlogNavbar;
