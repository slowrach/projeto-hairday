import { schedules } from "./load.js"
import { cancelSchedule } from "../../services/cancel-schedule.js"

const periods = document.querySelectorAll(".period")

periods.forEach((period) => {
   period.addEventListener("click", async (event) => {
      if (event.target.classList.contains("cancel-icon")) {
         const item = event.target.closest("li")
         const { id } = item.dataset

         if (id) {
            const isConfirm = confirm("Deseja cancelar esse agendamento?")

            if (isConfirm) {
               await cancelSchedule({ id })
               schedules()
            }
         }
      }
   })
})
