// Interface.
import { ChangeHook } from "./change-hook.interface";
import { DestroyHook } from "./destroy-hook.interface";
import { SetHook } from "./set-hook.interface";
/**
 * @description The `Hooks` interface defines a set of lifecycle hooks for managing changes and destruction of an object of type `T`.
 * @export
 * @interface Hooks
 * @template T The type of the object the hooks are associated with.
 */
export interface Hooks<T> extends ChangeHook<T>, DestroyHook<T>, SetHook<T> {}