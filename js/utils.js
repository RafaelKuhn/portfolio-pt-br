// my functions
export function pauseAllVideos() {
  
  document.querySelectorAll('video').forEach(video =>  {
    const isVideoAutoplaying = video.autoplay;
    if (isVideoAutoplaying) {
      return;
    }
    
    video.pause();
  });

};