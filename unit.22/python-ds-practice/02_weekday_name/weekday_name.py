def weekday_name(day_of_week):
    """Return name of weekday.
    
        >>> weekday_name(1)
        'Sunday'
        
        >>> weekday_name(7)
        'Saturday'
        
    For days not between 1 and 7, return None
    
        >>> weekday_name(9)
        >>> weekday_name(0)
    """
    weekdays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
    if day_of_week < 1 or day_of_week > 7:
        return None
    
    return weekdays[day_of_week - 1]