import { Link } from 'react-router-dom';
import style from './DedicatedBanner.module.scss';
import img1 from "../../../assets/Services/dedicated-team.png";


function DedicatedBanner(data) {
  console.log("===>", data)
  return (
    <div className={style.banner}>
        <div className={style.banner__left}>
        <div>
          <p>Dedicated Development Team</p>
          <h1>
            <div>{data.apiData.Banner.Title1}</div>
            <div>{data.apiData.Banner.Title2}</div>
            <div>{data.apiData.Banner.Title3}</div>
          </h1>
          <Link to='/about'>Get a quote</Link>
        </div>
      </div>

      <div className={style.banner__right}>
        <img src={img1} alt="" className={style.iphone1} />

      </div>
    </div>
  )
}

export default DedicatedBanner;