// just a UI test
import { renderHook, act } from "@testing-library/react"
import { useCommentsDisplay } from "./useCommentsDisplay"

describe("useCommentsDisplay", () => {
  it("should display comments when showThemFnc is called", () => {
    const { result } = renderHook(() => useCommentsDisplay())
    act(() => {
      result.current[1].showThem()
    })
    expect(result.current[0]).toBe(true)
  })

  it("should remove comments when showThemFnc is called", () => {
    const { result } = renderHook(() => useCommentsDisplay())
    act(() => {
      result.current[1].hideThem()
    })
    expect(result.current[0]).toBe(false)
  })
})
