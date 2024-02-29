document.getElementById("scrollButton").addEventListener("click", function() {
      document.getElementById("scrollSection").scrollIntoView({ behavior: 'smooth' });
});
  
const buttonContainer = document.querySelector('.btnn-container');
const buttons = buttonContainer.querySelectorAll('.btn');
let clickCount = 0; 
buttons.forEach(button => {
    button.addEventListener('click', function() {
        this.style.backgroundColor = 'lime';
        clickCount++;
        if (clickCount > 4) {
            alert('Opps! you can not select more than 4 seats');
        }
    });
});