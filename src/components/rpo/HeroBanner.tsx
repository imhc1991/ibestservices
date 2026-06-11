const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-[#fafbff] to-[#f5f9ff] overflow-hidden">
      {/* 背景装饰层 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#e8f2ff_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,#f5f9ff_0%,transparent_50%)]" />

      {/* 动态光晕装饰 */}
      <div className="absolute top-[8%] right-[10%] w-80 h-80 rounded-full bg-gradient-to-br from-[#4a83f2]/8 via-[#2f6df6]/4 to-transparent blur-3xl" />
      <div className="absolute bottom-[10%] left-[5%] w-72 h-72 rounded-full bg-gradient-to-tl from-[#4a83f2]/6 via-[#f6c437]/3 to-transparent blur-3xl" />
      <div className="absolute top-[50%] left-[50%] w-96 h-96 rounded-full bg-[#2f6df6]/3 blur-[120px] -translate-x-1/2 -translate-y-1/2" />

      {/* 装饰图形 */}
      <div className="absolute top-[15%] right-[5%] w-3 h-3 rounded-full bg-[#4a83f2]/30 animate-pulse" />
      <div className="absolute top-[25%] right-[15%] w-2 h-2 rounded-full bg-[#f6c437]/40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-[30%] left-[8%] w-2.5 h-2.5 rounded-full bg-[#4a83f2]/25 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* 左侧文案 */}
          <div className="space-y-8 lg:pr-12">
            {/* 标题区 */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#4a83f2]/8 border border-[#4a83f2]/20 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4a83f2] animate-pulse" />
                <span className="text-xs font-medium text-[#4a83f2]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                  创新业务部
                </span>
              </div>

              <h1 className="text-[32px] font-bold leading-[38px] text-[#303133]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                RPO及猎头服务
              </h1>

              <div className="flex items-center gap-2">
                <div className="w-20 h-1 bg-gradient-to-r from-[#4a83f2] to-[#2f6df6] rounded-full" />
                <div className="w-8 h-1 bg-[#f6c437] rounded-full" />
                <div className="w-3 h-1 bg-[#4a83f2]/30 rounded-full" />
              </div>
            </div>

            {/* 描述文案 */}
            <div className="relative pl-4 border-l-2 border-[#4a83f2]/20">
              <p className="text-base text-[#606266] leading-[28px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                随着新技术、新需求、新增长和新产品的不断涌现，企业间的竞争日趋激烈，而引进匹配的人才正成为企业在竞争中脱颖而出的关键。百得思维RPO及猎头服务专注于为企业提供定制化招聘解决方案，涵盖全程或部分招聘流程的外包服务，帮助企业降低招聘成本、提升招聘质量与效率，从而在激烈的市场竞争中占据有利地位。
              </p>
            </div>

            {/* 核心特点标签 */}
            <div className="flex flex-wrap gap-4 pt-2">
              {['定制化招聘方案', '全流程外包服务', '降本增效'].map((tag, index) => (
                <div
                  key={tag}
                  className="group flex items-center gap-2.5 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-[#4a83f2]/15 rounded-lg hover:border-[#4a83f2]/40 hover:bg-[#4a83f2]/5 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4a83f2] group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-sm text-[#606266] group-hover:text-[#4a83f2] transition-colors duration-300" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧插图 */}
          <div className="relative">
            {/* 背景装饰卡片 */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a83f2]/5 to-[#2f6df6]/5 rounded-2xl transform rotate-3 transition-transform duration-700 hover:rotate-6" />
            <div className="absolute inset-0 bg-gradient-to-tl from-[#f6c437]/5 to-transparent rounded-2xl transform -rotate-2 transition-transform duration-700 hover:-rotate-4" />

            {/* 主图片容器 */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border-2 border-white/80 shadow-[0_0_0_1px_rgba(74,131,242,0.1)] bg-white/90 backdrop-blur-sm group hover:shadow-[0_0_0_1px_rgba(74,131,242,0.3)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4a83f2]/0 to-[#4a83f2]/0 group-hover:from-[#4a83f2]/5 group-hover:to-transparent transition-all duration-500" />
              <img src="/src/assets/hero.png" alt="RPO及猎头服务" className="w-full h-full object-cover relative z-10" />

              {/* 图片顶部光泽效果 */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
            </div>

            {/* 浮动装饰元素 */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#4a83f2]/10 to-[#2f6df6]/5 border border-[#4a83f2]/20 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="text-xs text-[#4a83f2]/60 mb-1" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>专业</div>
                <div className="text-lg font-bold text-[#4a83f2]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>RPO</div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-xl bg-gradient-to-br from-[#f6c437]/15 to-[#f6c437]/5 border border-[#f6c437]/30 backdrop-blur-sm flex items-center justify-center animate-pulse">
              <div className="w-10 h-10 rounded-lg border-2 border-[#f6c437]/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
