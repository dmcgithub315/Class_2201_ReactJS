function ngoc(n) {
    var arr = n.toString(10).replace(/\D/g, '0').split('').map(Number);
    var check = 1;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 == 0) {
            check = 0;
            break;
        }
    }
    if (check == 1) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
ngoc(1345);