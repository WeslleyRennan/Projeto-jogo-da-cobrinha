window.onload = function(){
  var stage = document.getElementById('stage');
  var ctx = stage.getContext("2d");
  document.addEventListener("keydown", keyPush);
  
  setInterval(game, 60);
  
  const vel = 1; //velocidade
  
  var vx = vy = 0; //velocidade inicial
  var px = 10; // ponto de inicio da cobra
  var py = 15; // ponto de inicio da cobra
  var tp = 20; // tamanho da peça 
  var qp = 20; // tamanho da peça
  var ax = ay = 5; // ponto inicial da maçã
  
  var trail = [];
  tail = 2;
  
  function game(){
  
  px += vx;
  py += vy;
  
  if(px < 0){
    px = qp - 1;
  }
  if(px > qp - 1){
    px = 0;
  }
  if(py < 0){
    py = qp - 1;
  }
  if(py > qp - 1){
    py = 0;
  }
  
  ctx.fillStyle = "#02FF00";
  ctx.fillRect(0,0, stage.width, stage.height);
  
  //Cor da maçã
  ctx.fillStyle = "red";
  ctx.fillRect(ax * tp, ay * tp, tp,tp);
  
  //Cor da cobra
  ctx.fillStyle = "black";
  
  //condição da cobra
  for (var i = 0; i < trail.length; i++){
   ctx.fillRect(trail[i].x * tp, trail[i].y * tp, tp-1,tp-1);
   //Inicio e geme over
   if(trail[i].x == px && trail[i].y == py){
     vx = vy = 0;
     tail = 2;
   }
  }
   
  
  trail.push({x:px, y:py})
  while(trail.length > tail){
    trail.shift();
  }
  
  if(ax == px && ay == py){
    tail++
    ax = Math.floor(Math.random() * qp);
    ay = Math.floor(Math.random() * qp);
  }
  
 }
 
 //Controle
 function keyPush(event){
   
   switch (event.keyCode) {
     case 37://Esquerda
      vx = -vel;
      vy = 0;
      break;
      
     case 38://Acima
      vx = 0;
      vy = -vel;
      break;
      
     case 39://Direito
      vx = vel;
      vy = 0;
      break;
      
     case 40://Baixo
      vx = 0;
      vy = vel;
      break;
      
     default:
     
      break;
   }
 }
  
}
