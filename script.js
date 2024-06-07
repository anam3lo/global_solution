document.addEventListener("DOMContentLoaded", function () {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            var currentlyActive = document.querySelector(".collapsible.active");
            if (currentlyActive && currentlyActive !== this) {
                currentlyActive.classList.remove("active");
                currentlyActive.nextElementSibling.style.display = "none";
            }

            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});

    document.addEventListener('DOMContentLoaded', function() {
        const sections = {
            inicio: document.getElementById('inicio'),
            quemSomos: document.getElementById('quem-somos'),
            contato: document.getElementById('contato')
        };

        const links = {
            inicio: document.getElementById('inicio-link'),
            quemSomos: document.getElementById('quem-somos-link'),
            contato: document.getElementById('contato-link')
        };

        function updateSelectedLink() {
            let selectedSection = 'inicio';
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            if (scrollPosition >= sections.quemSomos.offsetTop) {
                selectedSection = 'quemSomos';
            }
            
            if (scrollPosition >= sections.contato.offsetTop) {
                selectedSection = 'contato';
            }


            for (const link in links) {
                if (link === selectedSection) {
                    links[link].classList.add('selected');
                } else {
                    links[link].classList.remove('selected');
                }
            }
        }

        window.addEventListener('scroll', updateSelectedLink);
        updateSelectedLink();
    });