import { TRoute, TUserPath } from "../interface"

export const routeGenarator = (path : TUserPath[])=>{
    const route = path.reduce((acc:TRoute[] , item)=> {
        if(item.path && item.element){
            acc.push({
                path:item.path,
                element: item.element 
            })
        }
        if(item.children){
            item.children.forEach((child)=> {
                acc.push({
                    path:child.path!,
                    element: child.element
                })
            } )
        }
        return acc
    }, [] )

    return route

}