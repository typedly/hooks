/**
 * @description The shape of the clear hook.
 * @export
 * @interface ClearHook
 * @template Payload The type of payload.
 * @template [CallbackFn=(payload?: Payload) => void] The type of callback function.
 */
export interface ClearHook<Payload, CallbackFn = (payload?: Payload) => void> {
  onClearCallback?: CallbackFn;
  onClear?(callbackfn: CallbackFn): void;
}
