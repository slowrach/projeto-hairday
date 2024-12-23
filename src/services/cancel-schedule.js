import { apiConfig } from "./api-config.js"

export async function cancelSchedule({ id }) {
   try {
      await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
         method: 'DELETE',
      })
   } catch (error) {
      console.log(error)
      alert("Não foi possível cancelar o agendamento. Tente novamente")
   }
}