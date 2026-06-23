const COMMITMENTS = [
  {
    metric: '24h',
    title: '简历推荐',
    content: '24h内推荐符合要求的候选人简历',
    icon: '/images/Commitment/icon-1.svg'
  },
  {
    metric: '0',
    unit: '预付款',
    title: '付款方式',
    content: '过保后收费，零风险合作',
    icon: '/images/Commitment/icon-2.svg'
  },
  {
    metric: '1-2',
    unit: '工作日',
    title: '面试安排',
    content: '1-2工作日内完成候选人面试安排',
    icon: '/images/Commitment/icon-3.svg'
  },
  {
    metric: '灵活',
    title: '保质期',
    content: '可根据客户实际需求具体协商确定',
    icon: '/images/Commitment/icon-4.svg'
  }
] as const;

const Commitment = () => {
  return (
    <section className="relative py-[96px] bg-[#f8faff] overflow-hidden">
      <div className="relative max-w-[1280px] mx-auto px-[64px]">
        {/* 标题区 */}
        <div className="flex items-center justify-center mb-[56px] min-w-[642px]">
          <img src="/images/common/title-deco-left.png" alt="" className="w-[112px] h-[21px]" />
          <div className="flex flex-col items-center mx-4">
            <h2
              className="text-[32px] font-semibold leading-[38px] text-[#303133] mb-[13px]"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              我们承诺
            </h2>
            <p
              className="text-[16px] text-[#606266]/60 leading-[20px]"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              明确的服务标准，可靠的交付保障
            </p>
          </div>
          <img src="/images/common/title-deco-right.png" alt="" className="w-[112px] h-[21px]" />
        </div>

        {/* 承诺网格 - 4列 */}
        <div className="grid grid-cols-4 gap-[20px]">
          {COMMITMENTS.map((item, index) => (
            <div key={index} className="group flex flex-col">
              <div className="h-full bg-white border border-[#e5e7eb] rounded-[12px] p-[33px] flex flex-col gap-[6px] transition-all duration-400 ease-out hover:-translate-y-2 hover:border-[#4a83f2]/25 hover:shadow-[0_12px_32px_-8px_rgba(74,131,242,0.15)]">
                {/* 图标 */}
                <div className="w-[48px] h-[48px] mb-0 transition-transform duration-400 ease-out group-hover:scale-110">
                  <img src={item.icon} alt="" className="w-full h-full" />
                </div>

                {/* 指标 */}
                <div className="pt-[14px]">
                  <div className="flex items-baseline">
                    <span
                      className="text-[28px] font-semibold leading-[28px] tracking-[-0.7px] text-[#4a83f2] transition-colors duration-300 group-hover:text-[#3d6dd9]"
                      style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                    >
                      {item.metric}
                    </span>
                    {item.unit && (
                      <span
                        className="text-[13px] font-medium leading-[19.5px] text-[#606266] ml-[3px]"
                        style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                      >
                        {item.unit}
                      </span>
                    )}
                  </div>
                </div>

                {/* 标题 */}
                <div>
                  <h3
                    className="text-[14px] font-semibold leading-[18.2px] text-[#303133]"
                    style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* 描述 */}
                <div className="pt-[1.24px]">
                  <p
                    className="text-[13px] font-medium leading-[22.1px] text-[#606266]/80"
                    style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                  >
                    {item.content}
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

export default Commitment;
