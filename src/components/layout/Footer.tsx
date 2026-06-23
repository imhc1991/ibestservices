import footerBg from '../../assets/footer-background.png';
import footerLogo from '../../assets/footer-logo.png';
import footerLogoText from '../../assets/footer-logo-text.png';
import phoneIcon from '../../assets/footer-phone-icon.png';
import locationIcon from '../../assets/footer-location-icon.png';
import qrcodeWechat from '../../assets/footer-qrcode-wechat.png';
import qrcodeDouyin from '../../assets/footer-qrcode-douyin.png';
import policeIcon from '../../assets/footer-police-icon.png';

const Footer = () => {
  return (
    <footer className="relative bg-[#37405E] text-white overflow-hidden">
      <div
        className="relative w-[1394px] max-w-full mx-auto flex items-start py-[65px]"
      >
        {/* 背景图 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img src={footerBg} alt="" className="absolute left-0 top-0 w-full h-[73%] object-cover" />
        </div>

        {/* 第一列：联系信息 */}
        <div className="relative w-[319px] flex-shrink-0 h-full">
          {/* Logo */}
          <img src={footerLogo} alt="百得思维" className="w-[224px] h-[73px] object-contain" />

          {/* 联系人 */}
          <div className="flex items-center mt-[60px]">
            <div className="w-[42px] h-[42px] flex-shrink-0 mr-[12px]">
              <img src={phoneIcon} alt="" className="w-full h-full" />
            </div>
            <div>
              <p
                className="text-[22px] font-medium text-white leading-normal whitespace-nowrap"
                style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
              >
                联系人 冯经理18715651160
              </p>
              <p
                className="text-[12px] text-[#A0A0A0] leading-normal"
                style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
              >
                周一至周五 08：30-17：30
              </p>
            </div>
          </div>

          {/* 地址 */}
          <div className="flex items-center mt-[27px]">
            <div className="w-[42px] h-[42px] flex-shrink-0 mr-[12px]">
              <img src={locationIcon} alt="" className="w-full h-full" />
            </div>
            <p
              className="text-[14px] text-white leading-normal whitespace-nowrap"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              安徽省合肥市望江西路与马场路交叉口
            </p>
          </div>
        </div>

        {/* 第二列：导航链接 */}
        <div className="relative flex h-full items-start">
          <div className="flex flex-col items-center pl-[120px] pr-[90px] justify-center h-full">
            <div className="flex gap-[80px]">
              {/* 业务类型 */}
              <div className="flex flex-col items-center min-w-[120px]">
                <h3
                  className="text-[16px] font-medium text-white mb-[30px] text-center"
                  style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                >
                  业务类型
                </h3>
                <ul className="space-y-[10px]">
                  <li className="text-center">
                    <a href="#" className="text-[14px] text-[#999999] tracking-[1px] hover:text-white transition-colors">
                      人才智慧服务业务
                    </a>
                  </li>
                  <li className="text-center">
                    <a href="#" className="text-[14px] text-[#999999] tracking-[1px] hover:text-white transition-colors">
                      应用技术业务
                    </a>
                  </li>
                  <li className="text-center">
                    <a href="#" className="text-[14px] text-[#999999] tracking-[1px] hover:text-white transition-colors">
                      品牌全案服务
                    </a>
                  </li>
                </ul>
              </div>

              {/* 关于我们 */}
              <div className="flex flex-col items-center min-w-[70px]">
                <h3
                  className="text-[16px] font-medium text-white mb-[30px] text-center"
                  style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
                >
                  关于我们
                </h3>
                <ul className="space-y-[10px]">
                  <li className="text-center">
                    <a href="#" className="text-[14px] text-[#999999] tracking-[1px] hover:text-white transition-colors">
                      关于我们
                    </a>
                  </li>
                  <li className="text-center">
                    <a href="#" className="text-[14px] text-[#999999] tracking-[1px] hover:text-white transition-colors">
                      企业新闻
                    </a>
                  </li>
                  <li className="text-center">
                    <a href="#" className="text-[14px] text-[#999999] tracking-[1px] hover:text-white transition-colors">
                      员工福利
                    </a>
                  </li>
                  <li className="text-center">
                    <a href="#" className="text-[14px] text-[#999999] tracking-[1px] hover:text-white transition-colors">
                      员工成长
                    </a>
                  </li>
                  <li className="text-center">
                    <a href="#" className="text-[14px] text-[#999999] tracking-[1px] hover:text-white transition-colors">
                      我要投诉
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 第三列：二维码与版权信息 */}
        <div className="relative w-[478px] flex-shrink-0 ml-auto">
          {/* 二维码区域 */}
          <div className="border-y border-[rgba(161,161,161,0.3)] py-[16px]">
            <div className="flex items-center justify-center gap-[24px]">
              {/* 公众号 */}
              <div className="text-center">
                <img src={qrcodeWechat} alt="微信公众号" className="w-[90px] h-[90px] mb-[8px]" />
                <p className="text-[12px] text-[#A0A0A0]">关注公众号</p>
              </div>

              {/* 抖音号 */}
              <div className="text-center">
                <img src={qrcodeDouyin} alt="抖音号" className="w-[90px] h-[90px] mb-[8px]" />
                <p className="text-[12px] text-[#A0A0A0]">关注抖音号</p>
              </div>

              {/* Logo 文字 */}
              <img src={footerLogoText} alt="思得创新" className="w-[163px] h-[17px] object-contain" />
            </div>
          </div>

          {/* 版权信息 */}
          <div className="mt-[20px] text-right space-y-[8px]">
            <p
              className="text-[12px] text-[#A0A0A0]"
              style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
            >
              COPYRIGHT 安徽百得思维信息科技有限公司 © 2013-2026 皖ICP备16012151号-5
            </p>
            <div className="flex items-center justify-end">
              <img src={policeIcon} alt="公安备案" className="w-[14px] h-[16px] mr-[7px]" />
              <p
                className="text-[12px] text-[#A0A0A0]"
                style={{ fontFamily: '"PingFang SC", -apple-system-font, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif' }}
              >
                皖公网安备34019202002130号
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;