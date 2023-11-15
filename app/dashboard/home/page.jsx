import Header from "@/components/Header/Header";
import Image from "next/image";
import "./style.css";
export default function Home() {
  return (
    <>
      <div id="hero" className="hero-section">
        <Image
          className="hero-pic-1"
          src="/images/home-pic1.png"
          width={710}
          height={712}
          alt="minh hoa"
        />
        <div className="hero-container">
          <div className="hero-content-container">
            <div className="hero-title-container">
              <div className="hero-top-title">
                <div className="hero-title">
                  <p>Transform Your ❤️ Health with</p>
                </div>
                <p className="hero-heading">Personalized Nutrition Coaching</p>
              </div>
              <p className="hero-heading-content">
                Welcome to Nutritionist, your partner in achieving optimal
                health through personalized nutrition coaching. Our certified
                nutritionists are here to guide you on your weight loss journey,
                providing customized plans and ongoing support. Start your
                transformation today and experience the power of personalized
                nutrition coaching.
              </p>
              <div className="hero-buttons-container">
                <button>Get Starter Today</button>
                <button>Book a Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
