/**
 * @description The shape of the clear hook.
 * @export
 * @interface ClearHook
 * @template [CallbackFn=() => void] 
 */
export interface ClearHook<CallbackFn = () => void> {
  onClearCallback?: CallbackFn;
  onClear?(callbackfn: CallbackFn): void;
}
