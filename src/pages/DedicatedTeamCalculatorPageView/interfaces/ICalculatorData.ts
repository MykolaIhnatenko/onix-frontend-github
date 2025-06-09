export interface FrontEndSkills {
  [key: string]: number;
}

export interface BackendSkills {
  [key: string]: number;
}

export interface MobileSkills {
  [key: string]: number;
}

export interface VRAnd3DSkills {
  [key: string]: number;
}

export interface FrameworksCMSSkills {
  [key: string]: number;
}

export interface ITechnologies {
  'Front-end': FrontEndSkills;
  Backend: BackendSkills;
  Mobile: MobileSkills;
  'VR/AR and 3D': VRAnd3DSkills;
  'Frameworks/CMS': FrameworksCMSSkills;
}
