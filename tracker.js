const tabs = document.querySelector('#tabs-parent');
const sections = document.querySelectorAll('.section');
const heads = document.querySelectorAll('.heads');
const tabbed = document.querySelectorAll('.tab');
const list = document.querySelector('#homePage');
const detailsList = document.querySelector('#detailsPage');
// const theItems = document.querySelectorAll('.items');
const slashParent = document.querySelectorAll('.slash-parent');
const firstName = document.querySelectorAll('.items-name')
// let idCount = 0;


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
let uploaded_image = '';


preview.addEventListener('change', function() {
   if(preview.files.length > 0) {
        const fileSize = preview.files.item(0).size;
        const fileKb =  Math.round(fileSize / 1024);
        if(fileKb >= 500) {
            alert('file too big, please select a file less than 500kb')
        }else {
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                uploaded_image = reader.result;
                displayImage.style.backgroundImage = `url(${uploaded_image})`;
                
            });
            reader.readAsDataURL(this.files[0]);
        }
   }
});

displayImage.style.backgroundImage = `url(${uploaded_image})`;


// let updateId = idCount ;


let samplesData = [ 
    {
        id: '0',
        name: 'Sample One',
        desc: 'high qaulity you can get at all times',
        quantity: 1,
        image: 'images/beautyproduct.png',
        class: 'sample-one'
    },
    {
        id: '1',
        name: 'Sample-pro-2',
        desc: 'high qaulity you can get at all times',
        quantity: 1,
        image: 'images/colour.jpg',
        class: 'sample-two'

    },
    {
        id: '2',
        name: 'Sample-pro-3',
        desc: 'high qaulity you can get at all times',
        quantity: 1,
        image: 'images/air.jpg',
        class: 'sample-three'

    },
    {
        id: '3',
        name: 'Sample-pro-4',
        desc: 'high qaulity you can get at all times',
        quantity: 1,
        image: 'images/apple.jpg',
        class: 'sample-four'

    }
]


