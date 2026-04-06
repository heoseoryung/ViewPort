import React, { useState } from "react";
import {
  MapPin,
  Plus,
  Home,
  Phone,
  Trash2,
  Edit2,
  Search,
  CheckCircle2,
} from "lucide-react";

const UserAddressPage = () => {
  const [isRegister, setIsRegister] = useState(false); // 리스트/등록 폼 전환 상태

  // 샘플 데이터
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      title: "우리집 (기본배송지)",
      name: "최원우",
      phone: "010-6482-2955",
      zipcode: "22664",
      addr1: "인천광역시 서구 보듬로 158 (오류동)",
      addr2: "공존동 4층 430호",
      isDefault: true,
    },
  ]);

  const SectionHeader = ({ title, subTitle }) => (
    <div className="mb-8">
      <h2 className="text-3xl font-black tracking-tight text-neutral-800 uppercase italic">
        Address <span className="text-[#3ea76e]">Book</span>
      </h2>
      <p className="text-neutral-400 text-sm mt-2 font-medium">{subTitle}</p>
    </div>
  );

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-neutral-900 font-sans pb-20">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Side: Summary & Navigation */}
          <aside className="w-full lg:w-72 shrink-0 sticky top-24">
            <div className="bg-white border border-neutral-200 rounded-[32px] p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-[#f0f9f4] p-3 rounded-2xl">
                  <MapPin size={24} className="text-[#3ea76e]" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-bold uppercase">
                    My Places
                  </p>
                  <p className="text-xl font-black text-neutral-800">
                    {addresses.length}개 주소
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => setIsRegister(false)}
                  className={`w-full py-3.5 px-6 rounded-2xl text-xs font-bold transition-all flex items-center justify-between ${!isRegister ? "bg-neutral-900 text-white" : "text-neutral-500 hover:bg-neutral-50"}`}
                >
                  주소록 목록 {!isRegister && <CheckCircle2 size={14} />}
                </button>
                <button
                  onClick={() => setIsRegister(true)}
                  className={`w-full py-3.5 px-6 rounded-2xl text-xs font-bold transition-all flex items-center justify-between ${isRegister ? "bg-[#3ea76e] text-white shadow-lg shadow-[#3ea76e]/20" : "text-neutral-500 hover:bg-neutral-50"}`}
                >
                  새 배송지 등록 {isRegister && <Plus size={14} />}
                </button>
              </div>
            </div>
          </aside>

          {/* Right Side: Content Area */}
          <section className="flex-1 w-full">
            {!isRegister ? (
              /* --- Address List View --- */
              <div className="space-y-6">
                <SectionHeader subTitle="자주 사용하는 배송지를 관리하세요." />

                {addresses.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4">
                    {addresses.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white border border-neutral-200 rounded-[28px] p-8 shadow-sm group hover:border-[#3ea76e] transition-all"
                      >
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <span className="text-[15px] font-bold text-neutral-800">
                                {item.title}
                              </span>
                              {item.isDefault && (
                                <span className="bg-[#e8f5ee] text-[#3ea76e] text-[10px] font-bold px-2 py-0.5 rounded-full">
                                  기본
                                </span>
                              )}
                            </div>
                            <div className="text-sm text-neutral-600 font-medium">
                              {item.name} |{" "}
                              <span className="text-neutral-400 font-normal">
                                {item.phone}
                              </span>
                            </div>
                            <div className="text-sm text-neutral-500 leading-relaxed">
                              ({item.zipcode})<br />
                              {item.addr1} {item.addr2}
                            </div>
                          </div>

                          <div className="flex gap-2 shrink-0">
                            <button className="p-2.5 bg-neutral-50 text-neutral-400 rounded-xl hover:text-[#3ea76e] hover:bg-[#f0f9f4] transition-all">
                              <Edit2 size={18} />
                            </button>
                            {!item.isDefault && (
                              <button className="p-2.5 bg-neutral-50 text-neutral-400 rounded-xl hover:text-red-500 hover:bg-red-50 transition-all">
                                <Trash2 size={18} />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white border border-neutral-200 border-dashed rounded-[32px] p-20 text-center text-neutral-400">
                    등록된 주소가 없습니다.
                  </div>
                )}
              </div>
            ) : (
              /* --- Address Register Form View --- */
              <div className="bg-white border border-neutral-200 rounded-[32px] shadow-sm overflow-hidden">
                <div className="p-8 border-b border-neutral-100 bg-neutral-50/50">
                  <SectionHeader subTitle="새로운 배송 정보를 입력해주세요." />
                </div>

                <div className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-neutral-700 ml-1 uppercase">
                        배송지명 *
                      </label>
                      <input
                        type="text"
                        placeholder="예: 우리집, 회사"
                        className="w-full border border-neutral-200 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-[#3ea76e]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-neutral-700 ml-1 uppercase">
                        성명 *
                      </label>
                      <input
                        type="text"
                        className="w-full border border-neutral-200 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-[#3ea76e]"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-neutral-700 ml-1 uppercase">
                      주소 *
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="우편번호"
                        className="w-32 bg-neutral-50 border border-neutral-100 rounded-2xl px-5 py-3.5 text-sm"
                        readOnly
                      />
                      <button className="px-6 py-3.5 bg-neutral-900 text-white text-xs font-bold rounded-2xl hover:bg-neutral-800 transition-colors flex items-center gap-2">
                        <Search size={14} /> 주소검색
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="기본주소"
                      className="w-full border border-neutral-200 rounded-2xl px-5 py-3.5 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="상세주소 (선택 입력 가능)"
                      className="w-full border border-neutral-200 rounded-2xl px-5 py-3.5 text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-700 ml-1 uppercase">
                      휴대전화 *
                    </label>
                    <div className="flex gap-2">
                      <select className="border border-neutral-200 rounded-2xl px-4 py-3.5 text-sm outline-none">
                        <option>010</option>
                        <option>011</option>
                      </select>
                      <input
                        type="text"
                        className="flex-1 border border-neutral-200 rounded-2xl px-5 py-3.5 text-sm"
                      />
                      <input
                        type="text"
                        className="flex-1 border border-neutral-200 rounded-2xl px-5 py-3.5 text-sm"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <label className="flex items-center gap-3 cursor-pointer group w-fit">
                      <input
                        type="checkbox"
                        className="w-5 h-5 accent-[#3ea76e] rounded-md"
                      />
                      <span className="text-[13px] font-bold text-neutral-500 group-hover:text-neutral-800 transition-colors">
                        기본 배송지로 저장
                      </span>
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-10">
                    <button className="flex-[2] py-4 bg-[#3ea76e] text-white rounded-[20px] font-bold text-base hover:bg-[#34925e] transition-all shadow-lg shadow-[#3ea76e]/20">
                      배송지 등록하기
                    </button>
                    <button
                      onClick={() => setIsRegister(false)}
                      className="flex-1 py-4 bg-neutral-100 text-neutral-500 rounded-[20px] font-bold text-base hover:bg-neutral-200 transition-all"
                    >
                      취소
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default UserAddressPage;
