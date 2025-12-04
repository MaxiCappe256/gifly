import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe('useCounter', () => {

  test('should initialize whit default value of 10', () => {

    const { result } = renderHook(() => useCounter())

    expect(result.current.counter).toBe(10)

  })

  test('should initialize whit value is 20', () => {
    const initialValue = 20

    const { result } = renderHook(() => useCounter(initialValue))

    expect(result.current.counter).toBe(initialValue)

  })

  test('should increment counter whit handleAdd is called', () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.handleAdd()
    })

    expect(result.current.counter).toBe(11)
  })

  test('should decrement counter whit handleSubtract is called', () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.handleSubtract()
    })

    expect(result.current.counter).toBe(9)
  })

  test('should reset to initialValue the counter whit handleReset is called', () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.handleReset()
    })

    expect(result.current.counter).toBe(10)
  })


})