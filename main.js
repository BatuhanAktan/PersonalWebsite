const typedTextSpan = document.querySelector(".typedText");

const skills = ['programmer', 'skier', 'teacher', 'brother', 'student'];
const speed = 50;
const newTextDelay = 1500;
let skillsIndex = 0;
let charIndex = 0;


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

type();