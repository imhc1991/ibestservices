import { Search, Users, Briefcase, Target } from 'lucide-react';

const SERVICE_SCOPE = [
  {
    title: '招聘全流程',
    icon: Search,
    desc: '从需求分析到入职全程托管',
    accent: '#4a83f2'
  },
  {
    title: '精链人才推荐',
    icon: Target,
    desc: '精准匹配高质量候选人',
    accent: '#6366f1'
  },
  {
    title: 'RPO服务',
    icon: Briefcase,
    desc: '招聘流程外包定制方案',
    accent: '#0d9488'
  },
  {
    title: '猎头服务',
    icon: Users,
    desc: '中高端人才定向寻访',
    accent: '#f59e0b'
  }
];

const ServiceScope = () => {
  return (
    <section className="relative py-[90px] bg-white overflow-hidden">
      {/* 左侧大色块装饰 */}
      <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-[#f5f9ff] to-transparent" />

      {/* 网格线背景 */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#4a83f2 1px, transparent 1px), linear-gradient(90deg, #4a83f2 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* 标题区 - 左对齐风格 */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-[60px]">
          <div>
            <div className="flex items-center gap-3 mb-[14px]">
              <div className="w-[4px] h-[28px] bg-gradient-to-b from-[#4a83f2] to-[#2f6df6] rounded-full" />
              <h2 className="text-[24px] font-bold leading-[29px] text-[#303133]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                服务范围
              </h2>
            </div>
            <p className="text-sm text-[#606266]/60 pl-[16px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
              四大核心服务能力，全方位覆盖企业招聘场景
            </p>
          </div>

          {/* 右侧装饰数字 */}
          <div className="hidden lg:flex items-baseline gap-1 mt-4 lg:mt-0">
            <span className="text-[64px] font-bold leading-none text-[#4a83f2]/[0.07]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>04</span>
            <span className="text-sm text-[#606266]/30" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>项服务</span>
          </div>
        </div>

        {/* 卡片区域 - 横向时间轴风格 */}
        <div className="relative">
          {/* 连接线 */}
          <div className="hidden lg:block absolute top-[52px] left-[7%] right-[7%] h-px bg-gradient-to-r from-transparent via-[#4a83f2]/20 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[28px]">
            {SERVICE_SCOPE.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group relative flex flex-col items-center text-center">
                  {/* 顶部圆形图标节点 */}
                  <div className="relative z-10 mb-[24px]">
                    {/* 外圈 */}
                    <div
                      className="w-[104px] h-[104px] rounded-full border-2 border-dashed flex items-center justify-center transition-all duration-500 group-hover:border-solid group-hover:scale-105"
                      style={{ borderColor: `${service.accent}30` }}
                    >
                      {/* 内圈 */}
                      <div
                        className="w-[76px] h-[76px] rounded-full flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_24px_rgba(74,131,242,0.2)]"
                        style={{ background: `linear-gradient(135deg, ${service.accent}12, ${service.accent}06)`, border: `1.5px solid ${service.accent}25` }}
                      >
                        <Icon
                          className="w-7 h-7 transition-all duration-500 group-hover:scale-110"
                          style={{ color: service.accent }}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* 序号角标 */}
                    <div
                      className="absolute -top-1 -right-1 w-[30px] h-[30px] rounded-full flex items-center justify-center text-white text-sm font-bold transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `linear-gradient(135deg, ${service.accent}, ${service.accent}cc)` }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* 内容区 */}
                  <div className="relative w-full px-[16px] py-[24px] border border-[#e5e7eb] rounded-[10px] bg-white transition-all duration-400 group-hover:border-[#4a83f2]/30 group-hover:bg-[#fafbff]">
                    {/* 顶部三角指示 */}
                    <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-[12px] h-[12px] rotate-45 border-l border-t border-[#e5e7eb] bg-white transition-all duration-400 group-hover:border-[#4a83f2]/30 group-hover:bg-[#fafbff]" />

                    <h3 className="text-[17px] font-semibold leading-[24px] text-[#303133] mb-[10px] transition-colors duration-400 group-hover:text-[#4a83f2]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#606266]/60 leading-[22px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceScope;
