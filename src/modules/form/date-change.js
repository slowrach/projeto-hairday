import { schedules } from "../schedules/load.js"

const selectedDate = document.getElementById("date")

selectedDate.onchange = () => schedules()