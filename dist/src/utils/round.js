export const round = (value, precision = 0) => {
    const multiplier = 10 ** precision;
    return Math.round(value * multiplier) / multiplier;
};
//# sourceMappingURL=round.js.map