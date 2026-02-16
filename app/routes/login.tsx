import { Form, Link, redirect, useActionData } from "react-router";
import type { Route } from "./+types/login";
// import logo from "~/assets/uitm1.png"
import Subtext from "~/components/subtext";
import g1 from "app/assets/BACKGROUND_OMBAKATAS.png";
import g2 from "app/assets/BACKGROUND_OMBAKBAWAH.png";
import g3 from "app/assets/gfx.png"
import logo from "app/assets/logo-blue.png"

export async function action({ request }: Route.ActionArgs) {
    const formData = await request.formData()
    const username = formData.get("NoMemberShip")
    const password = formData.get("icno")

    if (!username || !password) {
        return { error: "Sila masukkan No Anggota dan No Kad Pengenalan anda" }
    } else if (username != "qwe" || password != "123") {
        return { error: "Pastikan No Anggota dan No Kad Pengenalan anda adalah betul" }
    }

    return redirect("/anggota");
}

export default function Login() {
    const actionData = useActionData()
    return (
        //full screen
        <div className="relative w-full min-h-screen flex flex-col justify-center-safe overflow-hidden">

            <div className="hidden md:block">
                <img src={g1} className="absolute z-0 top-0 left-0 w-230" />
                <img src={g2} className="absolute z-0 bottom-0 right-0 w-120" />
                <img src={g3} className="absolute -z-10 bottom-0 left-10 w-180 lg:opacity-100 md:opacity-20" />

                <div className="absolute z-10 top-30 left-10">
                    <Subtext />
                </div>

                <img src={logo} className="absolute z-10 top-30 right-20 w-40" />
            </div>

            <div className="md:hidden flex flex-col items-center-safe">
                <img src={logo} className="absolute z-0 top-15 w-40" />
                <img src={g3} className="absolute -z-10 bottom-0 w-180 opacity-30" />
            </div>


            {/* Content */}
            <div className="flex flex-col mx-0 md:mx-50 lg:mx-80 items-end">
                <div className="relative z-20 mx-auto md:mx-0  md:w-sm flex flex-col gap-5 justify-center-safe">
                    {/* Section 1 */}
                    <div className="flex flex-col">
                        <div className="font-bold text-lg md:text-2xl text-blue">Selamat Datang!</div>
                        <div className="font-bold text-md">Mesyuarat Agung Kawasan Ke-18</div>
                        <div className="-mt-1.5 text-md">Koperasi Kakitangan UiTM Berhad</div>
                    </div>

                    {actionData?.error && (
                        <div className="bg-red-100 border border-red-400 w-70 md:w-sm text-red-700 px-4 py-2 rounded relative" role="alert">
                            <span className="block sm:inline">{actionData.error}</span>
                        </div>
                    )}

                    {/* Input or Form */}
                    <Form method="POST" className="flex flex-col gap-5">

                        {/* No Anggota */}
                        <div className="flex flex-col">
                            <label className="flex flex-row gap-1 font-bold">No. Anggota<p className="text-red">*</p></label>
                            <input type="text" id="NoMemberShip" name="NoMemberShip" placeholder="12345" className="w-70 md:w-sm p-2 rounded-lg ring ring-gray-400" />
                        </div>

                        {/* No KP */}
                        <div>
                            <label className="flex flex-row gap-1 font-bold">No. Kad Pengenalan<p className="text-red">*</p></label>
                            <input type="text" id="icno" name="icno" placeholder="Cth: 95063003XXXX" className="w-70 md:w-sm p-2 rounded-lg ring ring-gray-400" />
                        </div>

                        {/* Forget No Anggota */}
                        <div className="w-70 md:w-sm flex flex-row justify-end-safe">
                            <Link to="/forget" className="text-sm px-2 underline hover:text-blue-700">Lupa No Anggota?</Link>
                        </div>

                        {/* Login */}
                        <button className="p-2 w-70 md:w-sm rounded-lg bg-blue hover:bg-blue/90 text-white">Login</button>

                    </Form>
                </div>
            </div>

        </div>
    )
}