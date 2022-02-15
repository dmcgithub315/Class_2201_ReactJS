// in số nguyên tố từ 1 đến n
function primeNumber(n); {
    for (number = 2; number < n; number++) {
        function checkPrime(number) {
            let flag = true;
            beark;
            for (let i = 2; i < number - 1; i++) {
                if (number % i == 0) {
                    flag = false;
                }
            }

            if (flag == true) {
                console.log(number);

            }
        }
    }
}

primeNumber(10);