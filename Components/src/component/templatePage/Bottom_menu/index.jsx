import { useState } from 'react';
import classes from './index.module.css'

function BottomMenu() {
    const [FooterData] = useState({
        footerdata: [
            {
                "id": 1,
                "value1": "购物指南",
                "value2": "购物流程",
                "value3": "会员介绍",
                "value4": "生活旅行",
                "value5": "常见问题",
                "value6": "购物指南"
            },
            {
                "id": 2,
                "value1": "配送方式",
                "value2": "购物流程",
                "value3": "211限时达",
                "value4": "配送服务查询",
                "value5": "配送费收取标准",
                "value6": "海外配送"
            },
            {
                "id": 3,
                "value1": "支付方式",
                "value2": "货到付款",
                "value3": "在线支付",
                "value4": "分期付款",
                "value5": "邮局汇款",
                "value6": "公司转账"
            },
            {
                "id": 4,
                "value1": "售后服务",
                "value2": "售后政策",
                "value3": "价格保护",
                "value4": "退款说明",
                "value5": "返修/退换货",
                "value6": "取消订单"
            },
            {
                "id": 5,
                "value1": "特色服务",
                "value2": "夺宝岛",
                "value3": "DIY装机",
                "value4": "延保服务",
                "value5": "尚品汇E卡",
                "value6": "尚品汇通信"
            },
            {
                "id": 6,
                "value1": "关于我们",
                "value2": "联系我们",
                "value3": "商家入驻",
                "value4": "营销中心",
                "value5": "友情链接",
                "value6": "营销中心",
                "value7": "友情链接"
            },
            {
                "id": 7,
                "value1": "地址：北京市昌平区宏福科技园综合楼6层",
                "value2": "京ICP备19006430号",
            },
        ]
    })
    return (
        <div className={classes.footer}>
            <div className={classes.footer_top}>
                {FooterData.footerdata.slice(0, 5).map((foot) => (
                    <ul className={classes.footer_ul} key={foot.id}>
                        <li>{foot.value1}</li>
                        <li>{foot.value2}</li>
                        <li>{foot.value3}</li>
                        <li>{foot.value4}</li>
                        <li>{foot.value5}</li>
                        <li>{foot.value6}</li>
                    </ul>
                ))}


            </div>

            <div className={classes.footer_bottom}>
                {FooterData.footerdata.slice(5, 6).map((foot) => (
                    <ul key={foot.id}>
                        <li>{foot.value1}</li>
                        <li>{foot.value2}</li>
                        <li>{foot.value3}</li>
                        <li>{foot.value4}</li>
                        <li>{foot.value5}</li>
                        <li>{foot.value6}</li>
                        <li>{foot.value6}</li>
                    </ul>
                ))}
            </div>

            {FooterData.footerdata.slice(6, 7).map((foot) => (
                <>
                    <p>{foot.value1}</p>
                    <p>{foot.value2}</p>
                </>

            ))}
        </div>
    )
}

export default BottomMenu;