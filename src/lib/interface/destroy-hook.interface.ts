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
   * @type {?OnDestroyCallback<Payload>}
   */
  onDestroy?: OnDestroyCallback<Payload>;
}
