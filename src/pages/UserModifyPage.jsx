import React, { useState } from "react";
import {
  User,
  Lock,
  MapPin,
  Phone,
  Mail,
  Bell,
  Settings,
  Trash2,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const UserModifyPage = () => {
  const [formData, setFormData] = useState({
    id: "dnjsdn4862@naver.com",
    name: "최원우",
    phone1: "010",
    phone2: "6482",
    phone3: "2955",
    zipcode: "22664",
    address: "인천광역시 서구 보듬로 158",
    addressDetail: "공존동 4층 430호",
  });

  const SectionTitle = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-2 mb-6 pb-2 border-b border-neutral-100">
      <Icon size={18} className="text-[#3ea76e]" />
      <h3 className="text-[15px] font-bold text-neutral-800">{title}</h3>
    </div>
  );

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-neutral-900 font-sans pb-20">
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-neutral-800">
              USER <span className="text-[#3ea76e]">PROFILE</span>
            </h2>
            <p className="text-neutral-400 text-sm mt-2 font-medium">
              내 정보를 최신 상태로 유지하고 보안을 강화하세요.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-bold text-[#3ea76e] bg-[#f0f9f4] px-3 py-1.5 rounded-full">
            <ShieldCheck size={14} /> 개인정보가 안전하게 보호되고 있습니다
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left: User Status Card */}
          <aside className="w-full lg:w-80 shrink-0 sticky top-24">
            <div className="bg-white border border-neutral-200 rounded-[32px] p-8 shadow-sm text-center">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-neutral-50 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                  <User size={48} className="text-neutral-300" />
                </div>
                <div className="absolute bottom-0 right-0 bg-[#3ea76e] p-1.5 rounded-full border-2 border-white text-white">
                  <Settings size={14} />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-neutral-800">
                  {formData.name}
                </h3>
                <p className="text-[13px] text-neutral-400 mt-1">
                  {formData.id}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 bg-neutral-100 px-3 py-1 rounded-full text-[10px] font-black text-neutral-500 uppercase tracking-widest">
                  PLATINUM USER
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-8">
                <div className="bg-neutral-50 p-3 rounded-2xl">
                  <p className="text-[10px] text-neutral-400 mb-1">보유 쿠폰</p>
                  <p className="font-bold text-[#3ea76e]">2개</p>
                </div>
                <div className="bg-neutral-50 p-3 rounded-2xl">
                  <p className="text-[10px] text-neutral-400 mb-1">관심 상품</p>
                  <p className="font-bold">3개</p>
                </div>
              </div>

              <button className="w-full py-3.5 text-red-400 text-[11px] font-bold hover:bg-red-50 rounded-2xl transition-colors flex items-center justify-center gap-2">
                <Trash2 size={14} /> 회원 탈퇴 신청
              </button>
            </div>
          </aside>

          {/* Right: Information Modify Form */}
          <section className="flex-1 w-full bg-white border border-neutral-200 rounded-[32px] shadow-sm p-8 md:p-12">
            <div className="space-y-12">
              {/* Login Information */}
              <div>
                <SectionTitle icon={Lock} title="로그인 보안" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="text-xs font-bold text-neutral-400 ml-1 mb-2 block uppercase">
                      아이디 (변경 불가)
                    </label>
                    <input
                      type="text"
                      value={formData.id}
                      disabled
                      className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-5 py-3.5 text-sm text-neutral-400 font-medium"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-neutral-700 ml-1 mb-2 block uppercase">
                      새 비밀번호
                    </label>
                    <input
                      type="password"
                      placeholder="8~16자 영문, 숫자 조합"
                      className="w-full border border-neutral-200 rounded-2xl px-5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#3ea76e]/20 focus:border-[#3ea76e] transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-neutral-700 ml-1 mb-2 block uppercase">
                      비밀번호 확인
                    </label>
                    <input
                      type="password"
                      placeholder="비밀번호 재입력"
                      className="w-full border border-neutral-200 rounded-2xl px-5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#3ea76e]/20 focus:border-[#3ea76e] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <SectionTitle icon={User} title="사용자 정보" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold text-neutral-700 ml-1 mb-2 block uppercase">
                      이름
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      className="w-full border border-neutral-200 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-[#3ea76e]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-neutral-700 ml-1 mb-2 block uppercase">
                      휴대폰 번호
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={formData.phone1}
                        className="w-20 border border-neutral-200 rounded-2xl py-3.5 text-center text-sm"
                      />
                      <input
                        type="text"
                        value={formData.phone2}
                        className="flex-1 border border-neutral-200 rounded-2xl py-3.5 text-center text-sm"
                      />
                      <input
                        type="text"
                        value={formData.phone3}
                        className="flex-1 border border-neutral-200 rounded-2xl py-3.5 text-center text-sm"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-xs font-bold text-neutral-700 ml-1 block uppercase">
                      배송지 주소
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={formData.zipcode}
                        className="w-32 bg-neutral-50 border border-neutral-100 rounded-2xl px-5 py-3.5 text-sm"
                        readOnly
                      />
                      <button className="px-6 py-3.5 bg-neutral-900 text-white text-xs font-bold rounded-2xl hover:bg-neutral-800 transition-colors">
                        주소검색
                      </button>
                    </div>
                    <input
                      type="text"
                      value={formData.address}
                      className="w-full border border-neutral-200 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-[#3ea76e]"
                    />
                    <input
                      type="text"
                      value={formData.addressDetail}
                      placeholder="나머지 상세 주소"
                      className="w-full border border-neutral-200 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-[#3ea76e]"
                    />
                  </div>
                </div>
              </div>

              {/* Marketing Settings */}
              <div>
                <SectionTitle icon={Bell} title="알림 및 마케팅" />
                <div className="flex flex-col sm:flex-row gap-4">
                  {[
                    { label: "SMS 수신동의", icon: <Phone size={14} /> },
                    { label: "E-mail 수신동의", icon: <Mail size={14} /> },
                  ].map((item, i) => (
                    <label key={i} className="flex-1 group cursor-pointer">
                      <div className="flex items-center justify-between p-4 rounded-2xl border border-neutral-100 bg-neutral-50 group-hover:bg-white group-hover:border-[#3ea76e] transition-all">
                        <div className="flex items-center gap-3">
                          <div className="text-neutral-400 group-hover:text-[#3ea76e]">
                            {item.icon}
                          </div>
                          <span className="text-[13px] font-bold text-neutral-600 group-hover:text-neutral-900">
                            {item.label}
                          </span>
                        </div>
                        <input
                          type="checkbox"
                          className="w-5 h-5 accent-[#3ea76e]"
                        />
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-10">
                <button className="flex-[2] py-4 bg-[#3ea76e] text-white rounded-[20px] font-bold text-base hover:bg-[#34925e] transition-all shadow-lg shadow-[#3ea76e]/20 flex items-center justify-center gap-2">
                  <CheckCircle2 size={18} /> 정보 수정 저장하기
                </button>
                <button className="flex-1 py-4 bg-neutral-100 text-neutral-500 rounded-[20px] font-bold text-base hover:bg-neutral-200 transition-all">
                  취소
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default UserModifyPage;
