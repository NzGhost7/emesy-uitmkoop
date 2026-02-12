import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import logo from "app/assets/logo-white.png"
import { AnimatePresence, motion } from "motion/react"

export default function SplashScreen() {
    const [browserInfo, setBrowserInfo] = useState('Detecting...')
    const [showModal, setShowModal] = useState(false)
    const [isExiting, setIsExiting] = useState(false)
    const navigate = useNavigate()

    function detectBrowser() {
        const agent = typeof navigator !== "undefined" ? navigator.userAgent : ""
        setBrowserInfo(agent)

        // Basic Chrome detection
        const isChrome = /Chrome/.test(agent) && !/Edg|OPR|Opera/.test(agent)
        const isSafari = /Safari/.test(agent) && !/Chrome|CriOS|Chromium|Edg|OPR|Opera/.test(agent)

        if (isChrome || isSafari) {
            setIsExiting(true); // 2. Trigger the exit animation first
            // Wait for animation duration (0.6s) then navigate
            setTimeout(() => {
                navigate("/login");
            }, 600);
        } else {
            setShowModal(true)
        }
    }

    useEffect(() => {
        // Adding a tiny delay ensures the UI is mounted before navigating
        const timer = setTimeout(() => {
            detectBrowser()
        }, 4000);

        return () => clearTimeout(timer);
    }, [])

    return (

        <AnimatePresence>
            {!isExiting && (
                <motion.div
                    key="splash-container" // 4. Key is mandatory for exit animations
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }} // 5. The "blind" roll-up effect
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="fixed inset-0 flex items-center justify-center bg-blue z-50"
                >
                    <div className="text-center">
                        <motion.img src={logo} alt="Logo"
                            className="w-50 mx-auto"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                        </motion.img>
                        <div className="font-bold text-2xl text-white mt-10">Selamat Datang!</div>
                        <div className="text-white mt-1">Mesyuarat Agung Kawasan Ke-18</div>
                        <div className="text-white -mt-1">Koperasi Kakitangan UiTM Berhad</div>
                        <div className="font-handkick text-3xl text-white mt-10">Secara Dalam Talian</div>
                        {/* Ensure your .loader CSS is defined in your index.css */}
                        <div className="loader mt-4 mx-auto"></div>
                    </div>

                </motion.div>
            )}

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
                        <h3 className="text-xl font-bold mb-3 text-red-600">Unsupported Browser</h3>
                        <p className="mb-4 text-gray-700">
                            To ensure the security and stability of <strong>MAK 18</strong>, please use <strong>Google Chrome</strong>.
                        </p>
                        <div className="p-3 bg-gray-100 rounded mb-6">
                            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Detected String:</p>
                            <p className="text-xs text-gray-600 break-all font-mono">{browserInfo}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <a
                                href="https://www.google.com/chrome/"
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-center font-medium transition-colors"
                            >
                                Download Google Chrome
                            </a>
                            <button
                                onClick={() => {
                                    setShowModal(false)
                                    const timer = setTimeout(() => {
                                        detectBrowser()
                                    }, 5000);

                                    return () => clearTimeout(timer);
                                }}
                                className="px-4 py-2 text-gray-500 hover:text-gray-700 text-sm"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                </div>
            )}


        </AnimatePresence>

    )
}

