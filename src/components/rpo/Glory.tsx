import { Award } from 'lucide-react';

const Glory = () => {
  return (
    <section className="relative py-[54px] bg-[#f8faff] overflow-hidden">
      <div className="absolute top-[20%] right-[8%] w-20 h-20 rounded-full bg-gradient-to-br from-[#f6c437]/8 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[24px] font-bold leading-[29px] text-[#606266] mb-[26px] text-center">
          荣耀
        </h2>

        {/* 横幅式成就展示 */}
        <div className="relative border border-gray-200 rounded-[8px] bg-white overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center">
            {/* 左侧奖杯装饰 */}
            <div className="flex items-center justify-center p-[32px] md:border-r border-gray-200 bg-gradient-to-br from-[#f6c437]/5 to-transparent">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f6c437]/20 to-[#f6c437]/5 border border-[#f6c437]/20 flex items-center justify-center">
                <Award className="w-8 h-8 text-[#f6c437]" strokeWidth={1.5} />
              </div>
            </div>

            {/* 右侧内容 */}
            <div className="p-[32px]">
              <p className="text-[20px] font-semibold leading-[30px] text-[#606266]">
                连续多年位居前三，多次荣获<span className="text-[#4a83f2]">"优秀供应商奖"</span>
              </p>
              <div className="flex items-center gap-[6px] mt-[18px]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#f6c437]/40" />
                <div className="w-[4px] h-[4px] rounded-full bg-[#f6c437]/30" />
                <div className="w-[3px] h-[3px] rounded-full bg-[#f6c437]/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glory;
