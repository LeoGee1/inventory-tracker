const tabs = document.querySelector('#tabs-parent');
const sections = document.querySelectorAll('.section');
const heads = document.querySelectorAll('.heads');
const tabbed = document.querySelectorAll('.tab');
const list = document.querySelector('#homePage');
const detailsList = document.querySelector('#detailsPage');
const theItems = document.querySelectorAll('.items');
const slashParent = document.querySelectorAll('.slash-parent');



// this is to swicth tabs uopn clicking action for the section
tabs.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const targetSection = document.querySelector(e.target.dataset.target);
        sections.forEach((section) => {
            if (section === targetSection) {
                section.classList.add('active');
            }else {
                section.classList.remove('active')
            }
        });
    } else if(e.target.tagName === 'I') {
        const targetSection = document.querySelector(e.target.dataset.target);
        sections.forEach((section) => {
            if (section === targetSection) {
                section.classList.add('active');
            }else {
                section.classList.remove('active');
            }
        });
    }
}); 


// this is also to switch tabs upon clicking action for the heads
tabs.addEventListener ('click', (e) => {
    if (e.target.tagName === 'LI') {
        const targetHead = document.querySelector(e.target.dataset.head);
        heads.forEach((head) => {
            if (head === targetHead) {
                head.classList.add('active');
            } else {
                head.classList.remove('active');
            }
        });
    }else if (e.target.tagName === 'I') {
        const targetHead = document.querySelector(e.target.dataset.head);
        heads.forEach((head) => {
            if (head === targetHead) {
                head.classList.add('active')
            } else {
                head.classList.remove('active')
            }
        });
    }

});

//this is to make you see general info on products no mater what product you click
list.addEventListener('click', (e) => {
    if(e.target.className === 'fa-solid fa-circle-info') {
        const targetSection = document.querySelector(e.target.dataset.target);
        sections.forEach((section) => {
            if (section === targetSection) {
                section.classList.add('active');
            }else {
                section.classList.remove('active');
            }
        });
    }
})

//this is to make the tab bottom border be visible on click
tabbed.forEach(tab => {
    tab.addEventListener('click', () =>{
        document.querySelector('.one').classList.remove('one');
        tab.classList.add('one');
    });
});

// this is to display product preview image for upload
const preview = document.querySelector('#file');
const displayImage = document.querySelector('#labelFile');
var uploaded_image = '';


preview.addEventListener('change', function() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploaded_image = reader.result;
        displayImage.style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});

displayImage.style.backgroundImage = `url(${uploaded_image})`;

//this is to specify what excatly gets added to the dom
const amountConditions = () => {
    const nameValue = document.querySelector('#productName').value.trim();
    const descriptionValue = document.querySelector('#productDescription').value.trim();
    
}
// this is to add product image, product name to the home page
const addBtn = document.querySelector('#addBtn');

const plusItemsToPage = (e) => {
    e.preventDefault();

    const nameValue = document.querySelector('#productName').value.trim();
    const descriptionValue = document.querySelector('#productDescription').value.trim();
    if (nameValue.length === 0 || nameValue.length > 15) {
        return;
    } else if (descriptionValue.length === 0 || descriptionValue.length > 200) {
        return
    }else if (displayImage.style.backgroundImage !== ''
    ){
        // create elements
        const items = document.createElement('div');
        const upper = document.createElement('div');
        const slashItem = document.createElement('i');
        const stockOut = document.createElement('h2');
        const itemsMenu = document.createElement('div');
        const itemsName = document.createElement('h3');
        const info = document.createElement('i');
        const cancel = document.createElement('i');

        //add text contents
        itemsName.textContent = nameValue.toLowerCase();
        stockOut.textContent = 'Out of Stock'

        // create classes
        items.classList.add('items');
        slashItem.classList.add('fa-solid', 'fa-store-slash');
        stockOut.classList.add('stock');
        itemsMenu.classList.add('items-menu');
        itemsName.classList.add('items-name');
        upper.classList.add('slash-parent');
        info.classList.add('fa-solid', 'fa-circle-info');
        cancel.classList.add('fa-solid', 'fa-xmark');
        info.setAttribute('data-target','.details-page')

        //append elements to elements
        upper.appendChild(slashItem);
        itemsMenu.append(itemsName, info, cancel);
        items.append(upper, stockOut, itemsMenu);
        list.appendChild(items);
        // theItems.forEach((item) => {
        //     console.log(item.firstElementChild.nextElementSibling.firstElementChild.textContent)
        // })
        // list.appendChild(items);
       
        items.style.backgroundImage =  `url(${uploaded_image})`;
        upper.addEventListener('mouseover', () => {
            upper.firstElementChild.style.visibility = 'visible';
        });
        upper.addEventListener('mouseout', () => {
            upper.firstElementChild.style.visibility = 'hidden';
        });
    
        
    }
}
const plusItemsToPageDetails = () => {
    const nameValue = document.querySelector('#productName').value.trim();
    const descriptionValue = document.querySelector('#productDescription').value.trim();
    if (nameValue.length === 0 || nameValue.length > 15) {
        return;
    } else if (descriptionValue.length === 0 || descriptionValue.length > 200) {
        return;
    }else if (displayImage.style.backgroundImage !== ''
    ) {
        // create elements

        const box = document.createElement('div');
        const left = document.createElement('div');
        const imagery = document.createElement('div');
        const name = document.createElement('h3');
        const right = document.createElement('div');
        const check = document.createElement('i');
        const ellipsis = document.createElement('i');
        const minus = document.createElement('i');
        const plus = document.createElement('i');
        const rightAbove = document.createElement('div');
        const description =  document.createElement('h3');
        const rightBelow =  document.createElement('div');
        const quantity = document.createElement('div');
        const counter = document.createElement('div');

        //add text contents
        name.textContent = nameValue.toLowerCase();
        description.textContent = descriptionValue.toLowerCase();
        quantity.textContent = 'Quantity';
        counter.textContent = '1';

        //add classes
        box.classList.add('big-box');
        left.classList.add('left');
        imagery.classList.add('imagery');
        name.classList.add('name');
        right.classList.add('right');
        description.classList.add('description');
        rightBelow.classList.add('right-below');
        rightAbove.classList.add('right-above')
        check.classList.add('fa-regular', 'fa-square-check');
        ellipsis.classList.add('fa-solid', 'fa-ellipsis');
        minus.classList.add('fa-solid', 'fa-minus', 'fas');
        plus.classList.add('fa-solid', 'fa-plus', 'fap');
        quantity.classList.add('quantity');
        counter.classList.add('counter');

        //append elements to elements
        left.append(imagery, name);
        rightAbove.append(check, ellipsis, minus, plus)
        rightBelow.append(quantity, counter);
        right.append(rightAbove, description, rightBelow);
        box.append(left, right);
        detailsList.appendChild(box);

        imagery.style.backgroundImage =  `url(${uploaded_image})`
    }
}

addBtn.addEventListener('click', plusItemsToPage);
addBtn.addEventListener('click', plusItemsToPageDetails);




