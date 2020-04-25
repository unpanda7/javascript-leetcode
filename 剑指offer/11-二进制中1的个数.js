function NumberOf1(n)
{
    // write code here
    let count = 0, flag = 1;
    while (flag != 0) {
      if ((n & flag) != 0) {
        count++
      }
      flag = flag << 1
    }

    return count
}