/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  let Alen = A.length;
  let Blen = B.length;
  let result = 0;
  for (let i = 1; i < Alen + Blen; i++) {
      if (result >= (Alen + Blen - i)) {
          return result;
      }
      let len = Math.min(i, Alen, Blen, (Alen + Blen - i));
      result = Math.max(maxLength(A, B, Alen - i, i - Alen, len), result);
  }
  return result;
};

var maxLength = function (A, B, addA, addB, len) {
  addA = (addA > 0) ? addA : 0;
  addB = (addB > 0) ? addB : 0;
  let result = 0;
  let k = 0;
  for (let i = 0; i < len && (k + len - i > result); i++) {
      if (A[i + addA] == B[i + addB]) {
          k++;
      } else {
          k = 0;
      }
      result = Math.max(result, k);
  }
  return result;
}
