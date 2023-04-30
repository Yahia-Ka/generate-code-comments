// // import { useCallback } from "react"

// import { useQuery } from "react-query"

// export const useGptResponse = (pastedCode) => {
//   console.log("custom hook called")

//   const fetcherFnc = async (pastedCode) => {
//     console.log("fetcher fnc called")

//     const payload = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${import.meta.env.VITE_GPT_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "text-davinci-003",
//         prompt:
//           "provide comments for this piece of code:\n\n" + pastedCode + "",
//         temperature: 0.5,
//         max_tokens: 40,
//         top_p: 1.0,
//         frequency_penalty: 0.6,
//         presence_penalty: 0.0,
//       }),
//     }

//     try {
//       const response = await fetch(import.meta.env.VITE_GPT_URL, payload)
//       const json = await response.json()
//       console.log(json.choices[0].text)
//       return json.choices[0].text
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   // const { isError, data, error, refetch, isFetching } =
//   return useQuery(["comments", pastedCode], fetcherFnc(pastedCode), {
//     enabled: false,
//   })
// }
