import React, { useState } from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [message, setMessage] = useState(title);
  
  return (
    <header className="container flex items-center mx-auto p-4 bg-amber-100 gap-5 sticky top-0">
      <h1>{message}</h1>
      <button
        className="bg-blue-200 border-1 border-blue-600 rounded-md p-2 cursor-pointer"
        onClick={() => setMessage('Diste click')}
      >Mensaje</button>
      <button
        className="bg-blue-200 border-1 border-blue-600 rounded-md p-2 cursor-pointer"
        onClick={() => setMessage(title)}
      >Titulo</button>
    </header>
  );
};

export default Header;