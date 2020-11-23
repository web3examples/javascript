function Test1(x) {
    console.log(x);
}

const Test2 = y => console.log(y);

Test1(1);

Test2(2);

(z => console.log(z))(3)
