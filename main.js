// const elements = document.querySelectorAll('.box__element');
// let COUNT = 0;
// const btn = document.querySelector('.btn');
// const text = document.querySelector('.text');

// elements.forEach(element => {
//     element.addEventListener('click', () => element.classList.toggle('box__element--active'));
// });
// btn.addEventListener('click', () => {
//     COUNT = 0;
//     elements.forEach(element => {
//         COUNT += element.classList.contains('box__element--active') ? 1 : 0;
//     });
//     text.innerHTML = COUNT;
// });



class BoxElementManager {
    constructor() {
        this.elements = document.querySelectorAll('.box__element');
        this.COUNT = 0;
        this.btn = document.querySelector('.btn');
        this.text = document.querySelector('.text');

        this.elements.forEach(element => {
            element.addEventListener('click', () => this.toggleElement(element));
        });
        this.btn.addEventListener('click', () => {
            this.COUNT = 0;
            this.elements.forEach(element => {
                if (element.classList.contains('box__element--active')) {
                    this.COUNT++;
                }
            });
            this.text.innerHTML = this.COUNT;
        });
    }
    toggleElement(element) {
        element.classList.toggle('box__element--active');
    }
}
const boxElementManager = new BoxElementManager();

