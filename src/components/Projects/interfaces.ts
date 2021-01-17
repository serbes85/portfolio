export type ProjectsData = {
    title: string,
    technologies: string,
    description: string,
    link: string,
    imgUrl: string;
}

export interface ProjectsProps {
    projects: ProjectsData[];
}