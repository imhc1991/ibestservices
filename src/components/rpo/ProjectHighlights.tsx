import { useState, useEffect, useRef, useCallback } from 'react';

const HIGHLIGHTS = [
  { keyword: '专业团队', detail: '丰富的行业经验，深耕招聘领域' },
  { keyword: '快速响应', detail: '高效推进招聘流程，缩短招聘周期' },
  { keyword: '精准匹配', detail: '提高招聘成功率，降低试错成本' },
  { keyword: '成本优化', detail: '降低招聘成本，优化人力资源配置' },
  { keyword: '持续迭代', detail: '优化招聘策略，提升服务质量' },
  { keyword: '长期共赢', detail: '建立长期合作关系，共同成长' }
] as const;

const ProjectHighlights = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.8 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <section ref={sectionRef} className="relative py-[96px] bg-white overflow-hidden">
      {/* 背景 - 透视隧道网格（SVG实现） */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* 四个三角形裁剪区 - 防止相邻面线条重叠 */}
            <clipPath id="clip-top">
              <polygon points="0,0 1200,0 600,400" />
            </clipPath>
            <clipPath id="clip-bottom">
              <polygon points="0,800 1200,800 600,400" />
            </clipPath>
            <clipPath id="clip-left">
              <polygon points="0,0 0,800 600,400" />
            </clipPath>
            <clipPath id="clip-right">
              <polygon points="1200,0 1200,800 600,400" />
            </clipPath>
            {/* 渐变 - 线条从边缘到中心逐渐消失 */}
            <linearGradient id="fade-top" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(74,131,242,0.14)" />
              <stop offset="60%" stopColor="rgba(74,131,242,0.06)" />
              <stop offset="100%" stopColor="rgba(74,131,242,0)" />
            </linearGradient>
            <linearGradient id="fade-bottom" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="rgba(74,131,242,0.14)" />
              <stop offset="60%" stopColor="rgba(74,131,242,0.06)" />
              <stop offset="100%" stopColor="rgba(74,131,242,0)" />
            </linearGradient>
            <linearGradient id="fade-left" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(74,131,242,0.12)" />
              <stop offset="60%" stopColor="rgba(74,131,242,0.05)" />
              <stop offset="100%" stopColor="rgba(74,131,242,0)" />
            </linearGradient>
            <linearGradient id="fade-right" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="rgba(74,131,242,0.12)" />
              <stop offset="60%" stopColor="rgba(74,131,242,0.05)" />
              <stop offset="100%" stopColor="rgba(74,131,242,0)" />
            </linearGradient>
          </defs>

          {/* 顶面 - 从顶边向中心汇聚 */}
          <g clipPath="url(#clip-top)">
            {Array.from({ length: 18 }, (_, i) => {
              const t = (i + 1) / 19;
              const edgeX = t * 1200;
              const centerX = 600 + (edgeX - 600) * 0.25;
              return <line key={`t-${i}`} x1={edgeX} y1={0} x2={centerX} y2={400} stroke="url(#fade-top)" strokeWidth="1" />;
            })}
          </g>

          {/* 底面 - 从底边向中心汇聚 */}
          <g clipPath="url(#clip-bottom)">
            {Array.from({ length: 18 }, (_, i) => {
              const t = (i + 1) / 19;
              const edgeX = t * 1200;
              const centerX = 600 + (edgeX - 600) * 0.25;
              return <line key={`b-${i}`} x1={edgeX} y1={800} x2={centerX} y2={400} stroke="url(#fade-bottom)" strokeWidth="1" />;
            })}
          </g>

          {/* 左面 - 从左边向中心汇聚 */}
          <g clipPath="url(#clip-left)">
            {Array.from({ length: 12 }, (_, i) => {
              const t = (i + 1) / 13;
              const edgeY = t * 800;
              const centerY = 400 + (edgeY - 400) * 0.25;
              return <line key={`l-${i}`} x1={0} y1={edgeY} x2={600} y2={centerY} stroke="url(#fade-left)" strokeWidth="1" />;
            })}
          </g>

          {/* 右面 - 从右边向中心汇聚 */}
          <g clipPath="url(#clip-right)">
            {Array.from({ length: 12 }, (_, i) => {
              const t = (i + 1) / 13;
              const edgeY = t * 800;
              const centerY = 400 + (edgeY - 400) * 0.25;
              return <line key={`r-${i}`} x1={1200} y1={edgeY} x2={600} y2={centerY} stroke="url(#fade-right)" strokeWidth="1" />;
            })}
          </g>

          {/* 同心矩形 - 越小越淡，模拟远处消失 */}
          {Array.from({ length: 5 }, (_, i) => {
            const scale = 1 - i * 0.16;
            const x = 600 - (600 * scale);
            const y = 400 - (400 * scale);
            const w = 1200 * scale;
            const h = 800 * scale;
            const opacity = 0.12 - i * 0.02;
            return <rect key={`rect-${i}`} x={x} y={y} width={w} height={h} fill="none" stroke={`rgba(74,131,242,${opacity})`} strokeWidth="1" rx="2" />;
          })}
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* 标题区 - 左对齐，打破居中单调 */}
        <div className="mb-[64px]">
          <p
            className="text-[13px] font-medium tracking-[2px] uppercase text-[#4a83f2]/70 mb-[16px]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'all 600ms cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Project Highlights
          </p>
          <h2
            className="text-[28px] lg:text-[32px] font-bold leading-[1.2] text-[#1a1a2e]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 600ms cubic-bezier(0.16, 1, 0.3, 1) 80ms'
            }}
          >
            项目亮点
          </h2>
          <div
            className="mt-[16px] w-[48px] h-[3px] rounded-full bg-[#4a83f2]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'all 700ms cubic-bezier(0.16, 1, 0.3, 1) 160ms'
            }}
          />
        </div>

        {/* 亮点网格 - 2x3 非对称权重 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[48px] gap-y-[40px]">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className="group relative flex items-start gap-[20px] py-[4px]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 500ms cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 80}ms`
              }}
            >
              {/* 序号 - 大号半透明作为视觉锚点 */}
              <span className="flex-shrink-0 text-[32px] font-bold leading-none text-[#4a83f2]/15 tabular-nums select-none transition-colors duration-300 group-hover:text-[#4a83f2]/35">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* 文案区 */}
              <div className="pt-[4px]">
                <h3 className="text-[17px] font-semibold text-[#1a1a2e] mb-[6px] transition-colors duration-300 group-hover:text-[#4a83f2]">
                  {item.keyword}
                </h3>
                <p className="text-[14px] leading-[1.7] text-[#606266]/75">
                  {item.detail}
                </p>
              </div>

              {/* 底部分隔 - 仅移动端可见 */}
              <div className="absolute bottom-[-20px] left-0 right-0 h-px bg-[#e5e7eb]/60 md:hidden" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
