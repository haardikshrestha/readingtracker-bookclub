import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-amber-100 w-64 p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-amber-500">Books</h2>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <a href="/" className="flex items-center text-gray-600 hover:text-amber-500">
              <img src="/path/to/home-icon.png" alt="Home" className="w-6 h-6 mr-4" />
              <span>Home</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="/library" className="flex items-center text-gray-600 hover:text-amber-500">
              <img src="/path/to/library-icon.png" alt="Library" className="w-6 h-6 mr-4" />
              <span>My library</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="/shop" className="flex items-center text-gray-600 hover:text-amber-500">
              <img src="/path/to/shop-icon.png" alt="Shop" className="w-6 h-6 mr-4" />
              <span>Tracker</span>
            </a>
          </li>
          <li>
            <a href="/news" className="flex items-center text-gray-600 hover:text-amber-500">
              <img src="/path/to/news-icon.png" alt="News" className="w-6 h-6 mr-4" />
              <span>Communities</span>
            </a>
          </li>
          <li>
            <a href="/news" className="flex items-center text-gray-600 hover:text-amber-500">
              <img src="/path/to/news-icon.png" alt="News" className="w-6 h-6 mr-4" />
              <span>Communities</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;