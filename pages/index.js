// pages/index.js
import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
// import LinkCard from "../components/linkCard";
import fs from "fs";
import path from "path";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home({ images = [] }) {
  return (
    <>
      <Head>
        <title>nova illustration</title>
        <meta
          name="description"
          content="checkPointのnovaシリーズで製作したイラスト"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <header>
        <a href="/">
          <Image
            src="title.png"
            alt="nova illustration"
            width={500}
            height={200}
            className="title-Logo"
          />

        </a>  </header>

      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <h1>Novaシリーズに相性の良いLoRAレシピ生成画像</h1>
        <div style={{textAlign: "center", marginTop: "60px"}}>
          <a href="https://note.com/nobinlog/n/nc839a877b942" target="_blank" rel="noopener noreferrer" class="link-box">レシピを販売しているnote</a>
        </div>
        <main style={{ paddingTop: "60px", }}>
          <section style={{ marginBottom: "60px" }}>
            <a href="https://civitai.com/models/715287/nova-3dcg-xl" target="_blank" rel="noopener noreferrer"> <h2>Nova 3DCG XL</h2></a>
            <p style={{ paddingBottom: "60px" }}>※タイトルをクイックするとcivitaiに飛びます</p>
            <div className="scroll-layout">
              <div className="carousel">
                <ul className="content">
                  {images.map((name) => (
                    <li key={name}>
                      {/* next/image に置き換えても OK */}
                      <img
                        className="carousel-image"
                        src={`img/nova3dcg/${name}`}
                        alt={name}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: "60px" }}>
            <a href="https://civitai.com/models/376130/nova-anime-xl" target="_blank" rel="noopener noreferrer"><h2>Nova Anime XL</h2></a>
            <p style={{ paddingBottom: "40px" }}>※タイトルをクイックするとcivitaiに飛びます</p>

            <div className="scroll-layout">
              <div className="carousel">
                <ul className="content">
                  {images.map((name) => (
                    <li key={name}>
                      {/* next/image に置き換えても OK */}
                      <img
                        className="carousel-image"
                        src={`img/novaAnime/${name}`}
                        alt={name}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section style={{ marginBottom: "60px" }}>
            <a href="https://civitai.com/models/1240874/nova-flat-xl" target="_blank" rel="noopener noreferrer"> <h2>Nova Flat XL</h2></a>
            <p style={{ paddingBottom: "40px" }}>※タイトルをクイックするとcivitaiに飛びます</p>
            <div className="scroll-layout">
              <div className="carousel">
                <ul className="content">
                  {images.map((name) => (
                    <li key={name}>
                      {/* next/image に置き換えても OK */}
                      <img
                        className="carousel-image"
                        src={`img/novaFlat/${name}`}
                        alt={name}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section style={{ marginBottom: "60px" }}>
            <a href="https://civitai.com/models/967405/nova-orange-xl" target="_blank" rel="noopener noreferrer "><h2>Nova Orange XL</h2></a>
            <p style={{ paddingBottom: "40px" }}>※タイトルをクイックするとcivitaiに飛びます</p>

            <div className="scroll-layout">
              <div className="carousel">
                <ul className="content">
                  {images.map((name) => (
                    <li key={name}>
                      {/* next/image に置き換えても OK */}
                      <img
                        className="carousel-image"
                        src={`img/novaOrange/${name}`}
                        alt={name}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section style={{ marginBottom: "60px" }}>
            <a href="https://civitai.com/models/982047/nova-unreal-xl" target="_blank" rel="noopener noreferrer"> <h2>Nova Unreal XL</h2></a>
            <p style={{ paddingBottom: "40px" }}>※タイトルをクイックするとcivitaiに飛びます</p>
            <div className="scroll-layout">
              <div className="carousel">
                <ul className="content">
                  {images.map((name) => (
                    <li key={name}>
                      {/* next/image に置き換えても OK */}
                      <img
                        className="carousel-image"
                        src={`img/novaUnreal/${name}`}
                        alt={name}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>

        <footer></footer>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), "public/img/nova3dcg");

  let images = [];
  try {
    images = fs
      .readdirSync(dir)
      .filter((file) => /\.(png|jpe?g|webp|gif)$/i.test(file));
  } catch (err) {
    console.error("Failed to read images directory:", err);
  }

  return {
    props: { images },
  };
}
