const scopeButtons = document.querySelector('.wrapper__buttons');
const scopeList = document.querySelector('.wrapper__content');
const ul = document.createElement('ul');
let currentPage;
// Для кнопок
const buttonData = [
    { text: '<<', disabled: true, id: 0 },
    { text: '<', disabled: true, id: 1 },
    { text: '1', disabled: true, id: 2 },
    { text: '2', disabled: false, id: 3 },
    { text: '3', disabled: false, id: 4 },
    { text: '4', disabled: false, id: 5 },
    { text: '5', disabled: false, id: 6 },
    { text: '>', disabled: false, id: 7 },
    { text: '>>', disabled: false, id: 8 },
];

function createButtons(dataArray, parentElement) {
    dataArray.forEach(item => {
        const button = document.createElement('button');
        button.innerText = item.text;
        button.disabled = item.disabled;
        button.id = item.id;
        parentElement.append(button);
    });
}

createButtons(buttonData, scopeButtons);
///

/// Создаем список из 50 элементов
for (let i = 0; i <= 49; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i + 1}`;
    ul.appendChild(li);
}
scopeList.appendChild(ul);

///
const listItems = ul.querySelectorAll("li");
const elementsOnPage = listItems.length / 5;
///

/// коллекция кнопок
const collectionButtons = []
const getBtn = value => scopeButtons.querySelectorAll('button')[value];
for (let i = 0; i <= 8; i++) {
    collectionButtons.push(getBtn(i))
}
console.log(collectionButtons);

// Скрываем все элементы li, кроме первых 10
for (let i = 0; i < listItems.length; i++) {
    if (i >= elementsOnPage) {
        listItems[i].style.display = 'none';
    }
}

const deleteBackGround = () => {
    collectionButtons.forEach(button => {
        button.style.backgroundColor = '';
    });
}

const getCurrentPage = el => currentPage = collectionButtons[el].id;

const addBackGround = el => collectionButtons[el].style.backgroundColor = 'red';

// Клики на наши кнопки
collectionButtons[2].style.backgroundColor = 'red';

collectionButtons[2].addEventListener('click', function () {
    deleteBackGround();
    getCurrentPage(2)
    addBackGround(2);
    for (let i = 0; i < listItems.length; i++) {
        if (i < elementsOnPage) {
            listItems[i].style.display = 'block';
        } else {
            listItems[i].style.display = 'none';
        }
    }
    for (let i = 0; i < 3; i++) {
        collectionButtons[i].disabled = true;
    }
    for (let i = 7; i <= 8; i++) {
        collectionButtons[i].disabled = false;
    }
})


collectionButtons[3].addEventListener('click', function () {
    deleteBackGround();
    getCurrentPage(3)
    addBackGround(3);
    for (let i = 0; i < listItems.length; i++) {
        if (i >= elementsOnPage && i < elementsOnPage * 2) {
            listItems[i].style.display = 'block';
        } else {
            listItems[i].style.display = 'none';
        }
    }
    for (let i = 0; i < 3; i++) {
        collectionButtons[i].disabled = false;
    }
    for (let i = 7; i <= 8; i++) {
        collectionButtons[i].disabled = false;
    }
})



collectionButtons[4].addEventListener('click', function () {
    deleteBackGround();
    getCurrentPage(4)
    addBackGround(4);
    for (let i = 0; i < listItems.length; i++) {
        if (i >= elementsOnPage * 2 && i < elementsOnPage * 3) {
            listItems[i].style.display = 'block';
        } else {
            listItems[i].style.display = 'none';
        }
    }
    for (let i = 0; i < 3; i++) {
        collectionButtons[i].disabled = false;
    }
    for (let i = 7; i <= 8; i++) {
        collectionButtons[i].disabled = false;
    }
})


collectionButtons[5].addEventListener('click', function () {
    deleteBackGround();
    getCurrentPage(5)
    addBackGround(5);
    for (let i = 0; i < listItems.length; i++) {
        if (i >= elementsOnPage * 3 && i < elementsOnPage * 4) {
            listItems[i].style.display = 'block';
        } else {
            listItems[i].style.display = 'none';
        }
    }
    for (let i = 0; i < 3; i++) {
        collectionButtons[i].disabled = false;
    }
    for (let i = 7; i <= 8; i++) {
        collectionButtons[i].disabled = false;
    }
})


collectionButtons[6].addEventListener('click', function () {
    deleteBackGround();
    getCurrentPage(6)
    addBackGround(6);
    for (let i = 0; i < listItems.length; i++) {
        if (i >= elementsOnPage * 4 && i < elementsOnPage * 5) {
            listItems[i].style.display = 'block';
        } else {
            listItems[i].style.display = 'none';
        }
    }
    for (let i = 0; i < 3; i++) {
        collectionButtons[i].disabled = false;
    }
    for (let i = 7; i <= 8; i++) {
        collectionButtons[i].disabled = true;
    }
})


// Для кнопок со стрелками
//<<
collectionButtons[0].addEventListener('click', function () {
    deleteBackGround();
    getCurrentPage(2)
    collectionButtons[2].style.backgroundColor = 'red';
    for (let i = 0; i < listItems.length; i++) {
        if (i < elementsOnPage) {
            listItems[i].style.display = 'block';
        } else {
            listItems[i].style.display = 'none';
        }
    }
    for (let i = 0; i < 3; i++) {
        collectionButtons[i].disabled = true;
    }
    for (let i = 7; i <= 8; i++) {
        collectionButtons[i].disabled = false;
    }
})

//>>
collectionButtons[8].addEventListener('click', function () {
    deleteBackGround();
    getCurrentPage(6)
    collectionButtons[6].style.backgroundColor = 'red';
    for (let i = 0; i < listItems.length; i++) {
        if (i >= elementsOnPage * 4 && i < elementsOnPage * 5) {
            listItems[i].style.display = 'block';
        } else {
            listItems[i].style.display = 'none';
        }
    }
    for (let i = 0; i < 3; i++) {
        collectionButtons[i].disabled = false;
    }
    for (let i = 7; i <= 8; i++) {
        collectionButtons[i].disabled = true;
    }
})

//<
collectionButtons[1].addEventListener('click', function () {
    deleteBackGround();
    if (currentPage == 6) {
        deleteBackGround();
        getCurrentPage(5)
        addBackGround(5);
        for (let i = 0; i < listItems.length; i++) {
            if (i >= elementsOnPage * 3 && i < elementsOnPage * 4) {
                listItems[i].style.display = 'block';
            } else {
                listItems[i].style.display = 'none';
            }
        }
        for (let i = 0; i < 3; i++) {
            collectionButtons[i].disabled = false;
        }
        for (let i = 7; i <= 8; i++) {
            collectionButtons[i].disabled = false;
        }
    } else if (currentPage == 5) {
        deleteBackGround();
        getCurrentPage(4)
        addBackGround(4);
        for (let i = 0; i < listItems.length; i++) {
            if (i >= elementsOnPage * 2 && i < elementsOnPage * 3) {
                listItems[i].style.display = 'block';
            } else {
                listItems[i].style.display = 'none';
            }
        }
        for (let i = 0; i < 3; i++) {
            collectionButtons[i].disabled = false;
        }
        for (let i = 7; i <= 8; i++) {
            collectionButtons[i].disabled = false;
        }
    } else if (currentPage == 4) {
        deleteBackGround();
        getCurrentPage(3)
        addBackGround(3);
        for (let i = 0; i < listItems.length; i++) {
            if (i >= elementsOnPage && i < elementsOnPage * 2) {
                listItems[i].style.display = 'block';
            } else {
                listItems[i].style.display = 'none';
            }
        }
        for (let i = 0; i < 3; i++) {
            collectionButtons[i].disabled = false;
        }
        for (let i = 7; i <= 8; i++) {
            collectionButtons[i].disabled = false;
        }
    } else if (currentPage == 3) {
        deleteBackGround();
        getCurrentPage(2)
        addBackGround(2);
        for (let i = 0; i < listItems.length; i++) {
            if (i < elementsOnPage) {
                listItems[i].style.display = 'block';
            } else {
                listItems[i].style.display = 'none';
            }
        }
        for (let i = 0; i < 3; i++) {
            collectionButtons[i].disabled = true;
        }
        for (let i = 7; i <= 8; i++) {
            collectionButtons[i].disabled = false;
        }
    }

});










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