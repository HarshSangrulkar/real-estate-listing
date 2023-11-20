import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/">
          <h1 className="font-bold text-lg sm:text-2xl flex items-center">
            <span className="text-yellow-300">🏡</span>
            <span className="ml-2">NexHOME</span>
          </h1>
        </Link>

        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline hover:text-yellow-300">🏠 Home</li>
          </Link>
          <Link to="/search">
            <li className="hidden sm:inline hover:text-yellow-300">
              🔍 Properties
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline hover:text-yellow-300">📖 About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <li className="hover:text-yellow-300">👤 Profile</li>
            ) : (
              <li className="hover:text-yellow-300">🔐 Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
