/**
 * @description The shape of the replace hook.
 * @export
 * @interface ReplaceHook
 * @template T The type of item being replaced.
 * @template Payload The type of the payload for the replace operation.
 * @template [CallbackFn=(item: T, payload?: Payload) => void]
 */
export interface ReplaceHook<T, Payload, CallbackFn = (item: T, payload?: Payload) => void> {
  onReplaceCallback?: CallbackFn;
  onReplace?(callbackfn: CallbackFn): void;
}
