const POSITIONS = [
  '算法', '产品经理', '研发', '项目经理', '销售', '数据挖掘',
  '架构师', '售前咨询', '设计负责人', '测试架构', '高级市场总监', '运维工程师'
];

const ProjectRequirements = () => {
  return (
    <section className="relative py-[90px] bg-gradient-to-b from-white to-[#f8faff] overflow-hidden">
      {/* 背景 - 对角线纹理 */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #4a83f2 0, #4a83f2 1px, transparent 1px, transparent 24px)' }} />

      {/* 右侧装饰弧 */}
      <div className="absolute -right-[200px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#4a83f2]/[0.05]" />
      <div className="absolute -right-[160px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-[#4a83f2]/[0.03]" />

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* 标题区 */}
        <div className="text-center mb-[54px]">
          <div className="inline-flex items-center gap-3 mb-[18px]">
            <div className="w-10 h-[2px] bg-gradient-to-r from-transparent to-[#4a83f2]" />
            <h2 className="text-[24px] font-bold leading-[29px] text-[#303133]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
              项目需求
            </h2>
            <div className="w-10 h-[2px] bg-gradient-to-l from-transparent to-[#4a83f2]" />
          </div>
          <p className="text-sm text-[#606266]/60" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
            明确的需求定义，高效的交付保障
          </p>
        </div>

        {/* 主体：左右分栏 */}
        <div className="flex flex-col lg:flex-row gap-[18px]">

          {/* 左列：核心指标 */}
          <div className="lg:w-[340px] flex-shrink-0">
            <div className="relative p-[1px] rounded-[12px] bg-gradient-to-b from-[#4a83f2]/30 via-[#4a83f2]/10 to-[#e5e7eb] h-full">
              <div className="bg-white rounded-[11px] p-[32px] h-full flex flex-col">
                {/* 大数字 */}
                <div className="mb-[28px]">
                  <div className="text-[13px] text-[#606266]/40 tracking-wider mb-[8px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                    需求总量
                  </div>
                  <div className="flex items-baseline gap-[4px]">
                    <span className="text-[48px] font-bold text-[#4a83f2] leading-none" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                      300
                    </span>
                    <span className="text-[18px] text-[#606266]/50" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                      个岗位
                    </span>
                  </div>
                </div>

                {/* 分隔 */}
                <div className="h-px bg-gradient-to-r from-[#4a83f2]/20 to-transparent mb-[24px]" />

                {/* 指标列表 */}
                <div className="space-y-[20px] flex-1">
                  <MetricRow label="服务周期" value="2025.01 - 2025.12" />
                  <MetricRow label="需求城市" value="合肥" />
                  <MetricRow label="工作经验" value="5年+  大厂经验" />
                  <MetricRow label="学历要求" value="统本一本学历起步" />
                  <MetricRow label="算法岗学历" value="985 / 211 硕士" accent />
                </div>

                {/* 合作形式 */}
                <div className="mt-[28px] pt-[20px] border-t border-[#e5e7eb]">
                  <div className="text-[13px] text-[#606266]/40 tracking-wider mb-[12px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                    合作形式
                  </div>
                  <div className="space-y-[8px]">
                    <div className="flex items-center gap-[8px] text-sm text-[#606266]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                      <div className="w-[20px] h-[20px] rounded-[4px] bg-[#4a83f2]/10 flex items-center justify-center text-[10px] font-bold text-[#4a83f2]">P3</div>
                      <span>入职 + 30个工作日保质期</span>
                    </div>
                    <div className="flex items-center gap-[8px] text-sm text-[#606266]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                      <div className="w-[20px] h-[20px] rounded-[4px] bg-[#4a83f2]/10 flex items-center justify-center text-[10px] font-bold text-[#4a83f2]">P4</div>
                      <span>入职 + 180个工作日保质期</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右列：岗位矩阵 */}
          <div className="flex-1">
            <div className="bg-white border border-[#e5e7eb] rounded-[12px] p-[32px] h-full">
              {/* 标题 */}
              <div className="flex items-center justify-between mb-[28px]">
                <div>
                  <h3 className="text-[18px] font-semibold text-[#303133] mb-[4px]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                    合作岗位
                  </h3>
                  <span className="text-[13px] text-[#606266]/40">涵盖技术、产品、管理等多领域</span>
                </div>
                <div className="flex items-baseline gap-[4px]">
                  <span className="text-[28px] font-bold text-[#4a83f2] leading-none">12</span>
                  <span className="text-[13px] text-[#606266]/40">类</span>
                </div>
              </div>

              {/* 岗位网格 */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-[12px]">
                {POSITIONS.map((position, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-[8px] bg-[#f8faff] border border-[#e5e7eb]/60 px-[18px] py-[16px] transition-all duration-400 hover:bg-white hover:border-[#4a83f2]/30 hover:-translate-y-0.5"
                  >
                    {/* 序号 */}
                    <div className="absolute top-[10px] right-[12px] text-[11px] text-[#4a83f2]/20 font-bold transition-colors duration-400 group-hover:text-[#4a83f2]/40">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <span className="text-[15px] text-[#303133] font-medium transition-colors duration-400 group-hover:text-[#4a83f2]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                      {position}
                    </span>

                    {/* hover 底部线 */}
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#4a83f2] transition-all duration-400 group-hover:w-full" />
                  </div>
                ))}
              </div>

              {/* 底部岗位要求摘要 */}
              <div className="mt-[24px] p-[18px] rounded-[8px] bg-gradient-to-r from-[#4a83f2]/[0.04] to-transparent">
                <div className="flex flex-wrap items-center gap-x-[24px] gap-y-[8px] text-[13px] text-[#606266]/60" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                  <span className="text-[#4a83f2] font-medium">岗位要求</span>
                  <span>统本一本学历起步</span>
                  <span>大厂经验优先</span>
                  <span>5年以上工作经验</span>
                  <span>算法岗要求985/211硕士学历</span>
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
    <div className="flex items-center justify-between">
      <span className="text-[14px] text-[#606266]/50" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
        {label}
      </span>
      <span className={`text-[15px] font-medium ${accent ? 'text-[#4a83f2]' : 'text-[#303133]'}`} style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
        {value}
      </span>
    </div>
  );
}

export default ProjectRequirements;
