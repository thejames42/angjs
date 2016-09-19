var myModule = angular.module('Angello', []); myModule.factory('AngelloHelper', function(){});
myModule.service('AngelloModel', function(){});
myModule.controller('MainCtrl', function(){
  var main = this;

  main.createStory = function() {
    main.stories.push({
      title:'New Story',
      description: 'Description pending.',
      criteria: 'Criteria pending.',
      status: 'Back Log',
      type:'Feature',
      reporter:'Pending',
      assignee:'Pending'
    });
  };

  main.stories = [
    {
      title: 'First story',
      description: 'Our first story.', 
      criteria: 'Criteria pending.',
      status: 'To Do',
      type: 'Feature',
      reporter: 'theJames',
      assignee: 'theJames'
    },
    {
      title: 'Second story',
      description: 'Our Second story.', 
      criteria: 'Criteria pending.',
      status: 'Fubar',
      type: 'Feature',
      reporter: 'theJames',
      assignee: 'theJames'
    },
    {
      title: 'Another story',
      description: 'Just one more.', 
      criteria: 'Criteria pending.',
      status: 'Code Review',
      type: 'Enhancement',
      reporter: 'theJames',
      assignee: 'theJames'
    }
  ];
});
myModule.directive('story', function(){});
