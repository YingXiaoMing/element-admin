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
//验证是否合法的url
export function validateURL(textval) {
    const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return urlregex.test(textval)
}