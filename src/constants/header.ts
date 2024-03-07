import { NavMenuItem } from "@/types/header";

export const NAV_ITEMS: NavMenuItem[] = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Portfolio",
        path: "/portfolio"
    },
    {
        name: "Services",
        path: "/services",
        submenu: [
            {
                name: 'Services',
                path: '/services#services'
            },
            {
                name: 'Packages',
                path: '/services#packages'
            },
            {
                name: 'Download Contract',
                path: '/contracts'
            },
        ]
    },
    {
        name: "Bookings",
        path: "/bookings",
    },
    {
        name: "Contracts",
        path: "/contracts",
    },
]