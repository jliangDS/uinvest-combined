let stockName;
let tradeDay;
let stockData;
let stockPrice;
let stockList;
let keys;
let mainButton;
let specificDButton;
let showSpecificD = false
let oneDay;
let fiveDay;
let oneMonth;
let sixMonth;
let oneYear;
let fiveYear;
let chartArea;
let timeArea;
let userNameShow;
let signupArea;
let getStartedButton;
let overMenu;
let loginForm;
let lookupArea;
let submitButtonStockLookup;
let stockToLookup;
let timeFrame;
let array2 = [];
let portfolioShow;
let portfolioBuyPage;
let showPortfolioBuy;
let contentHead;
document.addEventListener('DOMContentLoaded', function(e){
    stockName = document.querySelector("#stock-name")
    stockPrice = document.querySelector('#stock-price')
    stockData = document.querySelector('#chart-data')
    stockList = document.querySelector('#ul')
    mainButton = document.querySelector('#main')
    chartArea = document.querySelector('#chartdiv')
    timeArea = document.querySelector('#time-period')
    userNameShow = document.querySelector('#userNameShow')
    signupArea = document.querySelector('#signupArea')
    getStartedButton = document.querySelector('#submit-for-login')
    overMenu = document.querySelector('#over-menu')
    loginForm = document.querySelector('#login-form')
    lookupArea = document.querySelector('#stock-to-lookup-form')
    submitButtonStockLookup = document.querySelector('#submit-for-stock-lookup')
    stockToLookup = document.querySelector('#stock-to-lookup')
    timeFrame = document.querySelector('#time')
    portfolioShow = document.querySelector('#stocks-user-owns-div')
    portfolioBuyPage = document.querySelector('#portfolio-buy-page')
    showPortfolioBuy = document.querySelector('#add-to-portfolio')
    contentHead = document.querySelector('#content-head')
    // firework
    canvas = document.getElementById('canvas')
    container = document.getElementById('container')
    // 
    stockList.style.display = 'none'
    overMenu.style.display = 'none'
    timeArea.style.display = 'none'
    chartArea.style.display = 'none'
    signupArea.style.display = 'block'
    lookupArea.style.display = 'none'
    portfolioShow.style.display = 'none'
    portfolioBuyPage.style.display = 'none'
    contentHead.style.display = 'none'
    
    getStartedButton.addEventListener('click', function(e){
        signupArea.style.display = 'none'
        overMenu.style.display = 'grid'
        getStartedButton.style.display = 'none'
        // firework
        container.style.display = "block";
        canvas.style.display = "block";
        setTimeout(function(){
            container.style.display = "none"
            canvas.style.display = "block";
        }, 5000)
        // 
    })
    mainButton.addEventListener('click', function(e){
        console.log("Only content from main page should show")
        stockList.style.display = 'block'
        chartArea.style.display = 'none'
        timeArea.style.display = 'none'
        lookupArea.style.display = 'none'
        chartArea.style.display = 'none'
        portfolioBuyPage.style.display = 'none'
        portfolioShow.style.display = 'none'
        contentHead.style.display = 'none'
    })
    showPortfolioBuy.addEventListener('click', function(e){
        console.log("Only content from main page should show")
        stockList.style.display = 'block'
        chartArea.style.display = 'none'
        timeArea.style.display = 'none'
        lookupArea.style.display = 'none'
        chartArea.style.display = 'none'
        portfolioBuyPage.style.display = 'block'
        portfolioShow.style.display = 'none'
        contentHead.style.display = 'none'
    })
    specificDButton = document.querySelector('#specificD')
    specificDButton.addEventListener('click', function(e){
        stockList.style.display = 'none'
        lookupArea.style.display = 'block'
        timeArea.style.display = 'none'
        chartArea.style.display = 'none'
        chartArea.style.display = 'none'
        portfolioBuyPage.style.display = 'none'
        portfolioShow.style.display = 'none'
        contentHead.style.display = 'none'
    })
    portfolioButton = document.querySelector('#portfolio')
    portfolioButton.addEventListener('click', function(e){
        stockList.style.display = 'none'
        lookupArea.style.display = 'none'
        timeArea.style.display = 'none'
        chartArea.style.display = 'none'
        chartArea.style.display = 'none'
        portfolioShow.style.display = 'block'
        portfolioBuyPage.style.display = 'none'
        contentHead.style.display = 'none'
    })
    submitButtonStockLookup .addEventListener('click', function(e){
        e.preventDefault
        console.log(stockToLookup.value)
        console.log(timeFrame.value)
         if (timeFrame.value == "5 Days"){
            getWeek(stockToLookup.value)
            timeSelectorColor(fiveDay)
        } else if (timeFrame.value == "1 Month"){
            getMonth(stockToLookup.value)
            timeSelectorColor(oneMonth)
        } else if (timeFrame.value == "6 Months"){
            getSixMonth(stockToLookup.value)
            timeSelectorColor(sixMonth)
        } else if (timeFrame.value == "1 Year"){
            getYear(stockToLookup.value)
            timeSelectorColor(oneYear)
        } else if (timeFrame.value == "Max"){
            getFiveYear(stockToLookup.value)
            timeSelectorColor(fiveYear)
        }
        timeArea.style.display = "grid"
        chartArea.style.display = "block"
        lookupArea.style.display = 'none'
        contentHead.style.display = 'block'
    })
    tradeDay = document.querySelector('#trade-day')
    oneDay = document.querySelector('#oneD')
    fiveDay = document.querySelector('#fiveD')
    oneMonth = document.querySelector('#oneM')
    sixMonth = document.querySelector('#sixM')
    oneYear = document.querySelector('#oneY')
    fiveYear = document.querySelector('#fiveY')
    
    fiveDay.addEventListener('click', function(e){
        timeSelectorColor(fiveDay)
        getWeek(stockToLookup.value)
    })
    oneMonth.addEventListener('click', function(e){
        timeSelectorColor(oneMonth)
        getMonth(stockToLookup.value)
    })
    sixMonth.addEventListener('click', function(e){
        timeSelectorColor(sixMonth)
        getSixMonth(stockToLookup.value)
    })
    oneYear.addEventListener('click', function(e){
        timeSelectorColor(oneYear)
        getYear(stockToLookup.value)
    })
    fiveYear.addEventListener('click', function(e){
        timeSelectorColor(fiveYear)
        getFiveYear(stockToLookup.value)
    })       
})
function timeSelectorColor(selection){
    fiveDay.style.backgroundColor = "white";
    oneMonth.style.backgroundColor = "white";
    sixMonth.style.backgroundColor = "white";
    oneYear.style.backgroundColor = "white";
    fiveYear.style.backgroundColor = "white";
    selection.style.backgroundColor = "orange";
}
function getIntraDay(symbol){
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=UOPOL6LEOMSRHH54`) 
        .then(function(response){
           return response.json() 
        })
        .then(function(quote){
            stockName.innerText = (Object.values(quote)[0]["01. symbol"])
            stockPrice = document.querySelector('#price-current')
            stockPrice.innerText = (Object.values(quote)[0]["05. price"])
            timeArea.style.display = 'none'
        })
}
function getWeek(symbol){
    array2 = []
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&interval=5min&outputsize=full&apikey=UOPOL6LEOMSRHH54`) 
        .then(function(response){
           return response.json() 
        })
        .then(function(quote){
            array = []
            keyArray = []
            console.log("hi")
            stockName.innerText = (Object.values(quote)[0]["2. Symbol"])
            let data = (Object.values(quote)[1])
            keys = (Object.keys(data))
            keys.forEach(function(key){
                keyArray.push(key)
            })
            data1 = (Object.values(data))
            data1.forEach(function(stock){
                array.push(stock)
            })
            console.log(array[0]["1. open"])
            console.log(array[1]["1. open"])
            for(let i = 0; i < 5; i++){
               array2.push({
                   "date": keyArray[i],
                   "open": array[i]["1. open"],
                   "high": array[i]["2. high"],
                   "low": array[i]["3. low"],
                   "close": array[i]["4. close"],
               })
            }
            doShit()
        })
        
}
function getMonth(symbol){
    array2 = []
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&interval=5min&outputsize=full&apikey=UOPOL6LEOMSRHH54`) 
        .then(function(response){
           return response.json() 
        })
        .then(function(quote){
            array = []
            keyArray = []
            console.log("hi")
            stockName.innerText = (Object.values(quote)[0]["2. Symbol"])
            let data = (Object.values(quote)[1])            
            keys = (Object.keys(data))
            keys.forEach(function(key){
                keyArray.push(key)
            })
            data1 = (Object.values(data))
            data1.forEach(function(stock){
                array.push(stock)
            })
            console.log(array[0]["1. open"])
            console.log(array[1]["1. open"])
            for(let i = 0; i < 20; i++){
               array2.push({
                   "date": keyArray[i],
                   "open": array[i]["1. open"],
                   "high": array[i]["2. high"],
                   "low": array[i]["3. low"],
                   "close": array[i]["4. close"],
               })
            }
            doShit()
        })
        
}
function getSixMonth(symbol){
    array2 = []
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&interval=5min&outputsize=full&apikey=UOPOL6LEOMSRHH54`) 
        .then(function(response){
           return response.json() 
        })
        .then(function(quote){
            array = []
            keyArray = []
            console.log("hi")
            stockName.innerText = (Object.values(quote)[0]["2. Symbol"])
            let data = (Object.values(quote)[1])
            keys = (Object.keys(data))
            keys.forEach(function(key){
                keyArray.push(key)
            })
            data1 = (Object.values(data))
            data1.forEach(function(stock){
                array.push(stock)
            })
            console.log(array[0]["1. open"])
            console.log(array[1]["1. open"])
            for(let i = 0; i < 126; i++){
               array2.push({
                   "date": keyArray[i],
                   "open": array[i]["1. open"],
                   "high": array[i]["2. high"],
                   "low": array[i]["3. low"],
                   "close": array[i]["4. close"],
               })
            }
            doShit()
        })
        
}
function getYear(symbol){
    array2 = []
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&interval=5min&outputsize=full&apikey=UOPOL6LEOMSRHH54`) 
        .then(function(response){
           return response.json() 
        })
        .then(function(quote){
            array = []
            keyArray = []
            console.log("hi")
            stockName.innerText = (Object.values(quote)[0]["2. Symbol"])
            let data = (Object.values(quote)[1])            
            keys = (Object.keys(data))
            keys.forEach(function(key){
                keyArray.push(key)
            })
            data1 = (Object.values(data))
            data1.forEach(function(stock){
                array.push(stock)
            })
            console.log(array[0]["1. open"])
            console.log(array[1]["1. open"])
            for(let i = 0; i < 253; i++){
               array2.push({
                   "date": keyArray[i],
                   "open": array[i]["1. open"],
                   "high": array[i]["2. high"],
                   "low": array[i]["3. low"],
                   "close": array[i]["4. close"],
               })
            }
            doShit()
        })
        
}
function getFiveYear(symbol){
    array2 = []
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&interval=5min&outputsize=full&apikey=UOPOL6LEOMSRHH54`) 
        .then(function(response){
           return response.json() 
        })
        .then(function(quote){
            array = []
            keyArray = []
            console.log("hi")
            stockName.innerText = (Object.values(quote)[0]["2. Symbol"])
            let data = (Object.values(quote)[1])            
            keys = (Object.keys(data))
            keys.forEach(function(key){
                keyArray.push(key)
            })
            data1 = (Object.values(data))
            data1.forEach(function(stock){
                array.push(stock)
            })
            console.log(array[0]["1. open"])
            console.log(array[1]["1. open"])
            for(let i = 0; i < array.length; i++){
               array2.push({
                   "date": keyArray[i],
                   "open": array[i]["1. open"],
                   "high": array[i]["2. high"],
                   "low": array[i]["3. low"],
                   "close": array[i]["4. close"],
               })
            }
            doShit()
        })
        
}
const doShit = () => am4core.ready(function() {
    console.log('here')
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.paddingRight = 20;
    
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
    
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    
    var series = chart.series.push(new am4charts.CandlestickSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "close";
    series.dataFields.openValueY = "open";
    series.dataFields.lowValueY = "low";
    series.dataFields.highValueY = "high";
    series.tooltipText = "Open:${openValueY.value}\nLow:${lowValueY.value}\nHigh:${highValueY.value}\nClose:${valueY.value}";
    
    // important!
    // candlestick series colors are set in states. 
    // series.riseFromOpenState.properties.fill = am4core.color("#00ff00");
    // series.dropFromOpenState.properties.fill = am4core.color("#FF0000");
    // series.riseFromOpenState.properties.stroke = am4core.color("#00ff00");
    // series.dropFromOpenState.properties.stroke = am4core.color("#FF0000");
    
    series.riseFromPreviousState.properties.fillOpacity = 1;
    series.dropFromPreviousState.properties.fillOpacity = 0;
    
    chart.cursor = new am4charts.XYCursor();
    
    // a separate series for scrollbar
    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.dateX = "date";
    lineSeries.dataFields.valueY = "close";
    // need to set on default state, as initially series is "show"
    lineSeries.defaultState.properties.visible = false;
    
    // hide from legend too (in case there is one)
    lineSeries.hiddenInLegend = true;
    lineSeries.fillOpacity = 0.5;
    lineSeries.strokeOpacity = 0.5;
    
    var scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(lineSeries);
    chart.scrollbarX = scrollbarX;
    
    chart.data = array2
    
});






// ------------------- //


window.requestAnimFrame = ( function() {
	return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function( callback ) {
					window.setTimeout( callback, 1000 / 60 );
				};
})();

// now we will setup our basic variables for the demo
var canvas = document.getElementById( 'canvas' ),
		ctx = canvas.getContext( '2d' ),
		// full screen dimensions
		cw = window.innerWidth,
		ch = window.innerHeight,
		// firework collection
		fireworks = [],
		// particle collection
		particles = [],
		// starting hue
		hue = 120,
		// when launching fireworks with a click, too many get launched at once without a limiter, one launch per 5 loop ticks
		limiterTotal = 5,
		limiterTick = 0,
		// this will time the auto launches of fireworks, one launch per 80 loop ticks
		timerTotal = 80,
		timerTick = 0,
		mousedown = false,
		// mouse x coordinate,
		mx,
		// mouse y coordinate
		my;
		
// set canvas dimensions
canvas.width = cw;
canvas.height = ch;

// now we are going to setup our function placeholders for the entire demo

// get a random number within a range
function random( min, max ) {
	return Math.random() * ( max - min ) + min;
}

// calculate the distance between two points
function calculateDistance( p1x, p1y, p2x, p2y ) {
	var xDistance = p1x - p2x,
			yDistance = p1y - p2y;
	return Math.sqrt( Math.pow( xDistance, 2 ) + Math.pow( yDistance, 2 ) );
}

// create firework
function Firework( sx, sy, tx, ty ) {
	// actual coordinates
	this.x = sx;
	this.y = sy;
	// starting coordinates
	this.sx = sx;
	this.sy = sy;
	// target coordinates
	this.tx = tx;
	this.ty = ty;
	// distance from starting point to target
	this.distanceToTarget = calculateDistance( sx, sy, tx, ty );
	this.distanceTraveled = 0;
	// track the past coordinates of each firework to create a trail effect, increase the coordinate count to create more prominent trails
	this.coordinates = [];
	this.coordinateCount = 3;
	// populate initial coordinate collection with the current coordinates
	while( this.coordinateCount-- ) {
		this.coordinates.push( [ this.x, this.y ] );
	}
	this.angle = Math.atan2( ty - sy, tx - sx );
	this.speed = 2;
	this.acceleration = 1.05;
	this.brightness = random( 50, 70 );
	// circle target indicator radius
	this.targetRadius = 1;
}

// update firework
Firework.prototype.update = function( index ) {
	// remove last item in coordinates array
	this.coordinates.pop();
	// add current coordinates to the start of the array
	this.coordinates.unshift( [ this.x, this.y ] );
	
	// cycle the circle target indicator radius
	if( this.targetRadius < 8 ) {
		this.targetRadius += 0.3;
	} else {
		this.targetRadius = 1;
	}
	
	// speed up the firework
	this.speed *= this.acceleration;
	
	// get the current velocities based on angle and speed
	var vx = Math.cos( this.angle ) * this.speed,
			vy = Math.sin( this.angle ) * this.speed;
	// how far will the firework have traveled with velocities applied?
	this.distanceTraveled = calculateDistance( this.sx, this.sy, this.x + vx, this.y + vy );
	
	// if the distance traveled, including velocities, is greater than the initial distance to the target, then the target has been reached
	if( this.distanceTraveled >= this.distanceToTarget ) {
		createParticles( this.tx, this.ty );
		// remove the firework, use the index passed into the update function to determine which to remove
		fireworks.splice( index, 1 );
	} else {
		// target not reached, keep traveling
		this.x += vx;
		this.y += vy;
	}
}

// draw firework
Firework.prototype.draw = function() {
	ctx.beginPath();
	// move to the last tracked coordinate in the set, then draw a line to the current x and y
	ctx.moveTo( this.coordinates[ this.coordinates.length - 1][ 0 ], this.coordinates[ this.coordinates.length - 1][ 1 ] );
	ctx.lineTo( this.x, this.y );
	ctx.strokeStyle = 'hsl(' + hue + ', 100%, ' + this.brightness + '%)';
	ctx.stroke();
	
	ctx.beginPath();
	// draw the target for this firework with a pulsing circle
	ctx.arc( this.tx, this.ty, this.targetRadius, 0, Math.PI * 2 );
	ctx.stroke();
}

// create particle
function Particle( x, y ) {
	this.x = x;
	this.y = y;
	// track the past coordinates of each particle to create a trail effect, increase the coordinate count to create more prominent trails
	this.coordinates = [];
	this.coordinateCount = 5;
	while( this.coordinateCount-- ) {
		this.coordinates.push( [ this.x, this.y ] );
	}
	// set a random angle in all possible directions, in radians
	this.angle = random( 0, Math.PI * 2 );
	this.speed = random( 1, 10 );
	// friction will slow the particle down
	this.friction = 0.95;
	// gravity will be applied and pull the particle down
	this.gravity = 1;
	// set the hue to a random number +-20 of the overall hue variable
	this.hue = random( hue - 20, hue + 20 );
	this.brightness = random( 50, 80 );
	this.alpha = 1;
	// set how fast the particle fades out
	this.decay = random( 0.015, 0.03 );
}

// update particle
Particle.prototype.update = function( index ) {
	// remove last item in coordinates array
	this.coordinates.pop();
	// add current coordinates to the start of the array
	this.coordinates.unshift( [ this.x, this.y ] );
	// slow down the particle
	this.speed *= this.friction;
	// apply velocity
	this.x += Math.cos( this.angle ) * this.speed;
	this.y += Math.sin( this.angle ) * this.speed + this.gravity;
	// fade out the particle
	this.alpha -= this.decay;
	
	// remove the particle once the alpha is low enough, based on the passed in index
	if( this.alpha <= this.decay ) {
		particles.splice( index, 1 );
	}
}

// draw particle
Particle.prototype.draw = function() {
	ctx. beginPath();
	// move to the last tracked coordinates in the set, then draw a line to the current x and y
	ctx.moveTo( this.coordinates[ this.coordinates.length - 1 ][ 0 ], this.coordinates[ this.coordinates.length - 1 ][ 1 ] );
	ctx.lineTo( this.x, this.y );
	ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
	ctx.stroke();
}

// create particle group/explosion
function createParticles( x, y ) {
	// increase the particle count for a bigger explosion, beware of the canvas performance hit with the increased particles though
	var particleCount = 30;
	while( particleCount-- ) {
		particles.push( new Particle( x, y ) );
	}
}

// main demo loop
function loop() {
	// this function will run endlessly with requestAnimationFrame
	requestAnimFrame( loop );
	
	// increase the hue to get different colored fireworks over time
	hue += 0.5;
	
	// normally, clearRect() would be used to clear the canvas
	// we want to create a trailing effect though
	// setting the composite operation to destination-out will allow us to clear the canvas at a specific opacity, rather than wiping it entirely
	ctx.globalCompositeOperation = 'destination-out';
	// decrease the alpha property to create more prominent trails
	ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
	ctx.fillRect( 0, 0, cw, ch );
	// change the composite operation back to our main mode
	// lighter creates bright highlight points as the fireworks and particles overlap each other
	ctx.globalCompositeOperation = 'lighter';
	
	// loop over each firework, draw it, update it
	var i = fireworks.length;
	while( i-- ) {
		fireworks[ i ].draw();
		fireworks[ i ].update( i );
	}
	
	// loop over each particle, draw it, update it
	var i = particles.length;
	while( i-- ) {
		particles[ i ].draw();
		particles[ i ].update( i );
	}
	
	// launch fireworks automatically to random coordinates, when the mouse isn't down
	if( timerTick >= timerTotal ) {
		if( !mousedown ) {
			// start the firework at the bottom middle of the screen, then set the random target coordinates, the random y coordinates will be set within the range of the top half of the screen
			fireworks.push( new Firework( cw / 2, ch, random( 0, cw ), random( 0, ch / 2 ) ) );
			timerTick = 0;
		}
	} else {
		timerTick++;
	}
	
	// limit the rate at which fireworks get launched when mouse is down
	if( limiterTick >= limiterTotal ) {
		if( mousedown ) {
			// start the firework at the bottom middle of the screen, then set the current mouse coordinates as the target
			fireworks.push( new Firework( cw / 2, ch, mx, my ) );
			limiterTick = 0;
		}
	} else {
		limiterTick++;
	}
}

window.onload = loop;

// end of firework // 

let bot = new RiveScript();

const message_container = document.querySelector('.messages');
const form = document.querySelector('.actions');
const input_box = document.querySelector('#form-input');

const brains = [
  'https://gist.githubusercontent.com/jliangDS/90f0daa315fb2a973a485211faafe7ce/raw/420642a80eea626506024aa6bbac2dccf20e4e93/brain.rive'
];

bot.loadFile(brains).then(botReady).catch(botNotReady);



form.addEventListener('submit', (e) => {
  e.preventDefault();
  selfReply(input_box.value);
  input_box.value = '';
});

function botReply(message){
  message_container.innerHTML += `<div class="bot">${message}</div>`;
  location.href = '#edge';
}

function selfReply(message){
  message_container.innerHTML += `<div class="self">${message}</div>`;
  location.href = '#edge';
  
  bot.reply("local-user", message).then(function(reply) {
    botReply(reply);
  });
}

function botReady(){
  bot.sortReplies();
  botReply('Hello');
}

function botNotReady(err){
  console.log("An error has occurred.", err);
}
