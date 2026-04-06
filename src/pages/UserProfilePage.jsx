import React from "react";
import {
  Search,
  ShoppingBag,
  Menu,
  MapPin,
  Gift,
  Truck,
  Settings,
  Heart,
  ChevronRight,
} from "lucide-react";

const UserProfilePage = () => {
  const user = {
    rank: "PLATINUM",
    name: "김스위피",
    coupons: 2,
    wishlistCount: 3,
  };

  const menuItems = [
    { title: "회원정보", icon: Settings, desc: "개인정보 수정 및 관리" },
    {
      title: "관심상품",
      icon: Heart,
      count: user.wishlistCount,
      desc: "찜해둔 아이템 확인",
    },
    {
      title: "쿠폰함",
      icon: Gift,
      count: user.coupons,
      desc: "사용 가능한 쿠폰",
    },
    { title: "배송지 관리", icon: MapPin, desc: "자주 쓰는 배송지 수정" },
    { title: "정기배송 관리", icon: Truck, desc: "구독 서비스 설정" },
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-neutral-900 font-sans">
      {/* Navigation (Layout에 포함되어 있다면 제거 가능) */}
      <header className="bg-white border-b border-neutral-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl font-black text-[#1D9F62] tracking-tighter cursor-pointer">
            SWIFFY
          </h1>
          <div className="flex items-center gap-5 text-neutral-500">
            <Search size={20} className="hover:text-[#1D9F62] cursor-pointer" />
            <div className="relative cursor-pointer group">
              <ShoppingBag size={20} className="group-hover:text-[#1D9F62]" />
              <span className="absolute -top-1 -right-1 bg-[#1D9F62] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                6
              </span>
            </div>
            <Menu size={20} className="hover:text-[#1D9F62] cursor-pointer" />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left: User Sidebar */}
          <aside className="w-full lg:w-80 shrink-0">
            <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm">
              <div className="mb-8">
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-neutral-100 text-neutral-500 mb-3 uppercase tracking-wider">
                  {user.rank} MEMBER
                </span>
                <h2 className="text-2xl font-bold leading-tight">
                  {user.name}님,
                  <br />
                  환영합니다!
                </h2>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-4 bg-[#F8FDFB] rounded-2xl border border-[#E8F5EE]">
                  <span className="text-xs text-neutral-500">보유 쿠폰</span>
                  <span className="font-bold text-[#1D9F62]">
                    {user.coupons}개
                  </span>
                </div>
              </div>

              <button className="w-full mt-8 py-3 text-neutral-400 text-[11px] font-medium border border-neutral-100 rounded-xl hover:bg-neutral-50 transition-colors">
                로그아웃
              </button>
            </div>
          </aside>

          {/* Right: Focused Dashboard Grid */}
          <div className="flex-1 w-full space-y-6">
            <section className="bg-white border border-neutral-200 rounded-3xl p-4 shadow-sm">
              <h3 className="text-sm font-bold px-4 pt-2 pb-4 text-neutral-400">
                계정 및 서비스 관리
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {menuItems.map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-6 flex items-center gap-5 hover:bg-[#F9FAFB] rounded-2xl border border-transparent hover:border-neutral-100 transition-all group relative"
                  >
                    <div className="p-3 rounded-2xl bg-neutral-50 text-neutral-400 group-hover:bg-[#E8F5EE] group-hover:text-[#1D9F62] transition-colors">
                      <item.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-neutral-700">
                          {item.title}
                        </span>
                        {item.count !== undefined && (
                          <span className="text-[10px] font-black text-[#1D9F62] bg-[#E8F5EE] px-1.5 py-0.5 rounded">
                            {item.count}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                    <ChevronRight
                      size={16}
                      className="text-neutral-200 group-hover:text-neutral-400 transition-colors"
                    />
                  </a>
                ))}
              </div>
            </section>

            {/* Quick Helper Banner */}
            <div className="bg-neutral-100 rounded-3xl p-6 flex justify-between items-center text-neutral-500">
              <div className="text-[11px] font-medium italic">
                도움이 필요하신가요? 고객센터 032-212-2202
              </div>
              <ChevronRight size={14} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-neutral-200 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="space-y-4">
            <div className="text-lg font-bold text-neutral-300 tracking-tighter italic underline decoration-[#1D9F62] decoration-2 underline-offset-4">
              SWIFFY.CO.KR
            </div>
            <p className="text-[11px] text-neutral-400 leading-relaxed max-w-sm">
              운영시간: 10:00 - 18:00 (점심시간 13:00 - 14:00)
              <br />
              주말 및 공휴일은 휴무입니다.
            </p>
          </div>
          <div className="flex gap-8 text-[11px] font-bold text-neutral-500 uppercase tracking-widest">
            <a href="#" className="hover:text-neutral-900">
              Terms
            </a>
            <a href="#" className="hover:text-neutral-900">
              Privacy
            </a>
            <a href="#" className="hover:text-neutral-900">
              SNS
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserProfilePage;
