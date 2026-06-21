const POSITIONS = [
  '算法', '产品经理', '研发', '项目经理', '销售', '数据挖掘',
  '架构师', '售前咨询', '设计负责人', '测试架构', '高级市场总监', '运维工程师'
];

const REQUIREMENTS_DATA = [
  {
    label: '合作岗位',
    value: '12',
    unit: '类',
    desc: '算法、产品经理、研发等',
    highlight: true
  },
  {
    label: '服务周期',
    value: '2025.01-2025.12',
    unit: '',
    desc: '全年持续合作',
    highlight: false
  },
  {
    label: '需求数量',
    value: '300',
    unit: '个',
    desc: '岗位需求总量',
    highlight: true
  },
  {
    label: '学历要求',
    value: '985/211',
    unit: '',
    desc: '硕士学历起步（算法）',
    highlight: false
  },
  {
    label: '工作经验',
    value: '5',
    unit: '年+',
    desc: '大厂经验优先',
    highlight: false
  },
  {
    label: '需求城市',
    value: '合肥',
    unit: '',
    desc: '安徽省会城市',
    highlight: false
  }
];

const ProjectRequirements = () => {
  return (
    <section className="relative py-[90px] bg-gradient-to-b from-white to-[#f8faff] overflow-hidden">
      {/* 背景网格 */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#4a83f2 1px, transparent 1px), linear-gradient(90deg, #4a83f2 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* 标题区 */}
        <div className="text-center mb-[54px]">
          <div className="inline-flex items-center gap-3 mb-[18px]">
            <div className="w-10 h-[2px] bg-gradient-to-r from-transparent to-[#4a83f2]" />
            <h2 className="text-[24px] font-bold leading-[29px] text-[#303133]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
              项目需求
            </h2>
            <div className="w-10 h-[2px] bg-gradient-to-l from-transparent to-[#4a83f2]" />
          </div>
          <p className="text-sm text-[#606266]/60" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
            明确的需求定义，高效的交付保障
          </p>
        </div>

        {/* 核心数据看板 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] mb-[36px]">
          {REQUIREMENTS_DATA.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-[#e5e7eb] rounded-[8px] p-[28px] transition-all duration-400 hover:border-[#4a83f2] hover:shadow-[0_4px_16px_rgba(74,131,242,0.08)]"
              style={{ animation: `cardFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 60}ms both` }}
            >
              {/* 顶部装饰线 */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-[8px] transition-all duration-400 ${item.highlight ? 'bg-[#4a83f2]' : 'bg-[#e5e7eb] group-hover:bg-[#4a83f2]'}`} />

              {/* 标签 */}
              <div className="text-[13px] text-[#606266]/50 mb-[12px] uppercase tracking-wider" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                {item.label}
              </div>

              {/* 数值 */}
              <div className="flex items-baseline gap-1 mb-[8px]">
                <span className={`text-[32px] font-bold leading-none transition-colors duration-400 ${item.highlight ? 'text-[#4a83f2]' : 'text-[#303133] group-hover:text-[#4a83f2]'}`} style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                  {item.value}
                </span>
                {item.unit && (
                  <span className="text-[16px] text-[#606266]/60" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                    {item.unit}
                  </span>
                )}
              </div>

              {/* 描述 */}
              <p className="text-sm text-[#606266]/60 leading-[20px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 合作岗位详情 */}
        <div className="bg-white border border-[#e5e7eb] rounded-[8px] p-[32px]">
          <div className="flex items-center gap-2 mb-[24px]">
            <div className="w-[3px] h-[18px] bg-[#4a83f2] rounded-full" />
            <h3 className="text-[18px] font-semibold text-[#303133]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
              合作岗位清单
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[12px]">
            {POSITIONS.map((position, index) => (
              <div
                key={index}
                className="group flex items-center gap-2 px-[16px] py-[12px] bg-[#f8faff] border border-[#e5e7eb] rounded-[6px] transition-all duration-300 hover:border-[#4a83f2] hover:bg-white"
                style={{ animation: `cardFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${(index + 6) * 40}ms both` }}
              >
                <div className="w-[6px] h-[6px] rounded-full bg-[#4a83f2]/30 transition-all duration-300 group-hover:bg-[#4a83f2]" />
                <span className="text-sm text-[#606266] transition-colors duration-300 group-hover:text-[#4a83f2]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                  {position}
                </span>
              </div>
            ))}
          </div>

          {/* 底部说明 */}
          <div className="mt-[24px] pt-[24px] border-t border-[#e5e7eb]">
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-[#606266]/60" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
              <div className="flex items-center gap-2">
                <div className="w-[4px] h-[4px] rounded-full bg-[#4a83f2]" />
                <span>合作形式：入职+30个工作日保质期（P3）</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[4px] h-[4px] rounded-full bg-[#4a83f2]" />
                <span>入职+180个工作日保质期（P4）</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectRequirements;
