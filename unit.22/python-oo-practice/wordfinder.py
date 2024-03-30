"""Word Finder: finds random words from a dictionary."""
import random


class WordFinder:
    ...
    def __init__(self, file_path):
        self.words = self.read_words(file_path)
        self.num_of_words_read = len(self.words)
        print(f"{self.num_of_words_read} words read")

    def read_words(self, file_path):
        with open(file_path, 'r') as file:
            words = [line.strip() for line in file]
        return words

    def random(self):
        return random.choice(self.words)