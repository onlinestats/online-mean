# online-mean
Online mean calculation (piece-by-piece)

## Usage
```
const Mean = require('online-mean')
const m = Mean()

;[1,2,3,4,5].forEach(v => { m(v) })

console.log(m()) // -> 3
```

## How it works
A classical formula of a sample mean is defined as follows:

> ā<sub>n</sub> = (<strong>Σ</strong><sub>i=1..n </sub>x<sub>i</sub>) / n

It basically iterates over all values of <code><b>x</b></code>, sums them and divides on total number of samples. That works when the length of <code><b>x</b></code> is small and you don't need to update the mean when new values added. To calculate mean <code>ā</code> in on-line fashion we will use a recursive formula:

> ā<sub>n</sub> = ā<sub>n-1</sub> + (x<sub>n</sub> - ā<sub>n-1</sub>) / n

It's still based on the classical formula, however instead of summing all values we calculate <code>ā</code> recursively. Derivation:

> ā<sub>n</sub> = (<strong>Σ</strong><sub>i=1..n </sub>x<sub>i</sub>) / n <br>
> ā<sub>n</sub> = (<strong>Σ</strong><sub>i=1..n-1 </sub>x<sub>i</sub> + x<sub>n</sub>) / n <br>
> ā<sub>n</sub> = ((n-1) × ā<sub>n-1</sub> + x<sub>n</sub>) / n <br>
> ā<sub>n</sub> = ā<sub>n-1</sub> + (-ā<sub>n-1</sub> + x<sub>n</sub>) / n <br>
> ā<sub>n</sub> = ā<sub>n-1</sub> + (x<sub>n</sub> - ā<sub>n-1</sub>) / n <br>
