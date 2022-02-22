let S = 0;
function tinhTong(n) {
    for (let i = 1; i <= (n + 1); i++) {
        S = S + i ^ 2;
    }
    console.log(S)
}
tinhTong(3);