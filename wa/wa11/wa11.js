const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pictures = [
    './img/pic1.jpg',
    './img/pic2.jpg',
    './img/pic3.jpg',
    './img/pic4.jpg',
    './img/pic5.jpg'
];

/* Declaring the alternative text for each image file */
const altText = [
    'Picture of ladies eye',
    'Ariel view of landscape',
    'Picture of purple flowers',
    'Picture of ancient egypt wall paintings',
    'Picture of butterfly on a leaf'
];
/* Looping through images */
let i = 0;
while (i < pictures.length) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', pictures[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function() {
        displayedImage.setAttribute('src', this.src);
        displayedImage.setAttribute('alt', this.alt);
    });

    i++;

}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    const checkClass = btn.getAttribute('class');
    if (checkClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});




