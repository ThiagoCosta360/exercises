function solve(s) {
  var ans = [0, 0, 0, 0];
  s.split("").forEach((el) => {
    el = el.charCodeAt(0);
    if (el >= 65 && el <= 90) ans[0]++;
    else if (el >= 97 && el <= 122) ans[1]++;
    else if (el >= 48 && el <= 57) ans[2]++;
    else ans[3]++;
  });

  return ans;
}

console.log(solve("Codewars@codewars123.com"));
