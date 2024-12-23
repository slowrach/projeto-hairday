import dayjs from "dayjs";

const morning = document.getElementById("period-morning")
const afternoon = document.getElementById("period-afternoon")
const night = document.getElementById("period-night")

export function show({ daily }) {
   try {
      morning.innerHTML = ""
      afternoon.innerHTML = ""
      night.innerHTML = ""

      daily.forEach((schedule) => {
         const item = document.createElement("li")
         const hour = document.createElement("strong")
         const name = document.createElement("span")

         item.setAttribute("data-id", schedule.id)

         hour.textContent = dayjs(schedule.when).format("HH:mm")
         name.textContent = schedule.name

         const cancelIcon = document.createElement("img")
         cancelIcon.classList.add("cancel-icon")
         cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
         cancelIcon.setAttribute("alt", "Cancelar")

         item.append(hour, name, cancelIcon)

         const time = dayjs(schedule.when).hour()

         if (time <= 12) {
            morning.appendChild(item)
         } else if (time > 13 &&  time <= 18) {
            afternoon.appendChild(item)
         } else {
            night.appendChild(item)
         }
      })
   } catch (error) {
      console.log(error)
      alert("Não foi possível exibir os agendamentos")
   }
}