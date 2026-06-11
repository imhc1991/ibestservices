import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import RPOPage from './pages/rpo/index';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-[60px]">
          <Routes>
            <Route path="/" element={<div className="p-8 text-center">首页</div>} />
            <Route path="/about" element={<div className="p-8 text-center">关于我们</div>} />
            <Route path="/rpo" element={<RPOPage />} />
            <Route path="/services/talent" element={<div className="p-8 text-center">人才智能服务业务</div>} />
            <Route path="/services/brand" element={<div className="p-8 text-center">品牌企业服务业务</div>} />
            <Route path="/solutions" element={<div className="p-8 text-center">解决方案</div>} />
            <Route path="/join" element={<div className="p-8 text-center">加入我们</div>} />
            <Route path="/contact" element={<div className="p-8 text-center">联系我们</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
