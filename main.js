const typedTextSpan = document.querySelector(".typedText");

const skills = ['programmer', 'leader', 'skier', 'teacher', 'brother', 'student'];
const speed = 50;
const newTextDelay = 1500;
let skillsIndex = 0;
let charIndex = 0;
let total = 0;

function type(){
    if(charIndex < skills[skillsIndex].length){
        typedTextSpan.textContent += skills[skillsIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 200);
    }
    else{
        setTimeout(erase, newTextDelay)
    }
}
function erase(){
    if (charIndex > 0){
        typedTextSpan.textContent = skills[skillsIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, 100)
    }
    else{
        skillsIndex++;
        if(skillsIndex >= skills.length) skillsIndex=0;
        setTimeout(type, 1300);
    }
}

function add(){
    var triangle = document.createElement('div');
    triangle.className = 'triangle';
    triangle.style.left =  Math.random() * (window.innerWidth - 30)+ 'px';
    triangle.style.top = -20 + 'px';
    triangle.style.borderLeft= "25px solid transparent";
    triangle.style.borderRight= "25px solid transparent";
    triangle.style.borderTop= "60px solid rgba(255, 255, 255, 0.2)";
    const current = document.getElementById("circles");
    document.body.insertBefore(triangle, current);

    triangle.style.animation = "icicle 15s linear infinite";

}
type();
