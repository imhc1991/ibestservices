const CASE_DATA = {
  company: '亚太地区某智能语音与人工智能龙头企业',
  tags: ['上市公司', '互联网', '1000人+']
} as const;

const CaseStudy = () => {
  return (
    <section className="relative py-[90px] bg-gradient-to-b from-[#fafbff] via-white to-[#fafbff] overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#e8f2ff_0%,transparent_70%)]" />

      <div className="absolute top-[5%] left-[10%] w-2 h-2 rounded-full bg-[#4a83f2]/40 animate-pulse" />
      <div className="absolute top-[15%] right-[15%] w-3 h-3 rounded-full bg-[#f6c437]/50 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-[20%] left-[20%] w-2.5 h-2.5 rounded-full bg-[#4a83f2]/30 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[10%] right-[8%] w-2 h-2 rounded-full bg-[#2f6df6]/35 animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="absolute top-[20%] right-[5%] w-64 h-64 rounded-full bg-gradient-to-br from-[#4a83f2]/3 to-transparent blur-3xl" />
      <div className="absolute bottom-[25%] left-[8%] w-56 h-56 rounded-full bg-gradient-to-tl from-[#f6c437]/2 to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* 标题区 */}
        <div className="text-center mb-[54px]">
          <div className="inline-flex items-center gap-3 mb-[18px]">
            <div className="w-10 h-[2px] bg-gradient-to-r from-transparent to-[#4a83f2]" />
            <h2 className="text-[24px] font-bold leading-[29px] text-[#303133]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
              合作案例
            </h2>
            <div className="w-10 h-[2px] bg-gradient-to-l from-transparent to-[#4a83f2]" />
          </div>
          <p className="text-sm text-[#606266]/60" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
            携手行业领军企业，共创人才价值
          </p>
        </div>

        {/* 案例卡片 - 全新设计 */}
        <div className="group relative max-w-5xl mx-auto">
          {/* 外层装饰框 */}
          <div className="absolute -inset-8 rounded-[24px] bg-gradient-to-br from-[#4a83f2]/5 via-transparent to-[#2f6df6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* 背景光晕 */}
          <div className="absolute -inset-6 bg-gradient-to-br from-[#4a83f2]/0 via-transparent to-[#2f6df6]/0 rounded-[20px] opacity-0 blur-2xl transition-all duration-700 group-hover:from-[#4a83f2]/8 group-hover:to-[#2f6df6]/5 group-hover:opacity-100 -z-10" />

          {/* 主卡片 */}
          <div className="relative bg-white/90 backdrop-blur-md border-2 border-[#e5e7eb] rounded-[16px] overflow-hidden transition-all duration-500 group-hover:border-[#4a83f2]/30 group-hover:shadow-[0_20px_60px_rgba(74,131,242,0.15)]">
            {/* 顶部装饰条 - 三色渐变 */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4a83f2] via-[#f6c437] to-[#2f6df6] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* 左上角装饰 */}
            <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#4a83f2]/5 to-transparent" />
            <div className="absolute top-6 left-6 w-12 h-12 rounded-full border border-[#4a83f2]/10" />

            {/* 右下角装饰 */}
            <div className="absolute bottom-4 right-4 w-20 h-20 rounded-full bg-gradient-to-tl from-[#f6c437]/5 to-transparent" />
            <div className="absolute bottom-6 right-6 w-16 h-16 rounded-full border border-[#f6c437]/10" />

            <div className="relative p-[48px] lg:p-[64px]">
              {/* 企业logo区域 */}
              <div className="flex justify-center mb-[40px]">
                <div className="group/logo relative">
                  <div className="w-24 h-24 rounded-[16px] bg-gradient-to-br from-[#4a83f2]/10 via-[#4a83f2]/5 to-transparent border-2 border-[#4a83f2]/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-[#4a83f2]/40 group-hover:shadow-[0_8px_24px_rgba(74,131,242,0.2)]">
                    <div className="w-12 h-12 rounded-[10px] border-[3px] border-[#4a83f2]/50 transition-colors duration-500 group-hover:border-[#4a83f2]" />
                  </div>
                  {/* 角标 */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-[#f6c437] to-[#f6c437]/70 border-2 border-white shadow-lg flex items-center justify-center animate-pulse">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 企业名称 */}
              <div className="text-center mb-[32px]">
                <h3 className="text-[20px] lg:text-[22px] font-semibold leading-[32px] text-[#303133] transition-colors duration-500 group-hover:text-[#4a83f2]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                  {CASE_DATA.company}
                </h3>
              </div>

              {/* 标签组 */}
              <div className="flex flex-wrap justify-center gap-[16px]">
                {CASE_DATA.tags.map((tag, index) => (
                  <div
                    key={tag}
                    className="group/tag relative"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative px-[28px] py-[12px] bg-gradient-to-r from-white to-[#fafbff] border-2 border-[#4a83f2]/15 rounded-full transition-all duration-300 hover:border-[#4a83f2]/40 hover:bg-white hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(74,131,242,0.15)]">
                      {/* 左侧装饰点 */}
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#4a83f2]/40 transition-all duration-300 group-hover/tag:scale-150 group-hover/tag:bg-[#4a83f2]" />

                      <span className="text-base font-medium text-[#4a83f2] transition-colors duration-300 group-hover/tag:text-[#2f6df6]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                        {tag}
                      </span>

                      {/* 底部光晕 */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4a83f2]/0 to-[#2f6df6]/0 opacity-0 transition-all duration-300 group-hover/tag:from-[#4a83f2]/10 group-hover/tag:to-[#2f6df6]/10 group-hover/tag:opacity-100 -z-10" />
                    </div>

                    {/* hover 光晕 */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#4a83f2]/0 to-[#2f6df6]/0 rounded-full opacity-0 blur-lg transition-all duration-300 -z-20 group-hover/tag:from-[#4a83f2]/20 group-hover/tag:to-[#2f6df6]/15 group-hover/tag:opacity-100" />
                  </div>
                ))}
              </div>

              {/* 底部装饰线 */}
              <div className="flex items-center justify-center gap-[10px] mt-[40px]">
                <div className="w-[12px] h-[12px] rounded-full bg-[#4a83f2]/30 transition-all duration-500 group-hover:w-[20px] group-hover:bg-[#4a83f2]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#f6c437]/40 transition-all duration-500 delay-75 group-hover:w-[18px] group-hover:bg-[#f6c437]" />
                <div className="w-[8px] h-[8px] rounded-full bg-[#2f6df6]/30 transition-all duration-500 delay-150 group-hover:w-[16px] group-hover:bg-[#2f6df6]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
