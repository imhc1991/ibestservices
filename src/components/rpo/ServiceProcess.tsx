import { useState, useEffect, useCallback } from 'react';
import type { ServiceStep } from '../../types/rpo';

const SERVICE_STEPS: ServiceStep[] = [
  // 前期准备（步骤 01-04）
  {
    id: 1,
    phase: '前期准备',
    title: '百得思维RPO服务简介',
    description: '向客户初步介绍百得思维的核心招聘行业与领域，专业交付团队及行业与领域，并说明服务流程、收费标准及合同条款。'
  },
  {
    id: 2,
    phase: '前期准备',
    title: '深度沟通，整理需求',
    description: '与客户招聘对接人进行一对一沟通，记录并分析客户的阶段性招聘计划，空缺岗位需求，以及客户对岗位的招聘评估要点。'
  },
  {
    id: 3,
    phase: '前期准备',
    title: '项目评估，系统分析',
    description: '对客户公司业绩及业务服务现状进行摸底与分析，评估空缺岗位的可操作性，结合现有资源进行匹配，判断项目目标可实现性的达成程度。'
  },
  {
    id: 4,
    phase: '前期准备',
    title: '签订协议，明确收费',
    description: '双方协商并签订《招聘委托协议》，明确约定"三期"（含洽谈期、保护期、质保期）及付费方式和缴费节点。'
  },
  // 前期（步骤 05-08）
  {
    id: 5,
    phase: '前期',
    title: '职位访谈，薪酬建议',
    description: '深入了解客户公司的所属行业、企业文化、经营状况，以及招聘岗位的薪酬待遇、工作职责、组织架构、汇报关系等。'
  },
  {
    id: 6,
    phase: '前期',
    title: '职位分析，人才画像',
    description: '基于职位访谈数据和信息进行职位分析，构建胜任岗位的"人才画像"，提炼岗位关键词，明确目标行业及人才分布区域。'
  },
  {
    id: 7,
    phase: '前期',
    title: '制定方案，寻访启动',
    description: '招聘团队依据职位信息及客户诉求，制定差异岗位的人才寻访方案，发布职位信息、组建交付项目组，并正式启动人才寻访工作。'
  },
  {
    id: 8,
    phase: '前期',
    title: '软硬协同，简历匹配',
    description: '百得顾问对符合"人才画像"的候选人进行初步筛选并逐步筛选合总适配性硬条件，初步判断候选人是否具备岗位胜任能力。'
  },
  // 中期（步骤 09-12）
  {
    id: 9,
    phase: '中期',
    title: '职位推荐，人选沟通',
    description: '为候选人提供岗位推荐并发展发的一对一沟通与咨询，帮助其全面了解岗位信息，并结合自身职业规划，达成初步意向。'
  },
  {
    id: 10,
    phase: '中期',
    title: '面试跟进，过程控制',
    description: '客户评估通过后，安排候选人与客户方进行面试。面试结束后，顾问分别收集客户及候选人反馈，并与客户共同回顾，实时初试合格者进行复试及终试。'
  },
  {
    id: 11,
    phase: '中期',
    title: '薪酬确定，offer发放',
    description: '对通过背景调查及客户核的候选人，百得协助双方为通进行确定薪酬方案，完成录用通知（offer）的发放与签署。'
  },
  {
    id: 12,
    phase: '中期',
    title: '离职辅导，问题解决',
    description: '为已录用人选提供供职职岗程辅导与沟通，协助规避离职风险，帮助顺利理职手续，确定离岗日期及新岗位开始到岗时间。'
  },
  // 后期（步骤 13-14）
  {
    id: 13,
    phase: '后期',
    title: '协助入职，定期回访',
    description: '为录用人选提供上岗前辅导，协助其完成客户公司的报到手续及劳动合同签订，做好入职体验管理，并定期进行回访与服务。'
  },
  {
    id: 14,
    phase: '后期',
    title: '费用结算，后续服务',
    description: '客户在质保期届满后，按照合同约定支付猎头费用。百得将持续提供后续服务，对人才的工作表现及新环境适应情况进行跟踪与反馈。'
  }
] as const;

const PHASES = ['前期准备', '前期', '中期', '后期'] as const;
const PHASE_META = {
  '前期准备': { sub: '服务介绍与协议签订', steps: '01-04', duration: 8000 },
  '前期': { sub: '职位分析与人才寻访', steps: '05-08', duration: 8000 },
  '中期': { sub: '面试推进与Offer发放', steps: '09-12', duration: 8000 },
  '后期': { sub: '入职跟进与售后服务', steps: '13-14', duration: 6000 }
} as const;

