import Link from "next/link";
import Image from "next/image";
import style from "./style.module.css";
const Page = () => {
  return (
    <>
      <div className=" ml-auto mr-auto flex w-11/12 flex-col items-center gap-4 text-[#101828]">
        <h1 className="text-3xl font-bold ">Meal Generator</h1>
        <button className="flex items-center gap-2 rounded-md bg-[#cbea7b] pb-3 pl-4 pr-4 pt-3 font-bold">
          Generate
        </button>
        <div className={style.table}>
          <div className={`${style.gridHeader} ${style.gridRow}`}>
            <div className={`${style["first-col"]} ${style["data-container"]}`}>
              <p>Food</p>
            </div>
            <div
              className={`${style["second-col"]} ${style["data-container"]}`}
            >
              <p>Serving</p>
            </div>
            <div className={`${style["third-col"]} ${style["data-container"]}`}>
              <p>Calories</p>
            </div>
          </div>

          <div className={`${style.gridBody}`}>
            <div className={`${style.gridRow}`}>
              <div className={`${style["first-col"]}`}>
                <p>food</p>
              </div>
              <div className={`${style["second-col"]}`}>
                <p>100g</p>
              </div>
              <div className={`${style["third-col"]}`}>
                <p >calories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
