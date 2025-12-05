/*
 * Public API Surface of hooks
 */

export type {
  // Lifecycle.
  // After.
  AfterAllHook,
  AfterEachHook,
  // Before.
  BeforeAllHook,
  BeforeEachHook,

  AddHook,
  ChangeHook,
  ClearHook,
  DeleteHook,
  DestroyHook,
  GetHook,
  LockHook,
  ReplaceHook,
  SetHook,
  UnlockHook,
  UpdateHook,

  // Specialized for properties.
  PropertyChangeHook,
  SetPropertyHook,

  // Composite.
  Hooks,
  ObjectHooks,

  // Types.
  AllHooks,
  HookNames
} from './lib';
