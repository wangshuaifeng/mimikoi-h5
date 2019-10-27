import React from 'react';
import { List, InputItem, Picker, Button, Icon } from 'antd-mobile';

import './index.scss';

const seasons = [
    {
        label: '選択してください',
        value: '1',
    },
    {
        label: 'セブン・イレブン',
        value: '2',
    },
    {
        label: 'ファミリーマート',
        value: '3',
    },
    {
        label: 'ローソン',
        value: '4',
    },
  ];

const Convenience = () => {
    return (
    <div className="convenience">
        <b className="dmm">DMM<span>.com</span></b>
        <div className="container">
            <div className="title">注文内容</div>
            <div className="list">
                <div className="listItem">
                    <div>お支払い金額</div>
                    <div style={{color: 'red'}}>1,000円</div>
                </div>
                <div className="listItem">
                    <div>チャージ額</div>
                    <div className="juzhong">1,000pt <Icon type="right" color="#ccc"/></div>
                </div>
                <div className="listItem">
                    <div>お支払い方法</div>
                    <div className="juzhong">コンビニ店頭支払い <Icon type="right" color="#ccc"/></div>
                </div>
            </div>
            <div className="title">下記の項目を入力してください</div>
            <div className="convenience-form">
                <div className="convenience-form-select">
                    <div className="title">お支払い先コンビニ</div>
                    <List>
                        <Picker
                            cols={1}
                            extra=" "
                            data={seasons}
                        >
                            <List.Item arrow="horizontal">選択してください</List.Item>
                        </Picker>
                    </List>
                    <div className="hint">＊指定したコンビニでお支払いをお願いします</div>
                </div>
                <div className="convenience-form-input">
                    <div className="title">電話番号</div>
                    <InputItem
                        type="phone"
                    />
                    <div className="hint">＊半角数字（スペース、ハイフン不要）</div>
                    <div className="hint">＊店頭でのご入金の際、電話番号をご入力いただきます</div>
                </div>
            </div>
            <div className="convenience-submit">
                <div className="text">入力情報を確認の上</div>
                <div className="text">「次に進む」ボタンをタップしてください</div>
                <Button className="button">次に進む</Button>
                <div className="text" style={{  textAlign: 'left' }}>＊入金反映までに時間がかかる場合もございます。あらかじめご留意の上、お支払いをお願いいたします</div>
            </div>
        </div>
        <div className="footer">
            Copyright © since 1998 DMM ALL Rights Reserved
        </div>
    </div>);
};
export default Convenience;