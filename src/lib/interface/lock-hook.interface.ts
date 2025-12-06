/**
 * @description The shape of the lock hook.
 * @export
 * @interface LockHook
 * @template Payload The type of the payload for the lock operation.
 * @template [CallbackFn=(payload?: Payload) => void] 
 */
export interface LockHook<Payload, CallbackFn = (payload?: Payload) => void> {
  onLockCallback?: CallbackFn;
  onLock?(callbackfn: CallbackFn): void;
}
