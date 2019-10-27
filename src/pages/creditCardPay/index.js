import React from 'react';
import { Link } from 'react-router-dom';
import { DatePicker, List, InputItem, Button, Flex } from 'antd-mobile';
import visa from './images/visa.svg';
import masterCard from './images/masterCard.svg';
import jcb from './images/jcb.svg';
import american from './images/american.svg';
import diners from './images/diners.svg';
import card_1 from './images/card_1.jpg';
import card_2 from './images/card_2.jpg';
import particular from './images/particular.jpg';

import './index.scss';

const CreditCardPay = (props) => {
    return (
    <div className="creditCardPay">
        <b className="dmm">DMM<span>.com</span></b>
        <div className="container">
            <div className="title">
              ミミ恋コインチャージミミ恋コインチャージ
            </div>
            <div className="header">
              <div className="content">
              クレジットカードの登録や変更、登録中のカード有効期限を更新することができます。<br />
              情報を入力後、「登録する」ボタンをタップしてください
              </div>
              <div className="hint">
                クレジットカード情報
              </div>
            </div>
            <div className="halving"/>
            <div className="body-form">
                <div className="form-label">
                  カード番号<span>（半角数字スペース、ハイフン不要）</span>  
                </div>
                <InputItem />
                <img src={visa} className="icon" alt="" />
                <img src={masterCard} className="icon" alt="" />
                <img src={jcb} className="icon" alt="" />
                <img src={american} className="icon" alt="" />
                <img src={diners} className="icon" alt="" />
                <div className="form-label">
                カード名義<span>（半角英字）</span>  
                </div>
                <InputItem />
                <div className="form-label">
                  カード有効期限
                </div>
                <DatePicker
                  mode="month"
                  extra=" "
                >
                  <List.Item arrow="horizontal">年/月</List.Item>
                </DatePicker>
                <div className="explain">
                  <img src={card_2} className="left" alt="" />
                  <div className="right">カードの有効期限は通常、「月／年（西暦下２桁）で刻印されています。</div>
                </div>
                <div className="form-label">
                  セキュリティコード<span>（半角英字）</span>  
                </div>
                <InputItem />
                <div className="explain">
                  <img src={card_1} className="left" alt="" />
                  <div className="right">
                    主にカード裏面のご署名欄に印刷されている末尾3桁ないし４桁の数字です<br />
                    セキュリティコードとは？
                  </div>
                </div>
            </div>
            <div className="body-submit">
                <Button className="button" onClick={() => props.history.push('/payFinish')}>登録する</Button>
                <div className="explain">戻る</div>
                <div className="particular">
                </div>
            </div>
            <div className="footer">
              ご登録いただきます個人情報は、別途定める「個人情報保護に関して」に従って取り扱います。<br />
              記載事項以外の目的に使用されることはございません。
            </div>
        </div>

    </div>);
};
export default CreditCardPay;