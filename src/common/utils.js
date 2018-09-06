import pathToRegexp  from "path-to-regexp";
export function getCurrentMenu (location, arrayMenu) {
    if (!!arrayMenu) {
        let current = [];
        for(let i=0; i<arrayMenu.length; i++) {
            const e = arrayMenu[i];
            const child = getCurrentMenu(location,e.children);
            if (!!child && child.length > 0) {
                child.push({...e, children: null});
                return child;
            }
            if (e.href && pathToRegexp(e.href).exec(location)) {
                current.push({...e, children: null});
                return current;
            }
        }
        return current;
    }
    return null;
}
export function deepCopy(source) {
    if (!source) return source
    let sourceCopy = source instanceof Array ? [] : {};
    for (let item in source) {
        sourceCopy[item] = typeof source[item] === 'object' ? deepCopy(source[item]) : source[item]
    }
    return sourceCopy;
}