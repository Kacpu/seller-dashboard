import Opinion from "./Opinion/Opinion";
import styles from './opinionsList.module.css'
import React from "react";

export default function OpinionsList(props) {
    let opinions = props.category !== 0 ?
        props.opinions.filter(o => o.rating === props.category) :  props.opinions

    opinions = opinions.slice(0, 5).map((o, index) =>
        <React.Fragment>
            <Opinion
                key={o.id}
                rating={o.rating}
                comment={o.comment}
            />
            {
                index !== 4 ? <hr className={styles.divider}/> : null
            }
        </React.Fragment>
    );

    return (
        <div className={styles.container}>
            {opinions}
        </div>
    );

}