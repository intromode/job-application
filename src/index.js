const spaceForm = document.getElementById('application');
const userName = document.getElementById('name');
const spaceship = document.getElementById('spaceship');
const claustrophobic = document.getElementById('claustrophobic');
const claustrophobicDisplay = document.getElementById('slider-display');


claustrophobic.addEventListener('change', function() {
    claustrophobicDisplay.textContent = claustrophobic.value;

});

const chosenGear = [];

spaceForm.addEventListener('submit', function(event) {
    event.preventDefault();
    for(let index = 0; index < spaceForm.spacegear.length; index++) {
        const gear = spaceForm.spacegear[index];
        if(gear.checked) {
            chosenGear[index] = gear.value;
        }
    }

});


