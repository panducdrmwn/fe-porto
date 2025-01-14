import { Link } from "react-router-dom";
import logo from '../assets/p-high-resolution-logo.png';


export default function Navbar() {
  return (
    <nav className="w-full items-center fixed border-b-8">
        <div className="w-full flex justify-between items-center mx-auto max-w-7xl">
            <Link
            to="/"
            className="text-white text-xl font-bold hover:text-gray-300"
            >
                <img src={logo} alt="logo" className="w-11 h-11 object-contain"/>
            </Link>
            <ul>
                <li className="list-none hiddden sm:flex flex-row gap-10 mr-10">
                    <Link to="/" className="text-white hover:text-gray-300">About</Link>
                    <Link to="/" className="text-white hover:text-gray-300">Work</Link>
                    <Link to="/" className="text-white hover:text-gray-300">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
