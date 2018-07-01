


var x = 0.01;
var y = 0;
var z = 0;

var phi = 10;
var rho = 28;
var beta = 8/3;
var delta_t = 0.01;

var ctr = 0, call = null, ctx, w, h;

window.onload = function ()
{
    
    var canvas = document.getElementById("canvas");
	
	
	var ins = document.getElementsByTagName("input");
	
	for(let i=0;i<ins.length;i++)
	{	ins[i].type = "range";
		ins[i].step = "0.5";
		
		if(i < 2)
		{	ins[i].min = "10";
			ins[i].max = "50"; 
		}
		else
		{	ins[i].min = "1";
			ins[i].max = "9"; 
		}
	}
			
	ins[0].oninput = function()
	{	phi = this.value;
		redraw();
	};
	
	ins[1].oninput = function()
	{	rho = this.value;
		redraw();
	};
	
	ins[2].oninput = function()
	{	beta = this.value/ins[3].value;
		redraw();
	};
	
	ins[3].oninput = function()
	{	beta = ins[2].value/this.value;
		redraw();
	};
	
    if(canvas.getContext) 
    {
        ctx = canvas.getContext("2d");
        
		w = canvas.width; 
        h = canvas.height; 
		
		call = window.requestAnimationFrame(draw);
    
    }

};


function redraw()
{
	clearInterval(call);
	ctx.clearRect(0, 0, w, h);
	x = 0.001; y = 0; z = 0, ctr = 0;	
	call = window.requestAnimationFrame(draw);
}

function draw()
{
	
	let delta_x = (phi * (y - x))*delta_t;
	let delta_y = (x*(rho - z) - y)*delta_t;
	let delta_z = (x*y - beta*z)*delta_t;
	
	x += delta_x;
	y += delta_y;
	z += delta_z;
	
	
    ctx.save();
	ctx.translate(w/2, h/2);
	ctx.scale(3, 3);
	ctx.strokeStyle = "white";
	
	if(!ctr)
	{	
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctr = 1;
	}
	else ctx.lineTo(x, y);
	
	ctx.stroke();
	ctx.restore();
	
	call = window.requestAnimationFrame(draw);
        
}






        

 
 

 
 
 
 
