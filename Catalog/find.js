const fs = require("fs");


function decodeValue(base, value) {
    return parseInt(value, base);
}


function lagrangeInterpolation(points) {
    let constantTerm = 0;

    for (let i = 0; i < points.length; i++) {
        let xi = points[i][0];
        let yi = points[i][1];

        let term = yi;

        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                let xj = points[j][0];
                term *= -xj / (xi - xj);
            }
        }

        constantTerm += term;
    }

    return Math.round(constantTerm);
}


function findConstant(inputFile) {
    
    const data = JSON.parse(fs.readFileSync(inputFile, "utf8"));

    const { n, k } = data.keys;
    const points = [];

   
    Object.keys(data).forEach((key) => {
        if (!isNaN(key)) {
            const x = parseInt(key);
            const { base, value } = data[key];
            const y = decodeValue(base, value);
            points.push([x, y]);
        }
    });

    
    const selectedPoints = points.slice(0, k);

    
    const constant = lagrangeInterpolation(selectedPoints);

    return constant;
}


const testFiles = ["t1.json", "t2.json"];


testFiles.forEach((file) => {
    const constant = findConstant(file);
    console.log(`The constant term (c) for ${file} is: ${constant}`);
});
