function drawScene(){

    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
  
    ctx.drawImage(png, 0, 0);
  
    const data = ctx.getImageData(0, 0, png.width, png.height);
    ctx.clearRect(0,0,canvas.width, canvas.height);
  
    const particles = [];
    for (let y = 0, y2 = data.height; y < y2; y+=4) {
      for (let x = 0, x2 = data.width; x < x2; x+=4) {
        if (data.data[(y * 4 * data.width) + (x * 4) + 3] > 128) {
          const particle = {
            x : x,
            y : y
          };
          particles.push(particle);
        }
      }
    }
  
    ctx.fillStyle = "white";
    for(let i=0, j=particles.length;i<j;i++){
      const particle = particles[i];
      ctx.fillRect(particle.x, particle.y, 1, 1);
    }
  
  }
  
  const png = new Image();
  png.onload = drawScene;
  png.src = "https://steelcantspeak.github.io/images/logo.png";
  png.crossOrigin = "Anonymous";