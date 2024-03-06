export type NavMenuItem = {
    name: string;
    path: string;
    submenu?: SubMenuItem[]
}

type SubMenuItem = {
    name: string;
    path: string;
}