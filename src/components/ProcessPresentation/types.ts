// src/components/ProcessPresentation/types.ts

interface SectionItem {
  title: string;
  description: string;
  svg: JSX.Element;
}

interface Section {
  title: string;
  icon: JSX.Element;
  color: string;
  items: SectionItem[];
}

export interface Sections {
  [key: string]: Section;
}