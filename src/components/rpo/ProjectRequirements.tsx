const REQUIREMENTS = [
  { label: '合作岗位', value: '技术类、产品类、运营类', number: '01' },
  { label: '服务周期', value: '2021年至今', number: '02' },
  { label: '需求数量', value: '持续合作', number: '03' },
  { label: '岗位要求', value: '本科及以上学历', number: '04' },
  { label: '需求城市', value: '全国主要城市', number: '05' },
  { label: '合作形式', value: 'RPO + 猎头', number: '06' }
] as const;

const ProjectRequirements = () => {
  return (
    <section className="relative py-[54px] bg-white overflow-hidden">
      <div className="absolute top-[15%] right-[3%] w-28 h-28 rounded-full bg-gradient-to-br from-[#f6c437]/6 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[24px] font-bold leading-[29px] text-[#606266] mb-[26px] text-center">
          项目需求
        </h2>

        {/* 使用横向表格式布局，信息更结构化 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {REQUIREMENTS.map((req) => (
            <div key={req.number} className="group relative">
              <div className="relative h-full border border-gray-200 rounded-[8px] p-[26px] bg-white transition-all duration-300 hover:border-[#4a83f2] hover:-translate-y-1 overflow-hidden">
                {/* 背景序号 */}
                <div className="absolute -bottom-1 -right-1 text-[48px] font-bold text-[#4a83f2]/5 leading-none select-none pointer-events-none">
                  {req.number}
                </div>

                {/* 内容 */}
                <div className="relative space-y-[10px]">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-[6px] h-[6px] rounded-full bg-[#4a83f2]/40 group-hover:bg-[#4a83f2] transition-colors duration-300" />
                    <p className="text-sm text-[#606266]/60 uppercase tracking-[1px]">{req.label}</p>
                  </div>
                  <p className="text-[20px] font-semibold leading-[24px] text-[#606266] pl-[16px]">
                    {req.value}
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

export default ProjectRequirements;
