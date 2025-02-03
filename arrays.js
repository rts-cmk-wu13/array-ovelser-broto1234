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

    let newNumbers = numbersArray.filter(function (num) {
        return num > 20
    })

    console.log(newNumbers)

    //-------------------------------Opgave 1 End -------------------------------------------
    

}) // ends DOMContentLoaded