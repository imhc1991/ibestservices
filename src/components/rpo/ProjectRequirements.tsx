const POSITIONS = [
  '算法', '产品经理', '研发', '项目经理', '销售', '数据挖掘',
  '架构师', '售前咨询', '设计负责人', '测试架构', '高级市场总监', '运维工程师'
];

const DETAILS = [
  { label: '服务周期', value: '2025.01 - 2025.12' },
  { label: '需求城市', value: '合肥' },
  { label: '工作经验', value: '5年+ 大厂经验' },
  { label: '学历要求', value: '统本一本学历起步' },
  { label: '算法岗学历', value: '985 / 211 硕士', highlight: true }
];

const ProjectRequirements = () => {
  return (
    <section className="relative py-[96px] bg-[#f8faff]">
      <div className="max-w-[1280px] mx-auto px-[64px]">
        {/* 标题区 */}
        <div className="flex items-center justify-center mb-[56px]">
          <img src="/images/common/title-deco-left.png" alt="" className="w-[112px] h-[21px]" />
          <div className="flex flex-col items-center mx-4">
            <h2
              className="text-[32px] font-semibold leading-[38px] text-[#303133] mb-[13px]"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              项目需求
            </h2>
            <p
              className="text-[16px] text-[#606266]/60 leading-[20px]"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              明确的需求定义，高效的交付保障
            </p>
          </div>
          <img src="/images/common/title-deco-right.png" alt="" className="w-[112px] h-[21px]" />
        </div>

        {/* 双卡片布局 */}
        <div className="grid grid-cols-12 gap-[20px] h-[510px]">
          {/* 左侧卡片 - 需求总量 */}
          <div className="col-span-4">
            <div className="h-full bg-white border border-[#e5e7eb] rounded-[12px] overflow-hidden flex flex-col">
              {/* 上半部分 - 大数字 */}
              <div
                className="border-b border-[#e5e7eb] px-[32px] pt-[32px] pb-[33px] relative"
                style={{ background: 'linear-gradient(151deg, #f0f4fa 0%, #ffffff 50%, #f5f8fc 100%)' }}
              >
                <div className="relative flex flex-col gap-[15.7px]">
                  <p
                    className="text-[11px] leading-[16.5px] tracking-[1.32px] uppercase text-[#606266]"
                    style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                  >
                    需求总量
                  </p>
                  <div className="flex items-baseline gap-[8px]">
                    <span
                      className="text-[64px] leading-[64px] font-semibold text-[#303133] tracking-[-1.6px]"
                      style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                    >
                      300
                    </span>
                    <span
                      className="text-[18px] leading-[27px] text-[#606266]"
                      style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                    >
                      个岗位
                    </span>
                  </div>
                  <div className="flex items-center gap-[8px] px-[17px] py-[5px] rounded-full bg-[#4a83f2]/[0.06] border border-[#4a83f2]/[0.15] w-fit">
                    <div className="w-2 h-2 rounded-full bg-[#4a83f2]/40" />
                    <span
                      className="text-[14px] leading-[18px] text-[#4a83f2]"
                      style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                    >
                      2025年度
                    </span>
                  </div>
                </div>
              </div>

              {/* 下半部分 - 详细信息 */}
              <div className="flex-1 px-[32px] py-[32px] flex flex-col justify-between pb-[36px]">
                {DETAILS.map((item) => (
                  <div key={item.label} className="flex items-start justify-between">
                    <span
                      className="text-[13px] leading-[19.5px] text-[#a0a0a0]"
                      style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`text-[14px] font-medium leading-[21px] text-right ${item.highlight ? 'text-[#4a83f2]' : 'text-[#303133]'}`}
                      style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧卡片 - 合作岗位 */}
          <div className="col-span-8">
            <div className="h-full bg-white border border-[#e5e7eb] rounded-[12px] overflow-hidden p-[33px] relative">
              {/* 背景图 */}
              <div className="absolute inset-0 pointer-events-none">
                <img src="/images/ProjectRequirements/Group 100.svg" alt="" className="w-full h-full object-cover" />
              </div>

              <div className="relative">
                {/* 标题行 */}
                <div className="flex items-center justify-between pb-[28px]">
                  <div className="flex flex-col gap-[6.75px]">
                    <h3
                      className="text-[16px] font-semibold leading-[24px] text-[#303133]"
                      style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                    >
                      合作岗位
                    </h3>
                    <p
                      className="text-[13px] leading-[19.5px] text-[#a0a0a0]"
                      style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                    >
                      涵盖技术、产品、管理等多领域
                    </p>
                  </div>
                  <div className="flex items-baseline">
                    <span
                      className="text-[26px] leading-[26px] font-semibold text-[#4a83f2]"
                      style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                    >
                      12
                    </span>
                    <span
                      className="text-[13px] leading-[19.5px] text-[#606266]"
                      style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                    >
                      类
                    </span>
                  </div>
                </div>

                {/* 岗位网格 */}
                <div className="grid grid-cols-3 auto-rows-[54px] gap-[14px] pb-[28px]">
                  {POSITIONS.map((pos) => (
                    <div
                      key={pos}
                      className="flex items-center justify-center px-[17px] rounded-[8px] border border-[#ecedf1] bg-gradient-to-r from-white to-[#f8faff]"
                    >
                      <span
                        className="text-[14px] leading-[21px] text-[#303133]"
                        style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                      >
                        {pos}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 分割线 */}
                <div className="h-px bg-[#e5e7eb] mb-[20px]" />

                {/* 岗位要求 */}
                <div className="flex flex-col gap-[12px]">
                  <p
                    className="text-[11px] leading-[16.5px] tracking-[1.32px] uppercase text-[#a0a0a0]"
                    style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                  >
                    岗位要求
                  </p>
                  <div className="flex gap-[12px]">
                    <div className="flex-1 flex items-center gap-[10px]">
                      <div className="w-[28px] h-[28px] rounded-[6px] bg-[#4a83f2]/[0.08] flex items-center justify-center">
                        <span className="text-[11px] font-semibold text-[#4a83f2]">P3</span>
                      </div>
                      <span className="text-[13px] leading-[19.5px] text-[#606266]">入职 + 30个工作日保质期</span>
                    </div>
                    <div className="flex-1 flex items-center gap-[10px]">
                      <div className="w-[28px] h-[28px] rounded-[6px] bg-[#4a83f2]/[0.08] flex items-center justify-center">
                        <span className="text-[11px] font-semibold text-[#4a83f2]">P4</span>
                      </div>
                      <span className="text-[13px] leading-[19.5px] text-[#606266]">入职 + 180个工作日保质期</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectRequirements;
