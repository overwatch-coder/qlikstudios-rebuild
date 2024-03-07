export type NavMenuItem = {
    name: string;
    path: string;
    submenu?: SubMenuItem[]
}

export type SubMenuItem = {
    name: string;
    path: string;
}