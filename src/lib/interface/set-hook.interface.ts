/**
 * @description The `SetHook` interface defines a lifecycle hook for managing the setting of a value of type `T`.
 * @export
 * @interface SetHook
 * @template T 
 */
export interface SetHook<T> {
  /**
   * @description The onSet hook is triggered before the value is set.
   * @param {?(value: T, oldValue?: T) => T} [callbackfn] The callback function to be executed before the value is set.
   * @returns {this} The current instance for chaining.
   */
  onSet?(callbackfn?: (value: T, oldValue?: T) => T): this;
}