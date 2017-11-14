 var classToAdd;

 function chooseClassToAdd(e) {
     switch (e.value) {
         case 'green':
             classToAdd = 'highlightMeGreen';
             break;
         case 'yellow':
             classToAdd = 'highlightMeYellow';
             break;
         case 'cyan':
             classToAdd = 'highlightMeCyan';
             break;
     }

     var elementToHover = document.getElementsByClassName('highlightMe')[0];
     if (elementToHover) {

         elementToHover.addEventListener('mouseover', () => {
             elementToHover.classList.add(classToAdd)
         });
         elementToHover.addEventListener('mouseout', () => {
             elementToHover.classList.remove(classToAdd)
         });
     }
 }
