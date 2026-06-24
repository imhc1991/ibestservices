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
      <span
        className="text-[42px] font-semibold leading-[42px] tracking-[-1.05px] transition-all duration-500 group-hover:text-[#f6c437]"
        style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
      >
        {active ? count.toLocaleString() : '0'}
      </span>
      <span
        className="text-[14px] leading-[21px] ml-[8px] text-white/50"
        style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
      >
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
    <section
      ref={sectionRef}
      className="relative py-[96px] text-white overflow-hidden"
      style={{
        background: 'linear-gradient(161.07deg, #2A5CC8 24.434%, #3568D4 51.087%, #6093F6 77.741%)'
      }}
    >
      {/* 背景纹理 - 斜线网格 */}
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 1px, transparent 32px)' }} />

      {/* 背景装饰图片 - image 17 左上旋转 */}
      <div className="absolute top-[-358.73px] left-[-489.19px] w-[1560.822px] h-[1560.822px] pointer-events-none">
        <div className="w-full h-full flex items-center justify-center">
          <div className="-rotate-[30deg] w-[1142.601px] h-[1142.601px] opacity-30">
            <img src={`${import.meta.env.BASE_URL}images/ExecutionData/bg-image-17.png`} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* 背景装饰图片 - image 16 右上 */}
      <div className="absolute top-[-66.91px] left-[1008px] w-[931px] h-[806px] opacity-30 pointer-events-none">
        <img src={`${import.meta.env.BASE_URL}images/ExecutionData/bg-image-16.png`} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-[64px]">
        {/* 标题区 */}
        <div className="flex items-center justify-center mb-[65px]">
          <img src={`${import.meta.env.BASE_URL}images/ExecutionData/title-deco-left.png`} alt="" className="w-[112px] h-[21px]" />
          <div className="flex flex-col items-center mx-4">
            <h2
              className="text-[32px] font-semibold leading-[38px] mb-[13px]"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              执行数据
            </h2>
            <p
              className="text-[16px] text-white/50 leading-[20px]"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              以数据驱动招聘，用结果证明实力
            </p>
          </div>
          <img src={`${import.meta.env.BASE_URL}images/ExecutionData/title-deco-right.png`} alt="" className="w-[112px] h-[21px]" />
        </div>

        {/* 数据展示 - 渐变描边面板 */}
        <div
          className="relative p-[1px] rounded-[16px]"
          style={{
            backgroundImage: 'linear-gradient(172.12deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.4) 100%)'
          }}
        >
          <div className="absolute inset-0 rounded-[16px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.6)]" />
          <div className="relative rounded-[15px] overflow-hidden">
            <div
              className="absolute inset-0 rounded-[15px] pointer-events-none"
              style={{ backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.01)' }}
            />
            <div
              className="relative flex items-stretch justify-center"
              style={{ backdropFilter: 'blur(0.75px)' }}
            >
            {EXECUTION_DATA.map((item, index) => (
              <div key={index} className="group relative flex-1">
                {/* 分隔线 */}
                {index > 0 && (
                  <div className="absolute left-0 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
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
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_30px_0px_rgba(255,255,255,0.04),inset_0px_1px_0px_0px_rgba(255,255,255,0.08)]" />
          </div>
        </div>

        {/* 底部注释 */}
        <div className="mt-[65px] text-center">
          <span className="inline-flex items-center gap-2 text-[12px] leading-[18px] text-white/30">
            <div className="w-[6px] h-[6px] rounded-full bg-[#f6c437]/40" />
            数据持续更新中
          </span>
        </div>
      </div>
    </section>
  );
};

export default ExecutionData;
