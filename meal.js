const  search = document.getElementById('search');
           
const submit = document.getElementById('submit');
const mealEl =document.getElementById('meals')

const resultHeading = document.getElementById('result-heading');


function searchMeal(displayItem){
    displayItem.preventDefault();
 //    const mealValue = search.value;
         const term = search.value;
     if(term.trim()){
     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)

     .then(res => res.json())
     
     .then(data => {
        //  resultHeading.innerHTML = `
        //      <h1> ${term}</h1>
        //  `
         if(data.meals === null){
             resultHeading.innerHTML = `
             <h1 class="text">Sorry sir ${term} this item not mach our  resepi please search another rasipi thank you</h1>
         `
          
         }else{
             mealEl.innerHTML = data.meals.map(
                 meal =>`
                             <div class="meal cards">
                                    <div class="cards-body">
                                            <img class="img-fluid" src="${meal.strMealThumb}" alt="${meal.strMealThumb}"
                                           <div class="info-style">
                                                <div class="meal-information" data-mealID=${meal.idMeal}
                                                <h2 class="name">${meal.strMeal} </h2>
                                           </div>
                                    </div>
                             </div>
                  `
             )
            .join('');
         }
         
     });

 }else{
     alert("Please enter your inputs")
 }


}

 //my events

 submit.addEventListener("submit", searchMeal);
