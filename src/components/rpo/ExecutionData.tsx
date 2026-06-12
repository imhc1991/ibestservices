import { useState, useEffect, useRef, useCallback } from 'react';

const EXECUTION_DATA = [
  { label: '成功推荐', value: 4265, unit: '份' },
  { label: '总安排面试', value: 1661, unit: '轮次' },
  { label: '终试通过', value: 184, unit: '人' },
  { label: 'Offer', value: 150, unit: '人' },
  { label: '入职', value: 112, unit: '人' }
] as const;

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
}

function AnimatedNumber({ value, unit, started, delay }: { value: number; unit: string; started: boolean; delay: number }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!started) return;
    const timer = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(timer);
  }, [started, delay]);

  const count = useCountUp(value, 1800, active);

  return (
    <div className="mb-[14px]">
      <span className="text-[36px] lg:text-[42px] font-bold leading-none tracking-tight transition-all duration-500 group-hover:text-[#f6c437]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
        {active ? count.toLocaleString() : '0'}
      </span>
      <span className="text-[14px] font-normal ml-[6px] text-white/50" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
        {unit}
      </span>
    </div>
  );
}

const ExecutionData = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <section ref={sectionRef} className="relative py-[100px] bg-gradient-to-br from-[#2a5cc8] via-[#3568d4] to-[#4a83f2] text-white overflow-hidden">
      {/* 背景纹理 - 斜线网格 */}
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 1px, transparent 32px)' }} />

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* 标题区 */}
        <div className="text-center mb-[64px]">
          <div className="inline-flex items-center gap-3 mb-[16px]">
            <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-white/40" />
            <h2 className="text-[24px] font-bold leading-[29px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
              执行数据
            </h2>
            <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-white/40" />
          </div>
          <p className="text-sm text-white/50" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
            以数据驱动招聘，用结果证明实力
          </p>
        </div>

        {/* 数据展示 - 渐变描边面板 */}
        <div className="relative p-[1px] rounded-[16px] bg-gradient-to-br from-white/50 via-white/[0.08] to-white/40" style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.6)' }}>
          <div className="rounded-[15px] overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.006) 50%, rgba(255,255,255,0.008) 100%)', boxShadow: 'inset 0 0 30px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.08)' }}>
          <div className="flex flex-col lg:flex-row items-stretch justify-center" style={{ backdropFilter: 'blur(1.5px)' }}>
            {EXECUTION_DATA.map((item, index) => (
              <div key={index} className="group relative flex-1">
                {/* 分隔线 */}
                {index > 0 && (
                  <div className="hidden lg:block absolute left-0 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                )}
                {index > 0 && (
                  <div className="lg:hidden absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                )}

                {/* 数据单元 */}
                <div className="relative h-full px-[24px] py-[40px] text-center transition-all duration-400 hover:bg-white/[0.04]">
                  {/* 数值 - 滚动动画 */}
                  <AnimatedNumber
                    value={item.value}
                    unit={item.unit}
                    started={isVisible}
                    delay={index * 150}
                  />

                  {/* 标签 */}
                  <p className="text-[14px] text-white/65 tracking-[0.5px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>

        {/* 底部注释 */}
        <div className="mt-[40px] text-center">
          <span className="inline-flex items-center gap-2 text-[12px] text-white/30">
            <div className="w-[6px] h-[6px] rounded-full bg-[#f6c437]/40" />
            数据持续更新中
          </span>
        </div>
      </div>
    </section>
  );
};

export default ExecutionData;
