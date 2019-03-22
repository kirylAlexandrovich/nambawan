/** MENU **/
const menuButton = document.getElementById('menuButton');
const burgerMenu = document.getElementById('burgerMenu');

function showMenu() {
    burgerMenu.style.display = 'block';
}

function hideMenu() {
    burgerMenu.style.display = 'none';
}

menuButton.addEventListener('click', showMenu);
burgerMenu.addEventListener('click', hideMenu);

/** SLIDERS **/
let leftSlider;
let rightSlider;
let liItems;
let imageWidth;
let imageNumber;
let currentImage = 0;
const animationDelay = 17;

function init() {
    leftSlider = document.getElementById('imageSlider_1');
    rightSlider = document.getElementById('imageSlider_2');

    liItems = leftSlider.children;
    imageNumber = liItems.length;
    imageWidth = liItems[0].children[0].offsetWidth;

    leftSlider.style.width = parseInt(imageWidth * imageNumber) + 'px';
    rightSlider.style.width = parseInt(imageWidth * imageNumber) + 'px';

    slider(leftSlider, rightSlider);
}

function slider(leftSlider, rightSlider) {
    animate({
        delay: animationDelay,
        duration: 3000,
        delta: function (p) {
            return Math.max(0, -1 + 2 * p)
        },
        step: function (delta) {
            leftSlider.style.left = '-' + parseInt(currentImage * imageWidth + delta * imageWidth) + 'px';
            rightSlider.style.left = '-' + parseInt(currentImage * imageWidth + delta * imageWidth) + 'px';
        },
        callback: function () {
            currentImage++;
            if (currentImage < imageNumber - 1) {
                slider(leftSlider, rightSlider);
            }
            else {
                let leftPosition = (imageNumber - 1) * imageWidth;

                setTimeout(function () {
                    goBack(leftPosition)
                }, 2000);

                setTimeout(function () {
                    slider(leftSlider, rightSlider)
                }, 4000);
            }
        }
    });
}

function animate(opts) {
    let start = new Date;
    let id = setInterval(function () {
        let timePassed = new Date - start;
        let progress = timePassed / opts.duration

        if (progress > 1) {
            progress = 1;
        }

        let delta = opts.delta(progress);
        opts.step(delta);

        if (progress == 1) {
            clearInterval(id);
            opts.callback();
        }
    }, opts.dalay || animationDelay);
}

function goBack(leftPosition) {
    currentImage = 0;
    let id = setInterval(function () {
        if (leftPosition >= 0) {
            leftSlider.style.left = '-' + parseInt(leftPosition) + 'px';
            rightSlider.style.left = '-' + parseInt(leftPosition) + 'px';
            leftPosition -= imageWidth / 10;
        } else {
            clearInterval(id);
        }
    }, animationDelay);
}

window.onload = init();