interface SearchProps {
    placeholder: string;
  }
  
  const Search: React.FC<SearchProps> = ({ placeholder }) => {
    return (
      <div className="flex items-center border-2 border-gray-200 rounded-2xl w-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
        <input
          type="text"
          placeholder={placeholder}
          className="py-2 px-2 outline-none w-full"
        />
      </div>
    );
  };
  
  export default Search;
  