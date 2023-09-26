const getClass = (el) => document.querySelector('.' + el);
const STEP = 20;
const FONT_SIZE = '30px';
let currentValue = 0;
const WRAPPER = getClass('wrapper');
const BTN = getClass('btn');
const HIDDEN_BG = getClass('hidden__bg');
const PROGRESS_BAR_VALUE = getClass('progress__bar-value');
const WORD ='медоед';
const lettersArr = WORD.split('').map(el => el.toUpperCase());
//создаем в HTML
lettersArr.forEach(el => {
    const cell = document.createElement('p')
    cell.textContent = el;
    WRAPPER.appendChild(cell)
})

function resetProgressBar(text){
    alert(text);
}

function* changeProgressBar() {
    while (true) {
        currentValue += STEP;
        PROGRESS_BAR_VALUE.textContent = currentValue;
        HIDDEN_BG.style.width = `${currentValue}%`;
        yield;
    }
}
const forChangeProgressBar = changeProgressBar()

BTN.addEventListener('click', () => {
    const inputValue = (getClass('input').value).toUpperCase();
    let shouldAdvanceProgressBar = true;// Флаг, определяющий, следует ли продвигать прогресс-бар

    lettersArr.forEach((el, index) => {
        if (el === inputValue) {
            // Получаем элемент <p> по индексу и изменяем его стиль
            const paragraph = WRAPPER.childNodes[index];
            paragraph.style.fontSize = FONT_SIZE;
            shouldAdvanceProgressBar = false; // Совпадение найдено, не продвигаем прогресс-бар
        }
    });
    shouldAdvanceProgressBar ? forChangeProgressBar.next() : '' ; // Продвигаем прогресс-бар только если не было совпадений
    
    const includesFontSize = Array.from(WRAPPER.childNodes).every(paragraph => paragraph.style.fontSize === FONT_SIZE);

    includesFontSize ? setTimeout(() => resetProgressBar('Вы выиграли'), 1000) : '';
    (currentValue >= 100) ? setTimeout(() => resetProgressBar('Вы проиграли'), 1000) : '' ;
});
