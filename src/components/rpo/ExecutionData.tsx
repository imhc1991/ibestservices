const ExecutionData = () => {
  const data = [
    { label: '成功推荐', value: '4265', unit: '份' },
    { label: '总安排面试', value: '1661', unit: '轮次' },
    { label: '终试通过', value: '184', unit: '人' },
    { label: 'Offer', value: '150', unit: '人' },
    { label: '入职', value: '112', unit: '人' }
  ];

  return (
    <section className="relative py-[54px] bg-gradient-to-br from-[#4a83f2] to-[#2f6df6] text-white overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/3" />
        <div className="absolute top-[30%] right-[15%] w-3 h-3 rounded-full bg-[#f6c437]/40" />
        <div className="absolute bottom-[25%] left-[20%] w-2 h-2 rounded-full bg-white/30" />
        <div className="absolute top-[60%] right-[40%] w-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[24px] font-bold leading-[29px] mb-[54px] text-center">
          执行数据
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-[26px]">
          {data.map((item, index) => (
            <div key={index} className="group text-center relative">
              {/* 分隔线 */}
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/15" />
              )}

              <div className="text-[32px] font-bold leading-[38px] mb-[10px] group-hover:scale-110 transition-transform duration-300">
                {item.value}
                <span className="text-[16px] font-normal ml-1 opacity-70">{item.unit}</span>
              </div>
              <div className="text-base opacity-80">
                {item.label}
              </div>

              {/* 底部装饰点 */}
              <div className="flex items-center justify-center gap-[4px] mt-[18px]">
                <div className="w-[4px] h-[4px] rounded-full bg-white/30" />
                <div className="w-[3px] h-[3px] rounded-full bg-white/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutionData;
