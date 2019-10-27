import React from 'react';
import styles from './index.module.scss';

export default function Explain() {
    return (
        <div className={styles.explain}>
          <section>
            <h3>販売事業者名</h3>
            <p>BothMi株式会社</p>
          </section>
          <section>
            <h3>販売事業者所在地</h3>
            <p>135-0064東京都江東区青海２−５−１０</p>
          </section>
          <section>
            <h3>代表者または運営統括責任者</h3>
            <p>王書茗</p>
          </section>
          <section>
            <h3>代表者または運営統括責任者（フリガナ）</h3>
            <p> オウ ショメイ</p>
          </section>
          <section>
            <h3>連絡先／ホームページ</h3>
            <p><a href="http://mimikoi.co.jp">mimikoi.co.jp</a></p>
          </section>
          <section>
            <h3>連絡先／電子メール</h3>
            <p>information@bothmi.com</p>
          </section>
          <section>
            <h3>連絡先／TEL</h3>
            <p>05055346121</p>
          </section>
          <section />
          <section>
            <h3>販売価格帯</h3>
            <p>100円～1,000,000円</p>
          </section>
          <section>
            <h3>商品等の引き渡し時期（日数）・発送方法</h3>
            <p>即時反映</p>
          </section>
          <section>
            <h3>代金の支払時期および方法</h3>
            <p>即時反映</p>
          </section>
          <section>
            <h3>商品代金以外に必要な費用／送料、消費税等</h3>
            <p>なし</p>
          </section>
          <section>
            <h3>返品の取扱条件／返品期限、返品時の送料負担または解約や退会条件</h3>
            <p>なし</p>
          </section>
          <section>
            <h3>不良品の取扱条件</h3>
            <p>なし</p>
          </section>
        </div>
    );
}