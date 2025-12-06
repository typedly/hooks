// Interface.
import {
  AddHook,
  AfterAllHook,
  AfterEachHook,
  BeforeAllHook,
  BeforeEachHook,
  ChangeHook,
  ClearHook,
  DestroyHook,
  GetHook,
  LockHook,
  PropertyChangeHook,
  SetHook,
  SetPropertyHook,
  UnlockHook,
  UpdateHook,
} from "../interface";
// Type.
import { HookNames } from "./hook-names.type";
/**
 * @description The all hooks type.
 * @export
 * @template T The type of value.
 * @template Payload The type of payload.
 * @template {HookNames} K The hook names.
 * @example 
 * const example: AllHooks<any, {}, 'add' | 'afterEach'> = {}
 */
export type AllHooks<T, Payload, K extends HookNames> = 
  (K extends 'add' ? AddHook<T, Payload> : {}) &
  (K extends 'afterAll' ? AfterAllHook<T, Payload> : {}) &
  (K extends 'afterEach' ? AfterEachHook<T, Payload> : {}) &
  (K extends 'beforeAll' ? BeforeAllHook<T, Payload> : {}) &
  (K extends 'beforeEach' ? BeforeEachHook<T, Payload> : {}) &
  (K extends 'change' ? ChangeHook<T, Payload> : {}) &
  (K extends 'clear' ? ClearHook<T, Payload> : {}) &
  (K extends 'delete' ? ChangeHook<T, Payload> : {}) &
  (K extends 'destroy' ? DestroyHook<Payload> : {}) &
  (K extends 'get' ? GetHook<T, Payload> : {}) &
  (K extends 'lock' ? LockHook<Payload> : {}) &
  (K extends 'propertyChange' ? T extends object ? PropertyChangeHook<T> : {} : {}) &
  (K extends 'replace' ? LockHook<Payload> : {}) &
  (K extends 'set' ? SetHook<T> : {}) &
  (K extends 'setProperty' ? T extends object ? SetPropertyHook<T> : {} : {}) &
  (K extends 'unlock' ? UnlockHook<Payload> : {}) &
  (K extends 'update' ? UpdateHook<T, Payload> : {})
;
