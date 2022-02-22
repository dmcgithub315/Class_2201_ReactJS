function soLe(n) {
    let check = 1;
    for (i = 1; i <= n.length; i++) {
        n = (n % (10 * i));
        if (n % 2 == 0) {
            check = 0;
            break;
        }
    }
    if (check == false) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}
soLe(135);