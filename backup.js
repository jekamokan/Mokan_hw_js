const collectionButtons = document.querySelector('.wrapper__buttons');

const buttonData = [
    { name: 'firstButton', text: '<<', disabled: true },
    { name: 'prevButton', text: '<', disabled: true },
    { name: 'oneButton', text: '1', disabled: true },
    { name: 'twoButton', text: '2', disabled: false },
    { name: 'threeButton', text: '3', disabled: false },
    { name: 'fourButton', text: '4', disabled: false },
    { name: 'fiveButton', text: '5', disabled: false },
    { name: 'nextButton', text: '>', disabled: false },
    { name: 'lastButton', text: '>>', disabled:false },
  ];

  function createButtons(dataArray, parentElement) {
    dataArray.forEach(item => {
      window[item.name] = document.createElement('button'); // Создаем переменную с именем из объекта
      const button = window[item.name]; // Присваиваем переменной созданный элемент
      button.innerText = item.text;
      button.disabled = item.disabled;
      parentElement.append(button);
    });
  }
  
  createButtons(buttonData, collectionButtons);

// const firstButton = scopeButtons.querySelectorAll('button')[0];
// const prevButton = scopeButtons.querySelectorAll('button')[1];
// const oneButton = scopeButtons.querySelectorAll('button')[2];
// const twoButton = scopeButtons.querySelectorAll('button')[3];
// const threeButton = scopeButtons.querySelectorAll('button')[4];
// const fourButton = scopeButtons.querySelectorAll('button')[5];
// const fiveButton = scopeButtons.querySelectorAll('button')[6];
// const nextButton = scopeButtons.querySelectorAll('button')[7];
// const lastButton = scopeButtons.querySelectorAll('button')[8];





// const firstButton = document.createElement('button')
// firstButton.innerText = '<<'
// firstButton.disabled = true
// collectionButtons.append(firstButton)

// const prevButton = document.createElement('button')
// prevButton.innerText = '<'
// prevButton.disabled  = true
// collectionButtons.append(prevButton)

// const oneButton = document.createElement('button')
// oneButton.innerText = '1'
// oneButton.disabled  = true
// collectionButtons.append(oneButton)

// const twoButton = document.createElement('button')
// twoButton.innerText = '2'
// collectionButtons.append(twoButton)

// const threeButton = document.createElement('button')
// threeButton.innerText = '3'
// collectionButtons.append(threeButton)

// const fourButton = document.createElement('button')
// fourButton.innerText = '4'
// collectionButtons.append(fourButton)

// const fiveButton = document.createElement('button')
// fiveButton.innerText = '5'
// collectionButtons.append(fiveButton)

// const nextButton = document.createElement('button')
// nextButton.innerText = '>'
// collectionButtons.append(nextButton)

// const lastButton = document.createElement('button')
// lastButton.innerText = '>>'
// collectionButtons.append(lastButton)