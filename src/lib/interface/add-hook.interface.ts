/**
 * @description The `AddHook` interface defines a Lifecycle hook for managing the addition of item of type `T`.
 * @export
 * @interface AddHook
 * @template T The type of item being added.
 * @template Payload The type of the payload for the addition.
 * @template [CallbackFn=(item: T, payload?: Payload) => void] 
 */
export interface AddHook<T, Payload, CallbackFn = (item: T, payload?: Payload) => void> {
  onAddCallback?: CallbackFn;
  onAdd?(callbackfn: CallbackFn): void;
}
