function rectCover(number)
{
    // write code here
    if (number < 1) {
        return 0
    }
    if (number <= 2) {
        return number
    }
    
    let [n1, n2] = [1, 2]
    for(let i = 3; i < number + 1; i++) {
        [n1, n2] = [n2, n1 + n2]
    }
    console.log(n2);
    
    return n2
}