document.addEventListener("DOMContentLoaded", () => {
 
    const buttons = document.querySelectorAll(".btn");
    const stickyHeader = document.querySelector('.sticky-header');
    const state = document.querySelectorAll(".imgstates");
    const animatedbutton = document.querySelector(".animatedbutton");



    
    const bottombuttons = document.querySelector('.bottombuttons')
    const landing_content= document.querySelectorAll('.landing_content')

 
    const titles = document.querySelectorAll('.title'); 
    const titleContainers = document.querySelectorAll('.title_cont'); 
    const paragraphs = document.querySelectorAll('.paragraph'); 
    const paragraphContainers = document.querySelectorAll('.paragraph_cont'); 

    function addslide(index){
        titles[index].classList.add('slide');
        paragraphs[index]?.classList.add('slide'); 
        titleContainers[index].classList.add('slide');
        paragraphContainers[index]?.classList.add('slide'); 
    }

    function removeslide(index){
        titles[index].classList.remove('slide');
        paragraphs[index]?.classList.remove('slide'); 
        titleContainers[index].classList.remove('slide');
        paragraphContainers[index]?.classList.remove('slide'); 
    }
   

    function buttonmouseoverevent(index){
        buttons[index].addEventListener('mouseover', () => {
            state[index].style.opacity = '1'; 
            state[index].style.filter = ' brightness(100%) blur(0px)';

            titles[index+1].style.transition= 'left 1s ease ';
            paragraphs[index+1].style.transition= 'left 1s ease';
            titleContainers[index+1].style.transition= 'all 1s ease-in-out';
            paragraphContainers[index+1].style.transition= 'all 1s ease-in-out';
            landing_content[index+1].style.opacity= '1';

            addslide(index+1)
        });
    }

    function buttonmouseoutevent(index){
        buttons[index].addEventListener('mouseout', () => {
            state[index].style.opacity = '0'; 
            state[index].style.filter = ' brightness(130%) blur(2px)';

            titles[index+1].style.transition= 'none';
            paragraphs[index+1].style.transition= 'none';
            titleContainers[index+1].style.transition= 'none';
            paragraphContainers[index+1].style.transition= 'none';
            landing_content[index+1].style.opacity= '0';
            removeslide(index+1)
        });
    }

    titles[0].classList.add('slide');
    setTimeout(() => {
        paragraphs[0]?.classList.add('slide'); 
    }, 200);
    titleContainers[0].classList.add('slide');
    setTimeout(() => {
        paragraphContainers[0]?.classList.add('slide'); 
    }, 300);
    setTimeout(() => {
        animatedbutton.classList.add('slide'); 
    }, 1000);


    buttons.forEach((button, index) => {
        buttonmouseoverevent(index);
        buttonmouseoutevent(index);
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 140) {
            stickyHeader.classList.add('fixed');
        } else {
            stickyHeader.classList.remove('fixed');
        }
    });


    
    setTimeout(() => {
        const bgimg = document.querySelector('.bgimg'); 
        bgimg.classList.add('fade-out');
        setTimeout(() => {
            //display none
        },3000)
    }, 2000); 



    bottombuttons.addEventListener('mouseover',()=>{
        landing_content[0].style.opacity = '0';
    });
    bottombuttons.addEventListener('mouseout',()=>{
        landing_content[0].style.opacity = '1';
    });



    setTimeout(() => {
        
        buttons.forEach((button, index) => {
            setTimeout(() => {
                button.classList.add("slide");
            }, index * 150); 
        });
    }, 1500); 
        
});