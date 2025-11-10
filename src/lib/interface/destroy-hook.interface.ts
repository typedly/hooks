/**
 * @description The `DestroyHook` interface defines a lifecycle hook for managing the destruction of an object of type `T`.
 * @export
 * @interface DestroyHook
 * @template T 
 */
export interface DestroyHook<T> {
  /**
   * @description The onDestroy hook is triggered when the object is destroyed.
   * @param {?() => void} [callbackfn] The callback function to be executed on destroy.
   * @returns {this} The current instance for chaining.
   */
  onDestroy?(callbackfn?: () => void): this;
}
