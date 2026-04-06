import React, { useState } from "react";
import {
  Ticket,
  Plus,
  Info,
  ChevronRight,
  Tag,
  Truck,
  Gift,
  Calendar,
} from "lucide-react";

const UserCouponPage = () => {
  const [couponCode, setCouponCode] = useState("");

  const coupons = [
    {
      id: 1,
      title: "2026 리틀버디 할인 쿠폰",
      discount: "5%",
      type: "PERCENT",
      expiry: "2026-12-31",
      description: "전 상품 적용 가능 (일부 품목 제외)",
      icon: <Tag size={24} className="text-[#3ea76e]" />,
    },
    {
      id: 2,
      title: "2026 리틀버디 무료배송 쿠폰",
      discount: "배송비",
      type: "FREE_SHIPPING",
      expiry: "2026-12-31",
      description: "3만원 이상 구매 시 사용 가능",
      icon: <Truck size={24} className="text-[#3ea76e]" />,
    },
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-neutral-900 font-sans pb-20">
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-neutral-800 uppercase italic">
              My <span className="text-[#3ea76e]">Coupons</span>
            </h2>
            <p className="text-neutral-400 text-sm mt-2 font-medium">
              현재 보유 중인 쿠폰은 총{" "}
              <span className="text-[#3ea76e] font-bold">
                {coupons.length}장
              </span>
              입니다.
            </p>
          </div>

          {/* Coupon Registration Box */}
          <div className="bg-white border border-neutral-200 rounded-3xl p-4 shadow-sm flex items-center gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder="쿠폰 인증번호 등록"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="bg-neutral-50 border border-neutral-100 rounded-2xl px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-[#3ea76e]/20 w-full md:w-64 transition-all"
            />
            <button className="bg-neutral-900 text-white px-6 py-3 rounded-2xl text-[13px] font-bold hover:bg-neutral-800 transition-all flex items-center gap-2 shrink-0">
              <Plus size={16} /> 등록
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Side: Summary & Guide */}
          <aside className="w-full lg:w-72 shrink-0 sticky top-24">
            <div className="bg-white border border-neutral-200 rounded-[32px] p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-[#f0f9f4] p-3 rounded-2xl">
                  <Ticket size={24} className="text-[#3ea76e]" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-bold uppercase">
                    Status
                  </p>
                  <p className="text-xl font-black text-neutral-800">
                    Available
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-neutral-50">
                <div className="flex items-start gap-2">
                  <Info size={14} className="text-neutral-300 mt-0.5" />
                  <p className="text-[11px] text-neutral-400 leading-relaxed font-medium">
                    쿠폰은 주문서 작성 시 선택하여 적용하실 수 있습니다. (일부
                    중복 불가)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar size={14} className="text-neutral-300 mt-0.5" />
                  <p className="text-[11px] text-neutral-400 leading-relaxed font-medium">
                    유효기간이 지난 쿠폰은 목록에서 자동으로 사라집니다.
                  </p>
                </div>
              </div>

              <button className="w-full mt-10 py-4 border border-neutral-100 rounded-2xl text-[11px] font-bold text-neutral-500 hover:bg-neutral-50 transition-colors">
                쿠폰 히스토리 확인
              </button>
            </div>
          </aside>

          {/* Right Side: Coupon List Grid */}
          <section className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {coupons.map((coupon) => (
              <div
                key={coupon.id}
                className="bg-white border border-neutral-200 rounded-[28px] overflow-hidden flex shadow-sm hover:shadow-md transition-shadow relative group"
              >
                {/* Coupon Left Decorator */}
                <div className="w-3 bg-[#3ea76e] opacity-80 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 bg-neutral-50 rounded-xl">
                        {coupon.icon}
                      </div>
                      <div className="text-right">
                        <span className="text-[22px] font-black text-[#3ea76e] tracking-tight">
                          {coupon.discount}
                        </span>
                        <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mt-0.5">
                          Off Benefit
                        </p>
                      </div>
                    </div>

                    <h4 className="text-[15px] font-bold text-neutral-800 mb-1 leading-tight">
                      {coupon.title}
                    </h4>
                    <p className="text-[11px] text-neutral-400 font-medium">
                      {coupon.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-50 flex justify-between items-center">
                    <div className="flex items-center gap-1.5 text-neutral-300">
                      <Calendar size={12} />
                      <span className="text-[11px] font-bold tracking-tight">
                        ~ {coupon.expiry}
                      </span>
                    </div>
                    <button className="text-[11px] font-black text-neutral-400 hover:text-neutral-800 flex items-center gap-0.5">
                      상세정보 <ChevronRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Coupon Cut Design (Circle Decoration) */}
                <div className="absolute top-1/2 -left-2 w-4 h-4 bg-[#F9FAFB] border-r border-neutral-200 rounded-full -translate-y-1/2"></div>
              </div>
            ))}

            {/* Empty State Mockup */}
            <div className="bg-neutral-50 border border-neutral-100 border-dashed rounded-[28px] flex items-center justify-center p-10">
              <p className="text-xs text-neutral-300 font-bold tracking-widest uppercase italic">
                New Coupon Coming Soon
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default UserCouponPage;
