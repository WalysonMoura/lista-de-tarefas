import Head from "next/head";
import Image from "next/image";
//import { Inter } from '@next/font/google'
//const inter = Inter({ subsets: ['latin'] })
import * as Style from "../styles/pages/home";

// Components
import Header from "@/components/Header";
import Tasks from "@/components/Tasks";

export default function Home() {
  return (
    <Style.Conteiner>
      <Header />
      <Tasks />
    </Style.Conteiner>
  );
}
