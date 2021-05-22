# ArrayUtiils
### Description
A small utility package to flatten an arbitrarily nested array of values whilst gracefully handling strange or invalid inputs.
### Requirements
[Node.js](https://nodejs.org/)
[NPM](https://www.npmjs.com/get-npm)
### Installation
```
git clone git@github.com:gimi-q/arrayUtils.git
cd arrayUtils
npm install
```
### Testing 
```
npm test
```
##### Notes: 
  - Last unit test is for demonstrative purposes, may run slowly!
  - Coverage runs by default.

### Usage
```
import { flatten } from './arrayUtils.js

flatten([ 1, [ 2, [ 3 ] ], 4 ])  -> [ 1, 2, 3, 4 ]
```
##### Notes: 
  - Takes one argument with type of <Array>
  - An invalid argument will return an empty array.

### Licence
 MIT
