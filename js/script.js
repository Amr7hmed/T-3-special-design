//--//settings-box
 let toggolesetting = document.querySelector('.toggole-settings') ;
 toggolesetting.onclick = function(){
     document.querySelector('.fa-cog').classList.toggle('fa-spin');
     document.querySelector('.settings-box').classList.toggle('open');
 };
//--------------------------------------------------//
//--------------------------------------------------//

//--------------------------------------------------//
//--------------------------------------------------//
//--//Switch Colors
//-1-//cheack if thear local Storage Empty 
let maincolor = localStorage.getItem('color-option');
if(maincolor !==null){
document.documentElement.style.setProperty('--main-color',maincolor);
document.querySelectorAll('.color-list li').forEach(elment=>{
    elment.classList.remove('active');
    if(elment.dataset.color === maincolor){
        elment.classList.add('active');
    }
})
}
//-2-//Switch Colors function
 let colorli = document.querySelectorAll('.color-list li');
    colorli.forEach(li =>{
        li.addEventListener('click', (e)=>{
            document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
            //add the color in the local storage
            localStorage.setItem('color-option',e.target.dataset.color);
            //add and remove the class active in the list
            handelactive(e);
        })
    });
//--------------------------------------------------//
//--------------------------------------------------//

//--------------------------------------------------//
//--------------------------------------------------//
//switch active span random background 
//-1-// the Varibal
let randomback = document.querySelectorAll('.randombackg span');
let backopation = true,
    backinterval,
    backlocalstorg = localStorage.getItem('backgroundlocal');
//-2-//cheack if thear local Storage Empty 
if(backlocalstorg !==null){
    randomback.forEach(span =>{span.classList.remove('active');});
    if(backlocalstorg === 'true'){
        backopation = true;
        document.querySelector('.yes').classList.add('active');
    }else{
        backopation = false;
        document.querySelector('.no').classList.add('active');
    }
}
//-1-//random span back
randomback.forEach(span =>{
    span.addEventListener('click', (e)=>{
        handelactive(e);
        if(e.target.dataset.background ==='yes'){
            backopation = true;
            randombackimg();
            localStorage.setItem('backgroundlocal',true);
        }else{
            backopation = false;
            clearInterval(backinterval);
            localStorage.setItem('backgroundlocal',false);
        }

    })
});
//--//Randomly Change Background 
let landpadge = document.querySelector('.landpadge'),
        arryimage = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg','09.jpg','10.jpg'];
        function randombackimg(){
            if(backopation===true){
                backinterval = setInterval(()=>{
                    let randomnumber = Math.floor(Math.random()*arryimage.length);
                    landpadge.style.backgroundImage = `url(imag/${arryimage[randomnumber]})`;
                },2000);
            }
        };
randombackimg();
//--------------------------------------------------//
//--------------------------------------------------//
//skills progres
let skillsdiv = document.querySelector('.skills-info');
window.onscroll = function(){

let skilloffesttop = skillsdiv.offsetTop,
    skilloutrheigt = skillsdiv.offsetHeight,
    windowheight = this.innerHeight,
    windowcsroltop = this.pageYOffset;

if(windowcsroltop > (skilloffesttop + skilloutrheigt - windowheight)){
    let skilprogre = document.querySelectorAll('.skillbox .progres span');
    skilprogre.forEach(skill =>{
        skill.style.width = skill.dataset.progres;
    })
    }   
}
//--------------------------------------------------//
//--------------------------------------------------//

//--------------------------------------------------//
//--------------------------------------------------//
//---// gallery img --//
let galleryimgs = document.querySelectorAll('.gallery-imgs img'),
    divproup = document.querySelector('.proup'),
    closeproup = document.querySelector('.close'),
    imgproup = document.querySelector('.the-img'),
    caption = document.querySelector('.caption');

galleryimgs.forEach((img,index) =>{
    img.addEventListener('click', (e)=>{
        divproup.style.display= "block";
        imgproup.src = img.src;
        caption.innerHTML = `${img.alt} ${index+1}`;
    })
})
closeproup.onclick = function(){
    divproup.style.display= "none";
}
document.onkeydown = function(e){
    if(e.keyCode=="27"){
        divproup.style.display = "none";
    }
};
//--------------------------------------------------//
//--------------------------------------------------//
/*----bullets---*/
let allbullet = document.querySelectorAll('.bullets .bullet'),
    navlistitem = document.querySelectorAll('.listitem ul li');

function scrollforpadg(elments){
    elments.forEach(elment =>{
        elment.addEventListener('click', (e)=>{
            e.preventDefault()
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior : 'smooth'
            })
        })
})}
scrollforpadg(allbullet);
scrollforpadg(navlistitem);
//-1-//setting random span bullets
let showbullets = document.querySelectorAll('.showbullets span'),
    bullets = document.querySelector('.bullets'),
    bulletlocal = localStorage.getItem('bullets-option');
    if(bulletlocal !== null){
        showbullets.forEach(span=>{
            span.classList.remove('active');
        });
        if(bulletlocal ==='block'){
        bullets.style.display = 'block';
        document.querySelector('.showbullets .yes').classList.add('active');
        }else{
        bullets.style.display = 'none';
        document.querySelector('.showbullets .no').classList.add('active');
        }
    }
showbullets.forEach(span =>{
    span.addEventListener('click', (e)=>{
        if(e.target.dataset.background ==='show'){
            bullets.style.display = 'block';
            localStorage.setItem('bullets-option','block');
            }else{
            bullets.style.display = 'none';
            localStorage.setItem('bullets-option','none');
        }
        handelactive(e);
    })
});
//--------------------------------------------------//
//--------------------------------------------------//
//handelactive
function handelactive(e){
    e.target.parentElement.querySelectorAll('.active').forEach(elment=>{
        elment.classList.remove('active');
    })
    e.target.classList.add('active');
};
//--------------------------------------------------//
//--------------------------------------------------//

//--------------------------------------------------//
//--------------------------------------------------//
//reset-option
document.querySelector('.reset-option').onclick = function(){
    localStorage.clear();
    window.location.reload();
}
//--------------------------------------------------//
//--------------------------------------------------//

//--------------------------------------------------//
//--------------------------------------------------//
// show menu nav in mediua 
let baurnav = document.querySelector('.baur'),
    menuadiv = document.querySelector('.menunavmedua'),
    buletlist = document.querySelector('.bullets');
baurnav.onclick= function(e){
    e.stopPropagation();
    menuadiv.classList.toggle('opan');
    buletlist.classList.toggle('opan');
}

document.addEventListener('click',(e)=>{
    if(e.target !== baurnav &&e.target !== menuadiv){
        if(menuadiv.classList.contains('opan')){
            menuadiv.classList.toggle('opan');
            buletlist.classList.toggle('opan');
        }
    }
})

menuadiv.onclick= function(e){
    e.stopPropagation();
}

    