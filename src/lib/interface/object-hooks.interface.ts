// Interface.
import { OnPropertyChangeCallback, OnSetPropertyCallback } from "@typedly/callback";
/**
 * @description The `ObjectHooks` interface defines a set of lifecycle hooks for managing changes to properties of an object of type `T`.
 * @export
 * @interface ObjectHooks
 * @template T The type of the object the hooks are associated with.
 * @template [Payload=unknown] 
 */
export interface ObjectHooks<T extends object, Payload = unknown> {
  onPropertyChange?(callbackfn?: OnPropertyChangeCallback<T, Payload>): this;
  onSetProperty?(callbackfn?: OnSetPropertyCallback<T, Payload>): this;
}