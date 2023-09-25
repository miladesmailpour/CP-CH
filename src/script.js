const array = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
    let ratio = Array(3).fill(0,0)
    arr.forEach(element => {
        if(element > 0) ratio[0]++
        if(element < 0) ratio[1]++
        if(element == 0) ratio[2]++
    })
    console.log((ratio[0]/arr.length).toFixed(5))
    console.log((ratio[1]/arr.length).toFixed(5))
    console.log((ratio[2]/arr.length).toFixed(5))
}

console.log(plusMinus(array));
