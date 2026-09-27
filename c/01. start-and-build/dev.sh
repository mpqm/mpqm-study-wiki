#!/usr/bin/env bash

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BUILD_DIR="$PROJECT_ROOT/build"
TARGET="c_engine_protocol"

build() {
    echo "==> Configuring..."
    cmake -S "$PROJECT_ROOT" -B "$BUILD_DIR" -DCMAKE_BUILD_TYPE=Debug

    echo "==> Building..."
    cmake --build "$BUILD_DIR" -j"$(nproc)"
}

clean() {
    echo "==> Cleaning..."
    rm -rf "$BUILD_DIR"
}

rebuild() {
    clean
    build
}

run() {
    build

    echo
    echo "==> Running..."
    "$BUILD_DIR/$TARGET"
}

usage() {
    echo "Usage: ./dev.sh [build|rebuild|run|clean]"
}

case "${1:-}" in
    build)
        build
        ;;
    rebuild)
        rebuild
        ;;
    run)
        run
        ;;
    clean)
        clean
        ;;
    *)
        usage
        exit 1
        ;;
esac