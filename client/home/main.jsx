if (Meteor.isClient){
  Meteor.startup(function(){
    React.render(<Home />, document.getElementById("app-container"));
  })
}