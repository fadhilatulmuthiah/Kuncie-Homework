function input(n){
    let str = ["K","U","N","C","I","E"]
    for (let i = 0; i < n; i++) {
        let word = ""
        for (let j = 0; j <= i; j++) {
            if (j>=str.length) {
                word += str[j%str.length] + " "
            } else {
                word += str[j] + " "
            }
        }
        console.log(word)
    }
}

//input jumlah baris yang ingin dipanggil
input(7)