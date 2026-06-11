const REQUIREMENTS = [
  { label: '合作岗位', value: '技术类、产品类、运营类', icon: '💼' },
  { label: '服务周期', value: '2021年至今', icon: '📅' },
  { label: '需求数量', value: '持续合作', icon: '📊' },
  { label: '岗位要求', value: '本科及以上学历', icon: '🎓' },
  { label: '需求城市', value: '全国主要城市', icon: '📍' },
  { label: '合作形式', value: 'RPO + 猎头', icon: '🤝' }
] as const;

const ProjectRequirements = () => {
  return (
    <section className="relative py-[90px] bg-[#f8faff] overflow-hidden">
      {/* 右侧大装饰圆弧 */}
      <div className="absolute -right-[200px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#4a83f2]/[0.06]" />
      <div className="absolute -right-[160px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-[#4a83f2]/[0.04]" />

      {/* 左上角装饰 */}
      <div className="absolute top-[40px] left-[60px] w-[3px] h-[60px] bg-gradient-to-b from-[#4a83f2]/20 to-transparent rounded-full" />
      <div className="absolute top-[40px] left-[60px] w-[60px] h-[3px] bg-gradient-to-r from-[#4a83f2]/20 to-transparent rounded-full" />

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* 标题区 */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-[54px]">
          <div>
            <div className="flex items-center gap-3 mb-[14px]">
              <div className="w-[4px] h-[28px] bg-gradient-to-b from-[#4a83f2] to-[#2f6df6] rounded-full" />
              <h2 className="text-[24px] font-bold leading-[29px] text-[#303133]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                项目需求
              </h2>
            </div>
            <p className="text-sm text-[#606266]/60 pl-[16px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
              明确的需求定义，高效的交付保障
            </p>
          </div>
        </div>

        {/* 数据面板 - 仪表盘风格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e7eb]/60 rounded-[14px] overflow-hidden border border-[#e5e7eb]">
          {REQUIREMENTS.map((req, index) => (
            <div
              key={index}
              className="group relative bg-white p-[32px] transition-all duration-400 hover:bg-[#fafbff]"
            >
              {/* hover指示条 */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#4a83f2] to-[#2f6df6] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* 内容 */}
              <div className="relative">
                {/* 标签行 */}
                <div className="flex items-center justify-between mb-[16px]">
                  <span className="text-[13px] text-[#606266]/50 tracking-[0.5px] uppercase" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                    {req.label}
                  </span>
                  <span className="text-[18px] grayscale group-hover:grayscale-0 transition-all duration-400 opacity-60 group-hover:opacity-100">
                    {req.icon}
                  </span>
                </div>

                {/* 数值 */}
                <p className="text-[20px] font-semibold leading-[28px] text-[#303133] transition-colors duration-400 group-hover:text-[#4a83f2]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                  {req.value}
                </p>

                {/* 底部分隔装饰 */}
                <div className="mt-[18px] flex items-center gap-[8px]">
                  <div className="h-[3px] w-[24px] rounded-full bg-[#4a83f2]/15 transition-all duration-400 group-hover:w-[36px] group-hover:bg-[#4a83f2]/50" />
                  <div className="h-[3px] w-[12px] rounded-full bg-[#4a83f2]/10 transition-all duration-400 group-hover:w-[18px] group-hover:bg-[#4a83f2]/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectRequirements;
