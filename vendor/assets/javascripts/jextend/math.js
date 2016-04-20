Math.n_pow = function(number,n){
  var result = 1;
  for(var i=0;i<n;i++){
     result = result*number;
  }
  return result;
};

Math.decimal_point = function(str,point_number){
  var float = parseFloat(str);
  if(!float){
    return 0;
  }
  var point = Math.n_pow(10,point_number);
  return Math.round(float * point) / point;
};
