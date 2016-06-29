# What is JavaScript? ES-2015 - Intergen TeamJS Talk

This repo contains some sample code showing some new features using ES-2015 (aka es6)
with Babel for cross browser support.

## Introduction

JavaScript has come a long way since the bad old days of cross-browser hell
and any developer worth their salt should know it. Doesn't matter if you are
a desktop developer (how many of them are left??), mobile app developer or a 
web developer you more than likely will need to use some JavaScript at some
point in your career.

It's an exciting age where you can write JavaScript on ANY device you could imagine,
from IoT devices that run Chakra (the Microsoft build JavaScript engine), 
rapsbery pie running node, a regular old vanilla browser or desktop apps
using frameworks like election (such as vscode).

But what's more is that **JavaScript really doesn't suck anymore**.

The latest specification of JavaScript called [ECMAScript® 2015](http://www.ecma-international.org/ecma-262/6.0/) 
formally es6) bring a whole lot of new langauge features that will make your life better. I am going to go through
some of the more important ones which include

- Arrow funtions
- Template literals
- Modules (while not strictly part of ES 2015 I'm including them here)
- Deconstructing
- Default function parameters
- Let, const and block scoping

These are all supported using [Babel](https://babeljs.io/) for compiling the code back to es6, 
and [Webpack](https://webpack.github.io/) for loading modules (it can do so much more though please look into
it!).

## Table of contents

- [Browser support and Babel/Webpack](/browser-support-babel-webpack.md)
