/**
 * @description The shape of the after all hook.
 * @export
 * @interface AfterAllHook
 * @template T The type of arguments being processed.
 * @template [CallbackFn=(...args: T[]) => void] The type of callback function.
 */
export interface AfterAllHook<T, CallbackFn = (...args: T[]) => void> {
  afterAllCallback?: CallbackFn;
  afterAll?(callbackfn?: CallbackFn): this;
}
