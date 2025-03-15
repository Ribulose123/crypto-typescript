import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const NavItems:React.FC = () => {
    return (
      <div>
        <ul className="flex flex-col items-start px-7 gap-4 sm:flex-row md:gap-6 relative z-20">
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/coinslist">Coins</Link>
          </li>
          <li>
            <Link to="/wallet">Connect Wallet</Link>
          </li>
          <li>
            <Link to="/exchange">Exchange</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    );
  };
  
  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <header className="text-white  z-50 bg-black/90">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-5 px-7 sm:px-10">
            <Link to="/">
              <img src="/img/logo.png" alt="logo" className="w-20 h-20" />
            </Link>
            <button
              className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
              aria-label="Toggle menu"
              onClick={handleToggle}
            >
              <img
                src={isOpen ? "/img/close.svg" : "/img/menu.svg"}
                alt="menu"
                className={`w-10 h-10 transform transition-transform duration-200 ${isOpen ? "rotate-90 scale-110" : "rotate-0"}`}
              />
            </button>
            <nav className="sm:flex hidden">
              <NavItems />
            </nav>
          </div>
        </div>
        <div
          className={`absolute left-0 right-0 overflow-hidden z-20 sm:hidden block ${isOpen ? "max-h-screen" : "h-0"} bg-black/90 backdrop-blur-sm duration-300 transition-all ease-in-out mx-auto`}
        >
          <NavItems />
        </div>
      </header>
    );
  };

export default Navbar