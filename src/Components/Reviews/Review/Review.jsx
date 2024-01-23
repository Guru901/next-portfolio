import React from "react";
import styles from "./style.module.scss";

const Review = () => {
  const rs = [
    {
      title: "Lorem, ipsum.",
      something: "Something",
      img: "https://assets-global.website-files.com/650bf8da7566f085fed073f0/652c0c5c7568770d04e4ee5d_quote.svg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente ullam, impedit, cum amet officia similique est illum quae quibusdam maiores? Optio deserunt similique assum incidunt facilis? Molestias saepe ipsam impedit quos repudiandae commodi facilis officia laborum delectus asperiores reprehenderit.",
      key: 1,
    },

    {
      title: "Lorem, ipsum.",
      something: "Something",
      img: "https://assets-global.website-files.com/650bf8da7566f085fed073f0/652c0c5c7568770d04e4ee5d_quote.svg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente ullam, impedit, cum amet officia similique est illum quae quibusdam maiores? Optio deserunt similique assum incidunt facilis? Molestias saepe ipsam impedit quos repudiandae commodi facilis officia laborum delectus asperiores reprehenderit.",
      key: 4,
    },
  ];

  return (
    <div className={styles.rcontainer}>
      {rs.map((x) => (
        <div className={styles.review} key={x.key}>
          <div className={`${styles.rtop} absoluteCenter`}>
            <div className={styles.rimg}></div>
            <div className={styles.rname}>
              <h1>{x.title}</h1>
              <div className={`${styles.something} absoluteCenter`}>
                <p>{x.something}</p>
              </div>
            </div>
          </div>
          <div className={`${styles.rbottom} absoluteCenter`}>
            <span>
              <img src={x.img} alt="" />
            </span>
            <p>{x.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
