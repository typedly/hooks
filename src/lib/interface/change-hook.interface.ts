// Interface.
import { OnChangeCallback } from '@typedly/callback';
/**
 * @description The `ChangeHook` interface defines a lifecycle hook for managing changes of an object of type `T`.
 * @export
 * @interface ChangeHook
 * @template T The type of value being changed.
 * @template Payload The type of payload.
 */
export interface ChangeHook<T, Payload = unknown> {
  /**
   * @description The onChange hook is triggered whenever the value changes.
   * @param {?OnChangeCallback<T, Payload>} callbackfn The callback function to be called on change.
   * @returns {this} The current instance for chaining.
   */
  onChange?(callbackfn?: OnChangeCallback<T, Payload>): this;
}
