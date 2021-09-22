export function pauseVideosWithoutAutoplay() {
  document.querySelectorAll('video').forEach(video =>  {
    if (video.autoplay) { return; }

    video.pause();
  });
};