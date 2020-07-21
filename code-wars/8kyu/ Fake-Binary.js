function fakeBin(x) {
    return x.split('').map((el) => el < 5 ? 0 : 1).join('')
}