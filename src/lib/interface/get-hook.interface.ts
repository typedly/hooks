/**
 * @description The shape of the get hook.
 * @export
 * @interface GetHook
 * @template T The type of item being retrieved.
 * @template Payload The type of the payload for the get operation.
 * @template [CallbackFn=(item: T, payload?: Payload) => void] 
 */
export interface GetHook<T, Payload, CallbackFn = (item: T, payload?: Payload) => void> {
  onGetCallback?: CallbackFn;
  onGet?(callbackfn: CallbackFn): void;
}
