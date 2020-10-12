function reOrderArray(array)
{
    // write code here
    const r1 = [],
      r2 = []
    for (let i = 0; i < array.length; i++) {
      const temp = array[i]
      if (temp % 2 === 0) {
        r2.push(temp)
      } else {
        r1.push(temp)
      }
    }
    return [...r1, ...r2]
}