const SERVICE_CATEGORIES = [
  {
    id: 1,
    title: '中高端人才寻访',
    description: '专注于中高端岗位的人才搜寻与推荐服务',
    number: '01'
  },
  {
    id: 2,
    title: 'RPO招聘流程外包',
    description: '提供全流程或部分流程的招聘外包服务',
    number: '02'
  },
  {
    id: 3,
    title: '招聘团队驻场服务',
    description: '派驻专业招聘团队到企业现场提供服务',
    number: '03'
  }
] as const;

const ServiceCategories = () => {
  return (
    <section className="relative py-[54px] bg-white overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 right-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-[#4a83f2]/5 to-transparent" />
      <div className="absolute bottom-[20%] left-[5%] w-24 h-24 rounded-full bg-gradient-to-tl from-[#f6c437]/8 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
          {SERVICE_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="group relative"
            >
              {/* 卡片主体 */}
              <div className="relative h-full border border-gray-200 rounded-[8px] p-[26px] bg-white transition-all duration-300 hover:border-[#4a83f2] hover:-translate-y-1">
                {/* 序号装饰 */}
                <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-gradient-to-br from-[#4a83f2]/10 to-[#2f6df6]/5 flex items-center justify-center border border-[#4a83f2]/20">
                  <span className="text-[20px] font-bold text-[#4a83f2]/60">
                    {category.number}
                  </span>
                </div>

                {/* 顶部装饰条 */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4a83f2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* 内容区 */}
                <div className="relative space-y-[18px] pt-[10px]">
                  {/* 图形装饰 */}
                  <div className="flex items-center gap-[10px]">
                    <div className="w-10 h-10 rounded-[8px] bg-[#4a83f2]/8 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-[4px] border-2 border-[#4a83f2]/40" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#4a83f2]/15 to-transparent" />
                  </div>

                  <h3 className="text-[20px] font-semibold leading-[24px] text-[#606266]">
                    {category.title}
                  </h3>

                  <p className="text-base text-[#606266]/70 leading-[1.8]">
                    {category.description}
                  </p>

                  {/* 底部装饰点 */}
                  <div className="flex items-center gap-[6px] pt-[10px]">
                    <div className="w-[6px] h-[6px] rounded-full bg-[#4a83f2]/30 group-hover:bg-[#4a83f2] transition-colors duration-300" />
                    <div className="w-[4px] h-[4px] rounded-full bg-[#4a83f2]/20 group-hover:bg-[#4a83f2]/60 transition-colors duration-300" />
                    <div className="w-[3px] h-[3px] rounded-full bg-[#4a83f2]/15 group-hover:bg-[#4a83f2]/40 transition-colors duration-300" />
                  </div>
                </div>
              </div>

              {/* hover 时的背景光晕效果 */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#4a83f2]/0 to-[#4a83f2]/0 rounded-[8px] opacity-0 group-hover:from-[#4a83f2]/3 group-hover:to-[#2f6df6]/2 group-hover:opacity-100 transition-all duration-300 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
