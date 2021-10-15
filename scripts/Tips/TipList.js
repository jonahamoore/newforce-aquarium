import { useTips } from "./TipDataProvider.js"
import { Tips } from "./Tip.js"

 export const TipsList = () => {
 
     const contentElement = document.querySelector("#TipsList")
     const tips = useTips()
 
     let tipsHTMLRepresentations = ""
     for (const singleTipObject of tips) {
        tipsHTMLRepresentations += Tips(singleTipObject)
     }
     contentElement.innerHTML += `
         <aside id="TipsList">
             ${tipsHTMLRepresentations}
         </aside>
     `
 }
 