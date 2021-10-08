// const input =  require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = `4 3
// 9 7 4
// 9 7 4`.split('\n');

const input = '1111111';

function solution(s) {
  let tr_cnt=0;
  let zero_cnt=0;
  let before_length=s.length;

  while(s !== '1') {
    s=s.split('').filter(x => x ==='1');
    zero_cnt += before_length - s.length;
    s = decTo2(s.length);
    tr_cnt += 1;
    before_length = s.length;
  }
  return [tr_cnt, zero_cnt];
}

function decTo2(num) {
  let result = '';
  while(num){
    result = num % 2 + result;
    num = parseInt(num/2);
  }
  return result;
}

solution(input);

