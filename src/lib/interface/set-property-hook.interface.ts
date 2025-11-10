/**
 * @description The `SetPropertyHook` interface defines a lifecycle hook for managing the setting of a property value of an object of type `T`.
 * @export
 * @interface SetPropertyHook
 * @template T The type of the object the property belongs to.
 */
export interface SetPropertyHook<T> {
  /**
   * @description The `onSetProperty` hook is triggered before a property value is set.
   * @template {keyof T} K The type of the property key.
   * @param {K} key The property key.
   * @param {?(value: T[K], oldValue?: T[K]) => T[K]} [callbackfn] The callback function to be executed before the property value is set.
   * @returns {this} The current instance for chaining.
   */
  onSetProperty?<K extends keyof T>(key: K, callbackfn?: (value: T[K], oldValue?: T[K]) => T[K]): this;
}