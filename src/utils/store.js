const cards = [
  {
    id: 'card-1',
    title: 'Learning JavaScript',
  },
  {
    id: 'card-2',
    title: 'Leaning more JavaScript',
  },
  {
    id: 'card-3',
    title: 'Applying JavaScript',
  },
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Todo',
      cards,
    },
  },
  listIds: ['list-1'],
};

export default data;