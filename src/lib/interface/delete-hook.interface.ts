/**
 * @description The shape of the delete hook.
 * @export
 * @interface DeleteHook
 * @template T The type of item being deleted.
 * @template Payload The type of payload.
 * @template [CallbackFn=(item: T) => void] The type of callback function.
 */
export interface DeleteHook<T, Payload, CallbackFn = (item: T, payload?: Payload) => void> {
  onDeleteCallback?: CallbackFn;
  onDelete?(callbackfn: CallbackFn): void;
}
