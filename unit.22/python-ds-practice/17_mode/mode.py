def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """
    mode_num = {}
    for num in nums:
        if num in mode_num:
            mode_num[num] += 1
        else:
            mode_num[num] = 1
    mode_num_max = max(mode_num, key=mode_num.get)

    return mode_num_max

            
