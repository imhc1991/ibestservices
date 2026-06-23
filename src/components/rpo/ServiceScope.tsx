const SERVICES = [
  {
    title: '招聘全流程',
    subtitle: '精链人才推荐',
    description: '从需求定义到入职跟踪，全链路精准匹配与交付',
    icon: '/images/ServiceScope/icon-1.png'
  },
  {
    title: 'RPO服务',
    subtitle: '招聘流程外包',
    description: '招聘流程全托管，降低成本、提升效率',
    icon: '/images/ServiceScope/icon-2.png'
  },
  {
    title: '猎头服务',
    subtitle: '中高端人才寻访',
    description: '定向寻访行业稀缺人才，精准触达高端候选人',
    icon: '/images/ServiceScope/icon-3.png'
  },
  {
    title: '到场面试速推',
    subtitle: '快速推进',
    description: '加速候选人到场面试流程，提升招聘效率',
    icon: '/images/ServiceScope/icon-4.png'
  },
  {
    title: '到岗推荐',
    subtitle: '精准匹配',
    description: '推荐即将到岗的优质候选人，缩短招聘周期',
    icon: '/images/ServiceScope/icon-5.png'
  },
  {
    title: 'OFFER推荐',
    subtitle: '决策支持',
    description: '协助完成 Offer 发放与薪酬谈判',
    icon: '/images/ServiceScope/icon-6.png'
  },
  {
    title: '薪酬报告',
    subtitle: '市场洞察',
    description: '提供行业薪酬数据与趋势分析',
    icon: '/images/ServiceScope/icon-7.png'
  },
  {
    title: '人才地图',
    subtitle: '战略规划',
    description: '绘制目标人才分布与流动趋势',
    icon: '/images/ServiceScope/icon-8.png'
  },
  {
    title: '其他定制服务',
    subtitle: '灵活定制',
    description: '根据企业需求提供定制化招聘解决方案',
    icon: '/images/ServiceScope/icon-9.png'
  }
] as const;

const ServiceScope = () => {
  return (
    <section className="relative py-[96px] bg-[#f8faff]">
      <div className="max-w-[1280px] mx-auto px-[64px]">
        {/* 标题区 */}
        <div className="flex items-center justify-center mb-[56px] min-w-[642px]">
          <img src="/images/common/title-deco-left.png" alt="" className="w-[112px] h-[21px]" />
          <div className="flex flex-col items-center mx-4">
            <h2
              className="text-[32px] font-semibold leading-[38px] text-[#303133] mb-[13px]"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              服务范围
            </h2>
            <p
              className="text-[16px] text-[#606266]/60 leading-[20px]"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              九大核心服务能力，全方位覆盖企业招聘场景
            </p>
          </div>
          <img src="/images/common/title-deco-right.png" alt="" className="w-[112px] h-[21px]" />
        </div>

        {/* 服务网格 */}
        <div className="grid grid-cols-3 gap-[20px]">
          {SERVICES.map((service, index) => (
            <div key={index} className="group flex flex-col">
              <div className="relative h-[213px] bg-gradient-to-b from-[#f1f6ff] via-white to-white border border-[#e5e7eb] rounded-[12px] p-[33px] flex flex-col gap-[6px] transition-all duration-500 hover:border-[#4a83f2]/40 hover:-translate-y-1 overflow-hidden">
                {/* hover 顶部渐变条 */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#4a83f2] to-[#2f6df6] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-[12px]" />

                {/* 图标 */}
                <div className="w-[48px] h-[48px] relative transition-transform duration-500 group-hover:scale-105">
                  <img src={service.icon} alt="" className="w-full h-full" />
                </div>

                {/* 标题 */}
                <div className="pt-[14px]">
                  <h3
                    className="text-[18px] font-semibold leading-[20.8px] text-[#303133] transition-colors duration-400 group-hover:text-[#4a83f2]"
                    style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* 副标题 */}
                <div>
                  <p
                    className="text-[11px] leading-[16.5px] tracking-[0.22px] text-[#4a83f2]"
                    style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                  >
                    {service.subtitle}
                  </p>
                </div>

                {/* 描述 */}
                <div className="pt-[7.25px]">
                  <p
                    className="text-[13px] leading-[22.1px] text-[#606266]/80"
                    style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceScope;
