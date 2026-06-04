$(document).ready(function () {
    // 1. Hover
    $("#capa1").hover(
        function () { $("#capa2").hide(200); },
        function () { $("#capa2").show(200); }
    );

    // 2. SlideToggle
    $("#btnSlide").click(function () {
        $("#panelPersiana").slideToggle(300);
    });

    // 3. FadeTo
    $("#btnFadeBajo").click(function () { $("#cajaOpacidad").fadeTo("fast", 0.2); });
    $("#btnFadeMedio").click(function () { $("#cajaOpacidad").fadeTo("fast", 0.6); });
    $("#btnFadeAlto").click(function () { $("#cajaOpacidad").fadeTo("fast", 1.0); });

    // 4. Animate (Encadenamiento)
    $("#btnAnimar").click(function () {
        $("#cajaAnimada")
            .animate({ width: "100px", height: "100px", marginLeft: "150px" }, 500)
            .animate({ opacity: 0.4 }, 300)
            .animate({ width: "130px", height: "130px", marginLeft: "0px" }, 500)
            .animate({ opacity: 1.0 }, 300);
    });
});