function humanReadable(seconds) {
    h = Math.floor(seconds / 3600)
    m = Math.floor((seconds - (h * 3600)) / 60)
    s = seconds - (h * 3600) - (m * 60)
    const v = el => el < 10 ? '0' + el : el
    return `${v(h)}:${v(m)}:${v(s)}`
}

console.log(humanReadable(0), '-  00:00:00')
console.log(humanReadable(5), '-  00:00:05')
console.log(humanReadable(60), '-  00:01:00')
console.log(humanReadable(86399), '-  23:59:59')
console.log(humanReadable(359999), '-  99:59:59')