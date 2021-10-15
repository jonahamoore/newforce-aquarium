import { useFish } from "./fish/FishDataProvider.js";
import { fishList } from "./fish/fishList.js";
import { useTips } from "./Tips/TipDataProvider.js";
import { TipsList } from "./Tips/TipList.js";
import { useLocation } from "./locations/LocationDataProvider.js";
import { locationList } from "./locations/LocationList.js";

const allTheFish = useFish()

for (const fish of allTheFish){
    console.log(fish)
}

fishList()

const allTheTips = useTips()

for (const tips of allTheTips){
    console.log(tips)
}

TipsList()

const allTheLocations = useLocation()

for (const location of allTheLocations){
    console.log(location)
}

locationList()