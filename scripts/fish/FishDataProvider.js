const fishCollection = [
    {   
        name: "George",
        species: "goldfish",
        length: "Hefty",
        food: "toxic waste",
        location: "Ohio River",
    },
    {
        name: "Catelyn",
        species: "Catfish",
        length: "tiny",
        food: "pixie sticks",
        location: "Kanawha River",
    },
    {
        name: "Franklin",
        species: "Carp",
        length: "about yay big",
        food: "plastic rings from 6 packs",
        location: "Mud River",
    },
    {
        name: "Captain D",
        species: "Cod",
        length: "30 cm",
        food: "fried batter",
        location: "Coal River",
    },
    {
        name: "Mrs. Puff",
        species: "Puffer Fish",
        length: "2 and 1/2 feet",
        food: "Plankton",
        location: "Bikini Bottom",
    },
];



export const useFish = () => {
    return fishCollection.slice()
}

