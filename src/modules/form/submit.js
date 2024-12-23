import dayjs from "dayjs"
import { newSchedule } from "../../services/new-schedule.js"
import { schedules } from "../schedules/load.js"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")

selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD")


form.onsubmit = async (event) => {
   event.preventDefault()

   try {
      const name = clientName.value.trim()

      if (!name) {
         return alert("Informe o nome do cliente")
      }

      const hourSelected = document.querySelector(".hour-selected")

      if (!hourSelected) {
         return alert("Selecione um horário")
      }

      const [hour] = hourSelected.innerText.split(":")

      const when = dayjs(selectedDate.value).add(hour, "hour")

      const id = new Date().getTime()

      await newSchedule({
         id,
         name,
         when,
      })

      await schedules()

      clientName.value = ""
   } catch (error) {
      alert("Não foi possível realizar o agendamento")
      console.log(error)
   }
}