//input bilangan yang ingin diketahui
let input = 20000

if(input >= 0 && input < 1000000) {
    if(input < 10) {
        console.log("Satuan")
    }else if(input < 100) {
        console.log("Puluhan")
    }else if(input < 1000) {
        console.log("Ratusan")
    }else if(input < 10000) {
        console.log("Ribuan")
    }else{
        console.log("Puluhribuan")
    }
} else {
    console.log("Input tidak valid!")
}
