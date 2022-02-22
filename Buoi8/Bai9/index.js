function reverse_num(n) {
    n = n.toString()
    return n.split("").reverse().join("");
}

function symmetrical_num(n) {


    let check = false;
    if (reverse_num(n) == n) check = true;
    console.log(check);
    return check;
}
symmetrical_num(12321);