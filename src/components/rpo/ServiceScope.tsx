import { Search, Users, Briefcase, Target, FileText, BarChart3, Map, Calendar, MoreHorizontal } from 'lucide-react';

const ALL_SERVICES = [
  { title: '招聘全流程', sub: '精链人才推荐', icon: Search, desc: '从需求定义到入职跟踪，全链路精准匹配与交付' },
  { title: 'RPO服务', sub: '招聘流程外包', icon: Briefcase, desc: '招聘流程全托管，降低成本、提升效率' },
  { title: '猎头服务', sub: '中高端人才寻访', icon: Target, desc: '定向寻访行业稀缺人才，精准触达高端候选人' },
  { title: '到场面试速推', sub: '快速推进', icon: Calendar, desc: '加速候选人到场面试流程，提升招聘效率' },
  { title: '到岗推荐', sub: '精准匹配', icon: Users, desc: '推荐即将到岗的优质候选人，缩短招聘周期' },
  { title: 'OFFER推荐', sub: '决策支持', icon: FileText, desc: '协助完成 Offer 发放与薪酬谈判' },
  { title: '薪酬报告', sub: '市场洞察', icon: BarChart3, desc: '提供行业薪酬数据与趋势分析' },
  { title: '人才地图', sub: '战略规划', icon: Map, desc: '绘制目标人才分布与流动趋势' },
  { title: '其他定制服务', sub: '灵活定制', icon: MoreHorizontal, desc: '根据企业需求提供定制化招聘解决方案' }
];

const ServiceScope = () => {
  return (
    <section className="relative py-[96px] bg-[#f8faff] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">

        {/* Section 标题 */}
        <div className="mb-[56px]">
          <div className="text-[11px] text-[#A0A0A0] tracking-[0.12em] uppercase mb-[12px] font-medium" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
            Service Scope
          </div>
          <h2 className="text-[28px] font-semibold leading-[1.15] text-[#303133] mb-[12px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif', fontWeight: 600 }}>
            服务范围
          </h2>
          <p className="text-[15px] text-[#606266] leading-[1.7] max-w-[560px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
            九大核心服务能力，全方位覆盖企业招聘场景
          </p>
        </div>

        {/* 九大服务 - 3×3 等权重网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {ALL_SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group">
                <div className="h-full bg-white border border-[#e5e7eb] rounded-[12px] p-[32px] transition-all duration-250 hover:border-[#4a83f2]/50">

                  {/* Icon */}
                  <div className="w-[48px] h-[48px] rounded-[10px] bg-[#4a83f2]/[0.06] flex items-center justify-center mb-[20px] transition-colors duration-250 group-hover:bg-[#4a83f2]/[0.12]">
                    <Icon className="w-[24px] h-[24px] text-[#4a83f2]" strokeWidth={1.5} />
                  </div>

                  {/* 标题 - 最高优先级 */}
                  <h3 className="text-[16px] font-semibold text-[#303133] leading-[1.3] mb-[6px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif', fontWeight: 600 }}>
                    {service.title}
                  </h3>

                  {/* 副标题 - 品牌强调 */}
                  <div className="text-[11px] text-[#4a83f2] mb-[14px] font-medium tracking-[0.02em]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                    {service.sub}
                  </div>

                  {/* 描述 - 次要信息 */}
                  <p className="text-[13px] text-[#606266]/80 leading-[1.7]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                    {service.desc}
                  </p>
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