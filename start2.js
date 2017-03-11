(function fn(n) {   
  console.log( n );   
  if(n<9)setTimeout(function(){  fn(++n);  },1000);
}( 0 ));