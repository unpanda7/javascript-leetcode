function Fibonacci(n)
{
    // write code here
    let [num1, num2] = [0, 1]
    if (n <= 0) return 0;
    else if (n < 2) {
      return 1
    }
    for(let i = 0; i < n-1; i++) {
      [num1, num2] = [num2, num1 + num2]
    }

    return num2

}