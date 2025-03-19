import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';

const NavItems: React.FC = () => {
  return (
    <ul className="flex flex-col items-start px-7 gap-4 sm:flex-row md:gap-6 relative z-20">
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/coinslist">Coins</Link></li>
      <li><Link to="/wallet">Connect Wallet</Link></li>
      <li><Link to="/exchange">Exchange</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleModal = () => setShowModal((prev) => !prev);

  // Close menu when clicking outside
 /*  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as HTMLElement).closest('.nav-container')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]); */

  return (
    <header className="text-white z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 px-7 sm:px-10">
          <Link to="/">
            <img src="/img/logo.png" alt="logo" className="w-20 h-20" />
          </Link>
          <div className="flex items-center gap-7">
            <FaBell className="cursor-pointer" onClick={toggleModal} />
            <button
              className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex cursor-pointer"
              onClick={toggleMenu}
            >
              <img
                src={isOpen ? "/img/close.svg" : "/img/menu.svg"}
                alt="menu"
                className={`w-10 h-10 transform transition-transform duration-200 ${isOpen ? "rotate-90 scale-110" : "rotate-0"}`}
              />
            </button>
          </div>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`nav-container absolute left-0 right-0 overflow-hidden z-20 sm:hidden block ${
          isOpen ? "max-h-screen" : "h-0"
        } bg-black/90 backdrop-blur-sm duration-300 transition-all ease-in-out mx-auto`}
      >
        <NavItems />
      </div>

      {/* Notification Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black">
            <p>No alerts yet</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
