$(function(){

  $('html').removeClass('all-loading').addClass('all-active');

  /* Big click function copied over from Ethan's original app and then modified */
  $("article.project-featured, article.project-grid-item").on("click", function(e){
    e.preventDefault();
    var url = $(this).find("a").attr("href");
    if (url != undefined){
      window.location.href = url;
    }
  });

  /* Set up a toggler for the Hamburgler */
  $('.menu-toggle, .menu-container').removeClass("hide");
  $('.menu-toggle').on("click", function(e) {
    e.preventDefault();
    $('.menu-toggle').toggleClass('active');
    $('.menu-container').toggleClass('active');
  });

  /* Video iframe resizzorr */
  /* Currently only set for Vimeo since that is all we use. */
  var $allVideos = $("iframe[src^='//player.vimeo.com']");
  $allVideos.each(function() {
    $(this).data('aspectRatio', this.height / this.width).removeAttr('height').removeAttr('width');
  });
  $(window).resize(function() {
    $allVideos.each(function() {
      var $el = $(this);
      var newWidth = $el.parent().width();
      $el.width(newWidth).height(newWidth * $el.data('aspectRatio'));
    });
  }).resize();

  /* Do video button */
  /* Currently unused - save in case needed for home */
  $('.bg-vid-pause').removeClass("hide");
  $(".bg-vid-pause").on("click", function() {
    if ($(".bg-vid")[0].paused) {
      $(".bg-vid")[0].play();
      this.innerHTML = "Pause Video";
    } else {
      $(".bg-vid")[0].pause();
      this.innerHTML = "Play Video";
    }
  });

});


/* Since we only use it on /contact */
if (typeof Instafeed == 'function') { 
  var feed = new Instafeed({
    get: 'user',
    // Grit
    userId: '1553595391',
    accessToken: '1553595391.15d9dbe.ad7c0da696ce461cae65922f78d3f786',
    target: document.getElementById("instafeed-container"),
    links: false,
    resolution: 'standard_resolution',
    // template: '<a href="{{link}}" target="_new"><img src="{{image}} /></a>',
    template: '<li><p><img src="{{image}}" /></p></li>',
    // limit is 20 anyway. Just putting this here as a reminder.
    limit: 20
  });
  feed.run();
};
