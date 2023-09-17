const getClass = (el) => document.querySelector('.' + el);
const STEP = 20;
let currentValue = 0;
const WRAPPER = getClass('wrapper');
const BTN = getClass('btn');
const HIDDEN_BG = getClass('hidden__bg');
const PROGRESS_BAR_VALUE = getClass('progress__bar-value');
const WORD ='медоед';
const lettersArr = WORD.split('');
//создаем в HTML
lettersArr.forEach(el => {
    const cell = document.createElement('p')
    cell.textContent = el;
    WRAPPER.appendChild(cell)
})

function resetProgressBar(text){
    alert(text);
    location.reload();
}

function* changeProgressBar() {
    while (true) {
        // Увеличиваем значение progressBarValue на 20
        currentValue += STEP;
        // Обновляем текст в progressBarValue
        PROGRESS_BAR_VALUE.textContent = currentValue;
        // Задаем ширину hiddenBg в 20%
        HIDDEN_BG.style.width = `${currentValue}%`;

        // Ждем следующего клика
        yield;
    }
}
const forChangeProgressBar = changeProgressBar()

BTN.addEventListener('click', () => {
    const inputValue = getClass('input').value;
    let shouldAdvanceProgressBar = true;// Флаг, определяющий, следует ли продвигать прогресс-бар

    lettersArr.forEach((el, index) => {
        if (el === inputValue) {
            // Получаем элемент <p> по индексу и изменяем его стиль
            const paragraph = WRAPPER.childNodes[index];
            paragraph.style.fontSize = '30px';
            shouldAdvanceProgressBar = false; // Совпадение найдено, не продвигаем прогресс-бар
        }
    });
    if (shouldAdvanceProgressBar) {
        forChangeProgressBar.next(); // Продвигаем прогресс-бар только если не было совпадений
    }
    const includesFontSize = Array.from(WRAPPER.childNodes).every(paragraph => paragraph.style.fontSize === '30px');
    if (includesFontSize) {
        setTimeout(resetProgressBar('Вы выиграли'), 1000)
    }
    if(currentValue >= 100){
       setTimeout(resetProgressBar('Вы проиграли'), 500)
    }
});
