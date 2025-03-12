# Manifesting_TypeScript_Monster

## **1장: TypeScript란? 🚀**

### 1️⃣ TypeScript의 정의

TypeScript(TS)는 Microsoft에서 개발한 JavaScript의 슈퍼셋(Superset)(추가 기능까지 있는 확장된 버전)이야.(js가 피카츄라면 ts는 슈퍼피카츄)
즉, JavaScript의 기능을 포함하면서 정적 타입 검사 등의 추가적인 기능을 제공하지.

✅ TS 코드 → JS 코드로 변환해야 실행 가능

💡 **한마디로?**  
_"JS처럼 동작하지만, 더 안전하고 강력한 타입 시스템을 가진 언어!"_

---

### 2️⃣ TypeScript의 주요 특징

✅ **정적 타입(Static Typing)**

- `string`, `number`, `boolean`, `object` 등 **타입을 미리 선언**할 수 있어.
- 코드 실행 전에 **타입 오류를 잡을 수 있음** → 버그 줄이기!

✅ **인터페이스와 타입 시스템**

- `interface`, `type alias` 등을 이용해 **구조를 정의하고 재사용 가능**

✅ **최신 JavaScript 기능 지원**

- ES6+, ESNext의 기능을 지원하면서 **옛날 JS 코드로 변환 가능 (컴파일)**

---

### 📌 TypeScript의 타입 시스템

📂 **내가 공부한 타입들을 정리하면 아래와 같아!**

| **타입 개념**                                    | **설명**                                                                  |
| ------------------------------------------------ | ------------------------------------------------------------------------- |
| **기본 타입 (Primitive Type)**                   | `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`    |
| **리터럴 타입 (Literal Type)**                   | 특정 값만 가질 수 있도록 제한 (`"success" \| "error"` 같은 리터럴 유니온) |
| **객체, 배열, 튜플 (Object, Array, Tuple Type)** | 객체 `{}`, 배열 `[]`, 튜플 `[string, number]`                             |
| **유니온 & 인터섹션 (Union & Intersection)**     | `A \| B` (유니온), `A & B` (인터섹션)                                     |
| **제네릭 (Generic Type)**                        | `Array<T>`, `Promise<T>` 처럼 타입을 동적으로 설정 가능                   |
| **타입 내로잉 (Type Narrowing)**                 | `typeof`, `in`, `instanceof`로 특정 타입으로 좁히기                       |
| **레코드 타입 (Record Type)**                    | `Record<KeyType, ValueType>`                                              |
| **유틸리티 타입 (Utility Type)**                 | `Partial<T>`, `Readonly<T>`, `Pick<T>`, `Omit<T>` 등                      |
| **Enum (열거형)**                                | `enum Direction { Up, Down, Left, Right }`                                |
| **Never & Unknown**                              | `never` (절대 실행되지 않음), `unknown` (안전한 `any`)                    |

### 4️⃣ 컴파일(Compile) vs 런타임(Runtime)

#### 🔹 **컴파일(Compile)**

- TypeScript → JavaScript로 변환하는 과정
- 브라우저는 TS를 직접 실행할 수 없으므로 **JS 코드로 변환해야 함**
- `tsc`(TypeScript Compiler)를 사용

```bash
tsc myFile.ts  # myFile.ts → myFile.js 변환 (컴파일)
node myFile.js # 변환된 JavaScript 파일을 Node.js로 실행 (런타임)
```

🤔 그래서 이게 왜 중요해?

- 컴파일 오류 → 편지 번역이 잘못되면 친구가 이해 못 함!
- 런타임 오류 → 편지는 번역됐는데, 읽다가 문제가 생김!

🚨 TypeScript는 컴파일 타임에 미리 오류를 잡아줘서, 실행할 때(런타임) 오류가 줄어드는 거!
