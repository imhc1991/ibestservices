import { Search, Users, Briefcase, Target } from 'lucide-react';

const SERVICE_SCOPE = [
  { title: '招聘全流程', icon: Search, desc: '从需求分析到入职全程托管' },
  { title: '精链人才推荐', icon: Target, desc: '精准匹配高质量候选人' },
  { title: 'RPO服务', icon: Briefcase, desc: '招聘流程外包定制方案' },
  { title: '猎头服务', icon: Users, desc: '中高端人才定向寻访' }
];

const ServiceScope = () => {
  return (
    <section className="relative py-[54px] bg-[#f8faff] overflow-hidden">
      <div className="absolute bottom-[10%] right-[8%] w-32 h-32 rounded-full bg-gradient-to-tl from-[#4a83f2]/4 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[24px] font-bold leading-[29px] text-[#606266] mb-[26px] text-center">
          服务范围
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[18px]">
          {SERVICE_SCOPE.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group">
                <div className="relative bg-white border border-gray-200 rounded-[8px] p-[26px] text-center transition-all duration-300 hover:border-[#4a83f2] hover:-translate-y-1 overflow-hidden">
                  {/* 顶部装饰线 */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4a83f2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* 图标 */}
                  <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-[#4a83f2]/10 to-[#2f6df6]/5 flex items-center justify-center mb-[18px] group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-[#4a83f2]" strokeWidth={1.5} />
                  </div>

                  <p className="text-base text-[#606266] font-medium mb-[10px]">{service.title}</p>
                  <p className="text-sm text-[#606266]/60">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceScope;