//this is to display our sample produts using only js
const samplesDisplay = () => {
    return (list.innerHTML =  samplesData.map((sample) => {

        let { id, name, image} = sample
        return  `
        <div class="items" style = "background-image : url(${image})">
         <div class="slash-parent"><i class="fa-solid fa-store-slash"></i>
         </div>
         <h2 class="stock">Out of Stock</h2>
         <div class="items-menu">
          <h3 class="items-name">${name}</h3>
          <i class="fa-solid fa-circle-info" data-target=".details-page"></i>
          <i class="fa-solid fa-xmark"></i>
         </div>
      </div>
        `
    }).join(''));

    
    // const item = document.querySelector('.sample-one');
    // //one
    // const itemOne = document.createElement('div');
    // const upperOne = document.createElement('div');
    // const slashItemOne = document.createElement('i');
    // const stockOutOne = document.createElement('h2');
    // const itemMenuOne = document.createElement('div');
    // const itemNameOne = document.createElement('h3');
    // const infoOne = document.createElement('i');
    // const cancelOne = document.createElement('i');

    // //two
    // const itemTwo = document.createElement('div');
    // const upperTwo = document.createElement('div');
    // const slashItemTwo = document.createElement('i');
    // const stockOutTwo = document.createElement('h2');
    // const itemMenuTwo = document.createElement('div');
    // const itemNameTwo = document.createElement('h3');
    // const infoTwo = document.createElement('i');
    // const cancelTwo = document.createElement('i')

    // const itemThree = document.createElement('div');
    // const upperThree = document.createElement('div');
    // const slashItemThree = document.createElement('i');
    // const stockOutThree = document.createElement('h2');
    // const itemMenuThree = document.createElement('div');
    // const itemNameThree = document.createElement('h3');
    // const infoThree = document.createElement('i');
    // const cancelThree = document.createElement('i')

    // //four
    // const itemFour = document.createElement('div');
    // const upperFour = document.createElement('div');
    // const slashItemFour = document.createElement('i');
    // const stockOutFour = document.createElement('h2');
    // const itemMenuFour = document.createElement('div');
    // const itemNameFour = document.createElement('h3');
    // const infoFour = document.createElement('i');
    // const cancelFour = document.createElement('i')


    // //add text contents
    // //one
    // let nameValue = 'Sample One'
    // itemNameOne.textContent = nameValue
    // stockOutOne.textContent = 'Out of Stock';

    // //two
    // let nameValueTwo = 'Sample Pro-2';
    // itemNameTwo.textContent = nameValueTwo;
    // stockOutTwo.textContent = 'Out of Stock';

    // //three
    // let nameValueThree = 'Sample-Pro-3'
    // itemNameThree.textContent = nameValueThree
    // stockOutThree.textContent = 'Out of Stock';

    // //four
    // let nameValueFour = 'Sample-Pro-4'
    // itemNameFour.textContent = nameValueFour;
    // stockOutFour.textContent = 'Out of Stock';

    // // create classes
    // // one
    // slashItemOne.classList.add('fa-solid', 'fa-store-slash');
    // stockOutOne.classList.add('stock');
    // itemMenuOne.classList.add('items-menu');
    // itemNameOne.classList.add('items-name');
    // upperOne.classList.add('slash-parent');
    // infoOne.classList.add('fa-solid', 'fa-circle-info');
    // cancelOne.classList.add('fa-solid', 'fa-xmark');
    // infoOne.setAttribute('data-target','.details-page')
    // itemOne.classList.add('items', 'sample-one');
    // itemOne.setAttribute('id', id);
    // itemOne.setAttribute('style', 'background-image: url(images/beauty\ product.png)');



    // //two
    // slashItemTwo.classList.add('fa-solid', 'fa-store-slash');
    // stockOutTwo.classList.add('stock');
    // itemMenuTwo.classList.add('items-menu');
    // itemNameTwo.classList.add('items-name');
    // upperTwo.classList.add('slash-parent');
    // infoTwo.classList.add('fa-solid', 'fa-circle-info');
    // cancelTwo.classList.add('fa-solid', 'fa-xmark');
    // infoTwo.setAttribute('data-target','.details-page')
    // itemTwo.classList.add('items', 'sample-two');
    // itemTwo.setAttribute('id', id + 1);
    // itemTwo.setAttribute('style', 'background-image: url(images/colour.jpg)');

    // //three
    // slashItemThree.classList.add('fa-solid', 'fa-store-slash');
    // stockOutThree.classList.add('stock');
    // itemMenuThree.classList.add('items-menu');
    // itemNameThree.classList.add('items-name');
    // upperThree.classList.add('slash-parent');
    // infoThree.classList.add('fa-solid', 'fa-circle-info');
    // cancelThree.classList.add('fa-solid', 'fa-xmark');
    // infoThree.setAttribute('data-target','.details-page')
    // itemThree.classList.add('items', 'sample-three');
    // itemThree.setAttribute('id', id + 2);
    // itemThree.setAttribute('style', 'background-image: url(images/air.jpg)');

    
    // //four
    // slashItemFour.classList.add('fa-solid', 'fa-store-slash');
    // stockOutFour.classList.add('stock');
    // itemMenuFour.classList.add('items-menu');
    // itemNameFour.classList.add('items-name');
    // upperFour.classList.add('slash-parent');
    // infoFour.classList.add('fa-solid', 'fa-circle-info');
    // cancelFour.classList.add('fa-solid', 'fa-xmark');
    // infoFour.setAttribute('data-target','.details-page')
    // itemFour.classList.add('items', 'sample-four');
    // itemFour.setAttribute('id', id + 3);
    // itemFour.setAttribute('style', 'background-image: url(images/apple.jpg)');

    

    // // append each to each
    // //one
    // upperOne.appendChild(slashItemOne);
    // itemMenuOne.append(itemNameOne, infoOne, cancelOne);
    // itemOne.append(upperOne, stockOutOne, itemMenuOne);

    // //two
    // upperTwo.appendChild(slashItemTwo);
    // itemMenuTwo.append(itemNameTwo, infoTwo, cancelTwo);
    // itemTwo.append(upperTwo, stockOutTwo, itemMenuTwo);
    // list.append(itemTwo);

    // //three
    // upperThree.appendChild(slashItemThree);
    // itemMenuThree.append(itemNameThree, infoThree, cancelThree);
    // itemThree.append(upperThree, stockOutThree, itemMenuThree);


    // //four
    // upperFour.appendChild(slashItemFour);
    // itemMenuFour.append(itemNameFour, infoFour, cancelFour);
    // itemFour.append(upperFour, stockOutFour, itemMenuFour);

    // list.append(itemOne, itemTwo, itemThree, itemFour);

    // const items = document.querySelectorAll('.items');
    // items.forEach(item => {
    //     item.addEventListener('mouseover', () => {
    //         item.firstElementChild.firstElementChild.style.visibility = 'visible';
    //     });
    //     item.addEventListener('mouseout', () => {
    //         item.firstElementChild.firstElementChild.style.visibility = 'hidden';
    //     });

    // });

};

samplesDisplay();

// this is to add product image, product name to the home page
const addBtn = document.querySelector('#addBtn');
let idPlus = 3


const plusItemsToPage = (e) => {
    e.preventDefault();

    const nameValue = document.querySelector('#productName').value.trim();
    const descriptionValue = document.querySelector('#productDescription').value.trim();

    idPlus++;
    let updateId = idPlus;
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
        stockOut.textContent = 'Out of Stock';

        // create classes
        items.classList.add('items');
        slashItem.classList.add('fa-solid', 'fa-store-slash');
        stockOut.classList.add('stock');
        itemsMenu.classList.add('items-menu');
        itemsName.classList.add('items-name');
        upper.classList.add('slash-parent');
        info.classList.add('fa-solid', 'fa-circle-info');
        cancel.classList.add('fa-solid', 'fa-xmark');
        info.setAttribute('data-target','.details-page');

    
        items.setAttribute('id', updateId)
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

        let sample = JSON.parse(localStorage.getItem('sample'));
        
        let newItems = {
            id: updateId,
            name: nameValue,
            description: descriptionValue,
            imageUrl: `url(${uploaded_image})`
        }

        sample.push(newItems);
        
        localStorage.setItem('sample', JSON.stringify(sample));

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

        imagery.style.backgroundImage =  `url(${uploaded_image})`;
        let sample = JSON.parse(localStorage.getItem('sample'));


        localStorage.setItem('sample', JSON.stringify(sample));

    }
}

addBtn.addEventListener('click', plusItemsToPage);
addBtn.addEventListener('click', plusItemsToPageDetails);




