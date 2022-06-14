let list = document.querySelectorAll("nav ul li a");

let indicator = document.getElementById('indicator');

window.addEventListener('scroll', () => {
    let home = document.querySelector('header').getBoundingClientRect().top;
    let about = document.getElementById('about').getBoundingClientRect().top;
    let skills = document.getElementById('skills').getBoundingClientRect().top;
    let designs = document.getElementById('designs').getBoundingClientRect().top;
    let experience = document.getElementById('experience').getBoundingClientRect().top;
    let contact = document.getElementById('contact').getBoundingClientRect().top;

    let windowWidht = window.innerHeight / 3.5;

    if(home < windowWidht){

        for(let i = 0; i < list.length; i++){
            list[i].style.color = "rgb(175, 175, 175)";
        }

        document.querySelector("a[href='#']").style.color = "white";
        
        indicator.className = "indicator";  
    }

    if(about < windowWidht){

        for(let i = 0; i < list.length; i++){
            list[i].style.color = "rgb(175, 175, 175)";
        }

        document.querySelector("a[href='#about']").style.color = "white";

        indicator.className = "indicator about";  
    }

    if(skills < windowWidht){

        for(let i = 0; i < list.length; i++){
            list[i].style.color = "rgb(175, 175, 175)";
        }

        document.querySelector("a[href='#skills']").style.color = "white";

        indicator.className = "indicator skills";  
    }

    if(designs < windowWidht){

        for(let i = 0; i < list.length; i++){
            list[i].style.color = "rgb(175, 175, 175)";
        }

        document.querySelector("a[href='#designs']").style.color = "white";

        indicator.className = "indicator designs";  
    }

    if(experience < windowWidht){

        for(let i = 0; i < list.length; i++){
            list[i].style.color = "rgb(175, 175, 175)";
        }

        document.querySelector("a[href='#experience']").style.color = "white";

        indicator.className = "indicator experience";  
    }

    if(contact < windowWidht){

        for(let i = 0; i < list.length; i++){
            list[i].style.color = "rgb(175, 175, 175)";
        }

        document.querySelector("a[href='#contact']").style.color = "white";

        indicator.className = "indicator contact";  
    }
});


