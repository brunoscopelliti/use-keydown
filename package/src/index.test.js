import { fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import useKeydown from "./";

describe("useKeydown", () => {
  it("executes handler on every keydown / defaults", () => {
    const spy = jest.fn();

    renderHook(() => useKeydown(spy));

    fireEvent.keyDown(document.body, {});

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("stops listening keydown after unmount", () => {
    const spy = jest.fn();

    const { unmount } = renderHook(() => useKeydown(spy));

    unmount();

    fireEvent.keyDown(document.body, {});

    expect(spy).not.toHaveBeenCalled();
  });

  it("executes handler on specific keydown", () => {
    const spy = jest.fn();

    renderHook(() => useKeydown(spy, { keys: "Enter" }));

    fireEvent.keyDown(document.body, { code: "Enter" });

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("doesn't execute handler when hook is not active", () => {
    const spy = jest.fn();

    renderHook(() => useKeydown(spy, { active: false, keys: "Enter" }));

    fireEvent.keyDown(document.body, { code: "Enter" });

    expect(spy).not.toHaveBeenCalled();
  });

  it("doesn't execute handler on ignored keydown", () => {
    const spy = jest.fn();

    renderHook(() => useKeydown(spy, { keys: "Enter" }));

    fireEvent.keyDown(document.body, { code: "Escape" });

    expect(spy).not.toHaveBeenCalled();
  });

  it("executes handler on specific keydown / multiple registered", () => {
    const spy = jest.fn();

    renderHook(() => useKeydown(spy, { keys: ["Enter", "Escape"] }));

    fireEvent.keyDown(document.body, { code: "Escape" });

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
