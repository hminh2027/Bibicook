import { useGetBanners } from "../api/getBanners";

interface Props {}
export default function BannerList({}: Props) {
  const { data } = useGetBanners();
  console.log(data);
  return <div>BannerList</div>;
}
