function removeSpaces(string) {
  string = string.replace(/\s+/g, '');
  return string.toLowerCase();
}

function divideString(string) {
  let arr = [],
    m = 0;
  string = removeSpaces(string);

  str_len = string.length;

  const rows = Math.ceil(Math.sqrt(str_len));
  const cols = Math.ceil(Math.sqrt(str_len));

  for (let j = 0; j < rows; j++) {
    arr.push([]);
    for (let k = 0; k < cols; k++) {
      if (m >= str_len) {
        return arr;
      }
      arr[j][k] = string[m];
      m++;
    }
  }
  return arr;
}

function encode(string) {
  let result = divideString(string);
  let encoded = [];
  let stringResult = '', j = 0;

  for (let k = 0; k <= result[0].length; k++) {
    js: for (let i = 0; i < result.length; i++) {
      if (j > result[i].length) continue;
      if (!result[i][j]) {
        continue js;
      }
      stringResult += result[i][j];
    }
    j++; stringResult += ' ';
  }
  encoded.push(stringResult);
  j++;

  return encoded;
}

//encode('welcome to javascript once again');
