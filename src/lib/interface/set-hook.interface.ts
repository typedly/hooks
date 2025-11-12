// Interface.
import { OnSetCallback } from "@typedly/callback";
/**
 * @description The `SetHook` interface defines a lifecycle hook for managing the setting of a value of type `T`.
 * @export
 * @interface SetHook
 * @template T 
 */
export interface SetHook<T, Payload = unknown> {
  /**
   * @description The onSet hook is triggered before the value is set.
   * @param {?OnSetCallback<T, Payload>} callbackfn The callback function to be called on set.
   * @returns {this} The current instance for chaining.
   */
  onSet?(callbackfn?: OnSetCallback<T, Payload>): this;
}