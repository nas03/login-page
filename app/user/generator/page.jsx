import Link from "next/link";
import Image from "next/image";
import style from "./style.module.css";
const TableHeader = () => {
  return (
    <div className={`${style.gridHeader} ${style.gridRow}`}>
      <div className={`${style["first-col"]} ${style["data-container"]}`}>
        <p>Food</p>
      </div>
      <div className={`${style["second-col"]} ${style["data-container"]}`}>
        <p>Serving</p>
      </div>
      <div className={`${style["third-col"]} ${style["data-container"]}`}>
        <p>Calories</p>
      </div>
    </div>
  );
};
const RowData = ({ food, serving, calories }) => {
  return (
    <div className={`${style.gridRow}`}>
      <div className={`${style["first-col"]}`}>
        <p>{food}</p>
      </div>
      <div className={`${style["second-col"]}`}>
        <p>{serving}</p>
      </div>
      <div className={`${style["third-col"]}`}>
        <p>{calories}</p>
      </div>
    </div>
  );
};
const Page = () => {
  const dietData = [
    {
      meal: "Breakfast",
      items: [
        {
          food: "Oatmeal with Berries",
          serving: "1 cup",
          calories: "150-200",
          benefits:
            "Oatmeal contains soluble fiber that helps lower LDL cholesterol.",
        },
        {
          food: "Greek Yogurt with Nuts",
          serving: "1 cup of Greek yogurt",
          calories: "150-200",
          benefits:
            "Greek yogurt provides protein, and nuts (almonds or walnuts) offer healthy fats.",
        },
        {
          food: "Fruit Salad",
          serving: "1 cup",
          calories: "50-100",
          benefits:
            "Fruits like apples, oranges, and berries provide vitamins and antioxidants.",
        },
      ],
    },
    {
      meal: "Mid-Morning Snack",
      items: [
        {
          food: "Handful of Almonds",
          serving: "1 ounce (about 23 almonds)",
          calories: "160",
          benefits:
            "Almonds are rich in monounsaturated fats and may help lower LDL cholesterol.",
        },
      ],
    },
    {
      meal: "Lunch",
      items: [
        {
          food: "Grilled Chicken Salad",
          serving: "4-6 ounces of grilled chicken breast",
          calories: "200-300",
          benefits: "Lean protein from chicken, mixed greens, and vegetables.",
        },
        {
          food: "Quinoa Salad with Vegetables",
          serving: "1 cup",
          calories: "150-200",
          benefits:
            "Quinoa is a good source of protein and fiber, and vegetables add vitamins.",
        },
        {
          food: "Steamed Broccoli",
          serving: "1 cup",
          calories: "55",
          benefits:
            "Broccoli is high in fiber and may contribute to heart health.",
        },
      ],
    },
    {
      meal: "Afternoon Snack",
      items: [
        {
          food: "Whole Grain Crackers with Hummus",
          serving: "10-12 crackers with 2 tablespoons of hummus",
          calories: "150-200",
          benefits: "Whole grains and hummus provide fiber and healthy fats.",
        },
      ],
    },
    {
      meal: "Dinner",
      items: [
        {
          food: "Baked Salmon",
          serving: "4-6 ounces",
          calories: "200-300",
          benefits:
            "Salmon is rich in omega-3 fatty acids, which can help lower cholesterol.",
        },
        {
          food: "Quinoa or Brown Rice",
          serving: "1 cup",
          calories: "150-200",
          benefits: "Whole grains contribute to heart health.",
        },
        {
          food: "Steamed Vegetables (e.g., Asparagus, Carrots)",
          serving: "1 cup",
          calories: "50-100",
          benefits: "Vegetables add vitamins and minerals to the meal.",
        },
      ],
    },
    {
      meal: "Evening Snack (Optional)",
      items: [
        {
          food: "Fresh Fruit (e.g., Apple or Pear)",
          serving: "1 medium-sized fruit",
          calories: "80-100",
          benefits: "Provides natural sweetness and fiber.",
        },
      ],
    },
  ];

  return (
    <>
      <div className=" ml-auto mr-auto flex w-11/12 flex-col items-center gap-4 text-[#101828]">
        <h1 className="text-3xl font-bold ">Meal Generator</h1>
        <div className={`${style.header}`}>
          <p
            className={`${style.description} ml-auto mr-auto w-[65%] rounded-xl bg-[#cbea7b] p-5 text-center text-xl`}
          >
            Welcome to our Meal Generator, a fantastic tool designed to help you
            create well-balanced and nutritious meals throughout the day. This
            website provides a comprehensive list of meals from breakfast to
            dinner, offering detailed information on ingredients, serving sizes,
            and nutritional benefits. Utilize the &quot;Generate&quot; button to
            randomly generate meals, adding variety to your daily diet.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-md bg-[#cbea7b] pb-3 pl-4 pr-4 pt-3 font-bold">
          Generate
        </button>
        <div className={style.table}>
          {dietData.map((mealData, index) => (
            <div key={index}>
              <h2
                className={`${style["data-container"]} mb-3 mt-3 pb-2 pl-3 pt-2 text-center text-xl uppercase`}
              >
                {mealData.meal}
              </h2>
              <TableHeader />
              {mealData.items.map((item, itemIndex) => (
                <RowData
                  key={itemIndex}
                  food={item.food}
                  serving={item.serving}
                  calories={item.calories}
                />
              ))}
            </div>
          ))}
          <div className={`${style.gridBody}`}></div>
        </div>
      </div>
    </>
  );
};

export default Page;
