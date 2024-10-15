/*
//Ex 1

const add = function() {
    console.log(2+3)
}

add()
add()

//Ex 2

const add = function() {
    console.log(2 + 3);
  };

  function runTwice(fun) {
    fun();
    fun();
  }

  runTwice(function() {
    console.log('12b');
  });
  
  runTwice(add);

//Ex 3

function interact() {
    setTimeout( function() {
        document.getElementsByTagName("button")[0].innerText = 'Finished !'
    }, 1000)
}

//Ex 4

const addCartBtn = document.querySelector('.btn');
addCartBtn.addEventListener("click", interact)
let timeoutId;


function interact() {
    clearTimeout(timeoutId)
    const paragraph = document.getElementsByTagName("p")[0];
    paragraph.innerText = 'Added Item'

    timeoutId = setTimeout( function() {
        paragraph.innerText = ''
    }, 2000)
}

//Ex 5

setInterval(function() {
    if (document.title === 'Advanced functions exercices') {
      document.title = '(2) New messages';
    } else {
      document.title = 'Advanced functions exercices';
    }
  }, 2000);

//Ex 6

const addBtn = document.querySelector('.addMsg');
addBtn.addEventListener("click", renderNewMessages);
addBtn.addEventListener("click", funAddMsg);

const rmvBtn = document.querySelector('.rmvMsg');
rmvBtn.addEventListener("click", renderNewMessages);
rmvBtn.addEventListener("click", funRmvMsg);

let newMsgs = 0;

const setIntervalId = setInterval(function() {
  if(newMsgs === 0) {
    document.title = 'Advanced functions exercices';
  } else {  
  if (document.title === 'Advanced functions exercices') {
    document.title = `(${newMsgs}) New Messages`;
  } else {
    document.title = 'Advanced functions exercices';
  }
}
}, 2000);


function funAddMsg() {
  newMsgs++
}
function funRmvMsg() {
  if(newMsgs <= 0) {
    return;
  } else {
    newMsgs--
  }
}

function renderNewMessages () {
  setIntervalId
}

*/

