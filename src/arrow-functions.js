/**
 * Old way
 */
document.addEventListener('click', function(){ 
    console.log('Regular callback:')
    console.log(this)
});


/**
 * Arrow function
 */
document.addEventListener('click', () => { 
    console.log('Arrow function:')
    console.log(this)
});