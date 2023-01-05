const menuButton = document.querySelector('.menu__button');
const closeButton = document.querySelector('.close');
const nav = document.querySelector('.nav__wrapper');
const featuredWrapper = document.querySelector('.featured__products');
const moreButton = document.querySelector('.featured__more');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
});

closeButton.addEventListener('click', () => {
    nav.classList.toggle('open');
});

const featuredData = [
    {
        imgSrc: './assets/images/bmw.jpg',
        heading: 'BMW X6 M Competition',
        title: 'The X6 M enters the 2021 model year with only the smallest of changes.',
        explainer: ' As the sloped-back counterpart to the BMW X5 M SUV and the raciest version of the regular BMW X6, the mid-sizer with a mean mug boasts an incredibly powerful twin-turbo V-8 and a body style that separates it from the status quo.',
    },
    {
        imgSrc: './assets/images/audi.jpg',
        heading: 'Audi RS7 Sport',
        title: 'Audi RS7 Sport is the latest RS7 to be produced, available in both RHD and LHD.',
        explainer: 'The Audi RS7 is a largemouth high-performance hatchback sedan with swollen fenders and a spacious interior that’s chock full of the luxuries and high-tech gear you’d expect in a super-sedan.',
    },
    {
        imgSrc: './assets/images/cadilac.jpg',
        heading: '2020 Cadillac Escalade',
        title: 'Even though it shares parts with lesser GM products, the 2020 Escalade is unmistakably a luxury SUV.',
        explainer: 'Along with its chrome-laden shell, the Escalade has a host of upscale standard features such as a leather interior, heated and ventilated front seats, self-parking assist, and more. Every Slade is motivated by a gutsy V-8 that pairs with rear- or all-wheel drive and can tow up to a hefty 8300 pounds.',
    },
    {
        imgSrc: './assets/images/mk8.jpg',
        heading: 'Volkswagen Golf GTI',
        title: 'Fears that Volkswagen would annihilate the entire Golf lineup are all but forsaken, with the 2022 Golf GTI set to begin an all-new generation of the sporty hatchback.',
        explainer: `The 2022 Golf GTI is all new and marks the storied nameplate's eighth generation. While its styling is evolutionary rather than revolutionary, VW has packed the hatchback with more technology and enhanced performance. Its fresh exterior styling is promoted by sleeker LED headlights and a gaping lower grille with fog lights integrated into the mesh.`,
    },
    {
        imgSrc: './assets/images/rover.jpg',
        heading: 'Land Rover Defender',
        title: 'The 2022 Land Rover Defender might look reminiscent of the 1950s original, but in reality it is a completely modern, high-tech off-roader with unique curb appeal.',
        explainer: `Land Rover is introducing a V-8 engine into the Defender lineup for 2022: the 518-hp Supercharged 5.0-liter V-8 that's found in the Range Rover and Range Rover Sport models`,
    },
    {
        imgSrc: './assets/images/volvo.jpg',
        heading: '2022 Volvo XC60',
        title: `Volvo's unique Swedish perspective is evident in every one of the brand's products, including its top-seller, the stylish and thoughtfully-designed 2022 XC60 SUV.`,
        explainer: `Several subtle styling changes help mark the 2022 model year as well, including a tweaked grille, a re-worked front bumper, updated wheel designs, and the introduction of Volvo's City Weave cloth upholstery as an option for the first time on the XC60.`,
    },
];

const featuredHtml = featuredData.map((item, index) => (
    `
        <li class="--featured ${ index > 1 ? 'd-none' : ''}">
            <div class="left"><img src="${item.imgSrc}" alt="Featured" class="featured"></div>
            <div class="right">
                <h5>${item.heading}</h5>
                <p class="title">${item.title}</p>
                <hr class="--product__hr">
                <p class="explainer">${item.explainer}</p>
            </div>
        </li>
    `
));

featuredWrapper.innerHTML = featuredHtml.join('');

moreButton.addEventListener('click', () => {
    const featured = document.querySelectorAll('.--featured');
    featured.forEach((card) => {
        if (card.classList.contains('d-none')) {
            card.classList.remove('d-none');
        }
    });
});