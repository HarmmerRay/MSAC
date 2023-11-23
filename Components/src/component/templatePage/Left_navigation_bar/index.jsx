/* eslint-disable jsx-a11y/anchor-has-content */
import { useState } from "react";
import classes from './index.module.css'

function Leftnav() {

    const [isVisible, setIsVisible] = useState(0);
    const [sum, setSum] = useState()


    const handleMouseEnter = () => { setIsVisible(1)};
    const handleMouseLeave = () => { setIsVisible(0)};

    // 一级菜单数据
    const [leftnav] = useState({
        leftnav: [
            {
                "id": 1,
                "name1": "家用电器",
                "hyperlinks1": "#",
                "name2": "",
                "hyperlinks2": "#",
                "name3": "",
                "hyperlinks3": "#",
                "name4": "",
                "hyperlinks4": "#"
            },
            {
                "id": 2,
                "name1": "手机",
                "hyperlinks1": "#",
                "name2": "数码",
                "hyperlinks2": "#",
                "name3": "",
                "hyperlinks3": "#",
                "name4": "",
                "hyperlinks4": "#"
            },
            {
                "id": 3,
                "name1": "电脑",
                "hyperlinks1": "#",
                "name2": "办公",
                "hyperlinks2": "#",
                "name3": "",
                "hyperlinks3": "#",
                "name4": "",
                "hyperlinks4": "#"
            },
            {
                "id": 4,
                "name1": "家居",
                "hyperlinks1": "#",
                "name2": "家装",
                "hyperlinks2": "#",
                "name3": "厨具",
                "hyperlinks3": "#",
                "name4": "",
                "hyperlinks4": "#"
            },
            {
                "id": 5,
                "name1": "男装",
                "hyperlinks1": "#",
                "name2": "女装",
                "hyperlinks2": "#",
                "name3": "童装",
                "hyperlinks3": "#",
                "name4": "",
                "hyperlinks4": "#"
            },
            {
                "id": 6,
                "name1": "美妆",
                "hyperlinks1": "#",
                "name2": "个护清洁",
                "hyperlinks2": "#",
                "name3": "",
                "hyperlinks3": "#",
                "name4": "",
                "hyperlinks4": "#"
            },
            {
                "id": 7,
                "name1": "箱包",
                "hyperlinks1": "#",
                "name2": "钟表",
                "hyperlinks2": "#",
                "name3": "珠宝",
                "hyperlinks3": "#",
                "name4": "",
                "hyperlinks4": "#"
            },
            {
                "id": 8,
                "name1": "男鞋",
                "hyperlinks1": "#",
                "name2": "运动",
                "hyperlinks2": "#",
                "name3": "户外",
                "hyperlinks3": "#",
                "name4": "",
                "hyperlinks4": "#"
            },
            {
                "id": 9,
                "name1": "汽车",
                "hyperlinks1": "#",
                "name2": "汽车用品",
                "hyperlinks2": "#",
                "name3": "",
                "hyperlinks3": "#",
                "name4": "",
                "hyperlinks4": "#"
            },
            {
                "id": 10,
                "name1": "母婴",
                "hyperlinks1": "#",
                "name2": "玩具乐器",
                "hyperlinks2": "#",
                "name3": "",
                "hyperlinks3": "#",
                "name4": "",
                "hyperlinks4": "#"
            },
            {
                "id": 11,
                "name1": "食品",
                "hyperlinks1": "#",
                "name2": "酒类",
                "hyperlinks2": "#",
                "name3": "生鲜",
                "hyperlinks3": "#",
                "name4": "特产",
                "hyperlinks4": "#"
            },
            {
                "id": 12,
                "name1": "礼品鲜花",
                "hyperlinks1": "#",
                "name2": "农资绿植",
                "hyperlinks2": "#",
                "name3": "",
                "hyperlinks3": "#",
                "name4": "",
                "hyperlinks4": "#"
            },
            {
                "id": 13,
                "name1": "医药保健",
                "hyperlinks1": "#",
                "name2": "计生情趣",
                "hyperlinks2": "#",
                "name3": "",
                "hyperlinks3": "#",
                "name4": "",
                "hyperlinks4": "#"
            },
            {
                "id": 14,
                "name1": "文娱",
                "hyperlinks1": "#",
                "name2": "教育",
                "hyperlinks2": "#",
                "name3": "电子书",
                "hyperlinks3": "#",
                "name4": "",
                "hyperlinks4": "#"
            },
            {
                "id": 15,
                "name1": "机票",
                "hyperlinks1": "#",
                "name2": "酒店",
                "hyperlinks2": "#",
                "name3": "旅游",
                "hyperlinks3": "#",
                "name4": "生活",
                "hyperlinks4": "#"
            },
            {
                "id": 16,
                "name1": "理财",
                "hyperlinks1": "#",
                "name2": "众筹",
                "hyperlinks2": "#",
                "name3": "保险",
                "hyperlinks3": "#",
                "name4": "",
                "hyperlinks4": "#"
            },
            {
                "id": 17,
                "name1": "理财",
                "hyperlinks1": "#",
                "name2": "众筹",
                "hyperlinks2": "#",
                "name3": "保险",
                "hyperlinks3": "#",
                "name4": "",
                "hyperlinks4": "#"
            },
            {
                "id": 18,
                "name1": "理财",
                "hyperlinks1": "#",
                "name2": "众筹",
                "hyperlinks2": "#",
                "name3": "保险",
                "hyperlinks3": "#",
                "name4": "",
                "hyperlinks4": "#"
            },
        ]
    })

    // 二级菜单数据
    const [SecData] = useState({ 
        secdata: [
            {
                "id": 1,
                "value1": "大家电",
                "value2": "平板电视",
                "hyperlinks2": "#",
                "value3": "空调",
                "hyperlinks3": "#",
                "value4": "洗衣机",
                "hyperlinks4": "#",
                "value5": "DVD/电视盒子",
                "hyperlinks5": "#",
                "value6": "平板电视",
                "hyperlinks6": "#",
                "value7": "空调",
                "hyperlinks7": "#",
                "value8": "洗衣机",
                "hyperlinks8": "#",
                "value9": "DVD/电视盒子",
                "hyperlinks9": "#",
                "value10": "平板电视",
                "hyperlinks10": "#",
                "value11": "空调",
                "hyperlinks11": "#",
                "value12": "洗衣机",
                "hyperlinks12": "#",
                "value13": "DVD/电视盒子",
                "hyperlinks13": "#"
            },
            {
                "id": 2,
                "value1": "手机通讯",
                "value2": "手机",
                "hyperlinks2": "#",
                "value3": "对讲机",
                "hyperlinks3": "#",
                "value4": "洗衣机",
                "hyperlinks4": "#",
                "value5": "DVD/电视盒子",
                "hyperlinks5": "#",
                "value6": "平板电视",
                "hyperlinks6": "#",
                "value7": "空调",
                "hyperlinks7": "#",
                "value8": "洗衣机",
                "hyperlinks8": "#",
                "value9": "DVD/电视盒子",
                "hyperlinks9": "#",
                "value10": "平板电视",
                "hyperlinks10": "#",
            },
            {
                "id": 3,
                "value1": "大家电",
                "value2": "平板电视",
                "hyperlinks2": "#",
                "value3": "空调",
                "hyperlinks3": "#",
                "value4": "洗衣机",
                "hyperlinks4": "#",
                "value5": "DVD/电视盒子",
                "hyperlinks5": "#",
                "value6": "平板电视",
                "hyperlinks6": "#",
                "value7": "空调",
                "hyperlinks7": "#",
                "value8": "洗衣机",
                "hyperlinks8": "#",
                "value9": "DVD/电视盒子",
                "hyperlinks9": "#",
                "value10": "平板电视",
                "hyperlinks10": "#",
                "value11": "空调",
                "hyperlinks11": "#",
                "value12": "洗衣机",
                "hyperlinks12": "#",
                "value13": "DVD/电视盒子",
                "hyperlinks13": "#"
            },
            {
                "id": 4,
                "value1": "大家电",
                "value2": "平板电视",
                "hyperlinks2": "#",
                "value3": "空调",
                "hyperlinks3": "#",
                "value4": "洗衣机",
                "hyperlinks4": "#",
                "value5": "DVD/电视盒子",
                "hyperlinks5": "#",
                "value6": "平板电视",
                "hyperlinks6": "#",
                "value7": "空调",
                "hyperlinks7": "#",
                "value8": "洗衣机",
                "hyperlinks8": "#",
                "value9": "DVD/电视盒子",
                "hyperlinks9": "#",
                "value10": "平板电视",
                "hyperlinks10": "#",
                "value11": "空调",
                "hyperlinks11": "#",
                "value12": "洗衣机",
                "hyperlinks12": "#",
                "value13": "DVD/电视盒子",
                "hyperlinks13": "#"
            },
            {
                "id": 5,
                "value1": "大家电",
                "value2": "平板电视",
                "hyperlinks2": "#",
                "value3": "空调",
                "hyperlinks3": "#",
                "value4": "洗衣机",
                "hyperlinks4": "#",
                "value5": "DVD/电视盒子",
                "hyperlinks5": "#",
                "value6": "平板电视",
                "hyperlinks6": "#",
                "value7": "空调",
                "hyperlinks7": "#",
                "value8": "洗衣机",
                "hyperlinks8": "#",
                "value9": "DVD/电视盒子",
                "hyperlinks9": "#",
                "value10": "平板电视",
                "hyperlinks10": "#",
                "value11": "空调",
                "hyperlinks11": "#",
                "value12": "洗衣机",
                "hyperlinks12": "#",
                "value13": "DVD/电视盒子",
                "hyperlinks13": "#"
            },
            {
                "id": 6,
                "value1": "大家电",
                "value2": "平板电视",
                "hyperlinks2": "#",
                "value3": "空调",
                "hyperlinks3": "#",
                "value4": "洗衣机",
                "hyperlinks4": "#",
                "value5": "DVD/电视盒子",
                "hyperlinks5": "#",
                "value6": "平板电视",
                "hyperlinks6": "#",
                "value7": "空调",
                "hyperlinks7": "#",
                "value8": "洗衣机",
                "hyperlinks8": "#",
                "value9": "DVD/电视盒子",
                "hyperlinks9": "#",
                "value10": "平板电视",
                "hyperlinks10": "#",
                "value11": "空调",
                "hyperlinks11": "#",
                "value12": "洗衣机",
                "hyperlinks12": "#",
                "value13": "DVD/电视盒子",
                "hyperlinks13": "#"
            },
            {
                "id": 7,
                "value1": "大家电",
                "value2": "平板电视",
                "hyperlinks2": "#",
                "value3": "空调",
                "hyperlinks3": "#",
                "value4": "洗衣机",
                "hyperlinks4": "#",
                "value5": "DVD/电视盒子",
                "hyperlinks5": "#",
                "value6": "平板电视",
                "hyperlinks6": "#",
                "value7": "空调",
                "hyperlinks7": "#",
                "value8": "洗衣机",
                "hyperlinks8": "#",
                "value9": "DVD/电视盒子",
                "hyperlinks9": "#",
                "value10": "平板电视",
                "hyperlinks10": "#",
                "value11": "空调",
                "hyperlinks11": "#",
                "value12": "洗衣机",
                "hyperlinks12": "#",
                "value13": "DVD/电视盒子",
                "hyperlinks13": "#"
            },
            {
                "id": 8,
                "value1": "大家电",
                "value2": "平板电视",
                "hyperlinks2": "#",
                "value3": "空调",
                "hyperlinks3": "#",
                "value4": "洗衣机",
                "hyperlinks4": "#",
                "value5": "DVD/电视盒子",
                "hyperlinks5": "#",
                "value6": "平板电视",
                "hyperlinks6": "#",
                "value7": "空调",
                "hyperlinks7": "#",
                "value8": "洗衣机",
                "hyperlinks8": "#",
                "value9": "DVD/电视盒子",
                "hyperlinks9": "#",
                "value10": "平板电视",
                "hyperlinks10": "#",
                "value11": "空调",
                "hyperlinks11": "#",
                "value12": "洗衣机",
                "hyperlinks12": "#",
                "value13": "DVD/电视盒子",
                "hyperlinks13": "#"
            },
            {
                "id": 9,
                "value1": "大家电",
                "value2": "平板电视",
                "hyperlinks2": "#",
                "value3": "空调",
                "hyperlinks3": "#",
                "value4": "洗衣机",
                "hyperlinks4": "#",
                "value5": "DVD/电视盒子",
                "hyperlinks5": "#",
                "value6": "平板电视",
                "hyperlinks6": "#",
                "value7": "空调",
                "hyperlinks7": "#",
                "value8": "洗衣机",
                "hyperlinks8": "#",
                "value9": "DVD/电视盒子",
                "hyperlinks9": "#",
                "value10": "平板电视",
                "hyperlinks10": "#",
                "value11": "空调",
                "hyperlinks11": "#",
                "value12": "洗衣机",
                "hyperlinks12": "#",
                "value13": "DVD/电视盒子",
                "hyperlinks13": "#"
            },
            {
                "id": 10,
                "value1": "大家电",
                "value2": "平板电视",
                "hyperlinks2": "#",
                "value3": "空调",
                "hyperlinks3": "#",
                "value4": "洗衣机",
                "hyperlinks4": "#",
                "value5": "DVD/电视盒子",
                "hyperlinks5": "#",
                "value6": "平板电视",
                "hyperlinks6": "#",
                "value7": "空调",
                "hyperlinks7": "#",
                "value8": "洗衣机",
                "hyperlinks8": "#",
                "value9": "DVD/电视盒子",
                "hyperlinks9": "#",
                "value10": "平板电视",
                "hyperlinks10": "#",
                "value11": "空调",
                "hyperlinks11": "#",
                "value12": "洗衣机",
                "hyperlinks12": "#",
                "value13": "DVD/电视盒子",
                "hyperlinks13": "#"
            },
            {
                "id": 11,
                "value1": "大家电",
                "value2": "平板电视",
                "hyperlinks2": "#",
                "value3": "空调",
                "hyperlinks3": "#",
                "value4": "洗衣机",
                "hyperlinks4": "#",
                "value5": "DVD/电视盒子",
                "hyperlinks5": "#",
                "value6": "平板电视",
                "hyperlinks6": "#",
                "value7": "空调",
                "hyperlinks7": "#",
                "value8": "洗衣机",
                "hyperlinks8": "#",
                "value9": "DVD/电视盒子",
                "hyperlinks9": "#",
                "value10": "平板电视",
                "hyperlinks10": "#",
                "value11": "空调",
                "hyperlinks11": "#",
                "value12": "洗衣机",
                "hyperlinks12": "#",
                "value13": "DVD/电视盒子",
                "hyperlinks13": "#"
            },
            {
                "id": 12,
                "value1": "大家电",
                "value2": "平板电视",
                "hyperlinks2": "#",
                "value3": "空调",
                "hyperlinks3": "#",
                "value4": "洗衣机",
                "hyperlinks4": "#",
                "value5": "DVD/电视盒子",
                "hyperlinks5": "#",
                "value6": "平板电视",
                "hyperlinks6": "#",
                "value7": "空调",
                "hyperlinks7": "#",
                "value8": "洗衣机",
                "hyperlinks8": "#",
                "value9": "DVD/电视盒子",
                "hyperlinks9": "#",
                "value10": "平板电视",
                "hyperlinks10": "#",
                "value11": "空调",
                "hyperlinks11": "#",
                "value12": "洗衣机",
                "hyperlinks12": "#",
                "value13": "DVD/电视盒子",
                "hyperlinks13": "#"
            },
            {
                "id": 13,
                "value1": "大家电",
                "value2": "平板电视",
                "hyperlinks2": "#",
                "value3": "空调",
                "hyperlinks3": "#",
                "value4": "洗衣机",
                "hyperlinks4": "#",
                "value5": "DVD/电视盒子",
                "hyperlinks5": "#",
                "value6": "平板电视",
                "hyperlinks6": "#",
                "value7": "空调",
                "hyperlinks7": "#",
                "value8": "洗衣机",
                "hyperlinks8": "#",
                "value9": "DVD/电视盒子",
                "hyperlinks9": "#",
                "value10": "平板电视",
                "hyperlinks10": "#",
                "value11": "空调",
                "hyperlinks11": "#",
                "value12": "洗衣机",
                "hyperlinks12": "#",
                "value13": "DVD/电视盒子",
                "hyperlinks13": "#"
            },
            {
                "id": 14,
                "value1": "大家电",
                "value2": "平板电视",
                "hyperlinks2": "#",
                "value3": "空调",
                "hyperlinks3": "#",
                "value4": "洗衣机",
                "hyperlinks4": "#",
                "value5": "DVD/电视盒子",
                "hyperlinks5": "#",
                "value6": "平板电视",
                "hyperlinks6": "#",
                "value7": "空调",
                "hyperlinks7": "#",
                "value8": "洗衣机",
                "hyperlinks8": "#",
                "value9": "DVD/电视盒子",
                "hyperlinks9": "#",
                "value10": "平板电视",
                "hyperlinks10": "#",
                "value11": "空调",
                "hyperlinks11": "#",
                "value12": "洗衣机",
                "hyperlinks12": "#",
                "value13": "DVD/电视盒子",
                "hyperlinks13": "#"
            },
            {
                "id": 15,
                "value1": "大家电",
                "value2": "平板电视",
                "hyperlinks2": "#",
                "value3": "空调",
                "hyperlinks3": "#",
                "value4": "洗衣机",
                "hyperlinks4": "#",
                "value5": "DVD/电视盒子",
                "hyperlinks5": "#",
                "value6": "平板电视",
                "hyperlinks6": "#",
                "value7": "空调",
                "hyperlinks7": "#",
                "value8": "洗衣机",
                "hyperlinks8": "#",
                "value9": "DVD/电视盒子",
                "hyperlinks9": "#",
                "value10": "平板电视",
                "hyperlinks10": "#",
                "value11": "空调",
                "hyperlinks11": "#",
                "value12": "洗衣机",
                "hyperlinks12": "#",
                "value13": "DVD/电视盒子",
                "hyperlinks13": "#"
            },
            {
                "id": 16,
                "value1": "大家电",
                "value2": "平板电视",
                "hyperlinks2": "#",
                "value3": "空调",
                "hyperlinks3": "#",
                "value4": "洗衣机",
                "hyperlinks4": "#",
                "value5": "DVD/电视盒子",
                "hyperlinks5": "#",
                "value6": "平板电视",
                "hyperlinks6": "#",
                "value7": "空调",
                "hyperlinks7": "#",
                "value8": "洗衣机",
                "hyperlinks8": "#",
                "value9": "DVD/电视盒子",
                "hyperlinks9": "#",
                "value10": "平板电视",
                "hyperlinks10": "#",
                "value11": "空调",
                "hyperlinks11": "#",
                "value12": "洗衣机",
                "hyperlinks12": "#",
                "value13": "DVD/电视盒子",
                "hyperlinks13": "#"
            },
            {
                "id": 17,
                "value1": "大家电",
                "value2": "平板电视",
                "hyperlinks2": "#",
                "value3": "空调",
                "hyperlinks3": "#",
                "value4": "洗衣机",
                "hyperlinks4": "#",
                "value5": "DVD/电视盒子",
                "hyperlinks5": "#",
                "value6": "平板电视",
                "hyperlinks6": "#",
                "value7": "空调",
                "hyperlinks7": "#",
                "value8": "洗衣机",
                "hyperlinks8": "#",
                "value9": "DVD/电视盒子",
                "hyperlinks9": "#",
                "value10": "平板电视",
                "hyperlinks10": "#",
                "value11": "空调",
                "hyperlinks11": "#",
                "value12": "洗衣机",
                "hyperlinks12": "#",
                "value13": "DVD/电视盒子",
                "hyperlinks13": "#"
            },
            {
                "id": 18,
                "value1": "大家电",
                "value2": "平板电视",
                "hyperlinks2": "#",
                "value3": "空调",
                "hyperlinks3": "#",
                "value4": "洗衣机",
                "hyperlinks4": "#",
                "value5": "DVD/电视盒子",
                "hyperlinks5": "#",
                "value6": "平板电视",
                "hyperlinks6": "#",
                "value7": "空调",
                "hyperlinks7": "#",
                "value8": "洗衣机",
                "hyperlinks8": "#",
                "value9": "DVD/电视盒子",
                "hyperlinks9": "#",
                "value10": "平板电视",
                "hyperlinks10": "#",
                "value11": "空调",
                "hyperlinks11": "#",
                "value12": "洗衣机",
                "hyperlinks12": "#",
                "value13": "DVD/电视盒子",
                "hyperlinks13": "#"
            },
        ]
    })

    return (
        <>
            <div className={classes.left_navbar}>
                <ul className={classes.list_item}>
                    {leftnav.leftnav.map((nav) => (
                        <li key={nav.id} onMouseEnter={()=>{handleMouseEnter();setSum(nav.id-1);}} onMouseLeave={()=>{handleMouseLeave();setSum(0)}}>
                            
                            <a href={nav.hyperlinks1}>{nav.name1}</a>

                            {nav.name2 && (
                                <>
                                    <span>/</span>
                                    <a href={nav.hyperlinks2}>{nav.name2}</a>
                                </>
                            )}
                            {nav.name3 && (
                                <>
                                    <span>/</span>
                                    <a href={nav.hyperlinks3}>{nav.name3}</a>
                                </>
                            )}
                            {nav.name4 && (
                                <>
                                    <span>/</span>
                                    <a href={nav.hyperlinks4}>{nav.name4}</a>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>


            {/* 二级菜单 */}
            {isVisible===1 &&
                        <div className={classes.Secondary_menu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className={classes.Secondary_menu_div}>
                                {SecData.secdata.slice(sum, sum+1).map((sec) => (
                                    <>
                                        <div key={sec.id}>{sec.value1}</div>
                                        <ul>
                                            <li><a href={sec.hyperlinks2}>{sec.value2}</a></li>
                                            <li><a href={sec.hyperlinks3}>{sec.value3}</a></li>
                                            <li><a href={sec.hyperlinks4}>{sec.value4}</a></li>
                                            <li><a href={sec.hyperlinks5}>{sec.value5}</a></li>
                                            <li><a href={sec.hyperlinks6}>{sec.value6}</a></li>
                                            <li><a href={sec.hyperlinks7}>{sec.value7}</a></li>
                                            <li><a href={sec.hyperlinks8}>{sec.value7}</a></li>
                                            <li><a href={sec.hyperlinks9}>{sec.value9}</a></li>
                                            <li><a href={sec.hyperlinks10}>{sec.value10}</a></li>
                                            <li><a href={sec.hyperlinks11}>{sec.value11}</a></li>
                                            <li><a href={sec.hyperlinks12}>{sec.value12}</a></li>
                                            <li><a href={sec.hyperlinks13}>{sec.value13}</a></li>
                                        </ul>
                                    </>
                                ))}
                            </div>
                        </div>
                    }

        </>
    )
}

export default Leftnav;