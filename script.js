new Vue({
    el: "#our-app",
    data: {
        message: "This is my first vue code",
        fname: "Subra",
        about: "front End developer"
    }
});
var myapp = new Vue({

    el: "#my-app",
    data:{
        name: "Subrat kumar soni",
        playlist: "frontend developer"

    },
    methods: {
        run: function(message){
            return  "I am subrat"+message;
        },
        welcome: function(dayTime){
            return "Good"+ dayTime;
        },
        valueAccess: function(){
            return this.name+" "+this.playlist;
        }
    }

});
