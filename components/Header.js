import { FiMenu } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="fixed inset-x-0 bg-brown-200">
      <div className="container mx-auto h-72 flex justify-between items-center">
        <nav>
          <a
            className="font-dancingscript text-24 md:text-28 lg:text-32 font-bold text-red-400"
            href="#"
          >
            Aline Balas Gourmet
          </a>
        </nav>

        <nav>
          <FiMenu
            className="inline-block md:hidden"
            size={24}
            color="#80470F"
          />
          <ul className="hidden md:flex md:gap-10 lg:gap-18 font-comfortaa text-14 md:text-16 lg:text-18 font-bold text-brown-600">
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
      <hr />
    </header>
  );
}
