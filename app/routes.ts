import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("components/splashscreen.tsx"),
    route("login", "routes/login.tsx"),
    route("test", "routes/testpage.tsx"),

    layout("routes/layout.tsx", [
        route("anggota", "pages/anggota/layout_anggota.tsx"),
        route("calon", "pages/calon/layout_calon.tsx"),
        route("download", "pages/download/layout_download.tsx"),
    ]),

    
] satisfies RouteConfig;
