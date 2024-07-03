console.log('pages/content/index.js');
console.log(document.URL);

let body = document.querySelector('body');
let debug = document.createElement('div');
debug.innerText = 'Loaded!';
debug.className = 'debug_popup';

body.appendChild(debug);
// document
//   .getElementsByTagName('body')
//   .appendChild(`<div>확장프로그램 로딩 완료</div>`);
