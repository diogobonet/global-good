import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/img/user_icon.png';

const UserDropdown = ({ userName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Função de logout, pode limpar o token do localStorage e redirecionar
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redireciona para a página de login
  };

  return (
    <div className="user-dropdown">
      <div className="link-icon" onClick={toggleDropdown}>
          <img src={icon} alt="Register Icon" className="icon" />
          Olá, {userName}
        </div>

      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <Link to="/profile">Editar Perfil</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Sair</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserDropdown;
