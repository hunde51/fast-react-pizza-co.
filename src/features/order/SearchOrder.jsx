import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      className="rounded-full bg-yellow-100 px-4 py-2 placeholder:text-stone-400 text-sm w-28 sm:w-64 sm:focus:w-72 focus:ring-opacity-50 transition-all duration-250 focus:outline-none focus:ring focus:ring-yellow-500"/>
    </form>
  ); 
}

export default SearchOrder;
  