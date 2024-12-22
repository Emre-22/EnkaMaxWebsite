document.addEventListener("DOMContentLoaded", () => {
    const stickyHeader = document.querySelector('.sticky-header');

//have common id and use array indicies in a loop

    let btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    const btn5 = document.getElementById('btn5');

    const state1 = document.getElementById('state1');
    const state2 = document.getElementById('state2');
    const state3 = document.getElementById('state3');
    const state4 = document.getElementById('state4');
    const state5 = document.getElementById('state5');

    const title1 = document.getElementById('title1');
    const title1_cont = document.getElementById('title1_cont');
    const title2 = document.getElementById('title2');
    const title2_cont = document.getElementById('title2_cont');
    const title3 = document.getElementById('title3');
    const title3_cont = document.getElementById('title3_cont');
    const title4 = document.getElementById('title4');
    const title4_cont = document.getElementById('title4_cont');
    const title5 = document.getElementById('title5');
    const title5_cont = document.getElementById('title5_cont');
    const title6 = document.getElementById('title6');
    const title6_cont = document.getElementById('title6_cont');
const paragraph1_cont = document.getElementById('paragraph1_cont');
const paragraph2_cont = document.getElementById('paragraph2_cont');
const paragraph3_cont = document.getElementById('paragraph3_cont');
const paragraph4_cont = document.getElementById('paragraph4_cont');
const paragraph5_cont = document.getElementById('paragraph5_cont');
const paragraph6_cont = document.getElementById('paragraph6_cont');
const paragraph1 = document.getElementById('paragraph1');
const paragraph2 = document.getElementById('paragraph2');
const paragraph3 = document.getElementById('paragraph3');
const paragraph4 = document.getElementById('paragraph4');
const paragraph5 = document.getElementById('paragraph5');
const paragraph6 = document.getElementById('paragraph6');

    const landing_content= document.getElementById('landing_content')
    const landing_content2= document.getElementById('landing_content2')
    const landing_content3= document.getElementById('landing_content3')
    const landing_content4= document.getElementById('landing_content4')
    const landing_content5= document.getElementById('landing_content5')
    const landing_content6= document.getElementById('landing_content6')
    const bottombuttons = document.getElementById('bottombuttons')

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 140) {
            stickyHeader.classList.add('fixed');
        } else {
            stickyHeader.classList.remove('fixed');
        }
    });

    bottombuttons.addEventListener('mouseover',()=>{
        landing_content.style.opacity = '0';
    });
    bottombuttons.addEventListener('mouseout',()=>{
        landing_content.style.opacity = '1';
    });

  

    btn1.addEventListener('mouseover', () => {
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
    });
    btn1.addEventListener('mouseout', () => {
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

    btn2.addEventListener('mouseover', () => {
        state2.style.opacity = '1'; 
        state2.style.filter = ' brightness(100%) blur(0px)';

        title3.style.transition= 'left 1s ease ';
        paragraph3.style.transition= 'left 1s ease';
        title3_cont.style.transition= 'all 1s ease-in-out';
        paragraph3_cont.style.transition= 'all 1s ease-in-out';

        landing_content3.style.opacity= '1';

        title3.classList.add('slide');
        paragraph3.classList.add('slide');

        title3_cont.classList.add('slide');
        paragraph3_cont.classList.add('slide');
    });
    btn2.addEventListener('mouseout', () => {
        state2.style.opacity = '0'; 
        state2.style.filter = ' brightness(130%) blur(2px)';

        title3.style.transition= 'none ';
        paragraph3.style.transition= 'none';
        title3_cont.style.transition= 'none';
        paragraph3_cont.style.transition= 'none';
        
        landing_content3.style.opacity= '0';

        title3.classList.remove('slide');
        paragraph3.classList.remove('slide');
        title3_cont.classList.remove('slide');
        paragraph3_cont.classList.remove('slide');
    });

    btn3.addEventListener('mouseover', () => {
        state3.style.opacity = '1'; 
        state3.style.filter = ' brightness(100%) blur(0px)';

        title4.style.transition= 'left 1s ease ';
        paragraph4.style.transition= 'left 1s ease';
        title4_cont.style.transition= 'all 1s ease-in-out';
        paragraph4_cont.style.transition= 'all 1s ease-in-out';

        landing_content4.style.opacity= '1';

        title4.classList.add('slide');
        paragraph4.classList.add('slide');

        title4_cont.classList.add('slide');
        paragraph4_cont.classList.add('slide');
    });
    btn3.addEventListener('mouseout', () => {
        state3.style.opacity = '0'; 
        state3.style.filter = ' brightness(130%) blur(2px)';

        title4.style.transition= 'none ';
        paragraph4.style.transition= 'none';
        title4_cont.style.transition= 'none';
        paragraph4_cont.style.transition= 'none';
        
        landing_content4.style.opacity= '0';

        title4.classList.remove('slide');
        paragraph4.classList.remove('slide');
        title4_cont.classList.remove('slide');
        paragraph4_cont.classList.remove('slide');
    });

    btn4.addEventListener('mouseover', () => {
        state4.style.opacity = '1'; 
        state4.style.filter = ' brightness(100%) blur(0px)';

        title5.style.transition= 'left 1s ease ';
        paragraph5.style.transition= 'left 1s ease';
        title5_cont.style.transition= 'all 1s ease-in-out';
        paragraph5_cont.style.transition= 'all 1s ease-in-out';

        landing_content5.style.opacity= '1';

        title5.classList.add('slide');
        paragraph5.classList.add('slide');

        title5_cont.classList.add('slide');
        paragraph5_cont.classList.add('slide');
    });
    btn4.addEventListener('mouseout', () => {
        state4.style.opacity = '0'; 
        state4.style.filter = ' brightness(130%) blur(2px)';

        title5.style.transition= 'none ';
        paragraph5.style.transition= 'none';
        title5_cont.style.transition= 'none';
        paragraph5_cont.style.transition= 'none';
        
        landing_content5.style.opacity= '0';

        title5.classList.remove('slide');
        paragraph5.classList.remove('slide');
        title5_cont.classList.remove('slide');
        paragraph5_cont.classList.remove('slide');
    });

    btn5.addEventListener('mouseover', () => {
        state5.style.opacity = '1'; 
        state5.style.filter = ' brightness(100%) blur(0px)';

        title6.style.transition= 'left 1s ease ';
        paragraph6.style.transition= 'left 1s ease';
        title6_cont.style.transition= 'all 1s ease-in-out';
        paragraph6_cont.style.transition= 'all 1s ease-in-out';

        landing_content6.style.opacity= '1';

        title6.classList.add('slide');
        paragraph6.classList.add('slide');

        title6_cont.classList.add('slide');
        paragraph6_cont.classList.add('slide');
    });
    btn5.addEventListener('mouseout', () => {
        state5.style.opacity = '0'; 
        state5.style.filter = ' brightness(130%) blur(2px)';

        title6.style.transition= 'none ';
        paragraph6.style.transition= 'none';
        title6_cont.style.transition= 'none';
        paragraph6_cont.style.transition= 'none';
        
        landing_content6.style.opacity= '0';

        title6.classList.remove('slide');
        paragraph6.classList.remove('slide');
        title6_cont.classList.remove('slide');
        paragraph6_cont.classList.remove('slide');
    });


    title1.classList.add('slide');
    setTimeout(()=>{
        paragraph1.classList.add('slide');
    },300);

    title1_cont.classList.add('slide');
    setTimeout(()=>{
        paragraph1_cont.classList.add('slide');
    },200);



    setTimeout(()=>{
        btn1.classList.add('slide');
        setTimeout(()=>{
            btn2.classList.add('slide');
            setTimeout(()=>{
                btn3.classList.add('slide');
                setTimeout(()=>{
                    btn4.classList.add('slide');
                    setTimeout(()=>{
                        btn5.classList.add('slide');
                    },150);
                },150);
            },150);
        },150);
    },900);

    
    

    setTimeout(() => {
        const bgimg = document.querySelector('.bgimg'); // Grab the element
        bgimg.classList.add('fade-out');
        setTimeout(() => {
            bgimg.setAttribute
        },3000)
    }, 2000); 

});


