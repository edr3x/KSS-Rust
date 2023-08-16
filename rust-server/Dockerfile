FROM messense/rust-musl-cross:x86_64-musl as base

WORKDIR /app

RUN cargo install cargo-chef

COPY Cargo.lock .
COPY Cargo.toml .

RUN mkdir src && echo "fn main() {println!(\"if you see this, the build broke\")}" > src/main.rs

RUN cargo chef prepare --recipe-path recipe.json

FROM base as cacher

WORKDIR /app

RUN cargo install cargo-chef

COPY --from=base /app/recipe.json recipe.json

RUN cargo chef cook --release --target x86_64-unknown-linux-musl --recipe-path recipe.json

FROM base AS builder

WORKDIR /app

COPY --from=cacher /app/target target

COPY . .

RUN cargo build --release --target x86_64-unknown-linux-musl

FROM scratch

COPY --from=builder /app/target/x86_64-unknown-linux-musl/release/rust-server /rust-server

EXPOSE 8080

ENTRYPOINT ["/rust-server"]
