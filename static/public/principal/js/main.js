(function () {

    /* MOSTRAR BOTON MENU */
    var boton = $("#menu-icon")
    var ico = document.getElementById("menu-icon")
    var nav = document.getElementById("menu-nav")
    var proceso = document.querySelector(".proceso");//update
    var content = document.querySelector(".content")
    var con = true
    boton.click(function () {
        if (con == true) {
            nav.style.left = "0"
            //content.style.overflow = "scroll"/*update */
            ico.classList.replace("fa-bars", "fa-times")
            con = false
            try {
                proceso.classList.add("small")//update
            } catch (error) {

            }
        } else {
            nav.style.left = "-80%"
            //content.style.overflow = "visible"/*update */
            ico.classList.replace("fa-times", "fa-bars")
            con = true
            try {
                proceso.classList.remove("small")//update
            } catch (error) {

            }
        }
    })

    $(".content").click(function () {
        try {
            proceso.classList.remove("small")//update
        } catch (error) {

        }
        nav.style.left = "-80%"
        content.style.overflow = "visible"/*update */
        ico.classList.replace("fa-times", "fa-bars")
        con = true
    })

    /* MENU EN DISPOSITIVOS MOVILES */

    $(".slideContent").click(function () {
        var target = $(this).parent().children(".slide");
        $(target).slideToggle();
    });


    /* GUARDAR VALOR DE MODO-DARK EN LOCAL-STORAGE */
    var con_mode = true;
    $("#mode").click(function () {
        if (con_mode == true) {
            var bodi = document.body
            bodi.classList.add("dark-active")
            con_mode = false;
            localStorage.setItem("modo", "dark-true")
        } else {
            var bodi = document.body
            bodi.classList.remove("dark-active")
            con_mode = true;
            localStorage.setItem("modo", "dark-false")
        }

    })

    if (localStorage.getItem("modo") == "dark-true") {
        var bodi = document.body
        bodi.classList.add("dark-active")
        con_mode = false;

    } else {
        var bodi = document.body
        bodi.classList.remove("dark-active")
        con_mode = true;

    }

    /* BOTON DE SUBIR ARRIBA */
    $("#subir-arriba").click(function () {
        var bodi = document.body;
        $("body, html").animate({
            scrollTop: "0"
        })
    })

    $(document).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $("#subir-arriba").slideDown(300)
        } else {
            $("#subir-arriba").slideUp(300)
        }
    })

    /* headroom js */
    var header = document.getElementById("header");
    var headroom = new Headroom(header);
    headroom.init()

    $(document).scroll(function () {
        let claseHeader = header.className;
        if (claseHeader.includes("headroom--unpinned")) {
            content.style.top = "0";
            content.style.transition = "top 0.3s";
        } else {
            if (claseHeader.includes("headroom--pinned")) {
                if ($(document).scrollTop() <= 0) {
                    content.style.top = "70px";
                    content.style.transition = "top 0.3s";
                }
            }
        }
    })

    // table responsive
    let tabla = document.querySelectorAll("table");
    tabla.forEach(function (el, index) {
        let responsive = el.classList.contains("table-responsive");
        if (!responsive) {
            el.classList.add("table-responsive")
        }
    })



    // let id = document.querySelector(".id");
    // let bot = document.getElementById("entrar")
    // let login = localStorage.getItem("login")
    // if (login == null) {
    //     localStorage.setItem("login", false);
    // }

    // try {
    //     bot.addEventListener("click", function () {
    //         if (id.value == "0000") {
    //             localStorage.setItem("login", true);
    //         } else {
    //             localStorage.setItem("login", false);
    //         }
    //     })
    // } catch (error) {

    // }

    // let url = location.pathname;
    // if (url != "/index.html" && url != "/") {
    //     if (localStorage.getItem("login") == "false") {
    //         location.href = "index.html"
    //     }
    // }



}())











