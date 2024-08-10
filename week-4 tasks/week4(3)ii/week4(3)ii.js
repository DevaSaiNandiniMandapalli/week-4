function dayMessage() {
    let day = prompt("Enter a day of the week: ").toLowerCase();  
    switch (day) {
        case "monday":
            console.log("Start of the work week!");
            break;
        case "tuesday":
            console.log("Second day of the work week.");
            break;
        case "wednesday":
            console.log("Midweek already!");
            break;
        case "thursday":
            console.log("Almost there.");
            break;
        case "friday":
            console.log("Last day of the work week!");
            break;
        case "saturday":
            console.log("Weekend! Time to relax.");
            break;
        case "sunday":
            console.log("Weekend! Time to prepare for the week ahead.");
            break;
        default:
            console.log("That's not a valid day!");
    }
}
dayMessage();
