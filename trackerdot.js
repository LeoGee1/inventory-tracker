//this is my helper js page so my tracker.js page dont get to stuffy

// this is to make the store slash icon appear and dissappear on hover xz
const toggle = () => {
    slashParent.forEach((slash) => {
        slash.addEventListener('mouseover', () => {
            slash.firstElementChild.style.visibility = 'visible';
        });
        slash.addEventListener('mouseout', () => {
            slash.firstElementChild.style.visibility = 'hidden';
        });   
    });
};
toggle();

// this is to mark items out of stock
list.addEventListener('click', (e) => {
    if(e.target.className === 'fa-solid fa-store-slash') {
       e.target.parentElement.parentElement.classList.toggle('gray-scale');
       e.target.parentElement.nextElementSibling.classList.toggle('out');
    } 
//this is to remove elements from the dom
    if(e.target.className ==='fa-solid fa-xmark') {
        const item = e.target.parentElement.parentElement;
        list.removeChild(item);
    }
})
//this is to edit our name details and turn it into and input box
const namer = document.querySelector('.name')
namer.addEventListener('click', () => {
   
})
