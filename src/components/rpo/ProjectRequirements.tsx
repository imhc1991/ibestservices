const POSITIONS = [
  '算法', '产品经理', '研发', '项目经理', '销售', '数据挖掘',
  '架构师', '售前咨询', '设计负责人', '测试架构', '高级市场总监', '运维工程师'
];

const METRICS = [
  { label: '服务周期', value: '2025.01 - 2025.12' },
  { label: '需求城市', value: '合肥' },
  { label: '工作经验', value: '5年+ 大厂经验' },
  { label: '学历要求', value: '统本一本学历起步' },
  { label: '算法岗学历', value: '985 / 211 硕士', accent: true }
];

const ProjectRequirements = () => {
  return (
    <section className="relative py-[96px] bg-[#f8faff] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">

        {/* Section 标题 */}
        <div className="mb-[56px]">
          <div className="text-[11px] text-[#A0A0A0] tracking-[0.12em] uppercase mb-[12px] font-medium" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
            Project Requirements
          </div>
          <h2 className="text-[28px] font-semibold leading-[1.15] text-[#303133] mb-[12px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif', fontWeight: 600 }}>
            项目需求
          </h2>
          <p className="text-[15px] text-[#606266] leading-[1.7] max-w-[560px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
            明确的需求定义，高效的交付保障
          </p>
        </div>

        {/* 主体：左右分栏 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[20px]">

          {/* 左列：核心指标 */}
          <div className="lg:col-span-4">
            <div className="h-full bg-white border border-[#e5e7eb] rounded-[12px] overflow-hidden">

              {/* 需求总量 - 精致化突出显示 */}
              <div className="relative bg-gradient-to-br from-[#f0f4fa] via-white to-[#f5f8fc] border-b border-[#e5e7eb] p-[32px] overflow-hidden">
                {/* 点阵纹理 */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: 'radial-gradient(circle, #4a83f2 0.5px, transparent 0.5px)',
                  backgroundSize: '12px 12px'
                }} />

                {/* 装饰弧线 */}
                <div className="absolute -right-[40px] -top-[40px] w-[120px] h-[120px] rounded-full border border-[#4a83f2]/[0.08]" />

                <div className="relative">
                  <div className="text-[11px] text-[#A0A0A0] tracking-[0.12em] uppercase mb-[16px] font-medium" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                    需求总量
                  </div>
                  <div className="flex items-baseline gap-[8px] mb-[14px]">
                    <span className="text-[64px] font-semibold text-[#303133] leading-none tracking-tight" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif', fontWeight: 600 }}>
                      300
                    </span>
                    <span className="text-[18px] text-[#606266] font-medium" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                      个岗位
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-[6px] px-[10px] py-[4px] rounded-[4px] bg-[#4a83f2]/[0.06] border border-[#4a83f2]/[0.15]">
                    <div className="w-[5px] h-[5px] rounded-full bg-[#4a83f2]" />
                    <span className="text-[11px] text-[#4a83f2] font-semibold tracking-[0.02em]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif', fontWeight: 600 }}>
                      2025年度项目
                    </span>
                  </div>
                </div>
              </div>

              {/* 指标列表 */}
              <div className="p-[32px]">
                <div className="space-y-[20px] mb-[32px]">
                  {METRICS.map((metric, index) => (
                    <MetricRow key={index} label={metric.label} value={metric.value} accent={metric.accent} />
                  ))}
                </div>

                {/* Hairline */}
                <div className="h-[1px] bg-[#e5e7eb] mb-[28px]" />

                {/* 合作形式 */}
                <div>
                  <div className="text-[11px] text-[#A0A0A0] tracking-[0.12em] uppercase mb-[16px] font-medium" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                    合作形式
                  </div>
                  <div className="space-y-[10px]">
                    <CooperationBadge level="P3" desc="入职 + 30个工作日保质期" />
                    <CooperationBadge level="P4" desc="入职 + 180个工作日保质期" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右列：岗位矩阵 */}
          <div className="lg:col-span-8">
            <div className="h-full bg-white border border-[#e5e7eb] rounded-[12px] p-[32px] flex flex-col">

              {/* 标题 */}
              <div className="flex items-center justify-between mb-[28px]">
                <div>
                  <h3 className="text-[16px] font-semibold text-[#303133] mb-[4px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif', fontWeight: 600 }}>
                    合作岗位
                  </h3>
                  <span className="text-[13px] text-[#A0A0A0]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                    涵盖技术、产品、管理等多领域
                  </span>
                </div>
                <div className="flex items-baseline gap-[4px]">
                  <span className="text-[26px] font-semibold text-[#303133] leading-none" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif', fontWeight: 600 }}>
                    12
                  </span>
                  <span className="text-[13px] text-[#606266]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                    类
                  </span>
                </div>
              </div>

              {/* 岗位网格 */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-[14px] mb-[28px] flex-1">
                {POSITIONS.map((position, index) => (
                  <div
                    key={index}
                    className="group flex items-center justify-center px-[16px] py-[14px] rounded-[8px] bg-[#f8faff] border border-[#e5e7eb] transition-all duration-200 hover:border-[#4a83f2]/40"
                  >
                    <span className="text-[14px] text-[#303133] font-medium" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                      {position}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hairline */}
              <div className="h-[1px] bg-[#e5e7eb] mb-[20px]" />

              {/* 底部岗位要求 */}
              <div>
                <div className="text-[11px] text-[#A0A0A0] tracking-[0.12em] uppercase mb-[12px] font-medium" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                  岗位要求
                </div>
                <div className="flex flex-wrap gap-[14px] text-[13px] text-[#606266]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                  <span>统本一本学历起步</span>
                  <span>大厂经验优先</span>
                  <span>5年以上工作经验</span>
                  <span className="text-[#4a83f2] font-semibold" style={{ fontWeight: 600 }}>算法岗要求985/211硕士学历</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── 指标行 ─── */
function MetricRow({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-[16px]">
      <span className="text-[13px] text-[#A0A0A0]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
        {label}
      </span>
      <span className={`text-[14px] font-medium text-right ${accent ? 'text-[#4a83f2]' : 'text-[#303133]'}`} style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
        {value}
      </span>
    </div>
  );
}

/* ─── 合作徽章 ─── */
function CooperationBadge({ level, desc }: { level: string; desc: string }) {
  return (
    <div className="flex items-center gap-[10px]">
      <div className="w-[28px] h-[28px] rounded-[6px] bg-[#4a83f2]/[0.08] flex items-center justify-center flex-shrink-0">
        <span className="text-[11px] font-semibold text-[#4a83f2]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif', fontWeight: 600 }}>
          {level}
        </span>
      </div>
      <span className="text-[13px] text-[#606266] leading-[1.5]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
        {desc}
      </span>
    </div>
  );
}

export default ProjectRequirements;
