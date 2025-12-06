/**
 * @description The shape of the before each hook.
 * @export
 * @interface BeforeEachHook
 * @template T The type of arguments being processed.
 * @template [CallbackFn=(...args: T[]) => void]
 */
export interface BeforeEachHook<T, CallbackFn = (...args: T[]) => void> {
  beforeEachCallback?: CallbackFn;
  beforeEach?(callbackfn?: CallbackFn): this;
}
