//제네릭타입 <> 꺽쇠에 넣는거
var pair = {
    first: "may",
    second: 2,
    display: function () {
        console.log(this.first + "is" + this.second + "year(s) old");
    }
};
pair.display();
