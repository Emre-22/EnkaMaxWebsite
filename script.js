document.addEventListener("DOMContentLoaded", () => {
 
    const buttons = document.querySelectorAll(".btn");
    const stickyHeader = document.querySelector('.sticky-header');



    const title1 = document.getElementById('title1');
    const title1_cont = document.getElementById('title1_cont');
    const paragraph1 = document.getElementById('paragraph1');
    const paragraph1_cont = document.getElementById('paragraph1_cont');
    const bottombuttons = document.getElementById('bottombuttons')


    title1.classList.add('slide');
    setTimeout(()=>{
        paragraph1.classList.add('slide');
    },300);

    title1_cont.classList.add('slide');
    setTimeout(()=>{
        paragraph1_cont.classList.add('slide');
    },200);

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 140) {
            stickyHeader.classList.add('fixed');
        } else {
            stickyHeader.classList.remove('fixed');
        }
    });



    buttons.forEach((button, index) => {
        buttons[index].addEventListener('mouseover', () => {
            state1.style.opacity = '1'; 
            state1.style.filter = ' brightness(100%) blur(0px)';
            title2.style.transition= 'left 1s ease ';
            paragraph2.style.transition= 'left 1s ease';
            title2_cont.style.transition= 'all 1s ease-in-out';
            paragraph2_cont.style.transition= 'all 1s ease-in-out';
    
            landing_content2.style.opacity= '1';
    
            title2.classList.add('slide');
            paragraph2.classList.add('slide');
    
            title2_cont.classList.add('slide');
            paragraph2_cont.classList.add('slide');



        buttons[index].addEventListener('mouseout', () => {
            state1.style.opacity = '0'; 
            state1.style.filter = ' brightness(130%) blur(2px)';
    
            title2.style.transition= 'none ';
            paragraph2.style.transition= 'none';
            title2_cont.style.transition= 'none';
            paragraph2_cont.style.transition= 'none';
            
            landing_content2.style.opacity= '0';
    
            title2.classList.remove('slide');
            paragraph2.classList.remove('slide');
            title2_cont.classList.remove('slide');
            paragraph2_cont.classList.remove('slide');
            });
        }); 
    });
    




    
    setTimeout(() => {
        const bgimg = document.querySelector('.bgimg'); 
        bgimg.classList.add('fade-out');
        setTimeout(() => {
            //display none
        },3000)
    }, 2000); 



    bottombuttons.addEventListener('mouseover',()=>{
        landing_content.style.opacity = '0';
    });
    bottombuttons.addEventListener('mouseout',()=>{
        landing_content.style.opacity = '1';
    });



    setTimeout(() => {
        
        buttons.forEach((button, index) => {
            setTimeout(() => {
                button.classList.add("slide");
            }, index * 150); 
        });
    }, 800); 
        
});