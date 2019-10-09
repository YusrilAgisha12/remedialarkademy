function hurufVokal(str){
    var lokal = 'aeiouAEIOU';
    var count = 0;
    for (var x = 0; x < str.length; x++){
        if (Vokal.indexOf(str[x]) !== -1) {
            count++;
        }
    }
    return count;
}
console.log(hurufVokal('We are one'));
console.log(hurufVokal('risti nurfatiah'));