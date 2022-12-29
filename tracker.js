const tabs = document.querySelector('#tabs-parent');
const sections = document.querySelectorAll('.section');
const heads = document.querySelectorAll('.heads')
const tabbed = document.querySelectorAll('.tab')
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
        })
    } else if(e.target.tagName === 'I') {
        const targetSection = document.querySelector(e.target.dataset.target);
        sections.forEach((section) => {
            if (section === targetSection) {
                section.classList.add('active');
            }else {
                section.classList.remove('active')
            }
        })
    }
}) 


// this is also to switch tabs upon clicking action for the heads
tabs.addEventListener ('click', (e) => {
    if (e.target.tagName === 'LI') {
        const targetHead = document.querySelector(e.target.dataset.head);
        heads.forEach((head) => {
            if (head === targetHead) {
                head.classList.add('active')
            } else {
                head.classList.remove('active')
            }
        })
    }else if (e.target.tagName === 'I') {
        const targetHead = document.querySelector(e.target.dataset.head);
        heads.forEach((head) => {
            if (head === targetHead) {
                head.classList.add('active')
            } else {
                head.classList.remove('active')
            }
        })
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
        displayImage.style.backgroundImage = `url(${uploaded_image})`
    });
    reader.readAsDataURL(this.files[0]);
});

// this is to add product image, product name to the home page
const addBtn = document.querySelector('#addBtn');


addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const NameValue = document.querySelector('#productName').Value.trim()
    const descriptionValue = document.querySelector('#productDescription').value.trim()
    if (NameValue.length === 0 || nameValue.length > 15) {
        return;
    } else if (DescriptionValue.length === 0 || descriptionValue.length > 200) {
        return
    }else {
        // create elements
        const items = document.createElement('div');
        const upper = document.createElement('div');
        const noItem = document.createElement('i');
        const itemsMenu = document.createElement('div');
        const itemName = document.createElement('h3');
        const info = document.createElement('i');
        const cancel = document.createElement('i');

        //add text contents

        // create classes
    }
})




