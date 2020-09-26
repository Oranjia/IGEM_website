$(function(){
  $(window).scroll(function(){
    var curTop=$(window).scrollTop();
    var nav_change_color_height = 10;//导航栏变色
    var general_side_nav = $(".general_background_image").height();
    //导航部分的响应
    if(curTop<nav_change_color_height){
        $(".navbar-default").css("background-color","rgba(48,48,48,0.3)");//改变背景色
        $("#slim_logo").attr("src","logo_pic.png");
    }else{
        $(".navbar-default").css("background-color","rgba(40,40,40,1)");
        $("#slim_logo").attr("src","logo_pic.png");
    }
    //滚动屏幕时，把导航选项折叠起来
    $("#navbar").collapse('hide');
    //侧边导航的固定
    if (curTop > general_side_nav){
      $(".left_nav").addClass("left_nav_after");
    }else{
      $(".left_nav").removeClass("left_nav_after");
    }
  })
})


//sidenav_锚点点击滚动跳转
$(function(){
  $(".general_sidenav_a").click(function(){
    var element_1 = $("#general_info_ele_1").offset().top;
    var element_2 = $("#general_info_ele_2").offset().top;
    // var element_3 = $("#general_info_ele_3").offset().top;

    if($(this).attr("id") == "sidenav_1"){
      $("html,body").animate({scrollTop:element_1-100},600);
    }else if($(this).attr("id") == "sidenav_2"){
      $("html,body").animate({scrollTop:element_2-100},600);
    }
    
  })
})
