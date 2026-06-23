const Glory = () => {
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
              荣耀
            </h2>
            <p
              className="text-[16px] text-[#606266]/60 leading-[20px]"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              以专业赢得信赖，以实力铸就荣誉
            </p>
          </div>
          <img src="/images/common/title-deco-right.png" alt="" className="w-[112px] h-[21px]" />
        </div>

        {/* 荣誉卡片 */}
        <div className="group bg-white border border-[#e5e7eb] rounded-[12px] py-[41px] px-[256px] transition-all duration-400 ease-out hover:-translate-y-2 hover:border-[#4a83f2]/40 hover:shadow-[0_12px_32px_-4px_rgba(74,131,242,0.15)]">
          <div className="max-w-[640px] w-[640px] h-[303px] relative">
            {/* 图标 */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[120px] h-[120px] transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
              <img src="/images/Glory/icon.png" alt="" className="w-full h-full object-contain" />
            </div>

            {/* 标题 */}
            <div className="absolute left-0 right-0 top-[120px] pt-[16px] text-center whitespace-nowrap">
              <span
                className="text-[28px] font-semibold leading-[40px] text-[#303133] transition-colors duration-300"
                style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
              >
                连续多年位居行业
              </span>
              <span
                className="text-[32px] font-semibold leading-[40px] text-[#4a83f2] group-hover:animate-[top3Pulse_2s_ease-in-out_infinite]"
                style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
              >
                {` TOP3`}
              </span>
            </div>

            {/* 描述 */}
            <div className="absolute left-0 right-0 top-[184px] pb-[16px] text-center">
              <p
                className="text-[15px] font-medium leading-[27px] text-[#606266]"
                style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
              >
                多次荣获"优秀供应商奖"，持续以高质量交付和专业服务赢得客户长期信赖
              </p>
            </div>

            {/* 分割线 */}
            <div className="absolute left-[260px] right-[260px] top-[243px] h-px bg-[#e5e7eb]" />

            {/* 标签 */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[276.05px] flex items-center justify-center gap-[8px] px-[17px] py-[5px] rounded-full bg-[#4a83f2]/[0.06] border border-[#4a83f2]/[0.15]">
              <div className="w-[8px] h-[8px] rounded-full bg-[#4a83f2]/40" />
              <span
                className="text-[11px] font-semibold leading-[16.5px] tracking-[0.22px] text-[#4a83f2]"
                style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
              >
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
