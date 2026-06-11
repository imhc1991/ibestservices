const SERVICE_CATEGORIES = [
  {
    id: 1,
    title: '中高端人才寻访',
    number: '01',
    icon: 'search'
  },
  {
    id: 2,
    title: 'RPO招聘流程外包',
    number: '02',
    icon: 'process'
  },
  {
    id: 3,
    title: '招聘团队驻场服务',
    number: '03',
    icon: 'team'
  }
] as const;

const ServiceCategories = () => {
  return (
    <section className="relative py-[90px] bg-gradient-to-b from-white via-[#fafbff] to-white overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute top-[10%] right-[5%] w-40 h-40 rounded-full bg-[#4a83f2]/3 blur-3xl" />
      <div className="absolute bottom-[20%] left-[8%] w-32 h-32 rounded-full bg-[#2f6df6]/4 blur-3xl" />
      <div className="absolute top-[50%] left-[50%] w-48 h-48 rounded-full bg-[#f6c437]/2 blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* 区块标题 */}
        <div className="text-center mb-[54px]">
          <div className="inline-flex items-center gap-3 mb-[18px]">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#4a83f2]" />
            <h2 className="text-[24px] font-bold leading-[29px] text-[#303133]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
              业务分类
            </h2>
            <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[#4a83f2]" />
          </div>
          <p className="text-sm text-[#606266]/60" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
            三大核心业务领域，全方位满足企业招聘需求
          </p>
        </div>

        {/* 卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[26px]">
          {SERVICE_CATEGORIES.map((category, index) => (
            <div
              key={category.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 卡片主体 */}
              <div className="relative h-full bg-white border border-[#e5e7eb] rounded-[8px] p-[26px] transition-all duration-500 hover:border-[#4a83f2] hover:-translate-y-2">
                {/* 顶部装饰线 */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#4a83f2] via-[#2f6df6] to-[#4a83f2] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[8px]" />

                {/* 序号装饰 */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#4a83f2]/10 via-[#4a83f2]/5 to-transparent border border-[#4a83f2]/20 flex items-center justify-center backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[#4a83f2]/40">
                  <span className="text-[20px] font-bold text-[#4a83f2] transition-all duration-500 group-hover:scale-110" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                    {category.number}
                  </span>
                </div>

                {/* 内容区 */}
                <div className="relative pt-[10px] space-y-[18px]">
                  {/* 图标装饰区 */}
                  <div className="flex items-center gap-[10px] mb-[18px]">
                    <div className="w-12 h-12 rounded-[8px] bg-gradient-to-br from-[#4a83f2]/8 to-[#4a83f2]/3 flex items-center justify-center border border-[#4a83f2]/10 transition-all duration-500 group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-[#4a83f2]/15 group-hover:to-[#4a83f2]/5">
                      <div className="w-6 h-6 rounded-[4px] border-[3px] border-[#4a83f2]/50 transition-colors duration-500 group-hover:border-[#4a83f2]" />
                    </div>
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-[#4a83f2]/20 via-[#4a83f2]/10 to-transparent" />
                  </div>

                  {/* 标题 */}
                  <h3 className="text-[20px] font-semibold leading-[24px] text-[#606266] transition-colors duration-500 group-hover:text-[#4a83f2]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                    {category.title}
                  </h3>

                  {/* 底部装饰点 */}
                  <div className="flex items-center gap-[6px] pt-[18px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#4a83f2]/30 transition-all duration-300 group-hover:w-[12px] group-hover:bg-[#4a83f2]" />
                    <div className="w-[6px] h-[6px] rounded-full bg-[#4a83f2]/20 transition-all duration-300 delay-75 group-hover:w-[10px] group-hover:bg-[#4a83f2]/70" />
                    <div className="w-[4px] h-[4px] rounded-full bg-[#4a83f2]/15 transition-all duration-300 delay-150 group-hover:w-[8px] group-hover:bg-[#4a83f2]/50" />
                  </div>
                </div>
              </div>

              {/* hover 光晕效果 */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#4a83f2]/0 to-[#2f6df6]/0 rounded-[12px] opacity-0 blur-xl transition-all duration-500 -z-10 group-hover:from-[#4a83f2]/8 group-hover:to-[#2f6df6]/5 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
