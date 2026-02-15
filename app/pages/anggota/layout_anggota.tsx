import bg from "app/assets/1920X1080_kosong.jpg"
import Subtext from "~/components/subtext";
import g1 from "app/assets/g1.png";
import g2 from "app/assets/g2.png";
import logo from "app/assets/logo-white.png"

export default function LayoutAnggota() {
    const data = {
        memberId: "11299",
        staffNo: "K-26",
        name: "MUHAMMAD NAZRIN BIN HAZRUL NIZAM",
        icno: "990101145678",
        email: "shuk@uitmkoop.com",
        bankAcc: "112233445566",
        bankName: "Maybank",
        hp: "012-3456789",
    };

    const meeting = [

    ]
    return (
        <div className="">
            <div className="hidden md:block">
                <DesktopView data={data} />
            </div>
            <div className="block md:hidden">
                <MobileView data={data} />
            </div>
        </div>

    )
}

function MobileView({ data }: { data: any }) {
    return (
        <div className="mt-15 px-5 flex flex-col">
            {/* Title */}
            <div className="font-light text-2xl text-right text-blue">Maklumat Anggota</div>

            {/* Content */}
            <div className="flex flex-col items-center">
                {/* icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-50">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                {/* data */}
                <div className="text-sm">
                    <div className="flex flex-row gap-3">
                        <div className="w-30 font-light">Member ID</div>
                        <div className="w-50">{data.memberId}</div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <div className="w-30 font-light">Staff No</div>
                        <div className="w-50">{data.staffNo}</div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <div className="w-30 font-light">Name</div>
                        <div className="w-50">{data.name}</div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <div className="w-30 font-light">No KP</div>
                        <div className="w-50">{data.icno}</div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <div className="w-30 font-light">Email</div>
                        <div className="w-50">{data.email}</div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <div className="w-30 font-light">Bank Acc No</div>
                        <div className="w-50">{data.bankAcc}</div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <div className="w-30 font-light">Bank</div>
                        <div className="w-50">{data.bankName}</div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <div className="w-30 font-light">Handphone No</div>
                        <div className="w-50">{data.hp}</div>
                    </div>
                    <div className="border-t-2 border-dashed border-gray-400 my-4"></div>


                    <div className="">Maklumat Mesyuarat: </div>
                    <div className="mt-1">ZON 1 KOPERASI KAKITANGAN UITM BERHAD</div>
                    <div className="font-bold">Rabu | 25 Februari 2026 | 8.30 PAGI</div>

                    <div className="mt-3">Medium: Google Meet</div>
                    <div className="font-light -mt-1 mb-5">( Pautan mesyuarat akan diberikan kemudian )</div>
                </div>
            </div>

        </div>
    )
}

function DesktopView({ data }: { data: any }) {
    return (
        // full screen
        <div className="relative w-full min-h-screen overflow-hidden bg-white">

            {/* <img src={bg} className="absolute z-0 top-100% object-cover"/> */}

            <img src={g1} className="absolute z-0 top-0 left-0 w-180"/>
            <img src={g2} className="absolute z-0 bottom-0 right-0 w-120"/>
            
            <div className="absolute z-10 top-30 left-10">
                <Subtext />
            </div>

            <img src={logo} className="absolute z-10 bottom-10 right-10 w-50" />

            {/* Content */}
            <div className="relative z-20 mt-30 md:mx-10 lg:mx-30">
                {/* Title */}
                <div className="text-4xl text-right text-blue">Maklumat Anggota</div>

                {/* content */}
                <div className="flex md:flex-col lg:flex-row items-center-safe justify-center-safe md:gap-0 lg:gap-20 md:mb-20">
                    {/* Icon */}
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-100">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>

                    {/* data */}
                    <div className="flex flex-col my-5 md:text-xl lg:text-sm">
                        <div className="flex flex-row gap-2">
                            <div className="w-30">No Anggota</div>
                            <div>{data.memberId}</div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="w-30">No Staff</div>
                            <div>{data.staffNo}</div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="w-30">Nama</div>
                            <div>{data.name}</div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="w-30">No KP</div>
                            <div>{data.icno}</div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="w-30">Email</div>
                            <div>{data.email}</div>
                        </div>
                        <div className="flex flex-row gap-2 mt-3">
                            <div className="w-30">Akaun Bank</div>
                            <div>{data.bankAcc}</div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="w-30">Bank</div>
                            <div>{data.bankName}</div>
                        </div>
                        <div className="flex flex-row gap-2 mt-3">
                            <div className="w-30">No Tel</div>
                            <div>{data.hp}</div>
                        </div>

                        <div className="border-t-2 border-solid border-black my-4"></div>

                        <div className="font-light">Maklumat Mesyuarat</div>

                        <div className="mt-3">ZON 1 KOPERASI KAKITANGAN UiTM BERHAD</div>
                        <div className="font-semibold">Rabu | 25 Februari 2026 | 8.30 PAGI</div>

                        <div className="mt-3">Medium: Google Meet</div>
                        <div>( Pautan mesyuarat akan diberikan kemudian )</div>
                    </div>
                    {/* Dash */}

                </div>
            </div>
        </div>



    )
}