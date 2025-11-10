/**
 * @description The `ObjectHooks` interface defines a set of lifecycle hooks for managing changes to properties of an object of type `T`.
 * @export
 * @interface ObjectHooks
 * @template T The type of the object the hooks are associated with.
 */
export interface ObjectHooks<T> {
  onPropertyChange<K extends keyof T>(key: K, callbackfn?: (value: T[K], oldValue: T[K]) => void): this;
  onSetProperty<K extends keyof T>(key: K, callbackfn?: (value: T[K], oldValue: T[K]) => T[K]): this;
}