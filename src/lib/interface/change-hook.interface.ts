import { OnChangeCallback } from '@typedly/callback';
/**
 * @description The `ChangeHook` interface defines a lifecycle hook for managing changes of an object of type `T`.
 * @export
 * @interface ChangeHook
 * @template T 
 */
export interface ChangeHook<T, Payload = unknown> {
  /**
   * @description The onChange hook is triggered whenever the value changes.
   * @type {?OnChangeCallback<T, Payload>}
   */
  onChange?: OnChangeCallback<T, Payload>;
}
