import { useState, useEffect, useRef, useCallback } from 'react';
import type { ServiceStep } from '../../types/rpo';

const SERVICE_STEPS: ServiceStep[] = [
  { id: 1, phase: '前期', title: '百得思维RPO服务简介', description: '向客户初步介绍百得思维的核心招聘行业与领域，专业交付团队及行业与领域，并说明服务流程、收费标准及合同条款。' },
  { id: 2, phase: '前期', title: '深度沟通，整理需求', description: '与客户招聘对接人进行一对一沟通，记录并分析客户的阶段性招聘计划，空缺岗位需求，以及客户对岗位的招聘评估要点。' },
  { id: 3, phase: '前期', title: '项目评估，系统分析', description: '对客户公司业绩及业务服务现状进行摸底与分析，评估空缺岗位的可操作性，结合现有资源进行匹配，判断项目目标可实现性的达成程度。' },
  { id: 4, phase: '前期', title: '签订协议，明确收费', description: '双方协商并签订《招聘委托协议》，明确约定"三期"（含洽谈期、保护期、质保期）及付费方式和缴费节点。' },
  { id: 5, phase: '前期', title: '职位访谈，薪酬建议', description: '深入了解客户公司的所属行业、企业文化、经营状况，以及招聘岗位的薪酬待遇、工作职责、组织架构、汇报关系等。' },
  { id: 6, phase: '前期', title: '职位分析，人才画像', description: '基于职位访谈数据和信息进行职位分析，构建胜任岗位的"人才画像"，提炼岗位关键词，明确目标行业及人才分布区域。' },
  { id: 7, phase: '前期', title: '制定方案，寻访启动', description: '招聘团队依据职位信息及客户诉求，制定差异岗位的人才寻访方案，发布职位信息、组建交付项目组，并正式启动人才寻访工作。' },
  { id: 8, phase: '前期', title: '软硬协同，简历匹配', description: '百得顾问对符合"人才画像"的候选人进行初步筛选并逐步筛选合总适配性硬条件，初步判断候选人是否具备岗位胜任能力。' },
  { id: 9, phase: '中期', title: '职位推荐，人选沟通', description: '为候选人提供岗位推荐并发展发的一对一沟通与咨询，帮助其全面了解岗位信息，并结合自身职业规划，达成初步意向。' },
  { id: 10, phase: '中期', title: '面试跟进，过程控制', description: '客户评估通过后，安排候选人与客户方进行面试。面试结束后，顾问分别收集客户及候选人反馈，并与客户共同回顾，实时初试合格者进行复试及终试。' },
  { id: 11, phase: '中期', title: '薪酬确定，offer发放', description: '对通过背景调查及客户核的候选人，百得协助双方为通进行确定薪酬方案，完成录用通知（offer）的发放与签署。' },
  { id: 12, phase: '中期', title: '离职辅导，问题解决', description: '为已录用人选提供供职职岗程辅导与沟通，协助规避离职风险，帮助顺利理职手续，确定离岗日期及新岗位开始到岗时间。' },
  { id: 13, phase: '后期', title: '协助入职，定期回访', description: '为录用人选提供上岗前辅导，协助其完成客户公司的报到手续及劳动合同签订，做好入职体验管理，并定期进行回访与服务。' },
  { id: 14, phase: '后期', title: '费用结算，后续服务', description: '客户在质保期届满后，按照合同约定支付猎头费用。百得将持续提供后续服务，对人才的工作表现及新环境适应情况进行跟踪与反馈。' }
] as const;

const PHASES = ['前期准备', '前期', '中期', '后期'] as const;
const PHASE_META = {
  '前期准备': { steps: '01-04', sub: '服务介绍与协议签订' },
  '前期': { steps: '05-08', sub: '职位分析与人才寻访' },
  '中期': { steps: '09-12', sub: '面试推进与Offer发放' },
  '后期': { steps: '13-14', sub: '入职跟进与售后服务' }
} as const;

