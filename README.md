---
author: Anuj Dhungana
date: MMMM dd, YYYY
paging: Slide %d / %d
---

# Oxidize the server with RUST

Basic introduction to Rust and Rust web servers

---

## Overview

- What is Rust?

Rust is a multi-paradigm, general-purpose programming language that emphasizes performance, type safety, memory safety, and concurrency.

- Why Rust ?
    - Secure
    - Memory Safe
    - Speed
    - Concurrency
---

## Key Features

- Safety and Memory Management

- Concurrency

- Performance

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

- i8, i16, i32, i64

**Unsigned Integer**
  
- u8, u16, u32, u64, u128

> default is `u32` or `i32` if not defined

```rust
let x: i32 = 42;

let y: i8 = 20;
```

___


### Floating point

- `f32`: 32 bits floating point

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

---

# Compound Datatypes

### Tuples

```rust
let tup: (i32, f64, u8) = (500, 6.4, 1);

let tup2: (i8,f64,u8)= (500, 6.4, 1);
```

> Two variables above are not of same type even when their values are same

### Array

- **An array is a fixed-size list of a single type.**
- Unlike arrays in some other languages, arrays in Rust have a fixed length.

-`[type; size]` type can be any primitive type;

```rust
let arr: [i32; 5] = [1, 2, 3, 4, 5];
```

