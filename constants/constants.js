const RECIPES = [
  {
    recipe_one: {
      category: 'savory',
      title: 'Scrambled Eggs',
      image: require('../public/harvey.jpg'),
      ingredients: ['3 eggs', '1/4 cup diced zucchini', '1 handful spinach', '1/8 cup cheese'],
      instructions: [
        'Turn non-stick pan on medium heat.',
        'Add vegetables to pan.',
        'After vegetables are cooked through, scramble eggs and add to pan along with chese.',
        'Once eggs are cooked and cheese is melted, remove from pan and cool.',
        'Recommended served room temperature.',
      ],
    },
  },
  {
    recipe_two: {
      category: 'savory',
      title: 'Vegetable Stirfry',
      image: require('../public/harvey.jpg'),
      ingredients: ['1/4 cup diced green beans', '1/4 cup diced zucchini', '1/4 cup diced carrots', '1/4 cup diced seedless cucumbers', '1/2 cup cooked white rice'],
      instructions: [
        'Turn non-stick pan on medium heat.',
        'Add all vegetables except cucumbers to pan.',
        'After vegetables are cooked through, mix in rice and cucumbers, and cook for 2 minutes.',
        'Remove from pan and cool.',
        'Recommended served room temperature.',
      ],
    },
  },
  {
    recipe_three: {
      category: 'savory',
      title: 'Egg Salad',
      image: require('../public/harvey.jpg'),
      ingredients: ['2 eggs', '1/4 cup sweet potato', '1/4 cup pumpkin'],
      instructions: [
        'Turn non-stick pan on medium heat.',
        'Add vegetables to pan.',
        'After vegetables are cooked through, scramble eggs and add to pan along with chese.',
        'Once eggs are cooked and cheese is melted, remove from pan and cool.',
        'Recommended served room temperature.',
      ],
    },
  },
  {
    recipe_four: {
      category: 'sweet',
      title: 'Fruit Plate',
      image: require('../public/harvey.jpg'),
      ingredients: ['1/4 cup frozen blueberries', '1/4 cup frozen banana', '1/4 cup diced apples', '1/4 cup diced seedless watermelon'],
      instructions: [
        'Mix all fruits together. Serve once frozen fruits are no longer frozen solid.',
      ],
    },
  },
  {
    recipe_five: {
      category: 'sweet',
      title: 'Peanut Butter Muffins',
      image: require('../public/harvey.jpg'),
      ingredients: ['1 egg', '1/2 finely grated apple', '3 tablespoons peanut butter', '1/2 teaspoon baking powder'],
      instructions: [
        'Preheat oven to 350°C',
        'Mix all ingredients together until smooth.',
        'Pour mixture into muffin tins',
        'Cook for 20 minutes or until batter is cooked through.',
        'Cool until slighly warmer than room temperature, and serve.',
      ],
    },
  },
  {
    recipe_six: {
      category: 'sweet',
      title: 'Blueberry Pancakes',
      image: require('../public/harvey.jpg'),
      ingredients: ['1 egg', '1/4 cup blueberries', '1 banana', '1 tablespoon peanut butter'],
      instructions: [
        'Mash banana with a fork.',
        'Add egg into same bowl and mix together.',
        'All the rest of the ingredients and mix until smooth.',
        'Heat non-stick pan on medium heat and pour mixture in.',
        'Cook both sides until pancake is cooked through.',
        'Cut into quarters and serve at room temperature.',
      ],
    },
  },
];

module.exports = {
  RECIPES,
};