const ServiceProcess = () => {
  const [activePhase, setActivePhase] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const debounceRef = useRef<number>(0);

  const currentPhase = PHASES[activePhase];
  const steps = getStepsForPhase(activePhase);

  const handleScroll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollableDistance = containerHeight - viewportHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
      const newPhaseIndex = Math.min(PHASES.length - 1, Math.floor(progress * PHASES.length));
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = window.setTimeout(() => {
        setActivePhase(newPhaseIndex);
      }, 50);
    });
  }, []);

  const scrollToPhase = useCallback((phaseIndex: number) => {
    if (!containerRef.current) return;
    const containerHeight = containerRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = containerHeight - viewportHeight;
    const targetProgress = phaseIndex / PHASES.length;
    const targetScrollTop = containerRef.current.offsetTop + targetProgress * scrollableDistance;
    window.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [handleScroll]);

  return (
    <div ref={containerRef} className="relative" style={{ height: '400vh' }}>
      <section className="sticky top-[60px] h-screen bg-gradient-to-b from-white via-[#fafbff] to-[#f5f9ff] overflow-hidden"
        style={{ height: 'calc(100vh - 60px)' }}
      >
        {/* 背景装饰 */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(232,242,255,1) 0%, rgba(232,242,255,0) 50%)' }} />
        <div className="absolute top-[104px] right-[152px] w-[256px] h-[256px] rounded-full blur-[32px]" style={{ backgroundImage: 'linear-gradient(135deg, rgba(74,131,242,0.06) 0%, rgba(74,131,242,0) 100%)' }} />
        <div className="absolute bottom-[208px] left-[95px] w-[224px] h-[224px] rounded-full blur-[32px]" style={{ backgroundImage: 'linear-gradient(-45deg, rgba(47,109,246,0.05) 0%, rgba(47,109,246,0) 100%)' }} />

        <div className="relative h-full max-w-[1440px] mx-auto px-[100px] flex flex-col">
          {/* 标题区 */}
          <div className="flex items-center justify-center pt-[64px] pb-[32px]">
            <img src={`${import.meta.env.BASE_URL}images/common/title-deco-left.png`} alt="" className="w-[112px] h-[21px]" />
            <div className="flex flex-col items-center mx-4">
              <h2
                className="text-[32px] font-semibold leading-[38px] text-[#303133] mb-[13px]"
                style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
              >
                服务流程
              </h2>
              <p
                className="text-[16px] text-[#606266]/60 leading-[20px]"
                style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
              >
                14步完整服务流程，全方位保障招聘质量
              </p>
            </div>
            <img src={`${import.meta.env.BASE_URL}images/common/title-deco-right.png`} alt="" className="w-[112px] h-[21px]" />
          </div>

          {/* 移动端：顶部横向指示器 */}
          <div className="flex md:hidden items-center justify-center gap-3 pb-6">
            {PHASES.map((phase, index) => (
              <button
                key={phase}
                onClick={() => scrollToPhase(index)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-400 ${
                  index === activePhase
                    ? 'bg-[#4a83f2] text-white'
                    : 'bg-white border border-[#e5e7eb] text-[#606266]/50'
                }`}
              >
                {phase}
              </button>
            ))}
          </div>

          {/* 桌面端：左右分栏 */}
          <div className="hidden md:flex flex-1 gap-[48px] min-h-0">
            {/* 左侧：阶段进度指示器 */}
            <nav className="flex-shrink-0 w-[180px] flex flex-col justify-center">
              <div className="relative">
                {/* 连接线 - 从第一个节点底部到最后一个节点顶部，不超出圆形 */}
                <div className="absolute left-[7px] top-[16px] bottom-[16px] w-[2px] bg-[#e5e7eb]" />
                {/* 进度线 - 从第一个节点底部延伸到当前激活节点顶部 */}
                <div
                  className="absolute left-[7px] top-[16px] w-[2px] bg-[#4a83f2] transition-all duration-500 ease-out"
                  style={{
                    height: `${activePhase * 88}px`
                  }}
                />

                <div className="relative flex flex-col gap-[40px]">
                  {PHASES.map((phase, index) => {
                    const isActive = index === activePhase;
                    const isPast = index < activePhase;
                    return (
                      <button
                        key={phase}
                        onClick={() => scrollToPhase(index)}
                        className="flex items-center gap-[16px] text-left group transition-all duration-300"
                      >
                        {/* 圆点指示器 */}
                        <div className={`relative flex-shrink-0 w-[16px] h-[16px] rounded-full border-2 transition-all duration-400 ${
                          isActive
                            ? 'border-[#4a83f2] bg-[#4a83f2]'
                            : isPast
                              ? 'border-[#4a83f2] bg-white'
                              : 'border-[#e5e7eb] bg-white'
                        }`} />

                        {/* 文字 */}
                        <div className="flex flex-col">
                          <span className={`text-[16px] font-medium leading-[24px] transition-all duration-400 ${
                            isActive
                              ? 'text-[#4a83f2]'
                              : 'text-[#303133]'
                          }`} style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                            {phase}阶段
                          </span>
                          <span className={`text-[12px] leading-[16px] pt-[4px] transition-all duration-400 ${
                            isActive ? 'text-[#4a83f2]/70' : 'text-[#606266]/30'
                          }`} style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
                            步骤 {PHASE_META[phase].steps}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </nav>

            {/* 右侧：内容切换区 */}
            <div className="flex-1 flex items-center min-h-0 overflow-hidden">
              <div
                key={currentPhase}
                className="w-full"
                style={{ animation: 'phaseSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both' }}
              >
                <BentoGrid steps={steps} phaseIndex={activePhase} />
              </div>
            </div>
          </div>

          {/* 移动端：内容区 */}
          <div className="flex-1 flex items-center md:hidden overflow-hidden px-2">
            <div
              key={`mobile-${currentPhase}`}
              className="w-full"
              style={{ animation: 'phaseSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both' }}
            >
              <BentoGrid steps={steps} phaseIndex={activePhase} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function getStepsForPhase(phaseIndex: number): ServiceStep[] {
  if (phaseIndex === 0) return SERVICE_STEPS.slice(0, 4);
  if (phaseIndex === 1) return SERVICE_STEPS.slice(4, 8);
  if (phaseIndex === 2) return SERVICE_STEPS.slice(8, 12);
  return SERVICE_STEPS.slice(12, 14);
}

/* ─── Bento Grid ─── */
function BentoGrid({ steps, phaseIndex }: { steps: ServiceStep[]; phaseIndex: number }) {
  if (phaseIndex === 0) {
    // 前期准备: 3列，第1列跨2行，第4张卡片跨2-3列
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] md:grid-rows-[186px_120px]">
        <Card step={steps[0]} className="md:row-span-2" />
        <Card step={steps[1]} />
        <Card step={steps[2]} />
        <Card step={steps[3]} className="md:col-span-2" />
      </div>
    );
  }
  // 其他阶段: 2列均匀分布
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
      {steps.map((step) => (
        <Card key={step.id} step={step} />
      ))}
    </div>
  );
}

/* ─── 卡片 ─── */
function Card({ step, className = '' }: { step: ServiceStep; className?: string }) {
  return (
    <div className={`group ${className}`}>
      <div className="relative h-full backdrop-blur-[4px] border border-[#e5e7eb] rounded-[12px] pt-[25px] pb-[21px] px-[25px] overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#4a83f2]/30"
        style={{ background: 'linear-gradient(to bottom, #f1f6ff 0%, white 50%, white 100%)' }}
      >
        {/* 顶部装饰线 */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#4a83f2] opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-[12px]" />

        <div className="flex items-start gap-[14px]">
          {/* 序号徽章 */}
          <div className="flex-shrink-0 w-[40px] h-[40px] rounded-[8px] bg-[#4a83f2] flex items-center justify-center transition-transform duration-400 group-hover:scale-105">
            <span
              className="text-[14px] font-semibold text-white leading-[21px]"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              {String(step.id).padStart(2, '0')}
            </span>
          </div>

          <div className="flex-1 flex flex-col gap-[8px]">
            <h3
              className="text-[18px] font-semibold leading-[22px] text-[#303133] transition-colors duration-400 group-hover:text-[#4a83f2]"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              {step.title}
            </h3>
            <p
              className="text-[14px] text-[#606266]/70 leading-[22px]"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProcess;
