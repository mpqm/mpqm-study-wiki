// 지정된 값이 정의되어 있는지 확인하고, 정의되지 않은 경우 오류를 발생시키는 함수
export function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
    if (!val) { throw Error("Expected 'va' to be defined, but received" + val); }
}