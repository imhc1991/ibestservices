const HIGHLIGHTS = [
  { keyword: '专业团队', detail: '丰富的行业经验，深耕招聘领域' },
  { keyword: '快速响应', detail: '高效推进招聘流程，缩短招聘周期' },
  { keyword: '精准匹配', detail: '提高招聘成功率，降低试错成本' },
  { keyword: '成本优化', detail: '降低招聘成本，优化人力资源配置' },
  { keyword: '持续迭代', detail: '优化招聘策略，提升服务质量' },
  { keyword: '长期共赢', detail: '建立长期合作关系，共同成长' }
] as const;

const ProjectHighlights = () => {
  return (
    <section
      className="relative py-[96px] overflow-hidden"
      style={{
        background: 'linear-gradient(182.06deg, #F0F6FF 6.216%, #FFFFFF 60.105%, #E6F0FF 96.032%)'
      }}
    >
      {/* 背景装饰网格 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1905 608"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.4 }}
        >
          <defs>
            <linearGradient id="grid-grad-h" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(74,131,242,0)" />
              <stop offset="50%" stopColor="rgba(74,131,242,0.15)" />
              <stop offset="100%" stopColor="rgba(74,131,242,0)" />
            </linearGradient>
            <linearGradient id="grid-grad-v" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(74,131,242,0)" />
              <stop offset="50%" stopColor="rgba(74,131,242,0.15)" />
              <stop offset="100%" stopColor="rgba(74,131,242,0)" />
            </linearGradient>
          </defs>

          {/* 透视网格 - 横向线条 */}
          {Array.from({ length: 13 }, (_, i) => {
            const y = (i / 12) * 608;
            const centerY = 304;
            const distFromCenter = Math.abs(y - centerY) / centerY;
            const scaleX = 0.4 + (1 - distFromCenter) * 0.6;
            const offsetX = ((1 - scaleX) / 2) * 1905;
            return (
              <line
                key={`h-${i}`}
                x1={offsetX}
                y1={y}
                x2={1905 - offsetX}
                y2={y}
                stroke="url(#grid-grad-h)"
                strokeWidth="1"
              />
            );
          })}

          {/* 透视网格 - 纵向线条 */}
          {Array.from({ length: 19 }, (_, i) => {
            const x = (i / 18) * 1905;
            const centerX = 952.5;
            const distFromCenter = Math.abs(x - centerX) / centerX;
            const scaleY = 0.4 + (1 - distFromCenter) * 0.6;
            const offsetY = ((1 - scaleY) / 2) * 608;
            return (
              <line
                key={`v-${i}`}
                x1={x}
                y1={offsetY}
                x2={x}
                y2={608 - offsetY}
                stroke="url(#grid-grad-v)"
                strokeWidth="1"
              />
            );
          })}

          {/* 同心矩形框 */}
          {Array.from({ length: 4 }, (_, i) => {
            const scale = 1 - (i + 1) * 0.16;
            const w = 1905 * scale;
            const h = 608 * scale;
            const x = (1905 - w) / 2;
            const y = (608 - h) / 2;
            const opacity = 0.1 - i * 0.02;
            return (
              <rect
                key={`rect-${i}`}
                x={x}
                y={y}
                width={w}
                height={h}
                fill="none"
                stroke={`rgba(74,131,242,${opacity})`}
                strokeWidth="1.5"
                rx="2"
              />
            );
          })}
        </svg>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-[64px]">
        {/* 标题区 */}
        <div className="flex items-center justify-center mb-[64px] min-w-[642px]">
          <img src="/images/common/title-deco-left.png" alt="" className="w-[112px] h-[21px]" />
          <div className="flex flex-col items-center mx-4">
            <h2
              className="text-[32px] font-semibold leading-[38px] text-[#303133] mb-[13px]"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
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
          <img src="/images/common/title-deco-right.png" alt="" className="w-[112px] h-[21px]" />
        </div>

        {/* 亮点网格 - 2列3行 */}
        <div className="grid grid-cols-2 gap-x-[48px] gap-y-[40px]">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className="group flex items-start gap-[20px] py-[4px]"
            >
              {/* 序号 */}
              <span
                className="flex-shrink-0 text-[32px] font-semibold leading-[32px] text-[#4a83f2]/35 tabular-nums transition-colors duration-300 group-hover:text-[#4a83f2]/55"
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