const ServiceProcess = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentPhase = PHASES[activePhase];
  const steps = SERVICE_STEPS.filter((s) => s.phase === currentPhase);

  // 自动切换到下一个阶段
  const next = useCallback(() => {
    setActivePhase((prev) => (prev + 1) % PHASES.length);
  }, []);

  // 处理进度条动画和自动切换
  useEffect(() => {
    if (isPaused) return;

    // 重置进度
    setProgress(0);

    const duration = PHASE_META[currentPhase].duration;
    const interval = 50;
    const increment = (interval / duration) * 100;
    let currentProgress = 0;

    const progressTimer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        setProgress(100);
      } else {
        setProgress(currentProgress);
      }
    }, interval);

    const phaseTimer = setTimeout(() => {
      next();
    }, duration);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(phaseTimer);
    };
  }, [activePhase, isPaused, currentPhase, next]);

  return (
    <section
      className="relative py-[90px] bg-gradient-to-b from-white via-[#fafbff] to-[#f5f9ff] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#e8f2ff_0%,transparent_50%)]" />
      <div className="absolute top-[10%] right-[8%] w-64 h-64 rounded-full bg-gradient-to-br from-[#4a83f2]/6 to-transparent blur-3xl" />
      <div className="absolute bottom-[20%] left-[5%] w-56 h-56 rounded-full bg-gradient-to-tl from-[#2f6df6]/5 to-transparent blur-3xl" />
      <div className="absolute top-[50%] right-[20%] w-40 h-40 rounded-full bg-[#f6c437]/4 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* 标题区 */}
        <div className="text-center mb-[54px]">
          <div className="inline-flex items-center gap-3 mb-[18px]">
            <div className="w-10 h-[2px] bg-gradient-to-r from-transparent to-[#4a83f2]" />
            <h2 className="text-[24px] font-bold leading-[29px] text-[#303133]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
              服务流程
            </h2>
            <div className="w-10 h-[2px] bg-gradient-to-l from-transparent to-[#4a83f2]" />
          </div>
          <p className="text-sm text-[#606266]/60" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
            14步完整服务流程，全方位保障招聘质量
          </p>
        </div>

        {/* Carousel 标签切换 */}
        <div className="flex items-center justify-center gap-[18px] mb-[36px]">
          {PHASES.map((phase, index) => (
            <button
              key={phase}
              onClick={() => {
                setActivePhase(index);
              }}
              className={`group relative px-[32px] py-[12px] rounded-lg text-base font-medium transition-all duration-500 ${
                index === activePhase
                  ? 'bg-gradient-to-r from-[#4a83f2] to-[#2f6df6] text-white shadow-[0_4px_12px_rgba(74,131,242,0.25)]'
                  : 'bg-white/80 backdrop-blur-sm border border-[#e5e7eb] text-[#606266] hover:border-[#4a83f2] hover:text-[#4a83f2] hover:-translate-y-0.5'
              }`}
              style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              <span className="relative z-10">{phase}阶段</span>
              {index === activePhase && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#4a83f2]/20 to-[#2f6df6]/20 rounded-lg blur-xl -z-10" />
              )}
              {index !== activePhase && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#4a83f2] group-hover:w-full transition-all duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* 阶段描述 */}
        <div className="text-center mb-[36px]">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm border border-[#4a83f2]/10 rounded-full">
            <span className="text-sm font-medium text-[#4a83f2]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
              步骤 {PHASE_META[currentPhase].steps}
            </span>
            <div className="w-1 h-1 rounded-full bg-[#4a83f2]/40" />
            <span className="text-sm text-[#606266]/70" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
              {PHASE_META[currentPhase].sub}
            </span>
          </div>
        </div>

        {/* Bento Grid 内容区 */}
        <div key={currentPhase} className="animate-[fadeIn_0.4s_ease-out]">
          {currentPhase === '前期准备' && <BentoEarly steps={steps} />}
          {currentPhase === '前期' && <BentoPrep steps={steps} />}
          {currentPhase === '中期' && <BentoMid steps={steps} />}
          {currentPhase === '后期' && <BentoLate steps={steps} />}
        </div>

        {/* 底部进度点 */}
        <div className="flex items-center justify-center gap-[10px] mt-[54px]">
          {PHASES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActivePhase(index);
              }}
              className={`relative transition-all duration-500 ${
                index === activePhase ? 'w-10' : 'w-3'
              }`}
            >
              {/* 背景条 */}
              <div className="h-[4px] rounded-full bg-[#4a83f2]/20" />

              {/* 进度条 */}
              {index === activePhase && (
                <div
                  className="absolute top-0 left-0 h-[4px] rounded-full bg-gradient-to-r from-[#4a83f2] to-[#2f6df6] transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              )}

              {/* 非激活态的静态条 */}
              {index < activePhase && (
                <div className="absolute top-0 left-0 w-full h-[4px] rounded-full bg-gradient-to-r from-[#4a83f2] to-[#2f6df6]" />
              )}

              {/* 光晕效果 */}
              {index === activePhase && (
                <div className="absolute inset-0 bg-[#4a83f2]/30 rounded-full blur-md -z-10" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Bento: 前期准备 4步 ─── */
function BentoEarly({ steps }: { steps: ServiceStep[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
      <Card step={steps[0]} className="md:row-span-2" large />
      <Card step={steps[1]} />
      <Card step={steps[2]} />
      <Card step={steps[3]} className="md:col-span-2" />
    </div>
  );
}

/* ─── Bento: 前期 4步 ─── */
function BentoPrep({ steps }: { steps: ServiceStep[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
      <Card step={steps[0]} large />
      <Card step={steps[1]} large />
      <Card step={steps[2]} large />
      <Card step={steps[3]} large />
    </div>
  );
}

/* ─── Bento: 中期 4步 ─── */
function BentoMid({ steps }: { steps: ServiceStep[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
      <Card step={steps[0]} large />
      <Card step={steps[1]} large />
      <Card step={steps[2]} large />
      <Card step={steps[3]} large />
    </div>
  );
}

/* ─── Bento: 后期 2步 ─── */
function BentoLate({ steps }: { steps: ServiceStep[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
      <Card step={steps[0]} large />
      <Card step={steps[1]} large />
    </div>
  );
}

/* ─── 卡片 ─── */
function Card({
  step,
  className = '',
  large = false
}: {
  step: ServiceStep;
  className?: string;
  large?: boolean;
}) {
  return (
    <div className={`group relative ${className}`}>
      <div className={`relative h-full bg-white/80 backdrop-blur-sm border border-[#e5e7eb] rounded-[8px] ${large ? 'p-[32px]' : 'p-[26px]'} transition-all duration-500 hover:border-[#4a83f2] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(74,131,242,0.12)] overflow-hidden`}>
        {/* 背景序号水印 */}
        <div className="absolute -bottom-4 -right-4 text-[96px] font-bold text-[#4a83f2]/[0.03] leading-none select-none pointer-events-none transition-all duration-500 group-hover:text-[#4a83f2]/[0.06] group-hover:scale-110" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
          {String(step.id).padStart(2, '0')}
        </div>

        {/* 顶部装饰线 */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#4a83f2] via-[#2f6df6] to-[#4a83f2] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-t-[8px]" />

        {/* 角标装饰 */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-[#4a83f2]/10 to-transparent border border-[#4a83f2]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-180">
          <div className="w-2 h-2 rounded-full bg-[#4a83f2]/50" />
        </div>

        <div className="relative flex items-start gap-[18px]">
          {/* 序号徽章 */}
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#4a83f2] via-[#4a83f2] to-[#2f6df6] flex items-center justify-center shadow-[0_4px_12px_rgba(74,131,242,0.3)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_6px_16px_rgba(74,131,242,0.4)] group-hover:rotate-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
            <span className="text-[16px] font-bold text-white relative z-10" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
              {String(step.id).padStart(2, '0')}
            </span>
          </div>

          <div className="flex-1 space-y-[12px]">
            <h3 className="text-[20px] font-semibold leading-[24px] text-[#606266] transition-colors duration-500 group-hover:text-[#4a83f2]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
              {step.title}
            </h3>
            <p className="text-base text-[#606266]/70 leading-[26px] transition-colors duration-500 group-hover:text-[#606266]" style={{ fontFamily: 'PingFangSC-Medium, PingFang SC, -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}>
              {step.description}
            </p>
          </div>
        </div>

        {/* 底部装饰点 */}
        <div className="flex items-center gap-[6px] mt-[18px]">
          <div className="w-[8px] h-[8px] rounded-full bg-[#4a83f2]/25 transition-all duration-300 group-hover:w-[14px] group-hover:bg-[#4a83f2]" />
          <div className="w-[6px] h-[6px] rounded-full bg-[#4a83f2]/20 transition-all duration-300 delay-75 group-hover:w-[12px] group-hover:bg-[#4a83f2]/70" />
          <div className="w-[4px] h-[4px] rounded-full bg-[#4a83f2]/15 transition-all duration-300 delay-150 group-hover:w-[10px] group-hover:bg-[#4a83f2]/50" />
          <div className="h-px flex-1 bg-gradient-to-r from-[#4a83f2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* hover 光晕 */}
      <div className="absolute -inset-2 bg-gradient-to-br from-[#4a83f2]/0 to-[#2f6df6]/0 rounded-[12px] opacity-0 blur-xl transition-all duration-500 -z-10 group-hover:from-[#4a83f2]/10 group-hover:to-[#2f6df6]/5 group-hover:opacity-100" />
    </div>
  );
}

export default ServiceProcess;
