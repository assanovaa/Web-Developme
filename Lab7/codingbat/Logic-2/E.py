def round_sum(a, b, c):
  return round10(a) + round10(b) + round10(c)
  
def round10(num):
  mod = num % 10
  num -= mod
  if mod >= 5: num += 10
  return num