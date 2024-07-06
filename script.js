var input = document.getElementById('input');
var list = document.getElementById('list');
var deletebtn = document.getElementById('deletebtn');
var completebtn = document.getElementById('complete');
var deletecompletebtn = document.getElementById('completebtn');

input.addEventListener('keyup', () => {
    if (event.key == 'Enter') {
        addItem(this.value);
        input.value = "";
    }


})
var aray = [];
let addItem = () => {

    function creatobject(input) {
        var newobject = {
            input: input.value,
            id: -1,
            completed: false,
        }

        aray.push(newobject);

        var li = document.createElement('li');
        li.innerHTML = `${input.value}`
        list.appendChild(li);


        /////////images////////////
        var delet = document.createElement('img');
        delet.src = 'delete.png';
        list.appendChild(delet);

        delet.classList.add("deletimg");


        var check = document.createElement('img');
        check.src = 'check.png';
        list.appendChild(check);

        check.classList.add("checkimg");


        var circle = document.createElement('img');
        circle.src = 'circle.png';
        list.appendChild(circle);

        circle.classList.add("circleimg");

        for (let i = 0; i < aray.length; i++) {
            console.log(aray);

            newobject.id += newobject.id = +1;


            ////////////////////change img///////////////////////
            circle.addEventListener('click', () => {
                newobject.completed = true
                circle.style.display = 'none';
                check.style.display = 'block';
                li.style.textDecoration = 'line-through';
            })

            check.addEventListener('click', () => {
                newobject.completed = false
                circle.style.display = 'block';
                check.style.display = 'none';
                li.style.textDecoration = 'unset';
                circle.style.right=  '35px';
                circle.style.bottom=  '43px';
                circle.style.position=  'relative';

            })
            ///////////////////////complete////////////////////////////
    
             completebtn.addEventListener('click', () => {
                 newobject.completed = true
                circle.style.display = 'none';
                check.style.display = 'block';
                li.style.textDecoration = 'line-through';
            })
     
            ///////////////////////////delete///////////////////////////
            delet.addEventListener('click', () => {
                list.removeChild(li)
                list.removeChild(delet)
                list.removeChild(check)
                list.removeChild(circle)
            });

        }
        ///////////////////////////delete complete/////////////////////////////////
    
 
     deletecompletebtn.addEventListener('click', () => {
           delete[newobject]
            })
        


        if (deletebtn == 'false') { } else {
            deletebtn.addEventListener('click', () => {
                li.remove(li)
                circle.remove(circle)
                check.remove(check)
                delet.remove(delet)
            })
        }

    }
    creatobject(input);
}

