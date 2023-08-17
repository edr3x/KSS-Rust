---
author: Anuj Dhungana
date: MMMM dd, YYYY
paging: Slide %d / %d
---

# Oxidize the server with RUST

**Basic introduction to Rust and Rust web servers**

---

## Overview

- **What is Rust?**

**Rust is a multi-paradigm, general-purpose programming language that emphasizes performance, type safety, memory safety, and concurrency.**

- **Why Rust ?**
    - **Secure**
    - **Memory Safe**
    - **Speed**
    - **Concurrency**
---

## Key Features

- **Safety and Memory Management**

- **Concurrency**

- **Performance**

---

# Basics

## Hello World!

```rust
fn main(){
    println!("Hello World!");
}
```

---

## Scalar datatypes

### Integer

**Signed Integer**

- **i8, i16, i32, i64**

**Unsigned Integer**
  
- **u8, u16, u32, u64, u128**

> default is `u32` or `i32` if not defined

```rust
let x: i32 = 42;

let y: i8 = 20;
```

___


### Floating point

- **`f32`: 32 bits floating point**

> default is `f64` if not defined

```rust
let x:f32 = 55.05;
```

---

### Integer

```rust
fn main(){
    let x:u8 = 55;
    let y:i32 = x;  // this is not allowed

    println!("{}", y)
}
```

---


### Boolean

- `bool`: Boolean

```rust
let true_or_false:bool = false;
    // false can be written as 0 and true can be written as 1
```

### Character

- `char`: Character

```rust
let c:char = 'c';
```

---

### Strings

- `&str`: String slice

- `String`: String

```rust
let s:&str = "Hello"; // Stores in stack

let s:String = String::from("Hello"); // Stores in heap

```

```rust
let s1: String = String::new(); // creates empty string


let s2: &str = "String slice"; // creates string slice

let s3: String = s2.to_string(); // converts string slice to string


let s4: String = String::from("Initial String"); // creates string from string slice
```

---

# Compound Datatypes

### Tuples

```rust
let tup: (i32, f64, u8) = (500, 6.4, 1);

let tup2: (i8,f64,u8)= (500, 6.4, 1);
```

> Two variables above are not of same type even when their values are same

---

### Array

- **An array is a fixed-size list of a single type.**
- **Unlike arrays in some other languages, arrays in Rust have a fixed length.**

```rust
let arr: [i32; 5] = [1, 2, 3, 4, 5];
```

### Vector


- **Storing list of values with vector**
- **Vector can only store one type of data**
- **Vector can grow in size**
- **We don't know size of vector at compile time as it is stored in heap**

```rust
let v: Vec<i32> = vec![1, 2, 3, 5, 7]; 
```

---

# Variables

- `let` : Declares a immutable variable
- `let mut` : Mutable variable
- `const` : Constant variable

```rust

fn main(){
    let x: i32 = 5;
    println!("first x: {}", x);

    let x: i32 = 99;
    println!("second x: {}", x);
}

```

---

# Variables

```rust
fn main(){
    let x: i32 = 99;
    println!("value of x :{}", x);

    //* this is known as 'Shadowing' a.k.a. new scope
    {
        println!("x from upper scope: {}", x);

        let x = x - 40;
        println!("x calc from upper scope: {}", x);

        let x: i32 = 2;
        println!("x after redefining:{}", x);
    }

    println!("value of x in outer scope :{}", x);
    
}

```
---

# Variables

### Getting output form inner scope

```rust
fn main() {
    let x = 5;
    let a: i32;
    
    {
        let y = 3;

        let z = x + y;

        a = z;
    }
    println!("value of a: {}", a);
}

```
> Once the inner block scope ends, the variables y and z are no longer in scope, but the value of a (which is now 8) can still be used.

---

## Arithmetic Operators

- basic \*, /, +, - and % operators

## Type Casting

- `as`: type casting there are other two ways, they are

```rust

let x = 5.5f64; //type one

let y = 4.4_f64; //type two

let z = 6.9 as f64; //type three

```

---

## conditions

- basic conditions like `>, <, >=, <=, ==, !=`

## control flow

- basic control flow like `if`, `else if` and `else`

```rust
fn main() {
    let food = "gundruk";

    if food == "pizza" {
        println!("i like pizza too")
    } else if food == "burger" {
        println!("i like burger too")
    } else {
        println!("i don't like pizza or burger, i like {}", food)
    }
}
```

---

# Functions

## Expression 

```rust

fn main() {
    let number = {
        let x = 33;

        x + 44
    };

    println!("The value of number : {}", number); // gives value of 4
}

```

---

# Functions

- that returns nothing

```rust
fn add_numbers(x: i32, y: i32) {
    println!("Sum is {}", x + y);
}

```

- funtion that returns a value

```rust
fn substract_numbers(x: i32, y: i32) -> i32 {

    let result = x - y;
    if result > 10 {
        return result - 10;
    }
    result
}
```

---


# Loops

- `loop`
- `while`
- `for`
### loop

```rust
loop {
    println!("loop"); // infinite loop
}

```

---

### loop

- Returning values from loops

```rust
fn main() {
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2;
        }
    };

    println!("The result is {}", result);
}
```

---

### while

```rust
fn main() {
    let mut number = 3;

    while number != 0 {
        println!("{}!", number);
        number -= 1;
    }

    println!("LIFTOFF!!!");
}
```

---

### for

```rust
fn main() {
    let arr: [i32; 4] = [5, 10, 15, 20];

    for elem in arr {
        println!("the value is {}", elem);
    }
}
```

```rust
fn main() {
    for number in (1..9).rev() {
        println!("{}!", number);
    }
}
```
