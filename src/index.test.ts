import { renderHook } from "@testing-library/react-hooks";
import { useCircuitBreaker } from ".";

describe("useCircuitBreaker", () => {
  const setup = async () => {
    const spyCallbackFn = jest.fn();
    const { result } = renderHook(() =>
        useCircuitBreaker(3, 500, spyCallbackFn),
    );

    return {
      result,
      spyCallbackFn,
    };
  };

  it("should call callback function when call count for returned function had overed limit in interval", async () => {
    const {
      result: { current },
      spyCallbackFn,
    } = await setup();

    const send = current[0];
    await Promise.all([send(), send(), send()]);

    expect(spyCallbackFn).toHaveBeenCalled();
  });

  it("should not call callback function when call count for returned function had not overed limit in interval", async () => {
    const {
      result: { current },
      spyCallbackFn,
    } = await setup();

    const send = current[0];
    await Promise.all([send(), send()]);

    expect(spyCallbackFn).not.toHaveBeenCalled();
  });
});
