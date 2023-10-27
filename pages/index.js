// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeaderController from "@/Components/Header-Controller/HeaderController";
import HomePage from "@/Web_pages/Home/Home";
// import AnimatedComponent from "@/Components/AnimatedComponent";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeaderController />
      {/* <AnimatedComponent /> */}
      <HomePage />
    </>
  );
}
