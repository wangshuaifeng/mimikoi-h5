import React from 'react';
import { Link } from 'react-router-dom'
import { Icon } from 'antd-mobile';
import './index.scss';


export default function Pay(props) {
  return (
    <div className="pay">
        <div className="header">
            <div className="header-title">ミミ恋コインチャージ</div>
            <div className="header-content">
                <div className="header-content_portrait"></div>
                <div className="header-content_information">
                    <div className="header-content_information_id">
                        ID: 
                    </div>
                    <div className="header-content_information_content">
                        ニックネーム：
                    </div>
                </div>s
            </div>
        </div>
        <div className="list">
            <div className="listItem" onClick={() => props.history.push('/credit-card-pay')}>
                <div>クレジットカード</div>
                <Icon type="right" color="#ccc"/>
            </div>
            <div className="listItem" onClick={() => props.history.push('/convenience')}>
                <div>コンビニ決済</div>
                <Icon type="right" color="#ccc"/>
            </div>
            <div className="listItem" onClick={() => props.history.push('/softBank')}>
                <div>ソフトバンクまとめて支払い</div>
                <Icon type="right" color="#ccc"/>
            </div>
            <div className="listItem" onClick={() => props.history.push('/softBank')}>
                <div>ドコモ払い</div>
                <Icon type="right" color="#ccc"/>
            </div>
        </div>
        <div className="list">
            <div className="listItem">
                <div>1000 コイン</div>
                <div>100 円</div>
            </div>
            <div className="listItem">
                <div>10000 コイン</div>
                <div>1000 円</div>
            </div>
            <div className="listItem">
                <div>100000 コイン</div>
                <div>10000 円</div>
            </div>
            <div className="listItem">
                <div>200000 コイン</div>
                <div>20000 円</div>
            </div>
            <div className="listItem">
                <div>500000 コイン</div>
                <div>50000 円</div>
            </div>
        </div>
        <div className="hint">
            <Link to="./explain">特定商取引法</Link>
        </div>
        <div className="footer">
            確定
        </div>
    </div>
  );
}