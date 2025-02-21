import style from "./PortfolioBanner.module.scss";
import img1 from "../../../assets/Services/frame.png";

function PortfolioBanner({ data }) {
  // Check if data is null or undefined
  if (!data || !data.Banner) {
    return null; // Render nothing if data is null or undefined
  }

  return (
    <div className={style.banner}>
      <div className={style.banner__left}>
        <div>
          <div className={style.title_tag}>{data.Banner.TitleTag}</div>
          <h1 className={style.desktopViewHeading}>
            <div>{data.Banner.Title1}</div>
            <div>{data.Banner.Title2}</div>
          </h1>
          <h1 className={style.mobileViewHeading}>
            {data.Banner.Title1} {data.Banner.Title2}
          </h1>
        </div>
      </div>

      <div className={style.banner__right}>
        <img src={img1} alt="" className={style.frame} />
      </div>
    </div>
  );
}

export default PortfolioBanner;
