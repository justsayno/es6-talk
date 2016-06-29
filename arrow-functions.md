# Arrow functions

Arrow functions are much like lambas in languages such as C# and look like this:

```
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
```