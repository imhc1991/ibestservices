import HeroBanner from '../../components/rpo/HeroBanner';
import ServiceCategories from '../../components/rpo/ServiceCategories';
import ServiceProcess from '../../components/rpo/ServiceProcess';
import CaseStudy from '../../components/rpo/CaseStudy';
import ServiceScope from '../../components/rpo/ServiceScope';
import ProjectRequirements from '../../components/rpo/ProjectRequirements';
import ExecutionData from '../../components/rpo/ExecutionData';
import ProjectHighlights from '../../components/rpo/ProjectHighlights';
import Glory from '../../components/rpo/Glory';
import Commitment from '../../components/rpo/Commitment';

const RPOPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <ServiceCategories />
      <ServiceProcess />
      <CaseStudy />
      <ServiceScope />
      <ProjectRequirements />
      <ExecutionData />
      <ProjectHighlights />
      <Glory />
      <Commitment />
    </div>
  );
};

export default RPOPage;
