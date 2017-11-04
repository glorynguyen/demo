!function(){"use strict";angular.module("chatbox",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=t}angular.module("chatbox").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("chatbox").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,o,i,n){var a,r=t(o[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});o.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){r.type(t).pause()["delete"]()}),a=e.$watch("vm.contributors",function(){angular.forEach(n.contributors,function(t){r.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){a()})}function o(t,e){function o(){return i().then(function(){t.info("Activated Contributors View")})}function i(){return e.getContributors(10).then(function(t){return n.contributors=t,n.contributors})}var n=this;n.contributors=[],o()}o.$inject=["$log","githubContributor"];var i={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:o,controllerAs:"vm"};return i}t.$inject=["malarkey"],angular.module("chatbox").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,e){function o(o){function n(t){return t.data}function a(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return o||(o=30),e.get(i+"/contributors?per_page="+o).then(n)["catch"](a)}var i="https://api.github.com/repos/Swiip/generator-gulp-angular",n={apiHost:i,getContributors:o};return n}t.$inject=["$log","$http"],angular.module("chatbox").factory("githubContributor",t)}(),function(){"use strict";function t(t,e,o){function i(e,o,i,n){var i=i||0,a={message:"...",isThey:o};l.messageList.push(a),t(function(){a.message=e,l.messageList.length>l.maximunMessage&&l.messageList.shift(),n&&n()},i)}function n(){l.showDirection=!0}function a(t){var e=$("#targetFrame");e.length>0&&e.attr("src",t)}function r(){i("Should I tell more about us or do you want to be",!1,1e3,function(){t(l.setShowDirection,500)})}function s(e){switch(e){case"tell":l.messageList.push({message:"Tell me more",isThey:!0}),l.messageList.shift(),l.showDirection=!1,i("Sure thing!",!1,1e3,function(){i("Want to see some of our work?",!1,1500,function(){l.showDirectionWork=!0})});break;case"contact":i("Contact me",!0,0),l.showDirection=!1,a("http://www.freestyleokc.com/contact/"),i("This is our contact",!1,1500,function(){t(r,500)})}}function c(e){switch(e){case"film":i("Film Production",!0),l.showDirectionWork=!1,a("http://www.freestyleokc.com/work/#index-624697"),i("This is our Film production",!1,1500,function(){t(r,500)});break;case"photo":i("Photography",!0),l.showDirectionWork=!1,a("http://www.freestyleokc.com/work/#index-624697"),i("This is our Photography",!1,1500,function(){t(r,500)})}}var l=this;l.messageList=[],l.showDirection=!1,l.setShowDirection=n,l.directionClick=s,l.showDirectionWork=!1,l.directionWorkClick=c,l.maximunMessage=3,i("Hello, this is Tom.",!1,1e3,function(){i("Welcome to Freestyle",!1,1200,function(){i("Should I tell more about us or do you want to be",!1,1500,function(){t(l.setShowDirection,500)})})})}t.$inject=["$timeout","webDevTec","toastr"],angular.module("chatbox").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("chatbox").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("chatbox").config(t)}(),function(){"use strict";angular.module("chatbox").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("chatbox").config(t)}(),angular.module("chatbox").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class=main-view><div class=left-side><iframe id=targetFrame src=http://www.freestyleokc.com height=100% width=100%></iframe></div><div class=right-side><div class=message-container><div class=message-line ng-repeat="item in main.messageList" ng-class="{\'they-answer\' : item.isThey}"><span class="message message{{$index}}">{{item.message}}</span></div><!-- <div class="message-line"><span class="message"> Welcome to Freestyle</span></div>\n      <div class="message-line"><span class="message"> Should I tell more about us or do you want to be</span></div> --><div class=direction ng-show=main.showDirection><div class=direction-item ng-click="main.directionClick(\'tell\')">Tell me more</div><div class=direction-item ng-click="main.directionClick(\'contact\')">Contact me</div></div><div class=direction ng-show=main.showDirectionWork><div class=direction-item ng-click="main.directionWorkClick(\'film\')">Film Production</div><div class=direction-item ng-click="main.directionWorkClick(\'photo\')">Photography</div></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class=container-fluid><div class=navbar-header><a class=navbar-brand href=https://github.com/Swiip/generator-gulp-angular><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-6><ul class="nav navbar-nav"><li class=active><a ng-href=#>Home</a></li><li><a ng-href=#>About</a></li><li><a ng-href=#>Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-bd8224cdcf.js.map
