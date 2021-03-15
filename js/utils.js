// my functions
export function pauseVideosWithoutAutoplay() {
  
  document.querySelectorAll('video').forEach(video =>  {
    const isVideoAutoplaying = video.autoplay;
    if (isVideoAutoplaying) {
      return;
    }
    
    video.pause();
  });

};