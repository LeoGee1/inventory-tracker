// this is gonna be for some little js works
const slashParent = document.querySelectorAll('.slash-parent');
  
// this is to make the store slash icon appear and dissappear on hover xz
const toggle = () => {
    slashParent.forEach((slash) => {
        slash.addEventListener('mouseover', () => {
            slash.firstElementChild.style.visibility = 'visible';
        })
        slash.addEventListener('mouseout', () => {
            slash.firstElementChild.style.visibility = 'hidden';
        })   
    })
}
toggle()
