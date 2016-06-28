angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap','ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('DashboardCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("dashboard");
  $scope.menutitle = NavigationService.makeactive("Dashboard");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('LoginCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("login");
  $scope.menutitle = NavigationService.makeactive("Login");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });

  $scope.$on('$viewContentLoaded', function(){
    "use strict";
    //***** Side Menu *****//
      $(".side-menus li.menu-item-has-children > a").on("click",function(){
          $(this).parent().siblings().children("ul").slideUp();
          $(this).parent().siblings().removeClass("active");
          $(this).parent().children("ul").slideToggle();
          $(this).parent().toggleClass("active");
          return false;
      });

      //***** Side Menu Option *****//
      $('.menu-options').on("click", function(){
        $(".side-header.opened-menu").toggleClass('slide-menu');
        $(".main-content").toggleClass('wide-content');
        $("footer").toggleClass('wide-footer');
        $(".menu-options").toggleClass('active');
      });

    /*** FIXED Menu APPEARS ON SCROLL DOWN ***/
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
        $(".side-header").addClass("sticky");
        }
        else{
        $(".side-header").removeClass("sticky");
        $(".side-header").addClass("");
        }
    });

    $(".side-menus nav > ul > li ul li > a").on("click", function(){
        $(".side-header").removeClass("slide-menu");
        $(".menu-options").removeClass("active");
    });

      //***** Quick Stats *****//
      $('.show-stats').on("click", function(){
        $(".toggle-content").addClass('active');
      });

       //***** Quick Stats *****//
      $('.toggle-content > span').on("click", function(){
        $(".toggle-content").removeClass('active');
      });

      //***** Quick Stats *****//
      $('.quick-links > ul > li > a').on("click", function(){
        $(this).parent().siblings().find('.dialouge').fadeOut();
        $(this).next('.dialouge').fadeIn();
        return false;
      });

      $("html").on("click", function(){
        $(".dialouge").fadeOut();
      });
      $(".quick-links > ul > li > a, .dialouge").on("click",function(e){
            e.stopPropagation();
        });

      //***** Toggle Full Screen *****//
      function goFullScreen() {
        var
            el = document.documentElement
          , rfs =
                 el.requestFullScreen
              || el.webkitRequestFullScreen
              || el.mozRequestFullScreen
              || el.msRequestFullscreen
              ;
      rfs.call(el);
      }
      $("#toolFullScreen").on("click",function() {
          goFullScreen();
      });

      //***** Side Menu *****//
      $(function(){
          $('.side-menus').slimScroll({
              height: '400px',
              wheelStep: 10,
              size: '2px'
          });
      });


      $(".data-attributes span").peity("donut");
  });


})

.controller('languageCtrl', function($scope, TemplateService,$translate,$rootScope) {

    $scope.changeLanguage = function() {
      console.log("Language CLicked");

      if(!$.jStorage.get("language")){
        $translate.use("hi");
        $.jStorage.set("language","hi");
      }
      else {
        if($.jStorage.get("language") == "en")
        {
          $translate.use("hi");
          $.jStorage.set("language","hi");
        }
        else {
          $translate.use("en");
          $.jStorage.set("language","en");
        }
      }
    //  $rootScope.$apply();
    };


})

;
