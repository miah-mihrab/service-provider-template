const social_icon = document.querySelectorAll('.social-icon')
const container = document.querySelector('.container');
const header = document.querySelector('header');
const logo_brand = document.querySelector('.logo-brand div')
const header_menu = document.querySelector('header .header-menu');
const menu_a = document.querySelectorAll('.header-menu ul li a');
const tp = document.getElementById('index');


//console.log(window.location.href)

//Header properties change on scroll

container.addEventListener('scroll', e => {
    let y_axis = container.scrollTop;
    if (y_axis >= 1.5) {
        // header.style.padding = '0%'
        // logo_brand.style.padding = '5%';
        header.style.backgroundColor = 'rgba(50,53,58,1)';
        header.style.marginLeft = '3%';
        header.style.marginRight = '3%';

    } else if (y_axis < 1.5) {
        // header.style.padding = ''
        // logo_brand.style.padding = '';
        header.style.backgroundColor = '';

    }
})

//Color change on hover of Social Icons
social_icon.forEach(e => {
    //console.log((e.target).children)
    //console.log(e.children)

    e.addEventListener('mouseover', (e) => {
        const parent = (e.target).parentElement;
        //color
        parent.children[0].style.color = '#148DCC';
        parent.children[1].style.color = '#148DCC';

        //transition
        parent.children[0].style.transition = '0.2s'
        parent.children[1].style.transition = '0.2s'

        // const classLst = parent.classList;
        //console.log(e.target)
    });
    e.addEventListener('mouseout', (e) => {
        const parent = (e.target).parentElement;
        parent.children[0].style.color = '#ffffff';
        parent.children[1].style.color = '#ffffff';

        // const classLst = parent.classList;
        //console.log(e.target)
    });

})


//Header link background change on click
let active_window = window.location.href;
active_window = active_window.split('/');
active_window = active_window.reverse();
active_window = (active_window[0].split('.'))[0];
let active = document.getElementById(`${active_window}`);
console.log(active_window)
active.style.backgroundColor = '#ddd';
active.style.color = 'black'
for (let i = 0; i < menu_a.length; i++) {
    menu_a[i].addEventListener('click', () => {
        menu_a[i].style.backgroundColor = '#ddd';
        menu_a[i].style.color = 'black';

        for (let j = 0; j < menu_a.length; j++) {
            if (j != i) {
                menu_a[j].style.backgroundColor = 'transparent';
                menu_a[j].style.color = 'white';

            }
        }
    })
}
// menu_a.forEach(e => {
//    // console.log(e)
//     e.addEventListener('click', () => {
//         e.style.backgroundColor = "#ddd"
//     })
// })

//Random Image
const projects = document.querySelectorAll('.p');
//console.log(projects.length)

function randomImg(i) {
    console.log("Hello")
    return `http://source.unsplash.com/random/${i}`
}
for (let i = 0; i < projects.length; i++) {
    projects[i].style.backgroundImage = `url('${randomImg(i)}')`;
}
// projects.forEach(e => {
//     console.log(e.children[0].src = 'http://source.unsplash.com/random/')
// })

document.querySelector('.menu-icon').addEventListener('click', () => {

    header_menu.classList.toggle('show-header-menu');

})
//Go to top
tp.addEventListener('click', () => {
    //console.log('clicked')
    container.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})