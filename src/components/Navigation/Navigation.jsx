import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [searchQuery, setSearchQuery] = useState(""); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
    console.log("Search query:", searchQuery);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <h1>Event-System</h1> 
        </div>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <ul className={`nav-links ${isOpen ? "nav-open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link> 
          </li>
          <li>
            <Link to="/find-events" onClick={() => setIsOpen(false)}>Find Events</Link> 
          </li>
        </ul>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
