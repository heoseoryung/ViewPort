import React, { useState } from "react";
import {
  ShoppingBag,
  Trash2,
  ChevronRight,
  Heart,
  CreditCard,
  Box,
  Settings2,
} from "lucide-react";

const WishListPage = () => {
  // 샘플 데이터
  const [wishItems, setWishItems] = useState([
    {
      id: 1,
      name: "어글어글 우유껌 50g 7종",
      price: 6500,
      option: "제주 브로콜리 우유껌 50g",
      img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "테린 2주 세트 (14개)",
      price: 50400,
      option: "기본 구성",
      img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "[판매 1위] 오독오독 바삭 10종 골라담기",
      price: 15900,
      option: "치킨 오독오독 10종",
      img: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=200&h=200&fit=crop",
    },
  ]);

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-neutral-900 font-sans pb-20">
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-neutral-800">
              WISH <span className="text-[#3ea76e]">LIST</span>
            </h2>
            <p className="text-neutral-400 text-sm mt-2 font-medium">
              찜해두신 소중한 상품들을 확인해보세요.
            </p>
          </div>
          <div className="flex gap-3 text-[11px] font-bold">
            <button className="px-4 py-2 bg-white border border-neutral-200 rounded-xl text-neutral-500 hover:bg-neutral-50 transition-colors">
              선택삭제
            </button>
            <button className="px-4 py-2 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors">
              전체상품주문
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left: Summary & Stats */}
          <aside className="w-full lg:w-72 shrink-0 sticky top-24">
            <div className="bg-white border border-neutral-200 rounded-[32px] p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-[#f0f9f4] p-3 rounded-2xl">
                  <Heart size={24} className="text-[#3ea76e]" fill="#3ea76e" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-bold">
                    전체 항목
                  </p>
                  <p className="text-xl font-black text-neutral-800">
                    {wishItems.length}건
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-neutral-50">
                <div className="flex justify-between items-center text-[13px]">
                  <span className="text-neutral-400 font-medium">
                    합계 금액
                  </span>
                  <span className="font-bold text-neutral-800">
                    {wishItems
                      .reduce((acc, curr) => acc + curr.price, 0)
                      .toLocaleString()}
                    원
                  </span>
                </div>
                <p className="text-[10px] text-neutral-400 leading-relaxed italic">
                  * 위 가격은 옵션 및 배송비를 제외한 상품의 기본 합계
                  금액입니다.
                </p>
              </div>

              <div className="mt-8 space-y-2">
                <button className="w-full py-3.5 bg-[#3ea76e] text-white rounded-2xl text-xs font-bold shadow-lg shadow-[#3ea76e]/20 hover:bg-[#34925e] transition-all flex items-center justify-center gap-2">
                  <ShoppingBag size={14} /> 전체 장바구니 담기
                </button>
              </div>
            </div>
          </aside>

          {/* Right: Wish Items Grid (Landscape style) */}
          <section className="flex-1 w-full space-y-4">
            {wishItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-neutral-200 rounded-[28px] p-6 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Product Image */}
                  <div className="w-full md:w-32 h-32 shrink-0 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-50 relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <input
                        type="checkbox"
                        className="w-5 h-5 accent-[#3ea76e] rounded-md"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 w-full">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[15px] font-bold text-neutral-800 group-hover:text-[#3ea76e] transition-colors cursor-pointer leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-xs text-neutral-400 mt-2 flex items-center gap-1.5 bg-neutral-50 px-3 py-1.5 rounded-lg w-fit">
                          <Settings2 size={12} /> {item.option}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-black text-neutral-800">
                          {item.price.toLocaleString()}원
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between mt-6 pt-4 border-t border-neutral-50 gap-4">
                      <div className="flex gap-2">
                        <button className="flex items-center gap-1.5 px-4 py-2 border border-neutral-100 rounded-xl text-[11px] font-bold text-neutral-500 hover:bg-neutral-50 transition-colors">
                          <Trash2 size={13} /> 삭제
                        </button>
                        <button className="flex items-center gap-1.5 px-4 py-2 border border-neutral-100 rounded-xl text-[11px] font-bold text-neutral-500 hover:bg-neutral-50 transition-colors">
                          <ShoppingBag size={13} /> 장바구니
                        </button>
                      </div>
                      <button className="px-6 py-2 bg-neutral-900 text-white rounded-xl text-[11px] font-bold hover:bg-neutral-800 transition-all flex items-center gap-1">
                        주문하기 <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {wishItems.length === 0 && (
              <div className="bg-white border border-neutral-200 rounded-[32px] p-20 text-center">
                <div className="bg-neutral-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag size={30} className="text-neutral-200" />
                </div>
                <p className="text-neutral-400 font-medium">
                  관심상품에 등록된 상품이 없습니다.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default WishListPage;
