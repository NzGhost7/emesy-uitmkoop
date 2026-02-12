import { useState } from "react";
import { NavLink } from "react-router";
import logo from "app/assets/logo-blue.png"
import { motion, AnimatePresence } from "motion/react";

export default Navbar

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const menu = [
        { name: "MAKLUMAT ANGGOTA", path: "/anggota" },
        { name: "MUAT TURUN", path: "/download" },
        { name: "MAKLUMAT CALON", path: "/calon" }
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden md:flex justify-center px-4">
                <ul className="flex items-center">
                    {menu.map((item, index) => (
                        <li
                            key={index}
                            className={`relative -ml-5 first:ml-0 transition-all duration-300`}
                            style={{ zIndex: menu.length - index }} // Ensures left tabs stay on top
                        >
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "block sm:w-50 md:w-60 lg:w-80 py-5 border-x-3 border-b-3 border-white shadow-xl -skew-x-13 rounded-xl transition-colors bg-red-600 text-white z-50 scale-105"
                                        : "block sm:w-50 md:w-60 lg:w-80 py-5 border-x-3 border-b-3 border-white shadow-lg -skew-x-13 rounded-xl transition-colors bg-yellow-500 text-black hover:bg-yellow-400"
                                }
                            >
                                {/* Un-skew the text so it stays upright */}
                                <div className="skew-x-13 whitespace-nowrap text-center text-sm font-bold uppercase tracking-tight">
                                    {item.name}
                                </div>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Navbar */}
            <nav className="relative z-50 md:hidden">
                {/* Menu button */}
                <button className="mt-4 mx-4" onClick={() => setIsOpen(prev => !prev)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
                            animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
                            exit={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            className="bg-white absolute z-10 top-full left-0 w-full rounded-b-lg p-3 flex flex-col items-center origin-top"
                        >
                            {/* Logo */}
                            <img src={logo} alt="Logo" className="mx-auto w-30 object-contain transition-all" />
                            {/* Mesy */}
                            <div className="font-bold text-lg mt-5">Selamat Datang!</div>
                            <div className="mt-1 font-light">Mesyuarat Agung Kawasan Ke-18</div>
                            <div className="-mt-1 font-light">Koperasi Kakitangan UiTM Berhad</div>
                            <div className="font-handkick text-xl mt-2">Secara Dalam Talian</div>

                            {/* Menu */}
                            <div className="flex flex-col gap-5 my-5">
                                {menu.map((item, index) => (
                                    <NavLink onClick={() => setIsOpen(false)} to={item.path} key={index} className={({ isActive }) =>
                                        isActive
                                            ? "block bg-red-600 text-white p-3 min-w-60 text-center font-semibold rounded-md"
                                            : "block bg-yellow-500 p-3 min-w-60 text-center font-semibold rounded-md shadow-md"
                                    }>
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Menu */}
                {/* {isOpen && (
                    <div className="bg-white absolute z-10 top-100% min-w-screen rounded-b-lg p-3 flex flex-col items-center-safe shadow-2xl">
                       

                    </div>
                )} */}
            </nav>
        </>


    );
}
