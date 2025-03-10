// 교차타입: & 연산자 사용
// Intersection Type: & 연산자 사용

/**
type A = { a: number };
type B = { b: string };

type Intersection = A & B; // { a: number; b: string; }
type Union = A | B; // { a: number } 또는 { b: string }
 */