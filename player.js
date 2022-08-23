document.addEventListener('DOMContentLoaded', () => { 

  let init = () => {
    try {
      let url = window.location.href;
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      // play HLS or regular mp4 based on params type
      if (url.includes("?id")) {
        // extract m3u8 ulr
        const src = urlParams.get(`id`);
        // set player src
        document.getElementById("player").setAttribute("data-plyr-embed-id", src);
      }
    } catch (error) {
      console.log(error);
    }
  };
  setTimeout(() => {
    init();

     // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
     const player = new Plyr('#player');
    
     // Expose
     window.player = player;
   
     // Bind event listener
     function on(selector, type, callback) {
       document.querySelector(selector).addEventListener(type, callback, false);
     }

     
     
  }, 5);
  });