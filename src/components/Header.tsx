import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub, FaSquareInstagram, FaYoutube } from "react-icons/fa6";

export default function Header() {
  return (
    <div>
      <div id="container">
      <div id="profile">
        <img src="eltonsantos.jpg" alt="Foto de Elton Santos." />
        <p>@eltonsantos</p>
      </div>

      <div id="switch">
        <button></button>
        <span></span>
      </div>

      <ul>
        <li>
          <a href="https://www.eltonmelosantos.com.br" target="_blank"
            >Ir para meu website</a
          >
        </li>

        <li>
          <a href="#">Inscrever-se no NLW</a>
        </li>

        <li>
          <a href="#">Baixar meu e-book</a>
        </li>

        <li>
          <a href="https://github.com/eltonsantos">Ver meu portfólio</a>
        </li>

        <li>
          <a href="https://rocketseat.com.br/explorer" target="_blank"
            >Conheça o Explorer</a
          >
        </li>
      </ul>
      <div id="social-links">
        <a href="https://github.com/eltonsantos" target="_blank">
          <FaSquareGithub />
        </a>

        <a href="https://instagram.com/eltin182" target="_blank">
          <FaSquareInstagram />
        </a>

        <a href="https://youtube.com/eltonsantos_oficial" target="_blank">
          <FaYoutube />
        </a>

        <a href="https://linkedin.com/in/eltonmelosantos" target="_blank">
          <FaLinkedin />
        </a>
      </div>

      <footer>
        Feito com ♥ por <a href="https://eltonmelosantos.com.br/">Elton Santos</a>
      </footer>
    </div>
    </div>
  )
}