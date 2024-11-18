import { useState } from "react";
import { FaLinkedin, FaYoutube, FaGithub, FaInstagram } from "react-icons/fa6";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  }

  return (
    <div className="max-w-lg mx-auto p-6">
      {/* Profile Section */}
      <div className="text-center mb-6">
        <img
          src="/eltonsantos.jpg"
          alt="Foto de Elton Santos."
          className="w-28 h-28 mx-auto rounded-full"
        />
        <p className="text-xl font-medium mt-2 dark:text-white">@eltonsantos</p>
      </div>

      {/* Switch Section */}
      <div className="flex justify-center mb-6">
        <button
          onClick={toggleMode}
          className={`w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center transition ${
            isDarkMode ? "justify-end" : "justify-start"
          }`}
        >
          <span
            className="w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow"
            style={{
              backgroundImage: `url(${isDarkMode ? "/sun.svg" : "/moon-stars.svg"})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></span>
        </button>
      </div>

      {/* Links Section */}
      <ul className="space-y-4 mb-6">
        <li>
          <a
            href="https://www.eltonmelosantos.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-3 px-6 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            Ir para meu website
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-center py-3 px-6 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            Inscrever-se no NLW
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-center py-3 px-6 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            Baixar meu e-book
          </a>
        </li>
        <li>
          <a
            href="https://github.com/eltonsantos"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-3 px-6 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            Ver meu portfólio
          </a>
        </li>
      </ul>

      {/* Social Links Section */}
      <div className="flex justify-center space-x-4 mb-6">
        <a
          href="https://github.com/eltonsantos"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://instagram.com/eltin182"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <FaInstagram className="text-2xl" />
        </a>
        <a
          href="https://youtube.com/eltonsantos_oficial"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <FaYoutube className="text-2xl" />
        </a>
        <a
          href="https://linkedin.com/in/eltonmelosantos"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm dark:text-white">
        Feito com ♥ por{" "}
        <a
          href="https://eltonmelosantos.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Elton Santos
        </a>
      </footer>
    </div>
  )
}