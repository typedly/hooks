/**
 * @description The shape of the after each hook.
 * @export
 * @interface AfterEachHook
 * @template T The type of arguments being processed.
 * @template [CallbackFn=(...args: T[]) => void] The type of callback function.
 */
export interface AfterEachHook<T, CallbackFn = (...args: T[]) => void> {
  afterEachCallback?: CallbackFn;
  afterEach?(callbackfn?: CallbackFn): this;
}
