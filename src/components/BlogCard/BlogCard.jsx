import css from './BlogCard.module.css';

const BlogCard = ({
  id,
  name,
  postedAt,
  avatar,
  description,
  title,
  tag,
  poster,
}) => {
  return (
    <>
      <div className={css.card} key={id}>
        <div className={css.cardHeader}>
          <img className={css.cardPoster} src={poster}></img>
        </div>
        <div className={css.cardBody}>
          <p className={css.tag}>{tag}</p>
          <h2 className={css.cardTitle}>{title}</h2>
          <p className={css.cardText}>{description}</p>
        </div>
        <div className={css.cardFooter}>
          <div className={css.userBox}>
            <img className={css.avatar} src={avatar} />

            <div>
              <h3 className={css.userName}>{name}</h3>
              <p className={css.date}>{postedAt}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogCard;
