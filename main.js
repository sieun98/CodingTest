// const input =  require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let input = `1
13`.split('\n');

// const input = `-1 -2 -3 -4`;
let len = input.shift();
for(let i=0;i<len;i++){
  console.log(decTo2(input[i]));
}

function decTo2(num) {
  let result = [];
  let po = 0;
  while(num){
    if(num%2 === 1){
      result.push(po);
    }
    num = parseInt(num/2);
    po++;
  }

  return result.join(' ');
}