// Interface.
import { OnDestroyCallback } from "@typedly/callback";
/**
 * @description The `DestroyHook` interface defines a lifecycle hook for managing the destruction of an object of type `T`.
 * @export
 * @interface DestroyHook
 * @template T 
 */
export interface DestroyHook<Payload> {
  /**
   * @description The onDestroy hook is triggered when the object is destroyed.
   * @param {?OnDestroyCallback<Payload>} callbackfn The callback function to be called on destroy.
   * @returns {this} The current instance for chaining.
   */
  onDestroy?(callbackfn?: OnDestroyCallback<Payload>): this;
}
