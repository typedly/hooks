/**
 * @description The `Hooks` interface defines a set of lifecycle hooks for managing changes and destruction of an object of type `T`.
 * @export
 * @interface Hooks
 * @template T The type of the object the hooks are associated with.
 */
export interface Hooks<T> {
  /**
   * @description The onChange hook is triggered whenever the value changes.
   * @param {?(value: T, oldValue: T) => void} [callbackfn] 
   * @returns {this} 
   */
  onChange?(callbackfn?: (value: T, oldValue: T) => void): this;

  /**
   * @description The onDestroy hook is triggered when the object is destroyed.
   * @param {?() => void} [callbackfn] 
   * @returns {this} 
   */
  onDestroy?(callbackfn?: () => void): this;

  /**
   * @description The onSet hook is triggered before the value is set.
   * @param {?(value: T, oldValue?: T) => T} [callbackfn] 
   * @returns {this} 
   */
  onSet?(callbackfn?: (value: T, oldValue?: T) => T): this;
}
