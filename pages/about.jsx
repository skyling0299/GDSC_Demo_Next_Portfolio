import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../public/normal2.png";
const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <div className="flex flex-row flex-wrap justify-evenly items-center h-[75vh]">
        <div className="left">
          <h1 className="text-4xl">About Me</h1>
          <Image src={profilePic} alt="profile" />
        </div>
        <div className="right">
          <h2 className="text-2xl">Hi!👋 我是ＯＯＯ，目前就讀於中央大學ＯＯＯＯ學系。</h2>
          <div>
            <h3 className="text-2xl">學歷</h3>
              <ul>
                <li>國立中央大學ＯＯＯＯ學系</li>
                <li>國立臺灣師範大學附屬高級中學</li>
              </ul>
          </div>
          <div>
            <h3 className="text-2xl">經歷</h3>
              <ul>
                <li>ＸＸＸＸＸＸＸＸＸＸＸＸＸＸＸ</li>
                <li>ＸＸＸＸＸＸＸＸＸＸＸＸＸＸＸ</li>
              </ul>
          </div>
          <div>
            <h3 className="text-2xl">社群參與</h3>
            <ul>
              <li>GDSC NCU</li>
              <li>ＸＸＸＸＸＸＸＸＸＸＸＸＸＸＸ</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default about;
