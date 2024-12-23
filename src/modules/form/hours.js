import dayjs from "dayjs"
import { openingHour } from "../../utils/open.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date, daily }) {
   hours.innerHTML = ""

   const unavailable = daily.map((schedule) => dayjs(schedule.when).format("HH:mm"))

   const opening = openingHour.map((hour) => {
      const [scheduleHour] = hour.split(":")

      const isPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
      
      const available = !unavailable.includes(hour) && !isPast

      return {
         hour,
         available
      }
   })

   opening.forEach(({ hour, available }) => {
      const li = document.createElement("li")

      li.classList.add("hour")
      li.classList.add(available ? "hour-available" : "hour-unavailable")
      li.textContent = hour

      if (hour === "9:00") {
         hourHeader("Manhã")
      } else if (hour === "13:00") {
         hourHeader("Tarde")
      } else if (hour === "18:00"){
         hourHeader("Noite")
      }

      hours.append(li)
   })

   hourSelected()
}

function hourHeader(title) {
   const header = document.createElement("li")

   header.classList.add("hour-period")
   header.textContent = title

   hours.append(header)

}

function hourSelected() {
   const hoursAvailable = document.querySelectorAll('.hour-available')

   hoursAvailable.forEach((available) => {
      available.addEventListener('click', (event) => {
         hoursAvailable.forEach((hour) => {
            hour.classList.remove("hour-selected")
         })

         event.target.classList.add("hour-selected")
      }) 
   })
}