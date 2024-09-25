export interface Step {
  id: number;
  label: string;
  content?: string;
  desc?: string;
}
export interface StepOneProps {
  selectedBudget: string;
  setSelectedBudget: React.Dispatch<React.SetStateAction<string>>;
  goNext: () => void;
  stepLabel: string;
  stepContent?: string;
}

export interface StepTwoProps {
  selectedBudget: string;
  goNext: () => void;
  stepLabel: string;
  stepContent?: string;
  stepDesc?: string;
}
