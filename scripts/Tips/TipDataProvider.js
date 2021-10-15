const tipCollection = [
    {
        tank: "Saltwater",
        cleaning: "Once a week",
        salinity: "1.024",
        temperature: "78 degrees Farenheit",
        thoughts: "My name is Martin and I know everything about fish becuase I read a book once"
    }
]


export const useTips = () => {
    return tipCollection.slice()
}