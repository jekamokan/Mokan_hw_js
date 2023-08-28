const elements = document.querySelectorAll('.box__element');
let COUNT = 0;
const btn = document.querySelector('.btn');

elements.forEach(element => {
    element.addEventListener('click', () => element.classList.toggle('box__element--active'));
});
btn.addEventListener('click', () => {
    COUNT = 0;
    elements.forEach(element => {
        if (element.classList.contains('box__element--active')) {
            COUNT++;
        }
        
    });
    console.log(`Количество активных элементов: ${COUNT}`);
});





class BoxElementManager {
    constructor() {
        this.elements = document.querySelectorAll('.box__element');
        this.count = 0;
        this.btn = document.querySelector('.btn');

        this.elements.forEach(element => {
            element.addEventListener('click', () => this.toggleElement(element));
        });

        this.btn.addEventListener('click', () => {
            this.count = 0;
            this.elements.forEach(element => {
                if (element.classList.contains('box__element--active')) {
                    this.count++;
                }
            });
            console.log(`Количество активных элементов: ${this.count}`);
        });
    }

    toggleElement(element) {
        element.classList.toggle('box__element--active');
    }
}

const boxElementManager = new BoxElementManager();