/**
 * @description The `ChangeHook` interface defines a lifecycle hook for managing changes of an object of type `T`.
 * @export
 * @interface ChangeHook
 * @template T 
 */
export interface ChangeHook<T> {
  /**
   * @description The onChange hook is triggered whenever the value changes.
   * @param {?(value: T, oldValue: T) => void} [callbackfn] The callback function to be executed on change.
   * @returns {this} The current instance for chaining.
   */
  onChange?(callbackfn?: (value: T, oldValue: T) => void): this;
}
