var app = {
    init: function() {
        app.titres = document.querySelectorAll('.titre');

        for (var i = 0; i < app.titres.length; ++i) {
            app.titres[i].addEventListener('click', app.toggle);
        }
    },
    toggle: function(event) {
        var clicked = event.target;

        if(clicked.nodeName == 'DIV') {
            clicked = clicked.parentNode;
        }

        for (var i = 0; i < app.titres.length; ++i) {
            app.titres[i].classList.remove('open');
        }
        
        clicked.classList.add('open');

    }
}

app.init();