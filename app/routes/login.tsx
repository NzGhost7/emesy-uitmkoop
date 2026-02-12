import { Form, redirect, useActionData } from "react-router";
import type { Route } from "./+types/login";
import logo from "~/assets/uitm1.png"

export async function action({ request }: Route.ActionArgs) {
    const formData = await request.formData()
    const username = formData.get("username")
    const password = formData.get("password")

    if (!username || !password) {
        return { error: "Username and password are required." }
    }

    return redirect("/anggota");
}

export default function Login() {
    const actionData = useActionData()
    return (
        <div className="flex flex-col gap-10 items-center-safe justify-center-safe min-h-screen" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${''})`, backgroundSize: 'cover', minHeight: '100vh', }}>

            <div className="">
                {/* Logo */}
                <img src={logo} alt="Logo" className="w-80" />
            </div>



            <div className="flex flex-row border-2 border-one rounded-2xl">
                {/* login */}
                <div className="py-10 px-10 w-80 bg-white rounded-l-2xl">

                    <h1 className="pb-5 text-center font-bold text-lg">Welcome</h1>

                    {actionData?.error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-5 relative" role="alert">
                            <span className="block sm:inline">{actionData.error}</span>
                        </div>
                    )}

                    <Form method="post" className="flex flex-col gap-3">

                        {/* username */}
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-2.5 pointer-events-none">
                                <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="username" name="username" className="block w-full ps-10 pe-3 py-2 text-sm border border-gray-600 rounded-lg placeholder:text-body" placeholder="Username" />
                        </div>


                        {/* password */}
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-2.5 pointer-events-none">
                                <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z" />
                                </svg>

                            </div>
                            <input type="password" id="password" name="password" className="block w-full ps-10 pe-3 py-2 text-sm border border-gray-600 rounded-lg placeholder:text-body" placeholder="Password" />

                        </div>

                        {/* Button */}
                        <button type="submit" className="py-2 mt-2 bg-one hover:bg-two rounded-lg text-white">Login</button>
                    </Form>
                </div>

                <div className="flex flex-col justify-center-safe bg-one rounded-r-2xl w-80">
                    {/* <h2 className="text-white text-center">MyInvoice Logo</h2> */}

                </div>
            </div>

        </div>
    )
}