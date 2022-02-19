import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoIosCloseCircle } from 'react-icons/io';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const CloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 bg-brown-200">
        <div className="container mx-auto px-8 md:px-4 lg:px-0 h-72 flex justify-between items-center">
          <nav>
            <a
              className="font-dancingscript text-24 md:text-28 lg:text-32 font-bold text-red-400"
              href="#"
            >
              Aline Balas Gourmet
            </a>
          </nav>

          <div>
            <FiMenu
              className="inline-block md:hidden cursor-pointer"
              size={24}
              color="#80470F"
              onClick={ToggleMenu}
            />

            <nav>
              <IoIosCloseCircle
                className="ab right-0 top-0 z-10 md:hidden cursor-pointer"
                size={32}
                color="#F23A3A"
                onClick={CloseMenu}
              />

              <ul
                className={`${
                  isOpen
                    ? `h-screen w-1/2 absolute left-0 top-0 bg-brown-200`
                    : `hidden`
                } md:flex md:gap-12 lg:gap-18 font-comfortaa text-14 md:text-14 lg:text-18 font-bold text-brown-600`}
              >
                <li className="transition duration-500 hover:text-red-200 cursor-pointer">
                  Home
                </li>
                <li className="transition duration-500 hover:text-red-200 cursor-pointer">
                  Cardápio
                </li>
                <li className="transition duration-500 hover:text-red-200 cursor-pointer">
                  Fotos
                </li>
                <li className="transition duration-500 hover:text-red-200 cursor-pointer">
                  Depoimentos
                </li>
                <li className="transition duration-500 hover:text-red-200 cursor-pointer">
                  Sobre
                </li>
                <li className="transition duration-500 hover:text-red-200 cursor-pointer">
                  Contato
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <hr />
      </header>
    </>
  );
}
