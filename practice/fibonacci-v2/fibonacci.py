def fibonacci():
    a = 0
    b = 1
    num = int(input("Type a number: "))
    for i in range(num):
        a, b = b, a + b
    print(b)


fibonacci()
