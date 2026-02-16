import Subtext from "~/components/subtext";
import g1 from "app/assets/BACKGROUND_OMBAKATAS.png";
import g2 from "app/assets/BACKGROUND_OMBAKBAWAH.png";
import g3 from "app/assets/gfx.png"
import logo from "app/assets/logo-blue.png"
import { Form, Link, redirect, useActionData } from "react-router";
import type { Route } from "./+types/forgetpwd";

export async function action({ request }: Route.ActionArgs) {
    const formData = await request.formData()
    const noStaff = formData.get("NoStaff")
    const icno = formData.get("icno")

    if (!noStaff || !icno) {
        return { error: "Sila masukkan maklumat anda" }
    }

}

export default function ForgetPage() {
    const actionData = useActionData()
    return (
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
                <div className="relative z-20  mx-auto md:mx-0 md:w-sm flex flex-col gap-5 justify-center-safe">

                    {/* Input or Form */}
                    <Form method="POST" className="flex flex-col gap-3">

                        {/* Title */}
                        <div className="text-blue text-lg md:text-2xl font-bold">Lupa No. Anggota?</div>

                        {actionData?.error && (
                            <div className="bg-red-100 border border-red-400 w-70 md:w-sm text-red-700 px-4 py-2 rounded relative" role="alert">
                                <span className="block sm:inline">{actionData.error}</span>
                            </div>
                        )}

                        {/* No Staff */}
                        <div className="flex flex-col">
                            <input type="text" id="NoStaff" name="NoStaff" placeholder="No. Staff" className="w-70 md:w-sm  p-3 rounded-lg ring ring-gray-400" />
                        </div>

                        {/* No KP */}
                        <div>
                            <input type="text" id="icno" name="icno" placeholder="No. Kad Pengenalan" className="w-70 md:w-sm  p-3 rounded-lg ring ring-gray-400" />
                        </div>

                        {/* Semak */}
                        <button className="p-3 w-70 md:w-sm  rounded-lg bg-blue hover:bg-blue/90 text-white">Semak</button>

                    </Form>

                    <div className="bg-gray-300 p-3 rounded-lg">No Anggota:</div>
                    <Link to={"/login"} className="text-center underline hover:text-blue hover:cursor-pointer">Kembali ke Login</Link>
                </div>
            </div>

        </div>
    )
}