import { Check } from 'lucide-react';

const HIGHLIGHTS = [
  '专业的招聘团队，丰富的行业经验',
  '快速响应，高效推进招聘流程',
  '精准匹配，提高招聘成功率',
  '降低招聘成本，优化人力资源配置',
  '持续优化招聘策略，提升服务质量',
  '建立长期合作关系，共同成长'
] as const;

const ProjectHighlights = () => {
  return (
    <section className="relative py-[54px] bg-white overflow-hidden">
      <div className="absolute bottom-[10%] left-[5%] w-24 h-24 rounded-full bg-gradient-to-tr from-[#4a83f2]/4 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[24px] font-bold leading-[29px] text-[#606266] mb-[26px] text-center">
          项目亮点
        </h2>

        {/* 使用3列Bento风格网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
          {HIGHLIGHTS.map((highlight, index) => (
            <div key={index} className="group">
              <div className="relative h-full border border-gray-200 rounded-[8px] p-[26px] bg-white transition-all duration-300 hover:border-[#4a83f2] hover:-translate-y-1 overflow-hidden">
                {/* 顶部装饰线 */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4a83f2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-[14px]">
                  {/* 勾选图标 */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#4a83f2]/10 to-[#2f6df6]/5 flex items-center justify-center group-hover:from-[#4a83f2] group-hover:to-[#2f6df6] transition-all duration-300">
                    <Check className="w-4 h-4 text-[#4a83f2] group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                  </div>
                  <p className="text-base text-[#606266] leading-[1.8]">{highlight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
