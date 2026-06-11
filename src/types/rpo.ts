export interface ServiceStep {
  id: number;
  phase: '前期' | '中期' | '后期';
  title: string;
  description: string;
}

export interface ServiceCategory {
  id: number;
  title: string;
  description: string;
}

export interface ExecutionDataItem {
  label: string;
  value: string;
  unit: string;
}

export interface ProjectHighlight {
  id: number;
  content: string;
}

export interface CommitmentItem {
  id: number;
  title: string;
  content: string;
}
