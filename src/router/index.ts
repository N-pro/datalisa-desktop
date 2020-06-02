import route from '../.dev/route'

type RouterHelp<T, S> = T extends string ? (prop?: any) => S : {
    [P in keyof T]: RouterHelp<T[P], S>
}



const transprot = <T>(route: T): RouterHelp<T, {
    name: string;
    component: Function;
}> => {

    const convert = (obj: any, route: string[]) => {
        return Object.keys(obj).reduce((r: any, key) => {
            const target = obj[key]
            if (target instanceof Function) {
                r[key] = {
                    name: route.concat([key]).join(''),
                    component: target
                }
            } else {
                r[key] = convert(target, route.concat([key]))
            }
            return r
        }, {})
    }

    return convert(route, [])
}

export default transprot(route)