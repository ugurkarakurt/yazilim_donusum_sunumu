// src/components/ProcessPresentation/types.ts
export interface SectionItem {
  title: string;
  description: string;
  details?: string[];
  importance?: 'high' | 'medium' | 'low';
  svg: JSX.Element;
  metrics?: {
    label: string;
    value: string;
    trend?: 'up' | 'down';
  }[];
}
export interface Section {
  title: string;
  icon: JSX.Element;
  color: string;
  description: string;
  items: SectionItem[];
}
export interface Sections {
  [key: string]: Section;
}