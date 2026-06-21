import { Search, Users, Briefcase, Target, FileText, BarChart3, Map, Calendar, MoreHorizontal } from 'lucide-react';

const SERVICE_SCOPE = [
  {
    title: '招聘全流程精链人才推荐',
    icon: Search,
    desc: '到场测试推荐精准匹配'
  },
  {
    title: '到场测试推荐',
    icon: Calendar,
    desc: '现场评估候选人能力'
  },
  {
    title: 'RPO服务',
    icon: Briefcase,
    desc: '招聘流程外包定制方案'
  },
  {
    title: '猎头服务',
    icon: Target,
    desc: '中高端人才定向寻访'
  },
  {
    title: 'OFFER推荐',
    icon: FileText,
    desc: '薪酬方案设计与谈判'
  },
  {
    title: '薪酬报告',
    icon: BarChart3,
    desc: '市场薪酬数据分析'
  },
  {
    title: '人才地图',
    icon: Map,
    desc: '行业人才分布洞察'
  },
  {
    title: '招聘团队驻场',
    icon: Users,
    desc: '专业团队现场支持'
  },
  {
    title: '其他定制服务',
    icon: MoreHorizontal,
    desc: '灵活响应特殊需求'
  }
];

const ServiceScope = () => {
  return (
    <section className="relative py-[90px] bg-white overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-[#4a83f2]/[0.02] blur-3xl" />
      <div className="absolute bottom-[15%] left-[8%] w-[250px] h-[250px] rounded-full bg-[#f6c437]/[0.03] blur-3xl" />

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

        {/* 3x3 网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {SERVICE_SCOPE.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{ animation: `cardFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 60}ms both` }}
              >
                <div className="relative h-full bg-white border border-[#e5e7eb] rounded-[8px] p-[24px] transition-all duration-400 hover:border-[#4a83f2] hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(74,131,242,0.08)] overflow-hidden">
                  {/* 背景装饰数字 */}
                  <div className="absolute -bottom-2 -right-2 text-[72px] font-bold text-[#4a83f2]/[0.02] leading-none select-none pointer-events-none" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* 图标 */}
                  <div className="mb-[16px]">
                    <div className="inline-flex items-center justify-center w-[48px] h-[48px] rounded-[8px] bg-[#4a83f2]/[0.08] transition-all duration-400 group-hover:bg-[#4a83f2] group-hover:scale-105">
                      <Icon className="w-[24px] h-[24px] text-[#4a83f2] transition-colors duration-400 group-hover:text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* 内容 */}
                  <h3 className="text-[17px] font-semibold leading-[24px] text-[#303133] mb-[8px] transition-colors duration-400 group-hover:text-[#4a83f2]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#606266]/60 leading-[22px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                    {service.desc}
                  </p>

                  {/* 底部装饰条 */}
                  <div className="mt-[16px] h-[2px] w-0 bg-[#4a83f2] transition-all duration-400 group-hover:w-full rounded-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceScope;
