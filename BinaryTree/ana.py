arr = ["eat","tan","nat","bat","ate"]

l1 = []
# for words in arr:
#     a = list(sorted(words))
#     l1.append(a)
# print(l1)

from collections import defaultdict,Counter
def group(arr):
    ana_gr = defaultdict(list)
    for word in arr:
        sort_word = "".join(sorted(word))
        ana_gr[sort_word].append(word)
    return list(ana_gr)               
print(group(arr))

    