import style from "./style.module.css";
import Image from "next/image";

const LeftImage = ({ image_url, heading, description, date }) => {
  return (
    <div className={style.container}>
      <Image
        className={style.image}
        src={image_url}
        height={420}
        width={634}
        alt="pic-1"
      />
      <div className={style.shape}></div>
      <div className={style["text-container"]}>
        <div className={style["text-head"]}>
          <p className={style["text-heading"]}>{heading}</p>
        </div>
        <p className={style["text-description"]}>{description}</p>
        <p className={style["text-date"]}>{date}</p>
      </div>
    </div>
  );
};

const RightImage = ({ image_url, heading, description, date }) => {
  return (
    <div className={style.container}>
      <div className={`${style["text-container"]} ${style.right}`}>
        <div className={style["text-head"]}>
          <p className={style["text-heading"]}>{heading}</p>
        </div>
        <p className={style["text-description"]}>{description}</p>
        <p className={style["text-date"]}>{date}</p>
      </div>
      <div className={style.shape}></div>
      <Image
        className={style.image}
        src={image_url}
        height={420}
        width={634}
        alt="pic-1"
      />
    </div>
  );
};
const Page = () => {
  return (
    <>
      <div className={`${style.header}`}>
        <p className={`${style.heading}`}>Welcome to Nutritionist</p>
        <p className={`${style.description} text-center`}>
          Your trusted source for personalized nutrition coaching. Our mission
          is to help you achieve your weight loss and health goals through
          tailored nutrition plans and expert guidance. We understand that every
          individual is unique, and that&apos;s why we believe in providing
          personalized solutions that fit your lifestyle and preferences. With
          our team of qualified nutritionists and dietitians, we are dedicated
          to empowering you with the knowledge and tools you need to make
          lasting changes. Whether you want to shed those extra pounds, improve
          your overall well-being, or develop a healthier relationship with
          food, we are here to support you every step of the way. At
          Nutritionist, we believe that healthy eating should be enjoyable and
          sustainable. We emphasize the importance of balanced nutrition,
          focusing on whole foods and mindful eating practices. Our approach is
          rooted in scientific research and evidence-based strategies, ensuring
          that you receive the most up-to-date and accurate information. Join
          our community of individuals committed to transforming their lives
          through nutrition. Take control of your health, boost your energy
          levels, and discover the joy of nourishing your body with wholesome
          foods. We are here to guide you towards a healthier, happier you.
        </p>
      </div>
      <div className={`${style.story}`}>
        <div className={style["story-head"]}>
          <p className={`${style["story-heading"]}`}>Our Story</p>
          <p className={`${style["story-description"]}`}>
            Welcome to Nutritionist, your partner in achieving optimal health
            through personalized nutrition coaching. Our certified nutritionists
            are here to guide you on your weight loss journey.
          </p>
        </div>
        <div className={style["wrapper"]}>
          <LeftImage
            image_url="/images/about/pic-2.png"
            heading="Inspiring Transformations Story"
            description={
              "Nutritionist continues to empower individuals to transform their lives through personalized nutrition coaching. With an expanding client base and a growing team of experts, we remain committed to our goal of helping people lose weight, improve their health, and lead happier, more fulfilling lives. Our journey of inspiring transformations continues, one client at a time."
            }
            date={"July 1, 2025"}
          />
          <RightImage
            image_url="/images/about/pic-2.png"
            heading="Inspiring Transformations Story"
            description={
              "Nutritionist continues to empower individuals to transform their lives through personalized nutrition coaching. With an expanding client base and a growing team of experts, we remain committed to our goal of helping people lose weight, improve their health, and lead happier, more fulfilling lives. Our journey of inspiring transformations continues, one client at a time."
            }
            date={"July 1, 2025"}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
