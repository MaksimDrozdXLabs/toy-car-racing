export const mockMarkers = [
  {
    time: 500,
    text: 'Chapter 1',
  },
  {
    time: 1000,
    text: 'Chapter 2',
  },
  {
    time: 2000,
    text: 'Chapter 3',
  },
  {
    time: 3000,
    text: 'Chapter 4',
  },
  {
    time: 4000,
    text: 'Chapter 5',
    class: 'specialBlue',
  },
];

export const enum StatisticsTypeEnum {
  PASSES = 'passes',
  SPEED = 'speed',
  SHOOTS = 'shoots',
}

export const filterButtons = [
  { value: StatisticsTypeEnum.PASSES, label: 'Passes' },
  { value: StatisticsTypeEnum.SPEED, label: 'speed' },
  { value: 'shoots', label: 'Shoots' },
  { value: 'duels', label: 'Duels' },
  { value: 'tackles', label: 'Tackles' },
  { value: 'dribbling', label: 'Dribbling' },
  { value: 'saves', label: 'Saves' },
];
export const passesDistanceFilters = [
  { value: null, label: 'All' },
  { value: 'short', label: 'Short' },
  { value: 'medium', label: 'Medium' },
  { value: 'long', label: 'Long' },
];

export const statusFilters = [
  { value: null, label: 'All' },
  { value: true, label: 'Successful' },
  { value: false, label: 'Failed' },
];
