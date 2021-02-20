//this will store the information, but Portfolio.js will import it and then pass it down to Card index.js
// this will be an array of all objects

import burgerpic from "../images/burgers-app.png"
import oooImage from "../images/ooo-create.png"
import lookLaughPic from "../images/project-one-closeup.png"
import weatherPic from "../images/weather-dashboard.png"
import plannerPic from "../images/workday-planner.png"
import gbktPic from "../images/gbkt.png"
import fitPic from "../images/fitTrack.png"
// import name from "../images/"

const projectData = [
    {
        projectTitle: "GiveBack KeepTrack",
        projectImage: gbktPic,
        projectImageAlt: "screenshot of the GiveBack KeepTrack welcome page",
        projectTagline: "Keep Track of Give Backs",
        projectDescription: "Create entries for charitable donations, including tax deductible, employer matched, and documentation status",
        deployedSite: "https://giveback-keeptrack.herokuapp.com/",
        githubRepo: "https://github.com/suzygiv/GiveBack-KeepTrack",
    },
    {
        projectTitle: "Fitness Tracker",
        projectImage: fitPic,
        projectImageAlt: "screenshot of fitness data over time, one pie graph for type and one bar graph for duration",
        projectTagline: "Workout Progress and Motivation",
        projectDescription: "Track your daily workout, including multiple exercises in a workout on a given day, and more specific details such as: name, type, weight, sets, reps, duration, and distance (if cardio).",
        deployedSite: "https://fitness-tracker-alison.herokuapp.com/stats",
        githubRepo: "https://github.com/theoriginalison/fitness-tracker",
    },
    {
        projectTitle: "Out-Of-Office \\\(OoO)/",
        projectImage: oooImage,
        projectImageAlt: "screenshot of the create an event page",
        projectTagline: "Create a Workplace Community",
        projectDescription: "Log in, see today's after-work events, join, or create your own",
        deployedSite: "https://out-of-office1.herokuapp.com/",
        githubRepo: "https://github.com/Alexandra-Hionis/Out-Of-Office",
    },
    {
        projectTitle: "EAT-DA-BURGER",
        projectImage: burgerpic,
        projectImageAlt: "screenshot of the giphy cat chasing a burger, with two lists: burgers available, and burgers devoured",
        projectTagline: "A Responsive Menu",
        projectDescription: "View, add, or devour available burgers",
        deployedSite: "https://theoriginalison-burgers-app.herokuapp.com/",
        githubRepo: "https://github.com/theoriginalison/burger",
    },
    {
        projectTitle: "WORKDAY PLANNER",
        projectImage: plannerPic,
        projectImageAlt: "screenshot of the workday planner with times listed on the left, places to enter tasks in the middle, and a blue save button with a disk icon",
        projectTagline: "Schedule your day",
        projectDescription: "Save your to-dos in a timely and hourly-responsive fashion",
        deployedSite: "https://theoriginalison.github.io/workday-planner/",
        githubRepo: "https://github.com/theoriginalison/workday-planner",
    },
    {
        projectTitle: "WEATHER DASHBOARD",
        projectImage: weatherPic,
        projectImageAlt: "screenshot of the weather dashboard with searched cities as buttons on the left, the weather for the day at the top of the main section, with a five-day forecast underneath",
        projectTagline: "Forecast for Travelers",
        projectDescription: "Provides current conditions, five-day forecast, and saved cities",
        deployedSite: "https://theoriginalison.github.io/weather-dashboard/",
        githubRepo: "https://github.com/theoriginalison/weather-dashboard<",
    },
    {
        projectTitle: "LOOK & LAUGH",
        projectImage: lookLaughPic,
        projectImageAlt: "screenshot of Look & Laugh page: a teal background with search bar for an image or joke, a placeholder image of a winky face sticking its tongue out, and a place to save images & jokes to favorites",
        projectTagline: "Breaks for Coders",
        projectDescription: "Returns a giphy image & joke for a user's searched term with an option to save favorites",
        deployedSite: "https://theoriginalison.github.io/look-laugh/",
        githubRepo: "https://github.com/theoriginalison/look-laugh",
    },
    // {
    //     projectTitle: "",
    //     projectImage: "",
    //     projectImageAlt: "",
    //     projectTagline: "",
    //     projectDescription: "",
    //     deployedSite: "",
    //     githubRepo: "",
    // }
]

export default projectData;