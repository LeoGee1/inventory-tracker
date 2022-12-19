const tabs = document.querySelector('.tabs-parent');
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
    }
})

//this is to make the tab bottom border be visible on click
tabbed.forEach(tab => {
    tab.addEventListener('click', () =>{
        document.querySelector('.one').classList.remove('one')
        tab.classList.add('one')
    })
})










