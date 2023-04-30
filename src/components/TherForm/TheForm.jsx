import React, { Suspense, useCallback, useMemo, useState } from "react"
import { useQuery } from "react-query"
import { useFormikContext, Formik, Form, ErrorMessage, Field } from "formik"
import * as Yup from "yup"
import "./TheForm.css"
import { Loading } from "../../App"
import GptResponse from "../GptResponse/GptResponse"
import { useCommentsDisplay } from "../../hooks/useCommentsDisplay/useCommentsDisplay"

export const GpTalks = () => {
  const [showComments, { showThem, hideThem }] = useCommentsDisplay()
  const [count, setCount] = useState(0)

  // getting what they call it the Formikbag using formik context hook
  const { values, submitForm, resetForm, dirty } = useFormikContext()
  const pastedCode = Object.values(values).flat()

  /*----- --- THIS IS SUPPOSED TO BE A custom hook,
   i had bugs when i did, will be fixed soon --------- */

  const useGptResponse = () => {
    // console.log("custom hook called")
    const fetcherFnc = async () => {
      // console.log("fetcher fnc called")
      const payload = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_GPT_KEY}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt:
            "provide comments for this piece of code:\n\n" + pastedCode + "",
          temperature: 0.5,
          max_tokens: 60,
          top_p: 1.0,
          frequency_penalty: 0.8,
          presence_penalty: 0.0,
        }),
      }
      try {
        const response = await fetch(import.meta.env.VITE_GPT_URL, payload)
        const json = await response.json()
        console.log(json.choices[0].text)
        return json.choices[0].text
      } catch (error) {
        console.error(error)
      } finally {
        resetForm({ values: "" })
      }
    }
    return useQuery("comments", fetcherFnc, {
      enabled: false,
    })
  }

  //-------------------------------------------------------------------

  //recovering useQuery results
  const { isError, data, error, refetch, isFetching } =
    useGptResponse(pastedCode)

  const trackSumbitBtnClicks = () => {
    setCount((prev) => prev + 1)
  }

  if (isError) {
    return <h2>{`Internal error: ` + error.message}</h2>
  }
  if (isFetching) {
    return <Loading />
  }
  if (count >= 3) {
    return (
      <>
        <h3> Sorry! Upgrade To Premium or Refrech Page to Use it Again</h3>
        <GptResponse data={data} showThem={showThem} hideThem={hideThem} />
      </>
    )
  }
  return (
    <>
      {count < 3 && (
        <button
          className="get-code-btn"
          type="submit"
          disabled={!dirty}
          onClick={() => {
            submitForm()
            refetch()
            showThem() //showing the comment
            trackSumbitBtnClicks()
          }}
        >
          Get Code Comments
        </button>
      )}
      {showComments ? (
        <GptResponse data={data} showThem={showThem} hideThem={hideThem} />
      ) : null}

      {/* {showComments ? (
        <Suspense fallback={<Loading />}>
          <GptResponse data={data} show={show} hide={hide} />
        </Suspense>
      ) : null} */}
    </>
  )
}

export const Formikato = () => {
  const initialValues = {
    message: "",
  }

  const validationSchema = Yup.object({
    message: Yup.string().trim().required("You haven't typed anything!"),
  })

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // handle form submission here
          resetForm({ values: "" })
          setSubmitting(false)
        }}
        enableReinitialize={true}
      >
        {({ handleChange, handleBlur }) => (
          <Form id="my-form">
            <label className="label" htmlFor="message">
              I WANT TO COMMENT THIS CODE
            </label>
            <Field
              as="textarea"
              className="input"
              id="message"
              name="message"
              type="text"
              placeholder="Paste your code here!"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="error">
              <ErrorMessage
                name="message"
                component="span"
                className="error-msg"
              />
            </div>
            <GpTalks />
          </Form>
        )}
      </Formik>
    </>
  )
}

export default Formikato

//this is a custom hoook for hadling the display of the server response i.e comments
// const useCommentsDisplay = () => {
//   const [showComments, setShowComments] = useState(false)
//   const handlers = useMemo(
//     () => ({
//       showThem: () => {
//         setShowComments(true)
//       },
//       hideThem: () => {
//         setShowComments(false)
//       },
//     }),
//     []
//   )
//   return [showComments, handlers]
// }

//this is a custom hoook for hadling the display of the server response i.e comments
// const useButtonDisplay = () => {
//   const [showButton, setShowButton] = useState(true)
//   const handlers = useMemo(
//     () => ({
//       showBtn: () => {
//         setShowButton(true)
//       },
//       hideBtn: () => {
//         setShowButton(false)
//       },
//     }),
//     []
//   )
//   return [showButton, handlers]
// }
