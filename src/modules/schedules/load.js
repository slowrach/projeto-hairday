import { dayFetch } from "../../services/day-fetch.js";
import { hoursLoad } from "../form/hours.js";
import { show } from "./show.js";

const selectedDate = document.getElementById("date") 

export async function schedules() {
   const date = selectedDate.value

   const daily = await dayFetch({ date })

   show({ daily })

   hoursLoad({ date, daily })
}