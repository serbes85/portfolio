export type SkillsListData = {
    title: string;
    skills: SkillsData[];

}

export type SkillsData = {
    id: number;
    percent: number;
    title: string;
}

export interface SkillsListProps {
    skillsList: SkillsListData[];
}
