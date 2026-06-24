const SERVICE_CATEGORIES = [
  {
    id: 1,
    title: '中高端人才寻访',
    number: '01',
    image: 'images/ServiceCategories/category-01.png',
  },
  {
    id: 2,
    title: 'RPO招聘流程外包',
    number: '02',
    image: 'images/ServiceCategories/category-02.png',
  },
  {
    id: 3,
    title: '招聘团队驻场服务',
    number: '03',
    image: 'images/ServiceCategories/category-03.png',
  },
] as const;

const ServiceCategories = () => {
  return (
    <section className="relative py-[96px] bg-gradient-to-b from-white via-[#fafbff] to-white overflow-hidden">
      {/* 背景装饰 - 左侧 */}
      <img
        src={`${import.meta.env.BASE_URL}images/ServiceCategories/bg-deco-left.svg`}
        alt=""
        className="absolute top-[-86px] left-[-113px] w-[443px] h-[475px] pointer-events-none"
        style={{ opacity: 0.8 }}
      />
      {/* 背景装饰 - 右侧 */}
      <img
        src={`${import.meta.env.BASE_URL}images/ServiceCategories/bg-deco-right.svg`}
        alt=""
        className="absolute top-[200px] right-[-120px] w-[380px] h-[380px] pointer-events-none"
      />

      <div className="relative max-w-[1280px] mx-auto px-[160px]">
        {/* 区块标题 */}
        <div className="flex flex-col items-center gap-[64px]">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-0">
              <img src={`${import.meta.env.BASE_URL}images/common/title-deco-left.png`} alt="" className="w-[112px] h-[21px]" />
              <div className="flex flex-col items-center mx-4">
                <h2
                  className="text-[32px] font-semibold leading-[38px] text-[#303133] mb-[13px]"
                  style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                >
                  业务分类
                </h2>
                <p
                  className="text-[16px] text-[#606266]/60 leading-[20px]"
                  style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                >
                  三大核心业务领域，全方位满足企业招聘需求
                </p>
              </div>
              <img src={`${import.meta.env.BASE_URL}images/common/title-deco-right.png`} alt="" className="w-[112px] h-[21px]" />
            </div>
          </div>

          {/* 卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[26px] w-full">
            {SERVICE_CATEGORIES.map((category) => (
              <div key={category.id} className="group relative">
                {/* 卡片主体 */}
                <div className="relative bg-white border border-[#e5e7eb] rounded-[12px] pt-[9px] pb-[25px] px-[25px] transition-all duration-500 hover:border-[#4a83f2] hover:-translate-y-2">
                  {/* 顶部装饰线 */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#4a83f2] via-[#2f6df6] to-[#4a83f2] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[12px]" />

                  {/* 序号装饰 */}
                  <div
                    className="absolute -top-4 -right-4 w-16 h-16 rounded-full backdrop-blur-[4px] border border-[#4a83f2]/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-[#4a83f2]/40"
                    style={{ backgroundImage: 'linear-gradient(135deg, rgba(74,131,242,0.1) 0%, rgba(74,131,242,0.05) 50%, rgba(74,131,242,0) 100%)' }}
                  >
                    <span
                      className="text-[20px] font-semibold text-[#4a83f2] leading-[30px]"
                      style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                    >
                      {category.number}
                    </span>
                  </div>

                  {/* 内容区 */}
                  <div className="flex flex-col gap-[18px] pt-[10px]">
                    {/* 图标 + 分割线 */}
                    <div className="flex items-center gap-[10px]">
                      <img
                        src={`${import.meta.env.BASE_URL}${category.image}`}
                        alt={category.title}
                        className="w-[120px] h-[120px] object-contain"
                      />
                      <div className="flex-1 h-[2px] bg-gradient-to-r from-[#4a83f2]/20 via-[#4a83f2]/10 to-transparent" />
                    </div>

                    {/* 标题 */}
                    <h3
                      className="text-[20px] font-semibold leading-[24px] text-[#606266] transition-colors duration-500 group-hover:text-[#4a83f2]"
                      style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                    >
                      {category.title}
                    </h3>

                    {/* 底部装饰点 */}
                    <div className="flex items-center gap-[6px] pt-[18px]">
                      <div className="w-2 h-2 rounded-full bg-[#4a83f2]/30 transition-all duration-300 group-hover:w-3 group-hover:bg-[#4a83f2]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4a83f2]/20 transition-all duration-300 delay-75 group-hover:w-2.5 group-hover:bg-[#4a83f2]/70" />
                      <div className="w-1 h-1 rounded-full bg-[#4a83f2]/15 transition-all duration-300 delay-150 group-hover:w-2 group-hover:bg-[#4a83f2]/50" />
                    </div>
                  </div>
                </div>

                {/* hover 光晕效果 */}
                <div className="absolute -inset-2 bg-transparent rounded-[12px] opacity-0 blur-[12px] transition-all duration-500 -z-10 group-hover:bg-black/0 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
