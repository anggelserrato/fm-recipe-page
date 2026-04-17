import omelette from './assets/image-omelette.jpeg';

function App() {
  const prepTime = [
    { name: 'Total', time: 'Approximately 10 minutes' },
    { name: 'Preparation', time: '5 minutes' },
    { name: 'Cooking', time: '5 minutes' },
  ];

  const ingredients = [
    { name: '2-3 large eggs' },
    { name: 'Salt, to taste' },
    { name: 'Pepper, to taste' },
    { name: '1 tablespoon of butter or oil' },
    {
      name: 'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
    },
  ];

  const instructions = [
    {
      step: 1,
      title: 'Beat the eggs',
      description:
        'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
    },
    {
      step: 2,
      title: 'Heat the pan',
      description:
        'Place a non-stick frying pan over medium heat and add butter or oil.',
    },
    {
      step: 3,
      title: 'Cook the omelette',
      description:
        'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
    },
    {
      step: 4,
      title: 'Add fillings (optional)',
      description:
        'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
    },
    {
      step: 5,
      title: 'Fold and serve',
      description:
        'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
    },
    {
      step: 6,
      title: 'Enjoy',
      description: 'Serve hot, with additional salt and pepper if needed.',
    },
  ];

  const nutrition = [
    { name: 'Calories', value: '277kcal' },
    { name: 'Carbs', value: '0g' },
    { name: 'Protein', value: '20g' },
    { name: 'Fat', value: '22g' },
  ];

  return (
    <main className="mx-auto flex min-h-screen max-w-[375px] flex-col items-center">
      <figure className="h-[171px] w-full">
        <img
          src={omelette}
          alt="Crispy golden omelette topped with fresh herbs"
        />
      </figure>
      <article className="px-card-400 py-card-500 font-card-outfit text-[16px] leading-[150%] text-card-stone-600">
        <h1 className="pb-card-300 font-card-young-serif text-4xl leading-[100%] text-card-stone-900">
          Simple Omelette Recipe
        </h1>
        <p className="pb-card-400">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <section className="mb-card-400 flex flex-col gap-card-200 rounded-[12px] bg-card-rose-50 p-card-300 font-card-outfit">
          <h2 className="text-[20px] leading-[100%] font-semibold text-card-rose-800">
            Preparation time
          </h2>
          <ul className="flex flex-col gap-card-100">
            {prepTime.map((time) => (
              <li
                key={time.name}
                className="flex items-center gap-card-200 pl-card-200 marker:text-card-rose-800"
              >
                <div className="mr-2 h-[4px] w-[4px] shrink-0 rounded-full bg-card-rose-800"></div>
                <p>
                  <strong className="font-bold">{time.name}</strong>:{' '}
                  {time.time}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="pb-card-400">
          <h2 className="pb-card-300 font-card-young-serif text-[28px] leading-[100%] text-card-brown-800">
            Ingredients
          </h2>
          <ul className="flex flex-col gap-card-100">
            {ingredients.map((ingredient) => (
              <li
                key={ingredient.name}
                className="flex items-center gap-card-200 pl-card-100"
              >
                <div className="mr-2 h-[4px] w-[4px] shrink-0 rounded-full bg-card-rose-800"></div>
                <p>{ingredient.name}</p>
              </li>
            ))}
          </ul>
        </section>

        <hr className="border-card-stone-150" />

        <section className="py-card-400">
          <h2 className="pb-card-300 font-card-young-serif text-[28px] leading-[100%] text-card-brown-800">
            Instructions
          </h2>
          <ol className="flex flex-col gap-card-100">
            {instructions.map((instruction) => (
              <li
                key={instruction.step}
                className="flex items-start gap-card-200 pl-card-100"
              >
                <span className="mr-0.5 shrink-0 font-bold text-card-brown-800">
                  {instruction.step}.
                </span>
                <p>
                  <strong className="font-bold">{instruction.title}</strong>:{' '}
                  {instruction.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <hr className="border-card-stone-150" />

        <section className="pt-card-400">
          <h2 className="pb-card-300 font-card-young-serif text-[28px] leading-[100%] text-card-brown-800">
            Nutrition
          </h2>
          <p className="pb-card-300">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="w-full">
            <tbody>
              {nutrition.map((item, index) => (
                <tr
                  key={item.name}
                  className={
                    index !== nutrition.length - 1
                      ? 'border-b border-card-stone-150'
                      : ''
                  }
                >
                  <td className="py-card-150 pl-card-400">{item.name}</td>
                  <td className="pr-card-400 pl-card-200 font-bold text-card-brown-800">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </article>
    </main>
  );
}

export default App;
