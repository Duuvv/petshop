import React, { useState } from 'react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import Logo from '../public/img/header/logo.svg';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para manejar la visibilidad del sidebar
  const [isOverlayOpen, setIsOverlayOpen] = useState(false); // Estado para manejar el overlay
  const [activeModal, setActiveModal] = useState(null); // Estado para manejar el modal activo
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false); // Estado para el modal de Sign Up
  const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] = useState(false); // Estado para el modal de Crear cuenta
  const [activePopup, setActivePopup] = useState(null); // Estado para manejar el popup

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Alternar entre abrir y cerrar el sidebar
    setIsOverlayOpen(!isOverlayOpen); // Alternar entre mostrar y ocultar el overlay
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsOverlayOpen(false); // Cerrar el sidebar y el overlay cuando se hace clic en "X"
  };

  const openModal = (index) => {
    setActiveModal(index); // Establecer el modal activo según el índice
  };

  const closeModal = () => {
    setActiveModal(null); // Cerrar el modal
  };

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true); // Abrir el modal de Sign Up
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false); // Cerrar el modal de Sign Up
  };

  const openCreateAccountModal = () => {
    closeSignUpModal(); // Cerrar el modal de Sign Up
    setIsCreateAccountModalOpen(true); // Abrir el modal de Crear cuenta
  };

  const closeCreateAccountModal = () => {
    setIsCreateAccountModalOpen(false); // Cerrar el modal de Crear cuenta
  };

  const openPopup = (index) => {
    setActivePopup(index); // Establecer el popup activo
  };

  const closePopup = () => {
    setActivePopup(null); // Cerrar el popup
  };

  return (
    <header className='py-6 lg:absolute lg:w-full lg:left-0'>
      <div className='container mx-auto flex flex-col gap-y-4 lg:flex-row h-full justify-between items-center relative'>
        {/* Logo */}
        <a href='#'>
          <Image src={Logo} alt="logo" />
        </a>
        {/* Menú */}
        <nav className='text-xl flex gap-x-4 lg:gap-x-12'>
          <a href='#'>Services</a>
          <a href='#'>About</a>
          <a href='#'>Blog</a>
          <a href='#'>Contact</a>
        </nav>

        {/* Botón y Carrito */}
        <div className='flex items-center gap-x-4'>
          {/* Botón de Sign Up */}
          <button
            className='btn btn-primary lg:btn-outline'
            onClick={openSignUpModal}
          >
            Sign Up
          </button>
          {/* Ícono de Carrito */}
          <div className='relative'>
            <button className='text-white text-2xl' onClick={toggleSidebar}>
              <FaShoppingCart />
            </button>
            {/* Número de elementos en el carrito */}
            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
              3
            </span>
          </div>
        </div>
      </div>

      {/* Overlay (fondo oscuro cuando el sidebar está abierto) */}
      {isOverlayOpen && (
        <div
          className='fixed inset-0 bg-black opacity-30 z-10'
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar desplegable */}
      <div
        className={`fixed top-0 right-0 bg-white shadow-lg w-64 h-full transition-transform transform border-l-4 border-blue-800 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } z-20`}
      >
        <div className='p-6'>
          <h3 className='text-2xl font-bold mb-4'>Cart</h3>
          <ul>
            <li
              className='mb-3 px-4 py-2 border-2 border-blue-800 rounded-full text-2xl font-bold text-gray-700 hover:bg-blue-800 hover:text-white transition-all duration-300 transform hover:scale-105'
              onClick={() => openPopup(1)} // Abrir el popup con Lorem Ipsum
            >
              <a href='#'>My Cart</a>
            </li>
            <li
              className='mb-3 px-4 py-2 border-2 border-blue-800 rounded-full text-2xl font-bold text-gray-700 hover:bg-blue-800 hover:text-white transition-all duration-300 transform hover:scale-105'
              onClick={() => openPopup(2)} // Abrir el popup con Lorem Ipsum
            >
              <a href='#'>Purchases</a>
            </li>
            <li
              className='mb-3 px-4 py-2 border-2 border-blue-800 rounded-full text-2xl font-bold text-gray-700 hover:bg-blue-800 hover:text-white transition-all duration-300 transform hover:scale-105'
              onClick={() => openPopup(3)} // Abrir el popup con Lorem Ipsum
            >
              <a href='#'>Items</a>
            </li>
          </ul>
          <button
            onClick={closeSidebar}
            className='absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-900'
          >
            X
          </button>
        </div>
      </div>

      {/* Popup con Lorem Ipsum */}
      {activePopup && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-80 z-60'>
            <h3 className='text-2xl font-bold mb-4'>Lorem Ipsum</h3>
            <p className='text-lg text-gray-700 mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lacinia libero eu libero fermentum, sed convallis felis feugiat.
            </p>
            <button
              onClick={closePopup}
              className='bg-blue-800 text-white px-4 py-2 rounded-full'
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal de Sign Up */}
      {isSignUpModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg border-2 border-blue-800 w-96 z-60'>
            <h3 className='text-2xl font-bold mb-4'>Sign Up</h3>
            <form>
              <div className='mb-4'>
                <label
                  htmlFor='username'
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  Username
                </label>
                <input
                  type='text'
                  id='username'
                  className='w-full px-3 py-1.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                  placeholder='Enter your username'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='password'
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  className='w-full px-3 py-1.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                  placeholder='Enter your password'
                />
              </div>
              <button
                type='button'
                onClick={closeSignUpModal}
                className='bg-blue-800 text-white px-4 py-2 rounded-full w-full'
              >
                Submit
              </button>
            </form>
            <div className='mt-4 text-center'>
              <p className='text-sm text-gray-600'>
                ¿No tienes una cuenta?{' '}
                <a
                  href='#'
                  className='text-blue-800 hover:underline'
                  onClick={openCreateAccountModal}
                >
                  Crear cuenta
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Crear cuenta */}
      {isCreateAccountModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg border-2 border-blue-800 w-96 z-60'>
            <h3 className='text-2xl font-bold mb-4'>Crear cuenta</h3>
            <form>
              <div className='mb-4'>
                <label
                  htmlFor='fullname'
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  Nombre completo
                </label>
                <input
                  type='text'
                  id='fullname'
                  className='w-full px-3 py-1.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                  placeholder='Ingrese su nombre completo'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  Correo electrónico
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full px-3 py-1.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                  placeholder='Ingrese su correo electrónico'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='petname'
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  Nombre de mascota
                </label>
                <input
                  type='text'
                  id='petname'
                  className='w-full px-3 py-1.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                  placeholder='Ingrese el nombre de su mascota'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='animaltype'
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  ¿Qué animal tienes?
                </label>
                <select
                  id='animaltype'
                  className='w-full px-3 py-1.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                >
                  <option value=''>Seleccione</option>
                  <option value='dog'>Perro</option>
                  <option value='cat'>Gato</option>
                  <option value='bird'>Ave</option>
                  <option value='other'>Otro</option>
                </select>
              </div>
              <button
                type='button'
                onClick={closeCreateAccountModal}
                className='bg-blue-800 text-white px-4 py-2 rounded-full w-full'
              >
                Crear cuenta
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
