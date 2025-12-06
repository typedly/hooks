/**
 * @description The shape of the before all hook.
 * @export
 * @interface BeforeAllHook
 * @template T The type of arguments being processed.
 * @template [CallbackFn=(...args: T[]) => void]
 */
export interface BeforeAllHook<T, CallbackFn = (...args: T[]) => void> {
  beforeAllCallback?: CallbackFn;
  beforeAll?(callbackfn?: CallbackFn): this;
}
