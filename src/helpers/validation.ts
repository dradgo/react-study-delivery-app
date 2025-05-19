
export const validateTime = (time: string): boolean => {
    const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return timeRegex.test(time);
};

export const validateTimeRange = (open: string, close: string): boolean => {
    if (!validateTime(open) || !validateTime(close)) {
        return false;
    }
    return open < close;
};