// const input =  require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let input = `8
4
3
6
8
7
5
2
1`.split('\n');

// const input = `-1 -2 -3 -4`;
let len = input.shift();
let result = [];
let check = true;
let data = 1;
let stack=[];
for(let i=0;i<len;i++){
  while(input[i]>=data){
    stack.push(data);
    result.push('+');
    data++;
  }

  let tmp = stack.pop();
  if(input[i] == tmp){
    result.push('-');
  }
  else{
    check = false;
    break;
  }
}

console.log((check) ? result.join('\n') : 'NO');

