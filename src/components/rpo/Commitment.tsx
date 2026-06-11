import { Clock, CreditCard, Calendar, Shield } from 'lucide-react';

const COMMITMENTS = [
  {
    title: '简历推荐',
    content: '24小时内推荐符合要求的候选人简历',
    icon: Clock
  },
  {
    title: '付款方式',
    content: '0预付款，过保后收费',
    icon: CreditCard
  },
  {
    title: '面试安排',
    content: '1-2个工作日内完成候选人面试安排',
    icon: Calendar
  },
  {
    title: '保质期',
    content: '可根据客户实际需求具体协商确定',
    icon: Shield
  }
] as const;

const Commitment = () => {
  return (
    <section className="relative py-[54px] bg-white overflow-hidden">
      <div className="absolute top-[15%] left-[5%] w-28 h-28 rounded-full bg-gradient-to-br from-[#4a83f2]/4 to-transparent" />
      <div className="absolute bottom-[10%] right-[8%] w-20 h-20 rounded-full bg-gradient-to-tl from-[#2f6df6]/4 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[24px] font-bold leading-[29px] text-[#606266] mb-[26px] text-center">
          我们承诺
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {COMMITMENTS.map((commitment, index) => {
            const Icon = commitment.icon;
            return (
              <div key={index} className="group">
                <div className="relative h-full border border-gray-200 rounded-[8px] p-[26px] bg-white transition-all duration-300 hover:border-[#4a83f2] hover:-translate-y-1 overflow-hidden">
                  {/* 顶部装饰线 */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4a83f2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* 图标 */}
                  <div className="w-12 h-12 rounded-[8px] bg-gradient-to-br from-[#4a83f2]/10 to-[#2f6df6]/5 flex items-center justify-center mb-[18px] group-hover:from-[#4a83f2] group-hover:to-[#2f6df6] transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#4a83f2] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-[20px] font-semibold leading-[24px] text-[#606266] mb-[10px]">
                    {commitment.title}
                  </h3>
                  <p className="text-base text-[#606266]/70 leading-[1.8]">
                    {commitment.content}
                  </p>

                  {/* 底部装饰 */}
                  <div className="flex items-center gap-[6px] mt-[18px]">
                    <div className="w-[6px] h-[6px] rounded-full bg-[#4a83f2]/25 group-hover:bg-[#4a83f2] transition-colors duration-300" />
                    <div className="w-[4px] h-[4px] rounded-full bg-[#4a83f2]/15 group-hover:bg-[#4a83f2]/60 transition-colors duration-300" />
                  </div>
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
