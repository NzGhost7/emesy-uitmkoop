import pdficon from "app/assets/PDF.png"

export default function LayoutDownload() {
    const datadw = [
        { name: "Pekeliling 1", value: "pekeliling1.pdf" },
        { name: "Notis Mesyuarat Agong ke-18 | 2026", value: "notis_mesyuarat_agong_18_2026.pdf" },
        { name: "Buku Mesyuarat Agong Perwakilan ke-18 | 2026", value: "buku_mesyuarat_agong_perwakilan_18_2026.pdf" },
        { name: "Penerangan Tatacara Mesyuarat Agong Perwakilan ke-18 | 2026", value: "penerangan_tatacara_mesyuarat_agong_perwakilan_18_2026.pdf" },
    ]
    return (
        <>
            <div className="hidden md:block">
                <DesktopView data={datadw} />
            </div>
            <div className="block md:hidden">
                <MobileView data={datadw} />
            </div>
        </>
    )
}

function DesktopView({ data }: { data: any[] }) {
    return (
        <div className="mt-30 md:mx-20 lg:mx-30">
            {/* Title */}
            <div className="text-4xl text-right text-blue">Muat Turun</div>

            {/* content */}
            <div className="flex flex-col gap-5 mt-10 items-end-safe">
                {data.map((item, index) => (
                    <div key={index} className="bg-gray-300 max-w-150 justify-between rounded-lg flex flex-row gap-5 px-5 py-5 items-center-safe cursor-pointer group hover:bg-blue-hover group active:bg-blue-hover">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="size-6 bi bi-filetype-pdf group-hover:stroke-white group-active:text-white" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z" />
                        </svg>
                        <div className="font-light w-130 text-left group-hover:font-normal group-active:font-normal">{item.name}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 group-hover:stroke-white group-active:text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>

                    </div>
                ))}
            </div>
        </div>
        // <div className="bg-red flex flex-col h-screen min-w-screen justify-center-safe items-end-safe px-50">
        //     <h1 className="text-4xl text-blue">Muat Turun</h1>

        //     {/* Set of File */}
        //     <div className="mt-10 flex flex-col gap-5">

        //         {data.map((item, index) => (
        //             <div key={index} className="bg-gray-300 rounded-lg flex flex-row gap-5 px-5 py-5 items-center-safe cursor-pointer group hover:bg-blue-hover">
        //                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="size-6 bi bi-filetype-pdf group-hover:stroke-white" viewBox="0 0 16 16">
        //                     <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z" />
        //                 </svg>
        //                 <div className="font-light w-130 text-left group-hover:font-normal">{item.name}</div>
        //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 group-hover:stroke-white">
        //                     <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        //                 </svg>

        //             </div>
        //         ))}
        //     </div>
        // </div>
    )
}

function MobileView({ data }: { data: any[] }) {
    return (
        <div className="mx-5 mt-15 flex flex-col">
            {/* Title */}
            <div className="font-light text-2xl text-right text-blue">Muat Turun</div>

            {/* Content */}
            <div className="mt-10 mb-5 flex flex-col gap-5 items-center-safe">
                {data.map((item, index) => (
                    <div key={index} className="bg-gray-300 rounded-lg flex flex-row gap-5 px-5 py-5 items-center-safe cursor-pointer group active:bg-blue-hover">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="size-5 bi bi-filetype-pdf group-active:stroke-white" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z" />
                        </svg>
                        <div className="font-light text-sm w-55 text-left group-hover:font-normal group-active::font-bold">{item.name}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 group-active:stroke-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>

                    </div>
                ))}
            </div>

        </div>
    )
}