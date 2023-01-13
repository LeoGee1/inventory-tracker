//this is my helper js page so my tracker.js page dont get to stuffy
const toggle = () => {
    const slashParent = document.querySelectorAll('.slash-parent');
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
        let product = e.target.parentElement.parentElement;
        list.removeChild(product);
        samplesData = samplesData.filter((x) => x.id !== product.id)
        
        localStorage.setItem('samples', JSON.stringify(samplesData));
    };
});
// this is to increase items in the qauntity
let increment = (id) => {
    let selectedItem = id;

    let search = basket.find((sample) => sample.id === selectedItem.id);

    console.log(search);
    if (search === undefined) return 
    else{
        search.item += 1
    }

    document.getElementById(selectedItem.id).innerHTML = search.item
   
    localStorage.setItem('data', JSON.stringify(basket));

}
//this to decrease items in the quantity
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((sample) => sample.id === selectedItem.id);
    if(search === undefined || search.item === 0) return;
    else {
        search.item -= 1
    }
    document.getElementById(selectedItem.id).innerHTML = search.item
    basket = basket.filter((sample) => sample.item > 0);
    
    localStorage.setItem('data', JSON.stringify(basket));

};


//this is to edit our description details and turn it into and input box
detailsList.addEventListener('click', (e) => { 
if(e.target.className === 'fa-solid fa-ellipsis') {
    
    let details = e.target.parentElement.nextElementSibling;
    let content = e.target.parentElement.nextElementSibling.textContent;        
    let newDetails = document.createElement('TEXTAREA');
    newDetails.setAttribute('class', 'false-input');
    newDetails.setAttribute('maxlength', '160');

    details.parentElement.replaceChild(newDetails, details);
    newDetails.textContent = content;
    e.target.previousElementSibling.style.display = 'block';
 }

 // to update edits...
 if(e.target.className === 'fa-regular fa-square-check') {
    let newDetails = e.target.parentElement.nextElementSibling;
    let content = e.target.parentElement.nextElementSibling.value;
    let productName = newDetails.parentElement.previousElementSibling.lastElementChild.innerHTML;
    let search = basket.find((x) => x.name === productName);
    let details = document.createElement('h3');
    details.setAttribute('class', 'description');
    
    newDetails.parentElement.replaceChild(details, newDetails);
    details.textContent = content;
    e.target.style.display = 'none';

    if (search !== undefined){
        search.desc = content
    }
    localStorage.setItem('data', JSON.stringify(basket));
    }
});


