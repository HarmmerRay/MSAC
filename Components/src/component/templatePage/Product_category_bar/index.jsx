/* eslint-disable jsx-a11y/anchor-has-content */
import { useState } from "react";
import classes from './index.module.css'
import classnames from 'classnames';

function Product_category_bar(){
    const [Category_data] = useState({
        Category:[
            {
                "id": 1,
                "name":"服装城",
                "hyperlinks": "#"
            },
            {
                "id": 2,
                "name":"美妆馆",
                "hyperlinks": "#"
            },
            {
                "id": 3,
                "name":"尚品汇超市",
                "hyperlinks": "#"
            },
            {
                "id": 4,
                "name":"闪购",
                "hyperlinks": "#"
            },
            {
                "id": 5,
                "name":"团购",
                "hyperlinks": "#"
            },
            {
                "id": 6,
                "name":"秒杀",
                "hyperlinks": "#"
            },
        ]
    })

    const headerFontClasses = classnames(classes.header_font, classes.header_font_red);

    return(
        <div className={classes.headernav}>
          <div className={headerFontClasses}>全部商品分类</div>
          {Category_data.Category.map((cate) => (
            <div className={classes.header_font} key={cate.id}><a href={cate.hyperlinks}>{cate.name}</a></div>
          ))}
        </div>
    )
}

export default Product_category_bar;