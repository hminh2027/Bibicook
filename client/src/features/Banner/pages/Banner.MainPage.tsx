import BannerList from "../components/Banner.List";
import BannerUploader from "../components/Banner.Uploader";

interface Props {}
export default function BannerMainPage({}: Props) {
  return (
    <div>
      <BannerUploader />
      <BannerList />
    </div>
  );
}
