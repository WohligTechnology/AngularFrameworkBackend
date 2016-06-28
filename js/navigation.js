var adminURL = "";
if(isproduction)
{
  adminURL =  "http://www.wohlig.co.in/demo/index.php";
}
else {
  adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
    name: "Dashboard",
    classis: "active",
    anchor: "dashboard",
    icon: "dashboard",
    subnav: [{
      name: "Dashboard",
      classis: "active",
      anchor: "dashboard",
      icon: "dashboard"
    }]
  },
  {
    name: "Company Setup",
    classis: "active",
    anchor: "company",
    icon: "users",
    subnav: [{
      name: "List",
      classis: "active",
      anchor: "list",
      icon: "list"
    },
    {
      name: "List",
      classis: "active",
      anchor: "list",
      icon: "list"
    },
    {
      name: "List",
      classis: "active",
      anchor: "list",
      icon: "list"
    }]
  },
  {
    name: "Dashboard",
    classis: "active",
    anchor: "dashboard",
    icon: "dashboard",
    subnav: [{
      name: "Dashboard",
      classis: "active",
      anchor: "dashboard",
      icon: "dashboard"
    }]
  }
];

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

  };
});
