# Enter your code here. Read input from STDIN. Print output to STDOUT
total_num_stamps = int(input())
distinct_stamps = set()

for i in range(total_num_stamps):
    countries = input()
    # print(countries)
    distinct_stamps.add(countries)
    
print(len(distinct_stamps))