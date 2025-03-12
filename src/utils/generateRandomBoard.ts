export const TABLE_SIZE = 6;

export const getShuffledOptions = () => {
  let orderedOptions: string[] = [
    "1",
    "1",
    "2",
    "2",
    "3",
    "3",
    "4",
    "4",
    "5",
    "5",
    "6",
    "6",
    "7",
    "7",
    "8",
    "8",
    "9",
    "9",
    "10",
    "10",
    "11",
    "11",
    "12",
    "12",
    "13",
    "13",
    "14",
    "14",
    "15",
    "15",
    "16",
    "16",
    "17",
    "17",
    "18",
    "18",
  ];
  const options = [];

  let i = 0;
  while (i < orderedOptions.length) {
    const randomPosition = Math.floor(Math.random() * orderedOptions.length);
    options.push(orderedOptions[randomPosition]);
    orderedOptions = orderedOptions.filter(
      (element, index) => index !== randomPosition
    );
  }

  return options;
};
