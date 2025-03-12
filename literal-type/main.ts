//리터럴 타입은 특정한 값 자체를 타입으로 지정하는 것
//즉, 일반적인 string, number 타입 대신 특정한 값만 허용하는 타입을 의미

let direction: "left" | "right"
direction = "left"
direction = "right"
// direction = "up" //error!

type Direction = "left" | "right"
type Margin = `margin-${Direction}`

let margin: Margin
margin = "margin-left"
// margin = "margin-up" //error

