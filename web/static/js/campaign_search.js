var app = angular.module('CampaignSearch', []);

app.directive('csSearch', csSearch);

function csSearch() {
  return {
    restrict: 'E',
    scope: {},
    template: [
      '<div class="input-group">',
        '<input ng-model="queryString" type="text" class="form-control" placeholder="Search for...">',
        '<span class="input-group-btn">',
          '<button ng-click="search()" class="btn btn-default" type="button">Go!</button>',
        '</span>',
      '</div>'
    ].join(''),
    link: function(scope) {
      scope.search = function() {
        console.log(scope.queryString);
      }
    }
  };
}
