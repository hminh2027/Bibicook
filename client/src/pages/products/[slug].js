import React, { useState } from "react";
import ProductPageLayout from "@/layout/ProductPageLayout";
import Image from "next/image";
import RelatedProduct from "@/components/page/ProductDetail/RelatedProduct";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import ImageShowcase from "@/components/page/ProductDetail/ImageShowcase";
const ProductIndex = (props) => {
  const [prodNum, setProdNum] = useState(0);

  const inputHandler = (e) => {
    const number = e.target.value;

    if (number < 0) {
      return;
    } else {
      setProdNum(number);
    }
  };
  if (prodNum < 0 || typeof prodNum !== "number") {
    setProdNum(0);
  }
  return (
    <div
      className={`flex flex-col gap-4 max-w-screen-xl p-4 mx-auto ${props.className}`}
    >
      <div>Trang chủ / Bánh Bỏng bổ sung lợi khuẩn cho bé vị Dâu</div>
      <div className="flex flex-wrap gap-4">
        {/* Ảnh */}
        <div className="w-full lg:flex-1">
          <ImageShowcase />
        </div>
        {/* Thông tin sp */}
        <div className="w-full flex flex-col gap-8 lg:flex-1 p-4 lg:p-0">
          <div className="font-medium text-pink-salmon-900 text-3xl text-center lg:text-left">
            Bánh Bỏng bổ sung lợi khuẩn cho bé vị Dâu
          </div>
          {/* Thông tin bổ sung */}
          <div className="flex flex-col gap-4">
            <div className="font-normal text-2xl ">Thông tin bổ sung</div>
            <div className="flex items-center">
              <div className="font-semibold w-32 ">Thành phần</div>
              <div className="flex-1">
                {`Bột ngô (Úc), dầu hướng dương có hàm lượng oleic cao (Tây Ban Nha,
              Argentina, Úc), đường (hữu cơ), bột dâu tây đông khô (Hàn Quốc)
              4,7%, axit lactic 0,25% [(Bifidobacterium bifidum ) BGN4,
              Bifidobacterium longum BORI, Lactobacillus acidophilus,
              maltodextrin), 500 triệu lợi khuẩn, 10 triệu lợi khuẩn/23g], muối
              biển (sản xuất Hàn Quốc), bột rong biển (canxi).`}
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex items-center">
              <div className="font-semibold w-32">Chất dinh dưỡng</div>
              <div className="flex-1">
                {`	
Calo 123 kcal, carbohydrate 14g (4%), đường 1g (1%), chất béo 7g (14%), chất béo chuyển hóa 0g, chất béo bão hòa 3,2g (21%), cholesterol 0mg (0%), < 1g protein (2%), 23mg natri (1%).`}
              </div>
            </div>
          </div>

          <div className="text-pink-500">
            {`Bánh bỏng Bebecook được bổ sung 500 triệu lợi khuẩn (Axit lactic và
            lactobacillus) giúp hỗ trợ hệ tiêu hóa và đường ruột của bé khỏe
            mạnh. Ngoài ra bánh còn chứa Canxi hỗ trợ xương, răng chắc khỏe;
            vitamin A, vitamin C tăng cường hệ miễn dịch cho cơ thể….`}
          </div>
          {/* Input số lượng + nút mua */}
          <div className="flex gap-8 select-none">
            <div className="form-control">
              <div className="input-group">
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setProdNum(prodNum - 1);
                  }}
                >
                  ➖
                </span>
                <input
                  type="text"
                  min={0}
                  value={prodNum}
                  onChange={(e) => inputHandler(e)}
                  class="input w-12 input-bordered focus:outline-none"
                />
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setProdNum(prodNum + 1);
                  }}
                >
                  ➕
                </span>
              </div>
            </div>

            <button className="btn btn-accent text-white">
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
      <RelatedProduct className="p-4 lg:p-0 lg:mt-8" />
    </div>
  );
};
ProductIndex.Layout = ProductPageLayout;

export default ProductIndex;
