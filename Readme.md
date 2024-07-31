**What is typescript?**
- A language built on top of javascript. Browsers or node js cant execute javascript
- It has a compiler which converts your code in javascipt
- It helps identify error before runtime


**Typescript provide**
 - Types checking 
 - It also adds next gen js feature (compiled down for older browsers)
 - Non js features like interfaces or generics
 - Meta programming features like decorators
 - Rich configuration options
 - Modern tooling that helps even in non typescript projects




**Working with types**
- **Core Types**
  - number
  - string 
  - boolean
  - object 
  - Array: string[] or number[]
  - Tuple - fixed length and type array : [string, number, boolean]
  - enum - enum {a, b}
  - any

- **Union Type** : Eg string | number => value can either be string or number
- **Literal Type**: Eg 'a' | 'b' => value can either be string 'a' or 'b'
- **Alias** 
  - Define a new type using alias
  - Eg. type combinable = number | string. Now whereever we use combinable, it will expect the value to be either number or string
- **Function return type**:
  - Eg function a () : void | number {}. Function should either return undefined or number
- **Function Types:**
  - Eg let func: (a: number, b: number) => number. This mean func can only hold functions which have two params of type number and returns a number
- **Unknown**
  - Similar to any, but does some type checking. It figures out the type of var from the current value assigned to it.
- **never** - function is never supposed to return anything (not even undefined). For eg a functin just throws an error or runs for infinite loop


