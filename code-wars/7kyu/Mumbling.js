function accum(s) {
  var ns = "";
  s.split("").forEach((el, i) => {
    ns += el.toUpperCase();
    console.log(i);
    for (let j = 0; j < i; j++) {
      ns += el.toLowerCase();
    }
    ns += "-";
  });

  return ns.slice(0, -1);
}

// Coolest way
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

console.log(accum("Thiago"));
