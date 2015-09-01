
// λx.λy UNICORNIO -> λy.UNICORNIO

var fn = function(UNICORNIO){
	return function(y){
    	return UNICORNIO;
    }
}

fn(1);
fn(1)(3);

// λx.λy UNICORNIO -> λy. * UNICORNIO y
var fn = function(UNICORNIO){
    return function(y){
        return UNICORNIO * y;
    }
}
 
fn(1);
fn(1)(3);