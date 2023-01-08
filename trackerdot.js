//this is my helper js page so my tracker.js page dont get to stuffy
let data = 1;
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
        const bigbox = document.querySelectorAll('.big-box');
        const theItems = document.querySelectorAll('.items');

        // let name = item.lastElementChild.firstElementChild.textContent;
        let id = item.id
        list.removeChild(item);

    
        bigbox.forEach((box) => {
            if(item.lastElementChild.textContent === box.firstElementChild.lastElementChild.textContent) {
            detailsList.removeChild(box)
            }
        });

        // if(item.lastElementChild.textContent === bigbox.firstElementChild.lastElementChild.textContent) {
        //     detailsList.removeChild(bigbox)
        // }

        // let sample = JSON.parse(localStorage.getItem('sample'));

        // localStorage.setItem('sample', JSON.stringify(sample));
        
    };
    
});

 //this is to increase the quantity
detailsList.addEventListener('click', (e) => {
    if(e.target.className === 'fa-solid fa-plus fap' && data < 5) {
        let add = e.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling;
        data++;
        add.innerText = data;

        let  sample = (JSON.parse(localStorage.getItem('sample')));
        let newItem = {
            quantity: data
        };
        sample.push(newItem);
        localStorage.setItem('sample', JSON.stringify(sample));
     };

// this is to decrease quantity   
     if(e.target.className === 'fa-solid fa-minus fas' && data > 1) {
        let reduce = e.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling
        data--;
        reduce.innerText = data;

        let sample = (JSON.parse(localStorage.getItem('sample')));
        let newItem = {
            quantity: data
        };
        sample.push(newItem);
        localStorage.setItem('sample', JSON.stringify(sample));
     };

//this is to edit our description details and turn it into and input box 
if(e.target.className === 'fa-solid fa-ellipsis') {
    let details = e.target.parentElement.nextElementSibling;
    let content = e.target.parentElement.nextElementSibling.textContent;        
    let newDetails = document.createElement('TEXTAREA');
    newDetails.setAttribute('class', 'false-input');
    newDetails.setAttribute('maxlength', '160')

    details.parentElement.replaceChild(newDetails, details);
    newDetails.textContent = content;
    e.target.previousElementSibling.style.display = 'block'

 }
 // to update edits...
 if(e.target.className === 'fa-regular fa-square-check') {
    let newDetails = e.target.parentElement.nextElementSibling;
    let content = e.target.parentElement.nextElementSibling.value;
    let details = document.createElement('h3');
    details.setAttribute('class', 'description');
    
    newDetails.parentElement.replaceChild(details, newDetails);
    details.textContent = content;
    e.target.style.display = 'none'

    let sample = JSON.parse(localStorage.getItem('sample'));
    let newItem = {
        description: content
    };
    sample.push(newItem);
    localStorage.setItem('sample', JSON.stringify(sample));

    }
});


