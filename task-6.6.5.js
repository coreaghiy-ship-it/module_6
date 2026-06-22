const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrValues = [];

for (const value of Object.values(obj)) {
    if (Array.isArray(value)) {
        arrValues.push(...value);
    } else {
        arrValues.push(value);
    }
}

console.log(arrValues);
