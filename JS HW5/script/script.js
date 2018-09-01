function clone(obj) {
    if (obj === null || typeof(obj) !== 'object' || 'isActiveCloneObject' in obj)
        return obj;

    let temp = obj.constructor();

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            obj['isActiveCloneObject'] = null;
            temp[key] = clone(obj[key]);
            delete obj['isActiveCloneObject'];
        }
    }

    return temp;
}

let original = { a: 1, b: 2, c: "String Here", d: true, e: null, f: {x: "inner", y: "object"} };
let copy = clone(original);

original.a = 999;
original.b = "Changed B";
original.f.x = 'Inner Changed';
original.f.y = 50;

console.log(original);
console.log(copy);