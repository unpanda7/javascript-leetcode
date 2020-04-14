//**
/** 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
**/

const arr = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20]
]

function Find(target, array)
{
    // write code here
    var rows = array.length;
    var cols = array[0].length;
    var i = rows - 1, j = 0;
    while(i >= 0 && j < cols) {
        if (target < array[i][j]) i -= 1
        else if (target > array[i][j]) j += 1
        else return true
    }
    return false
}