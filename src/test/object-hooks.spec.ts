import { OnPropertyChangeCallback, OnSetPropertyCallback } from "@typedly/callback";
import { ObjectHooks } from "../lib";


export class SampleClass<T extends { 'someKey': any }> implements ObjectHooks<T> {
  public onPropertyChangeCallback?: OnPropertyChangeCallback<T, unknown>;
  public onSetPropertyCallback?: OnSetPropertyCallback<T, unknown>;

  public onPropertyChange(callbackfn?: OnPropertyChangeCallback<T, unknown>): this {
    this.onPropertyChangeCallback = callbackfn;
    return this;
  }
  public onSetProperty(callbackfn?: OnSetPropertyCallback<T, unknown>): this {
    this.onSetPropertyCallback = callbackfn;
    return this;
  }

  private _sampleProperty!: T['someKey'];

  public get sampleProperty() {
    return this._sampleProperty;
  }

  public set sampleProperty(value: T['someKey']) {
    const oldValue = this._sampleProperty;
    const newValue = this.onSetPropertyCallback
      ? this.onSetPropertyCallback('someKey' as keyof T, value, oldValue)
      : value;
    this._sampleProperty = newValue;
    this.onPropertyChangeCallback?.('someKey' as keyof T, newValue, oldValue);
  }
}

const sampleClass = new SampleClass<{ someKey: any }>();

sampleClass.onPropertyChange((key, value, oldValue) => {
  console.log(`${key} Value changed from ${oldValue} to ${value}`);
});

sampleClass.onSetProperty((key, value, oldValue) => {
  console.log(`Setting ${key} to ${value}`);
  return value;
});

// sampleClass.onPropertyChangeCallback?.('someKey', 42, 10);
// sampleClass.onSetPropertyCallback?.('someKey', 100, 42);

sampleClass.sampleProperty = 'b';

describe('Hooks Interface', () => {
  let sampleClass: SampleClass<{ someKey: any }>;

  beforeEach(() => {
    sampleClass = new SampleClass<{ someKey: any }>();
  });

  it('should create an instance of SampleClass', () => {
    expect(sampleClass).toBeTruthy();
  });

  it('should call onPropertyChange method', () => {
    const result = sampleClass.onPropertyChange((key, value, oldValue) => {
      console.log(`${key} Value changed from ${oldValue} to ${value}`);
    });
    expect(result).toBe(sampleClass);
  });


  it('should call onSetProperty method', () => {
    const result = sampleClass.onSetProperty((key, value, oldValue) => {
      console.log(`Setting ${key} to ${value}`);
      return value;
    });
    expect(result).toBe(sampleClass);
  });
});
