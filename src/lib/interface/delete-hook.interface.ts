/**
 * @description The shape of the delete hook.
 * @export
 * @interface DeleteHook
 * @template T 
 * @template [CallbackFn=(item: T) => void] 
 */
export interface DeleteHook<T, CallbackFn = (item: T) => void> {
  onDeleteCallback?: CallbackFn;
  onDelete?(callbackfn: CallbackFn): void;
}
