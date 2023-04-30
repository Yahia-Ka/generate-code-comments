import { useMemo, useState } from "react"

export const useCommentsDisplay = () => {
  const [showComments, setShowComments] = useState(false)
  const handlers = useMemo(
    () => ({
      showThem: () => {
        setShowComments(true)
      },
      hideThem: () => {
        setShowComments(false)
      },
    }),
    []
  )
  return [showComments, handlers]
}
