import style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
const Button = ({ icon, text }) => {
  return (
    <div className={style["btn-container"]}>
      <Image src={icon} height={20} width={20} alt="icon" />
      <p>{text}</p>
    </div>
  );
};

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style["top-footer"]}>
        <div className={style.logo}>
          <Image src={"/svg/logo/logo.svg"} height={30} width={30} alt="logo" />
          <Image
            src={"/svg/logo/logo-name.svg"}
            height={14}
            width={108}
            alt="logo-name"
          />
        </div>
        <div className={style.navigate}>
          <Link href={"/dashboard/home"}>Home</Link>
          <Link href={"/dashboard/about"}>About</Link>
          <Link href={"/dashboard/food"}>Food</Link>
        </div>
        <div className={style["to-top-page"]}>
          <p>Go To Top</p>
          <div className={"flex flex-col items-start p-3"}>
            <Image
              className="h-6 w-6"
              src={"/svg/footer/to-top.svg"}
              width={24}
              height={24}
              alt="to-top"
            />
          </div>
        </div>
      </div>
      <div className={style["bot-footer"]}>
        <div className={style.contact}>
          <Button icon={"/svg/footer/email.svg"} text="hello@squareup.com" />
          <Button icon={"/svg/footer/phone.svg"} text="+91 91813 23 2309" />
          <Button icon={"/svg/footer/location.svg"} text="Somewhere in the World" />
        </div>
        <div className={style.cite}>
          <p>© 2023 Nutritionist. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
