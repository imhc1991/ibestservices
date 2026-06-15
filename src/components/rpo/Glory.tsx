import { useState, useEffect, useRef, useCallback } from 'react';
import { Award, TrendingUp, Users, Star } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    icon: Award,
    year: '2024',
    title: '优秀供应商奖',
    desc: '连续三年位居行业前三'
  },
  {
    icon: TrendingUp,
    year: '2023',
    title: '最佳合作伙伴',
    desc: '服务满意度 96%'
  },
  {
    icon: Users,
    year: '2022',
    title: '金牌服务商',
    desc: '累计服务企业 500+'
  }
] as const;

const Glory = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <section ref={sectionRef} className="relative py-[100px] bg-gradient-to-br from-[#fff9e6] via-white to-[#fff9e6] overflow-hidden">
      {/* 背景装饰 - 金色光晕与粒子 */}
      <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(246,196,55,0.08)_0%,transparent_70%)] blur-2xl" />
      <div className="absolute bottom-[15%] right-[8%] w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(74,131,242,0.06)_0%,transparent_70%)] blur-2xl" />

      {/* 漂浮星点 */}
      <div className="absolute top-[20%] right-[15%] w-1.5 h-1.5 rounded-full bg-[#f6c437]/40 animate-pulse" />
      <div className="absolute top-[60%] left-[12%] w-2 h-2 rounded-full bg-[#f6c437]/30 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-[25%] right-[25%] w-1 h-1 rounded-full bg-[#f6c437]/50 animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="relative max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* 标题区 */}
        <div className="text-center mb-[72px]">
          <div
            className="inline-flex items-center gap-3 mb-[20px]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 700ms cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <Star className="w-5 h-5 text-[#f6c437]" fill="#f6c437" />
            <h2 className="text-[28px] lg:text-[32px] font-bold leading-[1.2] text-[#1a1a2e]">
              荣耀时刻
            </h2>
            <Star className="w-5 h-5 text-[#f6c437]" fill="#f6c437" />
          </div>
          <p
            className="text-[15px] text-[#606266]/60"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'all 700ms cubic-bezier(0.16, 1, 0.3, 1) 100ms'
            }}
          >
            以专业赢得信赖，以实力铸就荣誉
          </p>
        </div>

        {/* 成就网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {ACHIEVEMENTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(24px)',
                  transition: `all 600ms cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 150}ms`
                }}
              >
                {/* 卡片 */}
                <div className="relative h-full bg-white border border-[#f6c437]/20 rounded-[16px] p-[32px] transition-all duration-500 hover:border-[#f6c437]/40 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(246,196,55,0.12)]">
                  {/* 顶部金色渐变条 */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#f6c437] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* 年份大号水印 */}
                  <div className="absolute top-4 right-4 text-[72px] font-bold leading-none text-[#f6c437]/[0.06] select-none pointer-events-none" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {item.year.slice(-2)}
                  </div>

                  {/* 图标徽章 */}
                  <div className="relative mb-[24px]">
                    <div className="inline-flex items-center justify-center w-[56px] h-[56px] rounded-[14px] bg-gradient-to-br from-[#f6c437]/15 to-[#f6c437]/5 border border-[#f6c437]/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="w-[28px] h-[28px] text-[#f6c437]" strokeWidth={1.5} />
                    </div>
                    {/* 光晕 */}
                    <div className="absolute inset-0 rounded-[14px] bg-[#f6c437]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </div>

                  {/* 年份标签 */}
                  <div className="inline-flex items-center gap-2 mb-[12px]">
                    <div className="w-[4px] h-[4px] rounded-full bg-[#f6c437]" />
                    <span className="text-[13px] font-semibold tracking-wider uppercase text-[#f6c437]">
                      {item.year}
                    </span>
                  </div>

                  {/* 标题 */}
                  <h3 className="text-[18px] font-bold text-[#1a1a2e] mb-[8px] transition-colors duration-300 group-hover:text-[#f6c437]">
                    {item.title}
                  </h3>

                  {/* 描述 */}
                  <p className="text-[14px] leading-[1.7] text-[#606266]/75">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部装饰线 */}
        <div
          className="flex items-center justify-center gap-[8px] mt-[64px]"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) 800ms'
          }}
        >
          <div className="w-[40px] h-[2px] bg-gradient-to-r from-transparent to-[#f6c437]/30" />
          <Star className="w-3 h-3 text-[#f6c437]/40" fill="#f6c437" />
          <div className="w-[40px] h-[2px] bg-gradient-to-l from-transparent to-[#f6c437]/30" />
        </div>
      </div>
    </section>
  );
};

export default Glory;
