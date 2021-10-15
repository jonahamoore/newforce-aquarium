 import { useFish } from "./FishDataProvider.js"
 import { Fish } from "./Fish.js"
 
 export const fishList = () => {
 
     const contentElement = document.querySelector("#FishList")
     const fishes = useFish()
 
     let fishHTMLRepresentations = ""
     for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish) 
     }
     contentElement.innerHTML += `
         <article class="fishList">
             ${fishHTMLRepresentations}
         </article>
     `
 }
 
