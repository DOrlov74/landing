export interface Project {
    name: string;
    img: string;
    href: string;
    description: string[];
    icons: Icon[];
}

export interface Icon {
    name: string;
    href: string;
}