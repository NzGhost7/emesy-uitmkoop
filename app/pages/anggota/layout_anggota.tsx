import bg from "app/assets/1920X1080.jpg"

export default function LayoutAnggota() {
    const data = {
        memberId: "11299",
        staffNo: "K-26",
        name: "MOHD SHUKRI BIN SAIDIN",
        icno: "990101145678",
        email: "shuk@uitmkoop.com",
        bankAcc: "112233445566",
        bankName: "Maybank",
        hp: "012-3456789",
    };

    const meeting = [

    ]
    return (
        <>
            <div className="hidden md:block">
                <DesktopView data={data} />
            </div>
            <div className="block md:hidden">
                <MobileView data={data}/>
            </div>
        </>

    )
}

function MobileView({data}: {data:any}) {
    return (
        <div className="mt-20 px-5 flex flex-col">
            <div className="font-light text-xl ">Maklumat Anggota</div>
            <div className="flex flex-row gap-5">
                <div className="w-30 font-light">Member ID</div>
                <div>{data.memberId}</div>
            </div>
        </div>
    )
}

function DesktopView({ data }: { data: any }) {
    return (
        <div className="flex flex-col min-h-screen justify-center-safe px-40">
            <div className="flex flex-row gap-30">
                {/* Icon */}
                <div className="w-120 max-w-150 mt-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-120">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </div>

                {/* Content */}
                <div className="w-120 flex flex-col">
                    <h1 className="text-4xl text-right text-blue">Maklumat Anggota</h1>

                    <div className="flex flex-col mt-10 text-left">
                        <div className="flex flex-row">
                            <div className="w-35 montserrat-light">Member ID </div>
                            <div className="ml-4 ">{data.memberId}</div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-35 montserrat-light">Staff No</div>
                            <div className="ml-4">{data.staffNo}</div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-35 montserrat-light">Name</div>
                            <div className="ml-4">{data.name}</div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-35 montserrat-light">ICNo</div>
                            <div className="ml-4">{data.icno}</div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-35 montserrat-light">Email</div>
                            <div className="ml-4">{data.email}</div>
                        </div>

                        <div className="flex flex-row mt-5">
                            <div className="w-35 montserrat-light">Bank Account</div>
                            <div className="ml-4">{data.bankAcc}</div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-35 montserrat-light">Nama Bank</div>
                            <div className="ml-4">{data.bankName}</div>
                        </div>
                        <div className="flex flex-row mt-5">
                            <div className="w-35 montserrat-light">Hand Phone No</div>
                            <div className="ml-4">{data.hp}</div>
                        </div>

                        <div className="border-t-2 border-dashed border-gray-400 my-4"></div>

                        <div className="">Maklumat Mesyuarat: </div>
                        <div className="mt-1">ZON 1 KOPERASI KAKITANGAN UITM BERHAD</div>
                        <div className="font-bold">Rabu | 25 Februari 2026 | 8.30 PAGI</div>

                        <div className="mt-3">Medium: Google Meet</div>
                        <div className="font-light -mt-1">( Pautan mesyuarat akan diberikan kemudian )</div>
                    </div>
                </div>
            </div>
        </div>
    )
}