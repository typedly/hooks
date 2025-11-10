import { Hooks } from "../lib";


export class SampleClass<T extends number> implements Hooks<T> {
  public onChange(callbackfn?: ((value: T, oldValue: T) => void) | undefined): this {
    return this;
  }
  public onDestroy(callbackfn?: (() => void) | undefined): this {
    return this;
  }
  public onSet(callbackfn?: ((value: T, oldValue?: T) => T) | undefined): this {
    return this;
  }
}

describe('Hooks Interface', () => {
  let sampleClass: SampleClass<number>;

  beforeEach(() => {
    sampleClass = new SampleClass<number>();
  });

  it('should create an instance of SampleClass', () => {
    expect(sampleClass).toBeTruthy();
  });

  it('should call onChange method', () => {
    const result = sampleClass.onChange((value, oldValue) => {
      console.log(`Value changed from ${oldValue} to ${value}`);
    });
    expect(result).toBe(sampleClass);
  });

  it('should call onDestroy method', () => {
    const result = sampleClass.onDestroy(() => {
      console.log('Object destroyed');
    });
    expect(result).toBe(sampleClass);
  });

  it('should call onSet method', () => {
    const result = sampleClass.onSet((value) => {
      console.log(`Setting value to ${value}`);
      return value;
    });
    expect(result).toBe(sampleClass);
  });
});
