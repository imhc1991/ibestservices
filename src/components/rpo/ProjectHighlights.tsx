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
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <section ref={sectionRef} className="relative py-[96px] bg-white overflow-hidden">
      {/* 背景 - 透视隧道网格 */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
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

          {/* 顶面 */}
          <g clipPath="url(#clip-top)">
            {Array.from({ length: 18 }, (_, i) => {
              const t = (i + 1) / 19;
              const edgeX = t * 1200;
              const centerX = 600 + (edgeX - 600) * 0.25;
              return <line key={`t-${i}`} x1={edgeX} y1={0} x2={centerX} y2={400} stroke="url(#fade-top)" strokeWidth="1" />;
            })}
          </g>

          {/* 底面 */}
          <g clipPath="url(#clip-bottom)">
            {Array.from({ length: 18 }, (_, i) => {
              const t = (i + 1) / 19;
              const edgeX = t * 1200;
              const centerX = 600 + (edgeX - 600) * 0.25;
              return <line key={`b-${i}`} x1={edgeX} y1={800} x2={centerX} y2={400} stroke="url(#fade-bottom)" strokeWidth="1" />;
            })}
          </g>

          {/* 左面 */}
          <g clipPath="url(#clip-left)">
            {Array.from({ length: 12 }, (_, i) => {
              const t = (i + 1) / 13;
              const edgeY = t * 800;
              const centerY = 400 + (edgeY - 400) * 0.25;
              return <line key={`l-${i}`} x1={0} y1={edgeY} x2={600} y2={centerY} stroke="url(#fade-left)" strokeWidth="1" />;
            })}
          </g>

          {/* 右面 */}
          <g clipPath="url(#clip-right)">
            {Array.from({ length: 12 }, (_, i) => {
              const t = (i + 1) / 13;
              const edgeY = t * 800;
              const centerY = 400 + (edgeY - 400) * 0.25;
              return <line key={`r-${i}`} x1={1200} y1={edgeY} x2={600} y2={centerY} stroke="url(#fade-right)" strokeWidth="1" />;
            })}
          </g>

          {/* 同心矩形 */}
          {Array.from({ length: 5 }, (_, i) => {
            const scale = 1 - i * 0.18;
            const w = 1200 * scale;
            const h = 800 * scale;
            const x = (1200 - w) / 2;
            const y = (800 - h) / 2;
            return (
              <rect
                key={`rect-${i}`}
                x={x} y={y} width={w} height={h}
                fill="none"
                stroke={`rgba(74,131,242,${0.08 - i * 0.015})`}
                strokeWidth="1"
                rx="2"
              />
            );
          })}
        </svg>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-[100px]">
        {/* 标题区 */}
        <div className="flex items-center justify-center mb-[64px] min-w-[642px]">
          <img src={`${import.meta.env.BASE_URL}images/common/title-deco-left.png`} alt="" className="w-[112px] h-[21px]" />
          <div className="flex flex-col items-center mx-4">
            <h2
              className="text-[32px] font-medium leading-[38px] text-[#303133] mb-[13px]"
              style={{ fontFamily: 'PingFangSC-Medium, "PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              项目亮点
            </h2>
            <p
              className="text-[16px] text-[#606266]/60 leading-[20px]"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              以专业服务赋能招聘，用高效交付创造价值
            </p>
          </div>
          <img src={`${import.meta.env.BASE_URL}images/common/title-deco-right.png`} alt="" className="w-[112px] h-[21px]" />
        </div>

        {/* 亮点网格 - 2列3行，滚动载入动画 */}
        <div className="grid grid-cols-2 gap-x-[48px] gap-y-[40px]">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className="group flex items-start gap-[20px] py-[4px]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 500ms cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 80}ms`
              }}
            >
              {/* 序号 */}
              <span
                className="flex-shrink-0 text-[32px] font-medium leading-[32px] text-[#4a83f2]/35 tabular-nums transition-colors duration-300 group-hover:text-[#4a83f2]/55"
                style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* 文案区 */}
              <div className="pt-[4px]">
                <h3
                  className="text-[17px] font-semibold leading-[25.5px] text-[#1a1a2e] mb-[6px] transition-colors duration-300 group-hover:text-[#4a83f2]"
                  style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                >
                  {item.keyword}
                </h3>
                <p
                  className="text-[14px] font-medium leading-[23.8px] text-[#606266]/75"
                  style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                >
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
