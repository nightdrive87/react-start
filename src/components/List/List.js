import React from "react";
import styles from "./List.scss";
import Hero from "../Hero/Hero";
import PropTypes from "prop-types";
import Column from "../Column/Column";

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
  };

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} ImageLink={this.props.image} />
        <div className={styles.description}>{this.props.children}</div>
        <div className={styles.columns}>
            <Column title='Animals'></Column>
            <Column title='Plants'></Column>
            <Column title='Minerals'></Column>
        </div>
      </section>
    );
  }
}

export default List;
