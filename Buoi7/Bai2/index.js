function ngoc(n) {

    //khai báo biên check để kiểm tra đúng sai
    let check = 1;
    //dùng vòng lặp while để kiểm tra nếu chữ số trong n là số lẻ thì 
    //check = 1, ngược lại không phải thì check = 0
    while (n /= 10) {
        if ((n % 10) % 2 == 0) {
            check = 0;
            break;
        }
    }
    //nếu check = 1 thì đúng
    if (check == 1) {
        console.log("Đúng !");
    }
    //ngược lại là sai
    else {
        console.log("Sai");
    }
}
ngoc(246);