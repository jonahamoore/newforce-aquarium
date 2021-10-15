//travel and locations
export const Location = (location) => {
    return `
        <section class ="travel card">
             <div class="place">${location.place}</div>
             <div class="body_of_water>${location.bodyofwater}</div>   
        </section>
    `
}