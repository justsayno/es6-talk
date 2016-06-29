/**
 * Block scoping and the let keyword
 */

let variable1 = 1;
for (i = 0; i < 2; i++) { 
    console.log(variable1)
}

let variable2 = 1;
for (i = 0; i < 2; i++) { 
    variable2 = 2
    console.log(variable)
}

for (i = 0; i < 2; i++) { 
    console.log(variable3)
}
let variable3 = 1;

/**
 * Constants
 */

const CONSTANT1 = 1

// the following is not allowed!
// CONSTANT1 = 2
// CONSTANT;

let CONSTANT1 = 1;
for (i = 0; i < 2; i++) {
    // block scoped so it is allowed! 
    const CONSTANT1 = 2
    console.log(CONSTANT1)
}


