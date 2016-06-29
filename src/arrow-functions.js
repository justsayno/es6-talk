/**
 * Old way
 */
setTimeout(function(){ 
    console.log('Regular callback:')
    console.log(this)
}, 3000);

/**
 * Arrow function
 */
setTimeout(() => { 
    console.log('Arrow function:')
    console.log(this)
}, 3000);