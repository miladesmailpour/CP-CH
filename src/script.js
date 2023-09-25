const num = 6;

const staircase = (n) => {
    let line = ''
    for(let i=1; i < n+1; i++){
        line = ' '.repeat(n-i).concat('#'.repeat(i))
        console.log(line)
        line = ''
    }
}

console.log(staircase(num));
