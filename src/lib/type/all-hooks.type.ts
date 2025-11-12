// Interface.
import { ChangeHook, DestroyHook, SetHook, SetPropertyHook, PropertyChangeHook } from "../interface";
// Type.
import { HookNames } from "./hook-names.type";
/**
 * @description The all hooks type.
 * @export
 * @template {HookNames} K 
 */
export type AllHooks<T, K extends HookNames> = 
  (K extends 'change' ? ChangeHook<T> : {}) &
  (K extends 'destroy' ? DestroyHook<T> : {}) &
  (K extends 'set' ? SetHook<T> : {}) &
  (K extends 'propertyChange' ? T extends object ? PropertyChangeHook<T> : {} : {}) &
  (K extends 'setProperty' ? T extends object ? SetPropertyHook<T> : {} : {});