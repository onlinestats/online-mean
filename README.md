# online-mean
Online mean calculation (piece-by-piece)

## Usage
```
const Mean = require('online-mean')
const m = Mean()

;[1,2,3,4,5].forEach(v => { m(v) })

console.log(m()) // -> 3
```
