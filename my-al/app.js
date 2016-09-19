var myModule = angular.module('Angello', []); 

myModule.factory('AngelloHelper', function(){
  var buildIndex = function (source, property) {
    var tempArray=[];

    for (var i = 0, len = source.length; i <len; ++i) {
      tempArray[source[i][property]] = source[i];
    }

    return tempArray;
  };
  return {
    buildIndex: buildIndex
  };
});

myModule.service('AngelloModel', function(){
  var service = this,
  stories = [
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

  service.getStories = function() {
    return stories;
  }
});

myModule.controller('MainCtrl', function(AngelloModel){
  var main = this;
  main.stories=AngelloModel.getStories();

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
});

myModule.directive('story', function(){
  return {
    scope: true,
    replace: true,
    template: '<div><h4>{{story.title}}</h4>  <p>{{story.description}}</p</div>'
    }
});
