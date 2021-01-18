export type SkillsData = {
    id: number;
    name: string;
    title: string;
    percents: number;
}

export interface SkillsProps {
    skills: SkillsData[];
}