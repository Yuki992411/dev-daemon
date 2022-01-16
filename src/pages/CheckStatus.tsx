import React from "react";
import "./CheckStatus.css";
import Button from "../components/Button";
import MemberStatusCard from "../components/MemberStatusCard";

function CheckStatus(): JSX.Element {
  return (
    // TODO: if `react-router-dom` is installed, insert `Link` tag.
    <div>
      <header>
        <h1>開発を見守る</h1>
        <nav id="right">
          <Button
            title="ログアウト"
            button_size="medium-size"
            text_color="text-white"
            bg_color="bg-green"
          />
        </nav>
      </header>
      <div id="wrapper">
        {/* 左画面のステータス確認表示 */}
        <div id="container">
          <section>
            <div className="box">
              <h2>マイステータス</h2>
              <p>AAA</p>
              <div className="left">
                <Button
                  title="アクティブ"
                  button_size="small-size"
                  text_color="text-dark"
                  bg_color="bg-yellow"
                />
                <Button
                  title="離席中"
                  button_size="small-size"
                  text_color="text-white"
                  bg_color="bg-green"
                />
              </div>
            </div>
            <div className="box">
              <h2>チーム名：</h2>
              <ul>
                <li>
                  <MemberStatusCard name="AAA" status="Leaving" />
                </li>
                <li>
                  <MemberStatusCard name="BBB" status="Active" />
                </li>
                <li>
                  <MemberStatusCard name="CCC" status="Active" />
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* 右画面のハムスター表示 */}
        <div id="fixed-area">
          <img src={`${process.env.PUBLIC_URL}/img/hamster-image.png`} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CheckStatus;
