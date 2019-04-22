function RedditService (http) {
    const service = this;

    service.fetchAwwSubreddit = () => {
        
    return http.get("https://www.reddit.com/r/aww/.json");
    }
}

angular.module('RedditServiceApp')
.service('RedditService', ['$http', RedditService])