// PUT YOUR CODE HERE

let boxTl = gsap.timeline({repeat: -1})

boxTl.from('.red',{x:'-200px',y:'-200px',duration:1})
     .from('.green',{x:'200px',y:'-200px',duration:1})
     .from('.blue',{x:'200px',y:'200px',duration:1})
     .from('.yellow',{x:'-200px',y:'200px',duration:1})
     .to('.red',{x:'100vw', left: -200,borderRadius:'50%',backgroundColor:'green',duration:1,})
     .to('.green',{y:'100vh',top: -200,borderRadius:'50%',backgroundColor:'blue',duration:1},'<')
     .to('.blue',{x:'-100vw',right:-200,borderRadius:'50%',backgroundColor:'yellow',duration:1},'<')
     .to('.yellow',{y:'-100vh',bottom: -200,borderRadius:'50%',backgroundColor:'red',duration:1},'<')
     .to('.red',{left:'1vw', duration:1})
     .to('.green',{x:'200px',duration:1},'<')
     .to('.blue',{left:'-1vw',duration:5},'<')
     .to('.yellow',{x:'-200px',duration:1},'<')


 boxTl.play()