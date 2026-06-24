import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import logoText from '../../assets/logo-text.png';

interface NavChild {
  label: string;
  path?: string;
  children?: NavChild[];
}

interface NavItem {
  label: string;
  path?: string;
  children?: NavChild[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: '首页', path: '/' },
    { label: '关于我们', path: '/about' },
    {
      label: '业务类型',
      children: [
        { label: '人才智能服务业务', path: '/services/talent' },
        {
          label: '应用技术业务',
          children: [
            { label: '解决方案', path: '/solutions' }
          ]
        },
        { label: '品牌企业服务业务', path: '/services/brand' },
        {
          label: '创新业务部',
          children: [
            { label: 'RPO&猎头服务', path: '/rpo' }
          ]
        }
      ]
    },
    { label: '加入我们', path: '/join' },
    { label: '联系我们', path: '/contact' },
    { label: '非公党建', path: '/party' }
  ];

  // 检查当前路由是否在某个导航项的子菜单中
  const isActiveParent = (item: NavItem): boolean => {
    if (item.path === location.pathname) return true;
    if (item.children) {
      return item.children.some(child => {
        if (child.path === location.pathname) return true;
        if (child.children) {
          return child.children.some(sub => sub.path === location.pathname);
        }
        return false;
      });
    }
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-white/40 backdrop-blur-sm">
      <div className="flex items-center justify-between h-full w-full max-w-[1440px] mx-auto px-[100px]">
        {/* Logo 区域 - 精确尺寸 w-[309px] */}
        <Link to="/" className="flex items-center gap-[16px] shrink-0">
          <img src={logo} alt="百得思维" className="w-[87px] h-[36px] object-contain" />
          <div className="w-[1px] h-[24px] bg-black/10" />
          <img src={logoText} alt="思维创新 驱动无限可能" className="w-[179px] h-[36px] object-contain" />
        </Link>

        {/* Desktop Navigation - 精确尺寸 w-[817px] */}
        <div className="hidden lg:flex items-center justify-between w-[817px] shrink-0">
          {navItems.map((item) => {
            const isActive = isActiveParent(item);
            return (
              <div
                key={item.label}
                className="relative flex items-center justify-center min-w-[70px]"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => { setActiveDropdown(null); setActiveSubmenu(null); }}
              >
                {item.children ? (
                  <>
                    <button className={`font-['PingFang_SC'] text-[21px] font-medium transition-colors leading-normal ${
                      isActive ? 'text-[#3366ff]' : 'text-[#303133] hover:text-[#3366ff]'
                    }`}>
                      {item.label}
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-2 w-52">
                        <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
                        {item.children.map((child) => (
                          <div
                            key={child.label}
                            className="relative"
                            onMouseEnter={() => child.children && setActiveSubmenu(child.label)}
                            onMouseLeave={() => !child.children && setActiveSubmenu(null)}
                          >
                            {child.children ? (
                              <>
                                <button className="w-full flex items-center justify-between px-4 py-2.5 text-[#303133] hover:bg-gray-50 hover:text-[#3366ff] text-left font-['PingFang_SC'] font-medium">
                                  {child.label}
                                  <span className="text-xs">▸</span>
                                </button>
                                {activeSubmenu === child.label && (
                                  <div className="absolute left-full top-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                                    {child.children.map((sub) => (
                                      <Link
                                        key={sub.label}
                                        to={sub.path || '#'}
                                        className="block px-4 py-2.5 text-[#303133] hover:bg-gray-50 hover:text-[#3366ff] font-['PingFang_SC'] font-medium"
                                      >
                                        {sub.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <Link
                                to={child.path || '#'}
                                className="block px-4 py-2.5 text-[#303133] hover:bg-gray-50 hover:text-[#3366ff] font-['PingFang_SC'] font-medium"
                              >
                                {child.label}
                              </Link>
                            )}
                          </div>
                        ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path || '/'}
                    className={`font-['PingFang_SC'] text-[21px] font-medium transition-colors leading-normal ${
                      location.pathname === item.path ? 'text-[#3366ff]' : 'text-[#303133] hover:text-[#3366ff]'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* 右侧联系按钮 - 精确尺寸 w-[129px] */}
        <div className="hidden lg:flex items-center w-[129px]">
          <span className="font-['PingFang_SC'] text-[21px] font-medium text-[#303133] hover:text-[#3366ff] cursor-pointer transition-colors leading-normal">
            联系
          </span>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#303133]">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden py-4 space-y-1 bg-white/95 backdrop-blur-sm border-t border-gray-200">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <div>
                  <span className="block px-4 py-2 text-[#303133] font-medium font-['PingFang_SC']">
                    {item.label}
                  </span>
                  {item.children.map((child) => (
                    <div key={child.label}>
                      {child.children ? (
                        <>
                          <span className="block pl-8 pr-4 py-2 text-[#303133] font-medium font-['PingFang_SC']">
                            {child.label}
                          </span>
                          {child.children.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.path || '#'}
                              className="block pl-12 pr-4 py-2 text-[#303133] hover:bg-gray-50 font-['PingFang_SC']"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </>
                      ) : (
                        <Link
                          to={child.path || '#'}
                          className="block pl-8 pr-4 py-2 text-[#303133] hover:bg-gray-50 font-['PingFang_SC']"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <Link
                  to={item.path || '/'}
                  className="block px-4 py-2 text-[#303133] hover:bg-gray-50 font-['PingFang_SC']"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
