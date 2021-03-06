function redditFeed(RedditService, $q) {

    const ctrl = this;
    ctrl.feed = [];
  
  
  ctrl.fetchAwwSubreddit = () => {
    return $q(function(resolve, reject) {

      RedditService.fetchAwwSubreddit()
      .then ( (response) => {
        console.log(response);
         
          let children = response.data.data.children;
  
            children.forEach( function(child, index) {
              let childObj = {
                title: child.data.title,
                img: child.data.thumbnail,
                permalink: child.data.permalink
              }
              // console.log(childObj.img); 
              
              ctrl.feed.push(childObj);
  
              if ( index === (children.length = 12) ){
                resolve();
              }
  
            })
        });
    });
  }
  
    ctrl.fetchAwwSubreddit()
   

    
  }
    

//--------------------------------------
  
  angular.module('RedditServiceApp').component('redditFeed', {
    template: `
      <div ng-repeat="post in $ctrl.feed">
        <div id="box">
        <div class = "image">
          <a href="https://www.reddit.com/{{post.permalink}">
          <img ng-src="{{post.img}}"></img></a>
        </div>
        <div class = "title">
          <h2>{{post.title}}</h2>
        </div>
          <a href="https://www.reddit.com/{{post.permalink}}">
          <div id="link-container">Visit Here:{{post.permalink}}</div></a>
        </div>
      </div>`, 
    controller: redditFeed,
   
});