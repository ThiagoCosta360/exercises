function getCount(str) {
    var vowelsCount = 0;
    str.split('').forEach((el) => {
        if (el == 'a' || el == 'e' || el == 'i' || el == 'o' || el == 'u') {
            vowelsCount++
        }
    })
    return vowelsCount;
}