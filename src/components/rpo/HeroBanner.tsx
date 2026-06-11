const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f6ff] via-white to-[#f8faff] py-[90px]">
      {/* 装饰性几何元素 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#4a83f2]/8 to-[#4a83f2]/3" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-gradient-to-tr from-[#2f6df6]/6 to-transparent" />
        <div className="absolute top-[25%] right-[33%] w-4 h-4 rounded-full bg-[#4a83f2]/20" />
        <div className="absolute bottom-[33%] left-[25%] w-3 h-3 rounded-full bg-[#f6c437]/30" />
        <div className="absolute top-[33%] left-[15%] w-2 h-2 rounded-full bg-[#4a83f2]/15" />
        <div className="absolute top-[20%] right-[10%] w-24 h-px bg-gradient-to-r from-transparent via-[#4a83f2]/20 to-transparent rotate-45" />
        <div className="absolute bottom-[30%] left-[5%] w-16 h-px bg-gradient-to-r from-transparent via-[#4a83f2]/15 to-transparent -rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[54px] items-center">
          {/* 左侧文字区 */}
          <div className="space-y-[26px]">
            <p className="text-[#4a83f2]/50 text-sm font-medium tracking-[4px] uppercase">
              RPO &amp; Headhunting Service
            </p>
            <h1 className="text-[32px] font-bold leading-[38px] text-neutral">
              RPO及猎头服务
            </h1>
            <p className="text-base text-neutral/80 leading-[1.8]">
              随着新技术、新需求、新增长和新产品的不断涌现，企业间的竞争日趋激烈，而引进匹配的人才正成为企业在竞争中脱颖而出的关键。百得思维RPO及猎头服务专注于为企业提供定制化招聘解决方案，涵盖全程或部分招聘流程的外包服务，帮助企业降低招聘成本、提升招聘质量与效率，从而在激烈的市场竞争中占据有利地位。
            </p>
            <div className="flex flex-wrap items-center gap-[26px] pt-[10px]">
              <div className="flex items-center gap-[10px]">
                <span className="w-2 h-2 rounded-full bg-[#4a83f2]" />
                <span className="text-sm text-neutral/70">定制化招聘方案</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <span className="w-2 h-2 rounded-full bg-[#4a83f2]" />
                <span className="text-sm text-neutral/70">全流程外包服务</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <span className="w-2 h-2 rounded-full bg-[#4a83f2]" />
                <span className="text-sm text-neutral/70">降本增效</span>
              </div>
            </div>
          </div>

          {/* 右侧插画占位区 */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#4a83f2]/5 to-[#2f6df6]/5 rounded-[12px] -rotate-2" />
            <div className="relative w-full aspect-[4/3] bg-white/80 rounded-[8px] border border-gray-200/80 flex items-center justify-center overflow-hidden">
              <div className="absolute top-4 left-4 w-12 h-12 rounded-[8px] bg-[#4a83f2]/8 border border-[#4a83f2]/15" />
              <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-[#f6c437]/15 border border-[#f6c437]/20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-dashed border-[#4a83f2]/15" />
              <span className="relative text-gray-400 text-sm">Hero Illustration Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
