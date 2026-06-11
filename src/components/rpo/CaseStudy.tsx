const CaseStudy = () => {
  return (
    <section className="relative py-[54px] bg-white overflow-hidden">
      <div className="absolute top-[20%] left-[5%] w-24 h-24 rounded-full bg-gradient-to-br from-[#4a83f2]/4 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[24px] font-bold leading-[29px] text-[#606266] mb-[26px] text-center">
          合作案例
        </h2>

        {/* 案例卡片 - 左右分栏布局 */}
        <div className="border border-gray-200 rounded-[8px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
            {/* 左侧：案例信息 */}
            <div className="p-[32px] space-y-[26px]">
              <div className="flex items-center gap-[18px]">
                {/* 企业图标占位 */}
                <div className="w-14 h-14 rounded-[8px] bg-gradient-to-br from-[#4a83f2]/10 to-[#2f6df6]/5 border border-[#4a83f2]/15 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-[4px] border-2 border-[#4a83f2]/40" />
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold leading-[24px] text-[#606266]">
                    亚太地区某智能语音与人工智能龙头企业
                  </h3>
                </div>
              </div>

              {/* 标签 */}
              <div className="flex flex-wrap gap-[10px]">
                <span className="px-[18px] py-[10px] bg-[#4a83f2]/5 text-[#4a83f2] text-base rounded-[4px] border border-[#4a83f2]/10">
                  上市公司
                </span>
                <span className="px-[18px] py-[10px] bg-[#4a83f2]/5 text-[#4a83f2] text-base rounded-[4px] border border-[#4a83f2]/10">
                  互联网
                </span>
                <span className="px-[18px] py-[10px] bg-[#4a83f2]/5 text-[#4a83f2] text-base rounded-[4px] border border-[#4a83f2]/10">
                  1000人+
                </span>
              </div>
            </div>

            {/* 右侧：装饰区域 */}
            <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-[#f0f6ff] to-[#f8faff] border-l border-gray-200">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#4a83f2]/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#4a83f2]/10" />
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#f6c437]/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
