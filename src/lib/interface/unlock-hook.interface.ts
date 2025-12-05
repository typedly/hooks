/**
 * @description The shape of the unlock hook.
 * @export
 * @interface UnlockHook
 * @template Payload The type of the payload for the unlock operation.
 * @template [CallbackFn=(payload?: Payload) => void] 
 */
export interface UnlockHook<Payload, CallbackFn = (payload?: Payload) => void> {
  onUnlockCallback?: CallbackFn;
  onUnlock?(callbackfn: CallbackFn): void;
}
