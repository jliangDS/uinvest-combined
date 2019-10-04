// include 10 companies based on some metric
// let stockSymbol;
let symbol = 'MSFT'
//const stockURL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=ILUBO06QW6K6ATMM"

// const topPerformingStocks = []
// const worstPerformingStocks = []
// function getPrice(symbol){
// fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=ILUBO06QW6K6ATMM`
// )
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(quote){
//         console.log(Object.values(quote)[0]["05. price"])
//     })
// })

// fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=ILUBO06QW6K6ATMM')
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(quote){
//         console.log(Object.values(quote)[0]["05. price"])
//     })

// function add(number){
//     return number + number 
// }



// topPerformingStocks.push()
// worstPerformingStocks.push()

//var stockSymbol = ${stockSymbol}
//${stockSymbol.value}

//have set stock 
const riveBrain = `

! var master = kirsle

+ master
- <bot master>

+ ip
- <call>myip</call>

+ my name is *
- <set name=<formal>>Nice to meet you, <get name>!

+ what is my name
- Your name is <get name>

+ stock
- The stock is: <call>mystock</call>

+ what is the price of * stock
- the stock price for <set stock=<formal>> is: <get stock>!

+ what is * divided by *
- <call>floating_point_divide</call>

> object floating_point_divide javascript
return 5
< object

> object myip javascript
    const myip = "myip"
    return myip
< object

> object mystock javascript
    console.log("hi there im working")
    let returnStock = 0
    return fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=ILUBO06QW6K6ATMM')
        .then(function(response){
            return response.json()
        })
        .then(function(quote){
            console.log(quote["Global Quote"]["05. price"])
            let returnStock = parseFloat(quote["Global Quote"]["05. price"])
            console.log("the return value is: ", returnStock)
            return returnStock
        })
< object

`
