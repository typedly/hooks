import { ObjectHooks } from "../lib";


export class SampleClass<T extends { 'someKey': any }> implements ObjectHooks<T> {
  public onPropertyChange<K extends keyof T>(
    key: K, callbackfn?: ((value: T[K], oldValue: T[K]) => void) | undefined): this {
    return this;
  }
  public onSetProperty<K extends keyof T>(
    key: K, callbackfn?: ((value: T[K], oldValue: T[K]) => T[K]) | undefined): this {
    return this;
  }
}

describe('Hooks Interface', () => {
  let sampleClass: SampleClass<{ someKey: any }>;

  beforeEach(() => {
    sampleClass = new SampleClass<{ someKey: any }>();
  });

  it('should create an instance of SampleClass', () => {
    expect(sampleClass).toBeTruthy();
  });

  it('should call onPropertyChange method', () => {
    const result = sampleClass.onPropertyChange('someKey', (value, oldValue) => {
      console.log(`Value changed from ${oldValue} to ${value}`);
    });
    expect(result).toBe(sampleClass);
  });


  it('should call onSetProperty method', () => {
    const result = sampleClass.onSetProperty('someKey', (value, oldValue) => {
      console.log(`Setting value to ${value}`);
      return value;
    });
    expect(result).toBe(sampleClass);
  });
});
