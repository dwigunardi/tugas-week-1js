const konversiUang = (uangDari, Jumlah, UangKe) => {
    const data = {
        "IDR" : 14575.45, 
        "Yen" : 127.05,
        "Yuan" : 6.71,
        "Ringgit" : 4.38,
        "Dollar" : 1
    }
    let hasil = (Jumlah / data[uangDari]) * data[UangKe]
    return hasil
}

console.log("Konversi Mata Uang dari USD ke IDR adalah " + konversiUang("Dollar",1,"IDR"))    
console.log("Konversi Mata Uang dari USD ke Yen adalah " + konversiUang("Dollar",1,"Yen")) 
console.log("Konversi Mata Uang dari USD ke Yuan adalah " + konversiUang("Dollar",1,"Yuan"))    
console.log("Konversi Mata Uang dari USD ke Ringgit adalah " + konversiUang("Dollar",1,"Ringgit"))       