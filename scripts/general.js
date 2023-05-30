
//In this array is saved all lists in thge page
let listsArr = [];

function renderBoard() {

  document.getElementById('listsArray').innerHTML = "";

  listsArr.forEach( (list) => {
    //first we write a list to the html file
    const input = injectList(list);

    //next we listen for the addCCart button
    input.button.addEventListener('click', () => {
      //console.log(input.value.value);
      if (input.value.value.length) {
        list.cards.push(input.value.value);
        renderBoard();
      };
    });
    

  });

  
  
}



//Add list to listArr
function addList(listTitle) {
  //console.log(`List Created with title: ${listTitle}`)
  let list = {
    title: listTitle,
    cards: []
  }
  listsArr.push(list);
  
  renderBoard();
}

//listener for the add list button
document.getElementById("list-creator-button").addEventListener('click', () => {
  
  let listInput = document.querySelector('.newList').value;
  if (listInput.length) {
    //console.log(listInput);
    addList(listInput);
    document.querySelector('.newList').value = '';
  };
});