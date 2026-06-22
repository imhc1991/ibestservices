const CASE_STUDY = {
  title: '亚太地区某智能语音与人工智能龙头企业',
  tags: ['上市公司', '互联网', '1000人+']
} as const;

const CaseStudy = () => {
  return (
    <section className="relative py-[90px] bg-gradient-to-b from-[#fafbff] via-white to-[#fafbff] overflow-hidden">
      {/* 背景插图 */}
      <div className="absolute left-1/2 top-[calc(50%+33px)] -translate-x-1/2 -translate-y-1/2 w-[1920px] h-[839px] pointer-events-none">
        <img
          src="/images/CaseStudy/case-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-[64px] flex flex-col gap-[64px]">
        {/* 标题区 */}
        <div className="flex items-center justify-center min-w-[642px]">
          <img src="/images/common/title-deco-left.png" alt="" className="w-[112px] h-[21px]" />
          <div className="flex flex-col items-center mx-4">
            <h2
              className="text-[32px] font-semibold leading-[38px] text-[#303133] mb-[13px]"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              合作案例
            </h2>
            <p
              className="text-[16px] text-[#606266]/60 leading-[20px]"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              携手行业领军企业，共创人才价值
            </p>
          </div>
          <img src="/images/common/title-deco-right.png" alt="" className="w-[112px] h-[21px]" />
        </div>

        {/* 案例卡片 */}
        <div className="max-w-[1024px] w-full mx-auto">
          <div className="rounded-[16px] overflow-hidden">
            <div className="pt-[24px] pb-[64px] px-[64px] flex flex-col gap-[32px]">
              {/* 标题 */}
              <div className="flex items-center gap-[10px]">
                <div className="w-2 h-2 rounded-full bg-[#4a83f2]" />
                <h3
                  className="text-[26px] font-semibold leading-[32px] text-[#303133]"
                  style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                >
                  {CASE_STUDY.title}
                </h3>
              </div>

              {/* 标签 */}
              <div className="flex items-start gap-[10px]">
                {CASE_STUDY.tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-[8px] px-[17px] py-[5px] rounded-full border border-white bg-gradient-to-r from-white to-[#e6ebff]"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#4a83f2]/40" />
                    <span
                      className="text-[16px] leading-[24px] text-[#4a83f2]"
                      style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                    >
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
