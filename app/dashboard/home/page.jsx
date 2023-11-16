// Importing necessary modules
import Header from "@/components/Header/Header";
import Image from "next/image";
import styles from './styles.module.css';

export default function Home() {
  return (
    <>
      <div id={styles.hero} className={styles["section"]}>
        <Image
          className={styles["pic-1"]}
          src="/images/home-pic1.png"
          width={710}
          height={712}
          alt="minh hoa"
        />
        <div className={styles.container}>
          <div className={styles["content-container"]}>
            <div className={styles["title-container"]}>
              <div className={styles["top-title"]}>
                <div className={styles["title"]}>
                  <p>Transform Your ❤️ Health with</p>
                </div>
                <p className={styles["heading"]}>Personalized Nutrition Coaching</p>
              </div>
              <p className={styles["heading-content"]}>
                Welcome to Nutritionist, your partner in achieving optimal
                health through personalized nutrition coaching. Our certified
                nutritionists are here to guide you on your weight loss journey,
                providing customized plans and ongoing support. Start your
                transformation today and experience the power of personalized
                nutrition coaching.
              </p>
              <div className={styles["buttons-container"]}>
                <button>Get Started Today</button>
                <button>Book a Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
