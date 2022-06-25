'use strict';

const quiz = [
    {
      question: 'ゲーム史上、最も売れたゲーム機はどれ？',
      answers: [ 'スーパーファミコン', 'PlayStation 2', 'ニンテンドーDS', 'Xbox 360'],
      correct: 'ニンテンドーDS'
    }, {
      question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
      answers: [ 'MOTHER2', 'スーパーマリオブラザーズ3', 'スーパードンキーコング', '星のカービィ'],
      correct: 'MOTHER2'
    }, {
      question: 'ファイナルファンタジーⅣの主人公の名前は？',
      answers: [ 'フリオニール', 'クラウド', 'ティーダ', 'セシル'],
      correct: 'セシル'
    }
  ];

  const quizLength = quiz.length;
  let quizIndex = 0;
  let socre = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//　クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
let buttonIndex = 0;
while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++
    }
}

setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解');
        socre++
    } else {
        window.alert('不正解');
    }

    quizIndex++;
    if(quizIndex < quizLength){
      setupQuiz();
    } else {
      window.alert('終了! あなたの正解数は' + socre + '/' + quizLength + 'です');
      console.log('END');
    }
};


let handleIndex = 0;
while(handleIndex < buttonLength){
    $button[handleIndex].addEventListener('click', (e) => {
        clickHandler(e);
     
     });

    handleIndex++;

}
