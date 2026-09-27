cmake_minimum_required(VERSION 3.20)

project(c_engine_protocol LANGUAGES C)

set(CMAKE_C_STANDARD 17)
set(CMAKE_C_STANDARD_REQUIRED ON)
set(CMAKE_C_EXTENSIONS OFF)

add_executable(c_engine_protocol
    src/main.c
)