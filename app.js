let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const presentClass = e.currentTarget.classList;
        if (presentClass.contains('decrease')) {
            count--;
            document.body.style.backgroundColor = "#ffbe76";
        }

        else if (presentClass.contains('reset')) {
            count = 0;
            document.body.style.backgroundColor = "#ff7979";
        }

        else {
            count++;
            document.body.style.backgroundColor = "#e056fd";
        }
        value.innerText = count;
    });
});