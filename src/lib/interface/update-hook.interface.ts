/**
 * @description The shape of the update hook.
 * @export
 * @interface UpdateHook
 * @template T The type of item being updated.
 * @template Payload The type of the payload for the update.
 * @template [CallbackFn=(item: T, payload?: Payload) => void] 
 */
export interface UpdateHook<T, Payload, CallbackFn = (item: T, payload?: Payload) => void> {
  onUpdateCallback?: CallbackFn;
  onUpdate?(callbackfn: CallbackFn): void;
}
