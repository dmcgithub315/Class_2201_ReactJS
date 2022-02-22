S = 0;
function tinhTong(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            S = S + i;

        }

    }
    console.log(S)
}
tinhTong(5)