function removeSpaces(string){
  string = string.replace(/\s+/g, '');
  return string.toLowerCase();
}

function divideString (string){
  let arr = [], m=0;
  string = removeSpaces(string);

  str_len = string.length;

  const rows = Math.floor(Math.sqrt(str_len));
  const cols = Math.ceil(Math.sqrt(str_len));

  for(let j=0; j<rows; j++){
      arr.push([]);

      for (let k=0; k<cols; k++){
        if(m>=str_len){
          return arr;
        }

        arr[j][k] = string[m];
        m++;
      }
    }
  return arr;
}

function encode(string){
  let result = divideString(string);
  for (let i=0; i< );
}

