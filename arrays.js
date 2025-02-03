document.addEventListener("DOMContentLoaded", function() {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 

    //--------------------------- Opgave 1---------------------------------------
    
    //---------- forEach & if---------
    // let newArray = [];

    // numbersArray.forEach(function(num) {
    //     // console.log(num)
    //     if(num > 20) return newArray.push(num)            
    // })
    
    // console.log(newArray);

    //-------- filter() -------

    // let newNumbers = numbersArray.filter(function (num) {
    //     return num > 20
    // })

    // console.log(newNumbers)

    //-------------------------------Opgave 1 End -------------------------------------------
    
    
    //------------------ Opgave 2 ------------------------------------------------------------------------

    //--------- push() ----------------
    // catsArray.push("Sniffles");
    // console.log(catsArray)
    
    //-------- concat() -----------
    
    // let catsArrayNew = catsArray.concat("Sniffles");
    // console.log(catsArrayNew)

    //------------------------- Opgave 2 End-------------------------------------------------


    //--------------------------- Opgave 3 -------------------------------------------------------

   
   //------- 3a --------
    // let checkTrixie = dogsArray.includes("Trixie");
    // console.log("Opgave 3a", checkTrixie)

   //------- 3b --------
    // let checkBaxter = dogsArray.includes("Baxter");
    // console.log("Opgave 3b", checkBaxter)

    //--------------------------- Opgave 3 End -------------------------------------------------------


    //--------------------------- Opgave 4 -------------------------------------------------------

    //------- 4a -----
    // let catFind = catsArray.find(function(cat) {
    //     return cat == "Bagheera"}) 

    // console.log(catFind)

    //------- 4b -----

    // let catFind2 = catsArray.find(function(cat) {
    //     return cat == "Salem"}) 

    // console.log(catFind2)

    //--------------------------- Opgave 4 End -------------------------------------------------------


    //--------------------------- Opgave 5 -------------------------------------------------------

    
    // let newNumbersArray = numbersArray.map(function(num) {
    //     return num * 3}) 

    // console.log(newNumbersArray)

    //--------------------------- Opgave 5 End -------------------------------------------------------
    
    //--------------------------- Opgave 6 -------------------------------------------------------

    
    // let dogString = dogsArray.join('');  // Using '' for no gap 

    // console.log("Opgave 6", dogString)

    //--------------------------- Opgave 6 End -------------------------------------------------------
    
    
    //--------------------------- Opgave 7 -------------------------------------------------------

    //--------- 7a ----    
    // let indexFruit = fruitsArray.indexOf("Mango")

    // console.log("Opgave 7a: Mango index is: ", indexFruit)
    
    //--------- 7b ----    
    // let indexFruit = fruitsArray.indexOf("Blåbær")     // findIndex()

    // console.log("Opgave 7b: Blåbær index is: ", indexFruit)

    //--------------------------- Opgave 7 End -------------------------------------------------------
    
    
    //--------------------------- Opgave 8 -------------------------------------------------------

    // let newArrayDog = dogsArray.filter(function (dog){
    //     return dog != "Polly";
    // })

    // console.log("Opgave 8: New dog lists: ", newArrayDog)

    //--------------------------- Opgave 8 End -------------------------------------------------------
    
    
    //--------------------------- Opgave 9 Extra Opgave-------------------------------------------------------

    let sum = 0;

    numbersArray.forEach( function(num) {
        return sum += num
    })

    console.log("Opgave : Sum all Numbers: ", sum)

    //--------------------------- Opgave 9 End -------------------------------------------------------
    

}) // ends DOMContentLoaded