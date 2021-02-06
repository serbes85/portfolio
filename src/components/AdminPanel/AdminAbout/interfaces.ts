export type SkillsListData = {
    title: string;
    skills: SkillsData[];

}

export type SkillsData = {
    id: number;
    percent: string;
    title: string;
}

export interface SkillsListProps {
    skillsList: SkillsListData[];
}
