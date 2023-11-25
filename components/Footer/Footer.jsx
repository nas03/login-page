import style from "./style.module.css";

function Footer() {
  return (
    <div className={`style["footer"]`}>
      <div className={`style["top-footer"]`}>
        <div className={`style["logo"]`}></div>
        <div className={`style["to-top-page"]`}></div>
        <div className={`style["navigate"]`}></div>
      </div>
      <div className={`style["bot-footer">]`}>
        <div className={`style["contact"]`}></div>
        <div className={`style["cite"]`}>
          <p>© 2023 Nutritionist. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
