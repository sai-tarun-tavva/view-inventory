// Function to toggle fullscreen
export const handleFullScreen = () => {
  if (document.fullscreenElement) {
    // Exit fullscreen if the document is in fullscreen mode
    document.exitFullscreen();
  } else {
    // Request fullscreen mode
    document.documentElement.requestFullscreen().catch((err) => {
      console.error("Error attempting to enable fullscreen mode:", err);
    });
  }
};
