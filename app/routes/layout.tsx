import { Outlet } from "react-router";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import bg from "app/assets/1920X1080.jpg"

export default function Layout() {
    return (

        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Navbar */}
            <header className="absolute top-0 left-0 w-full z-20">
                <Navbar />
            </header>

            {/* Content */}
            <main className="relative z-10">
                <Outlet />
            </main>


            {/* footer */}
            <footer className="absolute bottom-0 left-0 w-full z-20 p-4 text-black text-center">
                <Footer />
            </footer>

        </div>
    )
}