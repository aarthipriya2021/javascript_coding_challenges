function convertLength(value, fromUnit, toUnit) {
    const units = {
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'km': 1000,
        'in': 0.0254,
        'ft': 0.3048,
        'yd': 0.9144,
        'mi': 1609.34
    };

    if (!units[fromUnit] || !units[toUnit]) {
        throw new Error('Invalid unit');
    }

    return value * units[fromUnit] / units[toUnit];
}

// Example usage
console.log(convertLength(1, 'm', 'cm')); // Output: 100
console.log(convertLength(1, 'ft', 'm')); // Output: 0.3048
console.log(convertLength(1, 'mi', 'km')); // Output: 1.60934
