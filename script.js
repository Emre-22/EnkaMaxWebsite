document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    const stickyHeader = document.querySelector('.sticky-header');
    const stickyHeaderUl = document.querySelector('.sticky-header ul');
    const hamburbarbar = document.querySelectorAll('.hamburbar');
    const hammenu = document.getElementById('hammenu');

    const state = document.querySelectorAll(".imgstates");
    const animatedbutton = document.querySelector(".animatedbutton");
    const bottombuttons = document.querySelector('.bottombuttons');
    const landing_content = document.querySelectorAll('.landing_content');
    const titles = document.querySelectorAll('.title');
    const titleContainers = document.querySelectorAll('.title_cont');
    const paragraphs = document.querySelectorAll('.paragraph');
    const paragraphContainers = document.querySelectorAll('.paragraph_cont');

    let areListenersEnabled = false;
    let hamburbar = true;

    function addslide(index) {
        titles[index].classList.add('slide');
        paragraphs[index]?.classList.add('slide');
        titleContainers[index].classList.add('slide');
        paragraphContainers[index]?.classList.add('slide');
    }

    function removeslide(index) {
        titles[index].classList.remove('slide');
        paragraphs[index]?.classList.remove('slide');
        titleContainers[index].classList.remove('slide');
        paragraphContainers[index]?.classList.remove('slide');
    }

    function buttonmouseoverevent(index) {
        buttons[index].addEventListener('mouseover', () => {
            if (window.innerWidth >= 1100) {
                landing_content[index + 1].style.display = 'block';
                landing_content[index + 1].offsetHeight; 
                state[index].style.opacity = '1';
                state[index].style.filter = 'brightness(100%) blur(0px)';
                landing_content[index + 1].style.opacity = '1';
                addslide(index + 1);
            }
        });
    }

    function buttonmouseoutevent(index) {
        buttons[index].addEventListener('mouseout', () => {
            if (window.innerWidth >= 1100) {
                state[index].style.opacity = '0';
                state[index].style.filter = 'brightness(130%) blur(2px)';
                landing_content[index + 1].style.opacity = '0';
                landing_content[index + 1].style.display = 'none';
                removeslide(index + 1);
            }
        });
    }

    function bottombuttonsHoverEvents() {
        bottombuttons.addEventListener('mouseover', () => {
            if (window.innerWidth >= 1100) {
                landing_content[0].style.opacity = '0';
                landing_content[0].style.display = 'none';
            }
        });

        bottombuttons.addEventListener('mouseout', () => {
            if (window.innerWidth >= 1100) {
                landing_content[0].style.display = 'flex';
                landing_content[0].style.opacity = '1';
            }
        });
    }

    function checkWindowWidth() {
        if (window.innerWidth >= 1100) {
            if (!areListenersEnabled) {
                buttons.forEach((button, index) => {
                    buttonmouseoverevent(index);
                    buttonmouseoutevent(index);
                });
                bottombuttonsHoverEvents(); 
                areListenersEnabled = true;
            }
        }
    }

    checkWindowWidth();
    window.addEventListener('resize', checkWindowWidth);

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 140) {
            stickyHeader.classList.add('fixed');
        } else {
            stickyHeader.classList.remove('fixed');
        }
    });
    
  
    stickyHeader.addEventListener('click',(event)=>{
        console.log(hamburbar)
        if (hamburbar) {
            stickyHeaderUl.classList.remove('collapsed');
            stickyHeader.classList.remove('collapsed');
            hammenu.classList.remove('collapsed');
            hamburbarbar.forEach(element => {
                element.classList.remove('collapsed');    
            });
        }else{
            stickyHeaderUl.classList.add('collapsed');
            stickyHeader.classList.add('collapsed');
            hammenu.classList.add('collapsed');
            hamburbarbar.forEach(element => {
            element.classList.add('collapsed');   
            });
        }
        hamburbar = !hamburbar;

    });
    





    setTimeout(() => {
        const bgimg = document.querySelector('.bgimg');
        bgimg.classList.add('fade-out');
        setTimeout(() => {
            bgimg.classList.add('removed');
        }, 3000);
    }, 2000);

    setTimeout(() => {
        buttons.forEach((button, index) => {
            setTimeout(() => {
                button.classList.add("slide");
            }, index * 150);
        });
    }, 1500);

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
});
