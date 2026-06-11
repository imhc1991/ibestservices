import { useState, useEffect, useCallback } from 'react';
import type { ServiceStep } from '../../types/rpo';

const SERVICE_STEPS: ServiceStep[] = [
  {
    id: 1,
    phase: '前期',
    title: '百得思维RPO服务简介',
    description: '向客户初步介绍百得思维的核心招聘行业与领域，展示我们的专业能力和服务优势'
  },
  {
    id: 2,
    phase: '前期',
    title: '深度沟通，整理需求',
    description: '与客户进行深入交流，了解企业文化、岗位需求、人才画像，明确招聘目标与期望'
  },
  {
    id: 3,
    phase: '前期',
    title: '项目评估，系统分析',
    description: '对项目进行全面评估，分析市场人才供给情况，制定系统化的招聘方案与时间规划'
  },
  {
    id: 4,
    phase: '前期',
    title: '签订协议，明确收费',
    description: '签署正式合作协议，明确服务范围、交付标准、费用结构与付款方式，保障双方权益'
  },
  // 中期（步骤 05-12）
  {
    id: 5,
    phase: '中期',
    title: '职位访谈，薪酬建议',
    description: '与用人部门深度访谈，了解岗位职责、任职要求，提供市场薪酬对标建议'
  },
  {
    id: 6,
    phase: '中期',
    title: '职位分析，人才画像',
    description: '基于职位信息构建精准的人才画像，明确候选人的能力要求、经验背景和文化匹配度'
  },
  {
    id: 7,
    phase: '中期',
    title: '制定方案，寻访启动',
    description: '制定详细的寻访策略和渠道方案，启动多维度人才搜索，建立候选人储备池'
  },
  {
    id: 8,
    phase: '中期',
    title: '软硬协同，简历匹配',
    description: '结合专业能力和软性素质进行双重筛选，确保候选人简历与岗位要求高度匹配'
  },
  {
    id: 9,
    phase: '中期',
    title: '职位推荐，人选沟通',
    description: '向客户推荐优质候选人，同步与候选人深度沟通职位信息，确认求职意向'
  },
  {
    id: 10,
    phase: '中期',
    title: '面试跟进，过程控制',
    description: '协调面试安排，跟进面试进度，收集双方反馈，优化后续推荐策略'
  },
  {
    id: 11,
    phase: '中期',
    title: '薪酬确定，offer发放',
    description: '协助薪酬谈判，促成双方达成一致，跟进offer发放与候选人接受确认'
  },
  {
    id: 12,
    phase: '中期',
    title: '离职辅导，问题解决',
    description: '为候选人提供离职辅导，协助处理离职交接事宜，解决可能出现的问题'
  },
  // 后期（步骤 13-14）
  {
    id: 13,
    phase: '后期',
    title: '协助入职，定期回访',
    description: '跟进入职流程，协助解决入职问题，定期回访候选人与企业，确保顺利融入'
  },
  {
    id: 14,
    phase: '后期',
    title: '费用结算，后续服务',
    description: '按照协议完成费用结算，提供保质期内的免费替换服务，持续维护客户关系'
  }
] as const;

const PHASES = ['前期', '中期', '后期'] as const;
const PHASE_META = {
  '前期': { sub: '需求对接与协议签订', steps: '01-04' },
  '中期': { sub: '人才寻访与面试推进', steps: '05-12' },
  '后期': { sub: '入职跟进与售后服务', steps: '13-14' }
} as const;

const ServiceProcess = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActivePhase((prev) => (prev + 1) % PHASES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const currentPhase = PHASES[activePhase];
  const steps = SERVICE_STEPS.filter((s) => s.phase === currentPhase);

  return (
    <section
      className="relative py-[54px] bg-[#f8faff] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute top-[10%] right-[5%] w-40 h-40 rounded-full bg-gradient-to-br from-[#4a83f2]/4 to-transparent" />
      <div className="absolute bottom-[15%] left-[3%] w-28 h-28 rounded-full bg-gradient-to-tl from-[#2f6df6]/4 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[24px] font-bold leading-[29px] text-[#606266] mb-[26px] text-center">
          服务流程
        </h2>

        {/* Carousel 标签切换 */}
        <div className="flex items-center justify-center gap-[18px] mb-[26px]">
          {PHASES.map((phase, index) => (
            <button
              key={phase}
              onClick={() => setActivePhase(index)}
              className={`relative px-[26px] py-[10px] rounded-[4px] text-base font-medium transition-all duration-300 ${
                index === activePhase
                  ? 'bg-[#4a83f2] text-white'
                  : 'bg-white border border-gray-200 text-[#606266] hover:border-[#4a83f2] hover:text-[#4a83f2]'
              }`}
            >
              {phase}阶段
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-[#606266]/60 tracking-[2px] mb-[26px]">
          步骤 {PHASE_META[currentPhase].steps} &middot; {PHASE_META[currentPhase].sub}
        </p>

        {/* Bento Grid 内容区 */}
        <div key={currentPhase} className="animate-[fadeIn_0.4s_ease-out]">
          {currentPhase === '前期' && <BentoEarly steps={steps} />}
          {currentPhase === '中期' && <BentoMid steps={steps} />}
          {currentPhase === '后期' && <BentoLate steps={steps} />}
        </div>

        {/* 底部进度点 */}
        <div className="flex items-center justify-center gap-[10px] mt-[26px]">
          {PHASES.map((_, index) => (
            <div
              key={index}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                index === activePhase ? 'w-8 bg-[#4a83f2]' : 'w-3 bg-[#4a83f2]/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Bento: 前期 4步 ─── */
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

/* ─── Bento: 中期 8步 ─── */
function BentoMid({ steps }: { steps: ServiceStep[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-[18px]">
      <Card step={steps[0]} className="md:col-span-2" />
      <Card step={steps[1]} />
      <Card step={steps[2]} />
      <Card step={steps[3]} />
      <Card step={steps[4]} className="md:col-span-2" />
      <Card step={steps[5]} />
      <Card step={steps[6]} className="md:col-span-2" />
      <Card step={steps[7]} className="md:col-span-2" />
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
      <div className={`relative h-full bg-white border border-gray-200 rounded-[8px] ${large ? 'p-[32px]' : 'p-[26px]'} transition-all duration-300 hover:border-[#4a83f2] hover:-translate-y-1 overflow-hidden`}>
        {/* 背景序号 */}
        <div className="absolute -bottom-2 -right-2 text-[64px] font-bold text-[#4a83f2]/5 leading-none select-none pointer-events-none">
          {String(step.id).padStart(2, '0')}
        </div>
        {/* 顶部装饰线 */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4a83f2]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative flex items-start gap-[18px]">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#4a83f2] to-[#2f6df6] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-[14px] font-bold text-white">
              {String(step.id).padStart(2, '0')}
            </span>
          </div>
          <div className="flex-1 space-y-[10px]">
            <h3 className="text-[20px] font-semibold leading-[24px] text-[#606266]">
              {step.title}
            </h3>
            <p className="text-base text-[#606266]/70 leading-[1.8]">
              {step.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-[6px] mt-[18px]">
          <div className="w-[6px] h-[6px] rounded-full bg-[#4a83f2]/25 group-hover:bg-[#4a83f2] transition-colors duration-300" />
          <div className="w-[4px] h-[4px] rounded-full bg-[#4a83f2]/15 group-hover:bg-[#4a83f2]/60 transition-colors duration-300" />
          <div className="w-[3px] h-[3px] rounded-full bg-[#4a83f2]/10 group-hover:bg-[#4a83f2]/40 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
}

export default ServiceProcess;
