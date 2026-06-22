import { Clock, CreditCard, Calendar, Shield } from 'lucide-react';

const COMMITMENTS = [
  {
    title: '简历推荐',
    metric: '24h',
    content: '内推荐符合客户要求的候选人简历',
    icon: Clock
  },
  {
    title: '付款方式',
    metric: '0',
    unit: '预付款',
    content: '过保后收费，零风险合作',
    icon: CreditCard
  },
  {
    title: '面试安排',
    metric: '1-2',
    unit: '工作日',
    content: '内完成候选人面试安排',
    icon: Calendar
  },
  {
    title: '保质期',
    metric: '灵活',
    content: '可根据客户实际需求具体协商确定',
    icon: Shield
  }
] as const;

const Commitment = () => {
  return (
    <section className="relative py-[96px] bg-[#f8faff] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">

        {/* Section 标题 */}
        <div className="mb-[56px]">
          <div className="text-[11px] text-[#A0A0A0] tracking-[0.12em] uppercase mb-[12px] font-medium" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
            Our Commitment
          </div>
          <h2 className="text-[28px] font-semibold leading-[1.15] text-[#303133] mb-[12px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif', fontWeight: 600 }}>
            我们承诺
          </h2>
          <p className="text-[15px] text-[#606266] leading-[1.7] max-w-[560px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
            明确的服务标准，可靠的交付保障
          </p>
        </div>

        {/* 承诺网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {COMMITMENTS.map((commitment, index) => {
            const Icon = commitment.icon;
            return (
              <div key={index} className="group">
                <div className="h-full bg-white border border-[#e5e7eb] rounded-[12px] p-[32px] transition-all duration-250 hover:border-[#4a83f2]/50">

                  {/* Icon */}
                  <div className="w-[40px] h-[40px] rounded-[8px] bg-[#4a83f2]/[0.06] flex items-center justify-center mb-[20px]">
                    <Icon className="w-[20px] h-[20px] text-[#4a83f2]" strokeWidth={1.5} />
                  </div>

                  {/* 量化承诺 — 视觉锚点 */}
                  <div className="flex items-baseline gap-[4px] mb-[6px]">
                    <span className="text-[28px] font-semibold text-[#303133] leading-none tracking-tight" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif', fontWeight: 600 }}>
                      {commitment.metric}
                    </span>
                    {'unit' in commitment && (
                      <span className="text-[13px] text-[#606266] font-medium" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                        {commitment.unit}
                      </span>
                    )}
                  </div>

                  {/* 标题 */}
                  <h3 className="text-[14px] font-semibold text-[#303133] leading-[1.3] mb-[8px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif', fontWeight: 600 }}>
                    {commitment.title}
                  </h3>

                  {/* 描述 */}
                  <p className="text-[13px] text-[#606266]/80 leading-[1.7]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                    {commitment.content}
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

export default Commitment;
