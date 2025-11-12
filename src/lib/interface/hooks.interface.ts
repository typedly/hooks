// Interface.
import { ChangeHook } from "./change-hook.interface";
import { DestroyHook } from "./destroy-hook.interface";
import { SetHook } from "./set-hook.interface";
/**
 * @description The `Hooks` interface defines a set of lifecycle hooks for managing changes and destruction of an object of type `T`.
 * @export
 * @interface Hooks
 * @template T The type of the object the hooks are associated with.
 * @template [Payload=unknown] 
 * @extends {ChangeHook<T, Payload>}
 * @extends {DestroyHook<Payload>}
 * @extends {SetHook<T, Payload>}
 */
export interface Hooks<T, Payload = unknown>
  extends ChangeHook<T, Payload>, DestroyHook<Payload>, SetHook<T, Payload> {}