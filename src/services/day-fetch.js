import { apiConfig } from "./api-config.js"
import dayjs from "dayjs"

export async function dayFetch({ date }) {
   try {
      const response = await fetch(`${apiConfig.baseURL}/schedules`)

      const data = await response.json()

      const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

      return dailySchedules
   } catch (error) {
      console.log(error)
      alert("Não foi possível buscar os agendamentos")
   }
}