import styles from "../styles/Home.module.css";
import Category from "@/layout/Category";
import BestSeller from "@/layout/BestSeller";
import FavoriteProducts from "../components/FavoriteProducts";
import { products } from "@/utils/const/product";
import Album from "../components/Album";
export default function Home(props) {
  return (
    <div className={styles.container}>
      <main
        className="flex flex-col gap-4 lg:gap-12 "
        style={{ minHeight: "100vh" }}
      >
        {/* <Category className="mb-8 lg:mb-12" /> */}
        <FavoriteProducts
          products={products.slice(0, 4)}
          className="mb-8 lg:mb-12"
        />
        <BestSeller />
        <Album title="Baby's moments" />
      </main>
    </div>
  );
}
