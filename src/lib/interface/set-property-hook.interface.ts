// Interface.
import { OnSetPropertyCallback } from '@typedly/callback';
/**
 * @description The `SetPropertyHook` interface defines a lifecycle hook for managing the setting of a property value of an object of type `T`.
 * @export
 * @interface SetPropertyHook
 * @template {object} T  The type of the object the property belongs to.
 * @template [Payload=unknown] 
 */
export interface SetPropertyHook<T extends object, Payload = unknown> {
  /**
   * @description The `onSetProperty` hook is triggered before a property value is set.
   * @type {?OnSetPropertyCallback<T, Payload>}
   */
  onSetProperty?: OnSetPropertyCallback<T, Payload>;
}