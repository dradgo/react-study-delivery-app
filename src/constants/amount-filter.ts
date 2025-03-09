export const AmountFilter = {
  ALL: 'all',
  LESS_1000: 'less1000',
  FROM_1000_TO_2000: '1000to2000',
  MORE_2000: 'more2000'
} as const;

export type AmountFilterType = typeof AmountFilter[keyof typeof AmountFilter];

export const AmountFilterText: Record<AmountFilterType, string> = {
  [AmountFilter.ALL]: 'Любая сумма',
  [AmountFilter.LESS_1000]: 'До 1000 ₽',
  [AmountFilter.FROM_1000_TO_2000]: '1000-2000 ₽',
  [AmountFilter.MORE_2000]: 'Более 2000 ₽'
};

export const AmountFilterRanges: Record<Exclude<AmountFilterType, 'all'>, { min: number; max: number }> = {
  [AmountFilter.LESS_1000]: { min: 0, max: 999 },
  [AmountFilter.FROM_1000_TO_2000]: { min: 1000, max: 2000 },
  [AmountFilter.MORE_2000]: { min: 2001, max: Infinity }
}; 