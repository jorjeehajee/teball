import Herobanner from "@/components/herobanner/Herobanner";
import styles from "./home.module.css";
import Brandlist from "@/components/brandlist/Brandlist";
import Itemlist from "@/components/itemlist/Itemlist";

export default function Home() {
  return (
    <>
      <header className={styles.container}>
        <Herobanner />
      </header>
      <main>
        <Brandlist />
        <Itemlist />
      </main>
    </>
  );
}
