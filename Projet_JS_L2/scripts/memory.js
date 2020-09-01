let precedente = -1;
let attente = 0;
let img;
let imgp;

let click = 0;
let clickValue = 0;
let imgClassSatut = document.querySelectorAll('img');
let timer;
let firstImage;
let secondImage;
let tabImage = [];
let refClassValue = [];

function compte() {
    attente++;
}
timer = setInterval("compte()", 1000);

function stop() {
    clearTimeout(timer);
}

const clic = function(n) {
    img = document.querySelector("#img" + n);
    click++;
    clickValue++;
    tabImage.push(img.src);
    if (img.style.visibility != "visible")
        img.style.visibility = "visible";
    switch (tabImage.length) {
        case 1:
            firstImage = img;
            break;
        case 2:
            secondImage = img;
            if (firstImage.src == secondImage.src) {
                console.log('identique');
                // console.log(firstImage);
                for (let index = 0; index < imgClassSatut.length; index++) {
                    const element = imgClassSatut[index];
                    if (element == firstImage) {
                        refClassValue.push(firstImage.style.visibility);
                        refClassValue.push(secondImage.style.visibility);
                        if (refClassValue.length == 16) {
                            document.querySelector('h1').textContent = 'Bravo vous avez réussi en ' + clickValue + ' clicks' + ' et en  ' + attente + ' secondes';

                        }
                    }
                }
            } else {
                console.log('differentes');
                setTimeout(() => {
                    img.style.visibility = 'visible';
                }, 100);

                setTimeout(() => {
                    img.style.visibility = 'hidden';
                }, 100);

                firstImage.style.visibility = 'hidden';
            }
            tabImage = [];
            // click = 0;
            firstImage = '';
            secondImage = '';
            break;
            // default:
    }


    // setTimeout(() => {

    // }, 100);
};





document.querySelector('.jeu').addEventListener('click', () => {
    // console.log(imgClassSatut);
});

const initgame = () => {
    for (let i = 1; i <= 200; i++) {
        const n1 = Math.ceil(16 * Math.random());
        const n2 = Math.ceil(16 * Math.random());
        let img1 = document.querySelector("#img" + n1);
        let img2 = document.querySelector("#img" + n2);
        let src1 = img1.src;
        let src2 = img2.src;
        img1.src = src2;
        img2.src = src1;
    }
};