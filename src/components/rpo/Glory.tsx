import { Award } from 'lucide-react';

const Glory = () => {
  return (
    <section className="relative py-[96px] bg-[#f8faff] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">

        {/* Section 标题 */}
        <div className="mb-[56px]">
          <div className="text-[11px] text-[#A0A0A0] tracking-[0.12em] uppercase mb-[12px] font-medium" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
            Glory
          </div>
          <h2 className="text-[28px] font-semibold leading-[1.15] text-[#303133] mb-[12px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif', fontWeight: 600 }}>
            荣誉
          </h2>
          <p className="text-[15px] text-[#606266] leading-[1.7] max-w-[560px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
            以专业赢得信赖，以实力铸就荣誉
          </p>
        </div>

        {/* 荣誉声明 — 单一信息，给予充分呼吸空间 */}
        <div className="bg-white border border-[#e5e7eb] rounded-[12px] py-[64px] px-[48px] md:py-[80px] md:px-[64px]">
          <div className="max-w-[640px] mx-auto text-center">

            {/* 图标 */}
            <div className="inline-flex items-center justify-center w-[56px] h-[56px] rounded-[12px] bg-[#4a83f2]/[0.06] border border-[#4a83f2]/[0.10] mb-[32px]">
              <Award className="w-[28px] h-[28px] text-[#4a83f2]" strokeWidth={1.5} />
            </div>

            {/* 核心声明 */}
            <h3 className="text-[24px] md:text-[28px] font-semibold text-[#303133] leading-[1.4] mb-[16px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif', fontWeight: 600 }}>
              连续多年位居行业前三
            </h3>

            {/* 补充说明 */}
            <p className="text-[15px] text-[#606266] leading-[1.8]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
              多次荣获"优秀供应商奖"，持续以高质量交付和专业服务赢得客户长期信赖
            </p>

            {/* Hairline */}
            <div className="h-[1px] bg-[#e5e7eb] my-[32px] max-w-[120px] mx-auto" />

            {/* 标签 */}
            <div className="inline-flex items-center gap-[6px] px-[10px] py-[4px] rounded-[4px] bg-[#4a83f2]/[0.06] border border-[#4a83f2]/[0.15]">
              <div className="w-[5px] h-[5px] rounded-full bg-[#4a83f2]" />
              <span className="text-[11px] text-[#4a83f2] font-semibold tracking-[0.02em]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif', fontWeight: 600 }}>
                优秀供应商奖
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glory;
