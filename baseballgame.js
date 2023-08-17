let randomArr = [];
let answer = [];
let count = 1;
let strike = 0;
let ball = 0;


// 랜덤 번호를 생성 
for (i = 0; i < 3; i++) {
    randomNum = Math.floor(Math.random() * (9 - 0) + 1)

    //indexOf 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환
    // push 는배열에 추가하는 매서드 randomIndexArray 이 비어서 여기서 값을추가
    if (randomArr.indexOf(randomNum) === -1) {
        randomArr.push(randomNum)

    } else {
        i--
    }
}

// console.log(...randomArr)
while (count <= 10) {
      let input = prompt('숫자를 입력하세요')
    let answer = input.split('');
    strike = 0;
    ball = 0;
    count++
    for (y = 0; y < 3; y++) {
        for (z = 0; z < 3; z++) {
            if (answer[y] == randomArr[z]) {
                if (y === z) {
                    strike++;
                } else {
                    ball++
                }
                // break;
            }
        }
    }

    
    if (strike === 3) {
        console.log('정답입니다' + (count - 1) + '번 만에 맞히셨습니다. ')
        console.error('게임을 종료합니다.')
        break;
    
    } else if (count > 10) {
        console.error('실패!')
    } else {
        console.info((count-1) + '번째시도' + answer.join('')+ ':'+ strike + 'S ' + ball + 'B')
    }

}


// console.log(randomArr)
console.log(...randomArr)
// console.log(strike +'S' + ball +'B')
// console.log(count + '번만에 맞히셨습니다.')
// console.log('게임을 종료합니다.')



