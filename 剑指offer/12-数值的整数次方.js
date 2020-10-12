function Power(base, exponent)
{
    // write code here
    let ans = 1
    if (exponent >= 0) {
      for(let i = 1; i <= exponent; i++) {
        ans *= base
      }
    } else {
      for(let i = 1; i <= -exponent; i++) {
        ans *= base
      }
      
      ans = 1 / ans
    }

    return ans
}