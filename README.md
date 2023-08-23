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

- **Type System**

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

fn main() {
    let x: i32 = 5;
    println!("first x: {}", x);

    let x: i32 = 99;
    println!("second x: {}", x);

    let mut x = String::from("Hello");

    x.push_str(", world!");

    println!("third x: {}", x);
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

---

# Ownership


```rust
fn main(){
    let s: String = String::from("hello");
    takes_ownership(s); // This function takes ownership from s
    

    let s1: String = gives_ownership(); //* This function gives ownership to s1 variable*/
    println!("s1: {}", s1);
    

    let s2: String = String::from("There");
    let s3: String = takes_and_gives_back(s2); //* takes ownership from s2 and gives to s3 */
    
    println!("{}", s3);
}

fn takes_ownership(some_string: String) {
    println!("{}", some_string);
}

fn gives_ownership() -> String {
    let some_string: String = String::from("hello");

    some_string
}

fn takes_and_gives_back(a_string: String) -> String {
    a_string
}
```

---

## References

- References don't take ownership of underlying value but points to it
- References are immutable by nature

### Rules

- At any given time, you can have either one mutable reference or any number of immutable references
- References must always be valid

```rust
fn main() {
    let s1: String = String::from("Hello");
    let len = calculate_length(&s1);
    println!("The length of {} is {}", s1, len);

    //* modifying by taking reference */
    let mut s2: String = String::from("Hello"); //* have to make s2 mutable to modify by reference */
    change(&mut s2);

    println!("{s2}");
}

fn calculate_length(s: &String) -> usize {
    s.len()
}

fn change(some_string: &mut String) {
    some_string.push_str(", there");
}
```

---

## References

> **Note:** 
>
> - can only have one mutable reference to a particular piece of data in a particular scope
>
> - can't have multiple mutable references to the same data
>
> - can have multiple immutable references to the same data
>
> - can't have mutable reference if the immutable reference already exists

```rust
fn main() {
    let mut s: String = String::from("hello");

    let r1 = &s;
    let r2 = &s;

    // let r3 = &mut s; // can't do this because
                     // can't have mutable reference if the immutable reference already exists

    println!("{}, {}", r1, r2);

    let r3 = &mut s; // can do this now as at this point r1 and r2 are out of scope
    println!("{}", r3);
}
```

---

### Dangling Refrences

```rust
fn dangle() -> &String {
    // dangle returns a reference to a String

    let s = String::from("hello"); // s is a new String

    &s // we return a reference to the String, s
} // Here, s goes out of scope, and is dropped. Its memory goes away.
  // Danger!
```

> Because s is created inside dangle, when the code of dangle is finished, s will be deallocated.
> But we tried to return a reference to it. That means this reference would be pointing to an invalid String.

---

### slice

```rust
fn main() {
    let a = [1, 2, 3, 4, 5, 6, 7];

    let slice = &a[1..5];

    println!("{}", slice[2]);
}
```

---

# Struct

```rust
struct User {
    email: String,
    age: i8,
    active: bool,
}

fn main(){
    let user = User {
        email: String::from("user@email.com"),
        age: 23,
        active: true,
    };

    println!("{}, {}, {}", user.email, user.age, user.active);
}

```

---

# Struct

## Touple Struct

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

fn area(rectangle: &Rectangle) -> u32 {
    rectangle.width * rectangle.height
}

fn main(){
     let rect = Rectangle {
        width: 30,
        height: 50,
    };

    println!("The area of rectangle is {} square pixels", area(&rect));
}

```
---

# Struct

## Method Syntax

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

// implementation block houses funtions and methods associated with our struct
impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

fn main(){
     let rect = Rectangle {
        width: 30,
        height: 50,
    };

    let area = rect.area();

    println!("The area of rectangle is {} square pixels", area);
}
```

---

# Struct

## Associated Function

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

impl Rectangle {
    fn square(size: u32) -> Rectangle {
        Rectangle {
            width: size,
            height: size,
        }
    }
}

fn main() {
    let rect = Rectangle {
        width: 30,
        height: 50,
    };

    let area = rect.area();

    println!("The area fo rectangle is {} square pixels", area);

    // Using associated function for Square
    let square = Rectangle::square(45); // associated function

    let area = square.area();

    println!("rect4: {}", area);
}

```

---

# Enums

```rust
#[derive(Debug)]
enum IpAddrKind {
    V4,
    V6,
}

#[derive(Debug)]
struct IpAddr {
    kind: IpAddrKind,
    address: String,
}

fn main() {
    let home = IpAddr {
        kind: IpAddrKind::V4,
        address: String::from("127.0.0.1"),
    };

    println!("{:?}", home);
}
    
```

---

# Enums

```rust
#[derive(Debug)]
enum IpAddr {
    V4(String),
    V6(String),
}

fn main() {
    let home = IpAddr::V4(String::from("127.0.0.1"));

    println!("{:?}", home);
}

```

---

# Enums

```rust
#[derive(Debug)]
enum IpType {
    V4(u8, u8, u8, u8),
    V6(String),
}

fn main() {
    let ip = IpType::V4(127, 0, 0, 1);

    let ip2 = IpType::V6(String::from("::1"));

    println!("{:?}\n", ip);
    
    println!("{:?}", ip2);
}
```

---

# Enums

```rust
#[derive(Debug)]
enum IpAddr {
    V4(String),
    V6(String),
}

impl IpAddr {
    fn call(&self) {
        println!("{:?}", self);
    }
}

fn main() {
    let ipv4 = IpAddr::V4(String::from("127.0.0.1"));

    let ipv6 = IpAddr::V6(String::from("::4"));

    ipv4.call();

    ipv6.call();
}
```
---

# Enums

## Option Enum

```rust
enum Option<T> {
    Some(T),
    None,
}
```

## Result Enum

```rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

---

# Enums

## Option Enum

```rust
fn main() {
    let x: i8 = 10;

    let y: Option<i8> = Some(5);

    let z: i8 = x + y.unwrap_or(0);

    println!("{}", z);
    
}



```

---

# Match Expressions

- **This is a powerful control flow construct that allows you to compare a value against a series of patterns and then execute code based on which pattern matches**

```rust
enum Engine {
    V4,
    V6,
    V8,
}

fn call(engine: Engine) {
    match engine {
        Engine::V4 => println!("Engine V4 is running"),
        Engine::V6 => println!("Engine V6 is running"),
        Engine::V8 => println!("Engine V8 is running"),
    }
}

fn main() {
    let engine_version = Engine::V8;

    call(engine_version);
}

```

---

## Match expressions

```rust

fn call(num: i32) {
    match num {
        4 => println!("four"),
        8 => println!("eight"),
        10 => println!("ten"),
        12 => println!("twelve"),

        _ => println!("not found"),
    }
}

fn main() {
    call(8);

    call(10);

    call(2);
    
}


```

---

## `If let` syntax

- If we only have to specify the pattern we care about and all other pattern are ignored

```rust
fn main() {
    let value: Option<i32> = Some(3);

    if let Some(3) = value {
        println!("three");
    }
}
```

---

# Module System

```rust

mod person {
    pub struct Person {
        name: String,
        age: u8,
    }

    impl Person {
        pub fn new(name: String, age: u8) -> Self {
            Self { name, age }
        }

        pub fn get_name(&self) -> &String {
            &self.name
        }

        pub fn get_age(&self) -> &u8 {
            &self.age
        }
    }
}

fn main() {
    let p = person::Person::new("John".to_string(), 25);

    let name = p.get_name();

    let age = p.get_age();

    println!("Name: {}, Age: {}", name, age);
}

```

---

# HashMaps

```rust
use std::collections::HashMap;

fn main() {
    let mut scores = HashMap::new();

    scores.insert(String::from("Blue"), 10);

    scores.insert(String::from("Blue"), 20); // This will override the Blue key with the value 20

    scores.entry(String::from("Yellow")).or_insert(30); // there isn't entry for yellow key then this inserts 30
    
    scores.entry(String::from("Yellow")).or_insert(40); // there is a entry already exists for key "Yellow" so this does nothing

    println!("score map: {:?}\n", scores);

    //Counting number of words
    let text: &str = "Hello There!, General Kenobi!, Hello";
    
    let mut map = HashMap::new();

    for word in text.split_whitespace() {
        let count = map.entry(word).or_insert(0);
        
        *count += 1; // this is deference operator
    }

    println!("text count: {:?}", map);
}

```

---

# Error Handeling

## Panic Macro

- If program fails in a way that is unrecoverable, or can't handle the error grecefully then `panic!` is used to panic the program i.e quit the program and print out error message.

``
panic!("Error: {}", "Something went wrong");
``

```rust
use core::panic;

fn main() {
    a();
}

fn a() {
    b();
}

fn b() {
    c(69);
}

fn c(num: i32) {
    if num == 69 {
        panic!("Don't call {}", num);
    }
}
```

- In the example above, `panic!` is used to panic the program on meeting certain condition
- We can backtrace the error by using `RUST_BACKTRACE=1` environment variable i.e.

``
RUST_BACKTRACE=1 cargo run
``

- this gives us the backtrace of the error
---

# Error Handeling

## Shortcuts for Panic on Error

```rust
let f = File::open("hello.txt").unwrap(); // .unrap() is used to unwrap the result and panic if there is an error

let f = File::open("hello.txt").expect("Failed to open hello.txt"); // .expect() gives the message to panic macro

```

---

# Error Handeling

## Result Enum

- Result Enum is just like Option Enum except that it can contain a value or an error.
- Option Enum represents `Some` value or `None` value whereas Result Enum represents `Ok` value or `Err` value.

```rust
enum Result<T, E> {
    Ok(T), // Represents Success case and stores some generic value
    Err(E), // Represents Error case and stores some generic error value
}
```

---
# Error Handeling

## Result Enum

```rust
use std::fs::File;
use std::io::ErrorKind;

fn main() {
    let f = File::open("hello.txt");

    let f = match f {
        Ok(file) => file,
        Err(error) => match error.kind() {
            ErrorKind::NotFound => match File::create("hello.txt") {
                Ok(fc) => fc,
                Err(e) => panic!("problem creating the file: {:?}", e),
            },
            
            other_error => panic!("Problem opening:{:?}", other_error),
        },
    };
}
```

---
# Error Handeling

## ? operator

- `?` operator is used to handle the error in the function call.
- this will do similar to calling .unwrap() or .expect() method

```rust
use std::fs::File;
use std::io::{self, Read};

fn read_username_from_file() -> Result<String, io::Error> {
    let mut f = File::open("Hello.txt")?;
    let mut s = String::new();

    f.read_to_string(&mut s)?; // if this fails then it will return a error
    Ok(s)
}

fn main() {}
```

### in above example

- if we succed in opening the file then file will be opened and stored in variable `f`
- in case of fail to get the file then insted of panicing our function will end early and return the error.

---
# Error Handeling

### We can simplify our function by chaining method calls

```rust
use std::fs::{self,File};
use std::io;

fn read_username_from_file() -> Result<String, io::Error> {
    fs::read_to_string("Hello.txt")
}

fn main() {}
```

> Note:
> `?` operator can only be used in a function that returns `Result` or `Option`

---

# Generic Types

## Generic functions

```rust
fn main() {
    let num_list: Vec<i32> = vec![44, 54, 435, 33];

    println!("The largest number is {}", largest);

    let char_list: Vec<char> = vec!['y', 'm', 'b', 'd'];

    let largest = get_largest(char_list);

    println!("The largest number is {}", largest);
}

// Generic function
fn get_largest<T: PartialOrd + Copy>(list: Vec<T>) -> T {
               // PartialOrd + Copy is a 'trait' saying that our type T has to be a type that can be ordered
               // and has a copy trait.
    let mut largest: T = list[0];
    for num in list {
        if num > largest {
            largest = num;
        }
    }
    largest
}
```

---

# Generic Types

## Generic Enums

```rust
enum Option<T> {
    Some(T),
    None,
}

enum Result<T,E>{
    Ok(T),
    Err(E),
}

// above are two generic enums we already used in the previous section
```

---

# Generic Types

## Generic Structs

```rust
struct Point<T> {
    x: T,
    y: T,
}

// OR can be of multi type

struct Point<T, U> {
    x: T,
    y: U,
}
// Multi type also accepts same type so this may be preferred to broaden the genericity

fn main(){
    let p1 = Point { x: 5, y: 10 };
    let p2 = Point { x: 5.0, y: 10.0 };
    let p3 = Point { x: 3, y: 4.5 };
}
```

---

# Generic Types

## Generic implementations

```rust
struct Point<T, U> {
    x: T,
    y: U,
}

impl<T, U> Point<T, U> {
    fn mixup<V, W>(self, other: Point<V, W>) -> Point<T, W> {
        Point {
            x: self.x,
            y: other.y,
        }
    }
}

fn main() {
    let p1 = Point { x: 5, y: 10.4 };
    let p2 = Point { x: "Hello", y: 'c' };

    let p3 = p1.mixup(p2);

    println!("p3.x = {},\np3.y = {} ", p3.x, p3.y); // here we get value of x from p1 and y from p2
}
```

---

# Traits

### Defining Shared Behavior

> example in basics project as too long for 

---

# Things I left

- **Lifetimes**
- **Automated Tests**
- **IO**
- **Iterators**
- **Closures**
- **Unsafe Rust**
- **Macros**
- **Trait Objects**
- **Shared State Concurrency**
- **Smart Pointers**
....

---

# Crates

- repository: https://crates.io/

## Popular Crates

- `Serde`  : for serializing and deserializing json
- `Chrono` : date and time library
- `Tokio`  : for writing asynchronous I/O backed applications
- `Tonic`  : gRPC library 
- `SQLx`   : for compile-time checked SQL queries
- `Reqwest`: HTTP client library
- `Dotenvy`: Dotenv crate

---

# Web Servers

## Backend

- `actix_web`
- `axum`
- `rocket`

## Frontend (WASM)

- `Leptos` : Fullstack 
- `Yew`

---

# Hello World

- Simple Hello World api with `actix_web`

```rust
use actix_web::{App, HttpServer, Responder};

#[actix_web::get("/")]
async fn index() -> impl Responder {
    "Hello, There!"
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(index))
        .bind(("0.0.0.0", 8080))?
        .run()
        .await
}
```

---

# Dockerizing

## Image size compare with node (for hello world api)

```sh
REPOSITORY         TAG       IMAGE ID       CREATED         SIZE
test/rust-server   latest    e809506f3b86   5 minutes ago   10.6MB
test/node-server   latest    387e20849ec0   8 minutes ago   188MB
```

- Rust server image is 18 times smaller than node

---

# Performance

## Rust Server ( v1.70.0)

### Test Params

```sh
 wrk -t8 -c500 -d30s http://127.0.0.1:8080
```

### Result
```sh
Running 30s test @ http://127.0.0.1:8080
  8 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.98ms  533.73us  24.14ms   94.75%
    Req/Sec    20.77k     1.10k   24.02k    76.96%      (per thread)
    
  4,962,396 requests in 30.03s, 615.23MB read
  
Requests/sec: 165,232.52                (overall)
Transfer/sec:     20.49MB

```

# Node Server ( v20.5.0)

### Test Params

```sh
 wrk -t8 -c500 -d30s http://127.0.0.1:5050
```

### Result
```sh
Running 30s test @ http://127.0.0.1:5050
  8 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    71.77ms   63.41ms   1.99s    99.46%
    Req/Sec   720.46    287.12     2.76k    82.20%   (per thread)
    
  165,207 requests in 30.05s, 37.66MB read
  
Requests/sec:   5,497.01    (overall)
Transfer/sec:      1.25MB
```

---

# Conclusion

### Rust server compaired to node server

- Average Latency                   : 24x less
- Transfer per sec                  : 16x more
- Request handeled per sec          : 30x more
- Total requests handeled (30 sec)  : 30x more 

> Note: This is just from hello world server, real world performance will differ

---


# References

## [RUST Book](https://doc.rust-lang.org/book/ch01-01-installation.html)
## [RUST By Example](https://doc.rust-lang.org/rust-by-example/index.html)

---

# Thank You
