const HeroBanner = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #ffffff 0%, #fafbff 50%, #f5f9ff 100%)',
      }}
    >
      {/* 背景插图 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/images/HeroBanner/hero-bg.png"
          alt=""
          className="w-[1920px] max-w-none h-auto"
        />
      </div>

      {/* 内容区 */}
      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-20 lg:py-[144px]">
        <div className="max-w-[540px] flex flex-col gap-8">
          {/* 标题区 */}
          <div className="flex flex-col gap-5">
            <div className="inline-flex items-center self-start px-[17px] py-[7px] bg-[#4a83f2]/8 border border-[#4a83f2]/20 rounded-full">
              <span
                className="text-xs font-medium text-[#4a83f2]"
                style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
              >
                创新业务部
              </span>
            </div>

            <h1
              className="text-[38px] font-semibold leading-[38px] text-[#303133]"
              style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              RPO及猎头服务
            </h1>

            <div className="flex items-center gap-2">
              <div className="w-20 h-1 bg-gradient-to-r from-[#4a83f2] to-[#2f6df6] rounded-full" />
              <div className="w-8 h-1 bg-[#f6c437] rounded-full" />
              <div className="w-3 h-1 bg-[#4a83f2]/30 rounded-full" />
            </div>
          </div>

          {/* 描述文案 */}
          <div className="border-l-2 border-[#4a83f2]/20 pl-[18px]">
            <p
              className="text-[16px] text-[#909399] font-normal leading-[28px]"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              随着新技术、新需求、新增长和新产品的不断涌现，企业间的竞争日趋激烈，而引进匹配的人才正成为企业在竞争中脱颖而出的关键。百得思维RPO及猎头服务专注于为企业提供定制化招聘解决方案，涵盖全程或部分招聘流程的外包服务，帮助企业降低招聘成本、提升招聘质量与效率，从而在激烈的市场竞争中占据有利地位。
            </p>
          </div>

          {/* 核心特点标签 */}
          <div className="flex flex-wrap gap-4 pt-2">
            {['定制化招聘方案', '全流程外包服务', '降本增效'].map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-[10px] px-[21px] py-[11px] bg-white/80 backdrop-blur-[4px] border border-[#4a83f2]/15 rounded-lg hover:border-[#4a83f2]/40 hover:bg-[#4a83f2]/5 transition-all duration-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#4a83f2]" />
                <span
                  className="text-sm text-[#606266]"
                  style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                >
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
