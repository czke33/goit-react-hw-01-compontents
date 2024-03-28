import style from './statistics.module.css'

function Statistics({ title, stats }) {
    return (
        <section className={style.statistics}>
    <h2 className={style.title}>{ title}</h2>

  <ul className={style.statList}>
    <li className={style.item}>
      <span className="label">.docx</span>
      <span className="percentage">4%</span>
    </li>
    <li className={style.item}>
      <span className="label">.mp3</span>
      <span className="percentage">14%</span>
    </li>
    <li className={style.item}>
      <span className="label">.pdf</span>
      <span className="percentage">41%</span>
    </li>
    <li className={style.item}>
      <span className="label">.mp4</span>
      <span className="percentage">12%</span>
    </li>
  </ul>
</section>
    )
};

export default Statistics