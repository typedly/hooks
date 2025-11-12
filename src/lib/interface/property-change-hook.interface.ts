// Interface.
import { OnPropertyChangeCallback } from '@typedly/callback';
/**
 * @description The `PropertyChangeHook` interface defines a lifecycle hook for managing changes to specific properties of an object of type `T`.
 * @export
 * @interface PropertyChangeHook
 * @template T The type of the object the property belongs to.
 * @template [Payload=unknown] 
 */
export interface PropertyChangeHook<T extends object, Payload = unknown> {
  /**
   * @description The `onPropertyChange` hook is triggered whenever a specific property value changes.
   * @type {?OnPropertyChangeCallback<T, Payload>}
   */
  onPropertyChange?: OnPropertyChangeCallback<T, Payload>;
}