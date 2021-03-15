(function() {
  var collapsibles = document.getElementsByClassName("collapsible");
  for (var i = 0; i < collapsibles.length; i++) {

    var collapsible = collapsibles[i];
    var collapsibleCloser = collapsibles[i].nextElementSibling.getElementsByClassName("close-collapsible")[0];
    
    var button;
    collapsible.addEventListener("click", function() {
      document.querySelectorAll('video').forEach(video => video.pause());
      button = this;
      button.classList.toggle("active");
      collapsibleCloser.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });

    collapsibleCloser.addEventListener("click", function() {
      document.querySelectorAll('video').forEach(video => video.pause());
      button.classList.toggle("active");
      var content = this.parentElement;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
    
    
  }
})();

