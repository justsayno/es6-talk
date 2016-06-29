# Browser support and using babel/webpack to cross compile

Unfotunately not all browsers support the es6 features I am going to cover in this tutorial. For a full list of 
all the es6 features [check out this great compatibility table](https://kangax.github.io/compat-table/es6/).

Fortunately we can use [Babel](https://babeljs.io/) and [Webpack](https://webpack.github.io/) to compile this
to es5 which all the major browsers (not including \*sudder\* IE < 8).

I have included a webpack build and all you need to do to run this solution is:

```
npm start
```

This will build the files and run a server at http://localhost:8080.