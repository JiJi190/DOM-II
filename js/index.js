// Your code goes here

// let navClick = document.getElementsByClassName('nav-link');
// window.addEventListener('mouseover', e => {
    
// })

let btnClick = document.getElementsByClassName('btn');
console.log(btnClick);
for(let i = 0; i < btnClick.length; i++){
    btnClick[i].addEventListener('click', e => {
        alert("Woop")
    })
}

// btnClick[0].addEventListener('click', e => {
//     alert("Pog")
// })
// btnClick.addEventListener('click', e => {
//     console.log(e)
//     // alert("We're no longer accepting online forms! Sign up today at our offices around the US!");
//     // console.log('button')
// })


let dblClickBG = document.querySelector('body');
dblClickBG.addEventListener('dblclick', e => {
    dblClickBG.style.backgroundColor = 'cyan';
})

const imageNone = document.querySelector('.intro img');
imageNone.addEventListener('mouseover', function(e){
    imageNone.style.display = 'none'
});

let titleHeader = document.querySelector('nav');
titleHeader.addEventListener('click', e => {
    titleHeader.style.color = 'cream';
});