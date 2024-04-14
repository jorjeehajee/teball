import Herobanner from "@/components/herobanner/Herobanner";
import styles from "./home.module.css";
import Brandlist from "@/components/brandlist/Brandlist";
import Itemlist from "@/components/itemlist/Itemlist";
import Stylelist from "@/components/stylelist/Stylelist";

export default function Home() {
  return (
    <>
      <header className={styles.container}>
        <Herobanner />
      </header>
      <main>
        <Brandlist />
        <Itemlist />
        <Stylelist />
      </main>
      {/* <footer className={styles.footer}>
        <Footer />
      </footer> */}
    </>
  );
}
