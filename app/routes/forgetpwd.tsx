import Subtext from "~/components/subtext";
import g1 from "app/assets/BACKGROUND_OMBAKATAS.png";
import g2 from "app/assets/BACKGROUND_OMBAKBAWAH.png";
import g3 from "app/assets/gfx.png"
import logo from "app/assets/logo-blue.png"
import { Form, redirect, useActionData } from "react-router";
import type { Route } from "./+types/forgetpwd";

export async function action({ request }: Route.ActionArgs) {
    const formData = await request.formData()
    const noStaff = formData.get("NoStaff")
    const icno = formData.get("icno")

    if (!noStaff || !icno) {
        return { error: "Sila masukkan maklumat anda" }
    }

    return redirect("/login")

}

export default function ForgetPage() {
    const actionData = useActionData()
    return (
        <div className="relative w-full min-h-screen flex flex-col justify-center-safe overflow-hidden">
            <img src={g1} className="absolute z-0 top-0 left-0 w-230" />
            <img src={g2} className="absolute z-0 bottom-0 right-0 w-120" />
            <img src={g3} className="absolute -z-10 bottom-0 left-10 w-180 lg:opacity-100 md:opacity-20" />

            <div className="absolute z-10 top-30 left-10">
                <Subtext />
            </div>

            <img src={logo} className="absolute z-10 top-30 right-20 w-40" />

            {/* Content */}
            <div className="flex flex-col sm:mx-30 md:mx-50 lg:mx-80 items-end">
                <div className="relative z-20  w-sm flex flex-col gap-5 justify-center-safe">

                    {/* Input or Form */}
                    <Form method="POST" className="flex flex-col gap-3">

                        {/* Title */}
                        <div className="text-blue text-2xl font-bold">Lupa No. Anggota?</div>

                        {actionData?.error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
                                <span className="block sm:inline">{actionData.error}</span>
                            </div>
                        )}

                        {/* No Anggota */}
                        <div className="flex flex-col">
                            <input type="text" id="NoStaff" name="NoStaff" placeholder="No. Staff" className="w-sm p-3 rounded-lg ring ring-gray-400" />
                        </div>

                        {/* No KP */}
                        <div>
                            <input type="text" id="icno" name="icno" placeholder="No. Kad Pengenalan" className="w-sm p-3 rounded-lg ring ring-gray-400" />
                        </div>

                        {/* Login */}
                        <button className="p-3 w-sm rounded-lg bg-blue hover:bg-blue/90 text-white">Semak</button>

                    </Form>

                    <div className="bg-gray-300 p-3 rounded-lg">No Anggota:</div>
                </div>
            </div>

        </div>
    )
}