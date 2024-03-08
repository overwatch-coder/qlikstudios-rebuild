import { NavMenuItem } from "@/types";

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
                path: '/services'
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
        name: "Contracts",
        path: "/contracts",
    },
    {
        name: "Bookings",
        path: "/bookings",
    },
]