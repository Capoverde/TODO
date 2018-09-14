// alert('dziala')
document.addEventListener('DOMContentLoaded', function () {
    // console.log('DOM fully loaded and parsed');
    // deklaracja zmiennych globalnych
    var todos = document.getElementById('todos');
    // console.log(todos);
    var inp = document.querySelector('#inp');
    // console.log(inp);
    var sub = document.querySelector('#sub');
    // console.log(sub);
    var ol = document.getElementsByTagName('ol');
    // console.log(ol);
    // var li = document.getElementsByTagName('li');
    // console.log(li);
    var ca = document.getElementById('clear-all');
    // console.log(ca);

    // ---------- FUNKCJE ------------ //

    //  Dodaje nowy task na koniec listy po kliknięciu w przycisk
    function sendItems(e) {
        e.preventDefault();
        var inpVal = inp.value;
        var liVal = document.createElement('li');
        var textNode = document.createTextNode(inpVal);
        liVal.appendChild(textNode);
        todos.appendChild(liVal);
        inp.value = '';
        var done = document.createElement('div');
        done.className = 'done';
        liVal.appendChild(done);

        done.addEventListener('click', function (e) {
            liVal.style.background = "lightgreen";
            liVal.style.color = "#464646";
        });

        var del = document.createElement('div');
        del.className = 'del';
        liVal.appendChild(del);
        del.addEventListener('click', function (e) {
            e.preventDefault();
            liVal.parentElement.removeChild(liVal);

        });
    }
    //  Dodaje nowy task na koniec listy po kliknięciu entera

    function enterItems(e) {
        e.preventDefault();
        if (e.keyCode === 13) {
            var inpVal = inp.value;
            var liVal = document.createElement('li');
            var textNode = document.createTextNode(inpVal);
            liVal.appendChild(textNode);
            todos.appendChild(liVal);
            inp.value = '';

            var done = document.createElement('div');
            done.className = 'done';
            liVal.appendChild(done);

            done.addEventListener('click', function (e) {
                liVal.style.background = "lightgreen";
                liVal.style.color = "#464646";
            });

            var del = document.createElement('div');
            del.className = 'del';
            liVal.appendChild(del);
            del.addEventListener('click', function (e) {
                e.preventDefault();
                liVal.parentElement.removeChild(liVal);

            });
        };
    }


    // Czyści całą listę
    function clearAll(e) {
        e.preventDefault();
        todos.innerHTML = '';
    }

    // ------ Listenery ----------- //
    // .addEventListener('click', clearItem);
    sub.addEventListener('click', sendItems);
    inp.addEventListener('keyup', enterItems);
    ca.addEventListener('click', clearAll);
    // del.addEventListener('click', clearItem);

























}); //end of DCL event