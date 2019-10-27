import React from 'react';
import { List, InputItem, Picker, Button } from 'antd-mobile';

import './index.scss';

const Item = List.Item;
const Brief = Item.Brief;


const SoftBank = () => {
    return (
    <div className="softBank">
        <b className="dmm">DMM<span>.com</span></b>
        <div className="container">
            <div className="title">お客様情報を入力してください</div>
            <div className="explain">
                <span>下記のフォームに情報を入力し、「次へ」をタップしてください。</span>
                <span>入力いただいた情報は、ミミ恋会員お客様情報として登録されます。</span>
                <span>登録された情報は、お客様情報から変更できます。</span>
            </div>
            <div className="form-box">
                <div className="type">名前</div>
                <InputItem>姓</InputItem>
                <InputItem>名</InputItem>
                <div className="hint">＊それぞれ、全角16文字以内</div>
            </div>
            <div className="form-box">
                <div className="type">ふりがな</div>
                <InputItem>姓</InputItem>
                <InputItem>名</InputItem>
                <div className="hint">＊それぞれ、全角32ひらがな以内</div>
            </div>
            <div className="form-box">
                <div className="type">電話番号</div>
                <InputItem placeholder="電話番号" />
                <div className="hint">＊半角数字（スペース、ハイフン不要）</div>
            </div>
            <div className="form-submit">
                <Button className="button">次へ</Button>
                <div className="text">このページのトップへ</div>
            </div>
        </div>
        <div className="footer">
            Copyright © since 1998 DMM ALL Rights Reserved
        </div>
    </div>);
};
export default SoftBank;