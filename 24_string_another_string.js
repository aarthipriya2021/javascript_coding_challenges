function stringContainsString(a, b) {
    // return (a.indexOf(b) === -1 ? (a+b) : (b+a));
    return (a.includes(b) ? (b+a) : (a+b) );
}
console.log(stringContainsString("plums", "sweet"));
console.log(stringContainsString('lips', 's'));
console.log(stringContainsString('Java', 'script'));
console.log(stringContainsString(' think, therefore I am', 'I'));