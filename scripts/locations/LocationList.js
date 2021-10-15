import { useLocation } from "./LocationDataProvider.js";
import { Location } from "./Location.js";

export const locationList = () => {

    const contentElement = document.querySelector("#locationList")
    const location = useLocation ()

    let locationHTMLRepresentations =""
    for (const singleObjectlocation of location) {
        locationHTMLRepresentations += Location(singleObjectlocation)
    }
    contentElement.innerHTML += `
        <article id="locationList> ${locationHTMLRepresentations}
        </article>`
}