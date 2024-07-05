import { ReactNode } from "react"

export type TRoute = {
    path: string,
    element: ReactNode
}

export type TUserPath = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TUserPath[];
};

export type TSidebarItems = {
    key: string,
    label: ReactNode,
    children?: TSidebarItems[]
}

export type TAuthState = {
    user: null | object,
    token: null | string
}