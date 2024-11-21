import React from "react";
import { categoryInfos } from "./CategoryFullinfos";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";

const Category = () => {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((infos, index) => (
        <CategoryCard key={infos.id || index} data={infos} />
      ))}
    </section>
  );
};

export default Category;
