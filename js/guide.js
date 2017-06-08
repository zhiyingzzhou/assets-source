/*着陆*/
function step1() {
    $("#step1").hide();
    $("#step2").show();

    $("#wxdl").addClass("xs_demo");
}
/*顶部*/
function step2() {
    $("#wxdl").removeClass("xs_demo");
    $("#step2").hide();
    $("#step3").show();

    $("#menu li:eq(1)").addClass("xs_demo");
 }
/*菜单*/
function step3() {
    $("#menu li:eq(1)").removeClass("xs_demo");

    $("#step3").hide();
    $("#step4").show();

    $(".box:first").addClass("xs_demo");
}
/*公众号*/
function step4() {
    $('#xinshou').hide(0);
}