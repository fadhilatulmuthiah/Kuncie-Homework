function input(str){
  let a = str.split("")
  let b = {}

  for (let i = 0; i < a.length; i++) {
    let c = a[i];
    b[c] = (b[c] || 0) + 1
  }

  for (let c in b){
    console.log(c+": " + b[c])
  }
}

//input kalimat yang ingin dihitung
input("apa kabar?")