import { Search, Users, Briefcase, Target, FileText, BarChart3, Map, Calendar, MoreHorizontal } from 'lucide-react';

const CORE_SERVICES = [
  {
    title: '招聘全流程',
    sub: '精链人才推荐',
    icon: Search,
    desc: '从需求定义到入职跟踪，全链路精准匹配与交付'
  },
  {
    title: 'RPO服务',
    sub: '招聘流程外包',
    icon: Briefcase,
    desc: '招聘流程全托管，降低成本、提升效率'
  },
  {
    title: '猎头服务',
    sub: '中高端人才寻访',
    icon: Target,
    desc: '定向寻访行业稀缺人才，精准触达高端候选人'
  }
];

const EXTENDED_SERVICES = [
  { title: '到场面试速推', icon: Calendar },
  { title: '到岗推荐', icon: Users },
  { title: 'OFFER推荐', icon: FileText },
  { title: '薪酬报告', icon: BarChart3 },
  { title: '人才地图', icon: Map },
  { title: '其他定制服务', icon: MoreHorizontal }
];

const ServiceScope = () => {
  return (
    <section className="relative py-[90px] bg-white overflow-hidden">
      {/* 背景 - 放射点阵 */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 12 }, (_, row) =>
            Array.from({ length: 16 }, (_, col) => {
              const cx = col * 52 + 26;
              const cy = row * 52 + 26;
              const distFromCenter = Math.sqrt((cx - 400) ** 2 + (cy - 300) ** 2);
              const r = Math.max(1, 3 - distFromCenter / 200);
              return <circle key={`${row}-${col}`} cx={cx} cy={cy} r={r} fill="#4a83f2" />;
            })
          )}
        </svg>
      </div>

      {/* 右上装饰弧 */}
      <div className="absolute -top-[120px] -right-[120px] w-[400px] h-[400px] rounded-full border border-[#4a83f2]/[0.06]" />
      <div className="absolute -top-[80px] -right-[80px] w-[320px] h-[320px] rounded-full border border-[#4a83f2]/[0.04]" />

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* 标题区 */}
        <div className="text-center mb-[54px]">
          <div className="inline-flex items-center gap-3 mb-[18px]">
            <div className="w-10 h-[2px] bg-gradient-to-r from-transparent to-[#4a83f2]" />
            <h2 className="text-[24px] font-bold leading-[29px] text-[#303133]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
              服务范围
            </h2>
            <div className="w-10 h-[2px] bg-gradient-to-l from-transparent to-[#4a83f2]" />
          </div>
          <p className="text-sm text-[#606266]/60" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
            九大核心服务能力，全方位覆盖企业招聘场景
          </p>
        </div>

        {/* 核心服务 - 3 张大卡 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[18px] mb-[18px]">
          {CORE_SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group relative">
                <div className="relative h-full bg-gradient-to-br from-[#fafbff] to-white border border-[#e5e7eb] rounded-[12px] p-[32px] transition-all duration-500 hover:border-[#4a83f2]/40 hover:-translate-y-1 overflow-hidden">
                  {/* hover 顶部渐变 */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#4a83f2] to-[#2f6df6] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-[12px]" />

                  {/* 序号水印 */}
                  <div className="absolute -top-2 -right-2 text-[120px] font-bold text-[#4a83f2]/[0.03] leading-none select-none pointer-events-none transition-all duration-500 group-hover:text-[#4a83f2]/[0.06]">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* 图标 + 标签 */}
                  <div className="flex items-center gap-[14px] mb-[20px]">
                    <div className="w-[52px] h-[52px] rounded-[10px] bg-[#4a83f2]/[0.08] flex items-center justify-center transition-all duration-500 group-hover:bg-[#4a83f2] group-hover:rotate-6 group-hover:scale-105">
                      <Icon className="w-[26px] h-[26px] text-[#4a83f2] transition-colors duration-500 group-hover:text-white" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[18px] font-semibold text-[#303133] leading-[22px] transition-colors duration-400 group-hover:text-[#4a83f2]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                        {service.title}
                      </h3>
                      <span className="text-[13px] text-[#4a83f2]/60">{service.sub}</span>
                    </div>
                  </div>

                  {/* 描述 */}
                  <p className="text-sm text-[#606266]/70 leading-[24px] max-w-[40ch]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                    {service.desc}
                  </p>

                  {/* 底部装饰 */}
                  <div className="flex items-center gap-[6px] mt-[20px]">
                    <div className="h-[3px] w-[20px] rounded-full bg-[#4a83f2]/20 transition-all duration-400 group-hover:w-[32px] group-hover:bg-[#4a83f2]/60" />
                    <div className="h-[3px] w-[12px] rounded-full bg-[#4a83f2]/10 transition-all duration-400 delay-75 group-hover:w-[20px] group-hover:bg-[#4a83f2]/40" />
                    <div className="h-[3px] w-[8px] rounded-full bg-[#4a83f2]/5 transition-all duration-400 delay-150 group-hover:w-[14px] group-hover:bg-[#4a83f2]/25" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 扩展服务 - 紧凑横排 */}
        <div className="relative p-[1px] rounded-[12px] bg-gradient-to-r from-[#e5e7eb] via-[#4a83f2]/20 to-[#e5e7eb]">
          <div className="bg-white rounded-[11px] p-[24px]">
            <div className="flex items-center gap-2 mb-[18px]">
              <span className="text-[13px] text-[#606266]/40 tracking-wider uppercase" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                更多服务
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#e5e7eb] to-transparent" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[12px]">
              {EXTENDED_SERVICES.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-center gap-[10px] px-[16px] py-[14px] rounded-[8px] bg-[#f8faff] border border-transparent transition-all duration-300 hover:bg-white hover:border-[#4a83f2]/20 hover:-translate-y-0.5"
                  >
                    <Icon className="w-[18px] h-[18px] text-[#4a83f2]/50 flex-shrink-0 transition-colors duration-300 group-hover:text-[#4a83f2]" strokeWidth={1.5} />
                    <span className="text-[14px] text-[#606266] transition-colors duration-300 group-hover:text-[#303133]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                      {service.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceScope;
