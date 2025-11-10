/**
 * @description The `PropertyChangeHook` interface defines a lifecycle hook for managing changes to specific properties of an object of type `T`.
 * @export
 * @interface PropertyChangeHook
 * @template T The type of the object the property belongs to.
 */
export interface PropertyChangeHook<T> {
  /**
   * @description The `onPropertyChange` hook is triggered whenever a specific property value changes.
   * @template {keyof T} K The type of the property key.
   * @param {K} key The property key.
   * @param {?(value: T[K], oldValue: T[K]) => void} [callbackfn] The callback function to be executed when the property value changes.
   * @returns {this} The current instance for chaining.
   */
  onPropertyChange?<K extends keyof T>(key: K, callbackfn?: (value: T[K], oldValue: T[K]) => void): this;
}