def print_upper_words(words, start_char):
    for word in words:
        for letter in start_char:
            if word.startswith(letter):
                print(word.upper())
                break


print_upper_words(['yo','no', 'show','yap','yes'], 'y')