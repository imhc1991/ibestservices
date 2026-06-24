const CaseStudyDark = () => {
  return (
    <section className="relative py-[90px] bg-gradient-to-b from-[#fafbff] via-white via-50% to-[#fafbff] overflow-hidden">
      {/* 背景装饰图 */}
      <div className="absolute left-1/2 top-[calc(50%+51.58px)] -translate-x-1/2 -translate-y-1/2 w-[1920px] h-[606px] pointer-events-none">
        <img
          src={`${import.meta.env.BASE_URL}images/CaseStudyDark/background.png`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-[64px]">
        {/* 标题区 */}
        <div className="flex items-center justify-center mb-[64px] min-w-[642px]">
          <img
            src={`${import.meta.env.BASE_URL}images/CaseStudyDark/title-deco-left.png`}
            alt=""
            className="w-[112px] h-[21px]"
          />
          <div className="flex flex-col items-center mx-4">
            <h2
              className="text-[32px] font-semibold leading-[38px] text-white mb-[13px]"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              合作案例
            </h2>
            <p
              className="text-[16px] text-white/60 leading-[20px]"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              携手行业领军企业，共创人才价值
            </p>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}images/CaseStudyDark/title-deco-right.png`}
            alt=""
            className="w-[112px] h-[21px]"
          />
        </div>

        {/* 案例卡片 */}
        <div className="max-w-[1024px] mx-auto">
          <div className="rounded-[16px] overflow-hidden">
            <div className="bg-clip-padding border border-transparent px-[64px] pt-[32px] pb-[64px] flex flex-col gap-[32px] items-start">
              {/* 标题 - 渐变文字效果 */}
              <div className="pt-[8px]">
                <h3
                  className="text-[26px] font-semibold leading-[32px] bg-clip-text text-transparent bg-center bg-cover bg-no-repeat"
                  style={{
                    fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif',
                    backgroundImage: `url("${import.meta.env.BASE_URL}images/CaseStudyDark/gradient-text.png")`
                  }}
                >
                  亚太地区某智能语音与人工智能龙头企业
                </h3>
              </div>

              {/* 标签组 */}
              <div className="flex gap-[10px] items-start">
                <div className="flex items-center gap-[8px] px-[17px] py-[5px] rounded-full border border-white bg-gradient-to-r from-white to-[#e6ebff]">
                  <div className="w-[8px] h-[8px] rounded-full bg-[#4a83f2]" />
                  <span
                    className="text-[16px] leading-[24px] text-[#303133]"
                    style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                  >
                    上市公司
                  </span>
                </div>
                <div className="flex items-center gap-[8px] px-[17px] py-[5px] rounded-full border border-white bg-gradient-to-r from-white to-[#e6ebff]">
                  <div className="w-[8px] h-[8px] rounded-full bg-[#4a83f2]" />
                  <span
                    className="text-[16px] leading-[24px] text-[#303133]"
                    style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                  >
                    互联网
                  </span>
                </div>
                <div className="flex items-center gap-[8px] px-[17px] py-[5px] rounded-full border border-white bg-gradient-to-r from-white to-[#e6ebff]">
                  <div className="w-[8px] h-[8px] rounded-full bg-[#4a83f2]" />
                  <span
                    className="text-[16px] leading-[24px] text-[#303133]"
                    style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                  >
                    1000人+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDark;
