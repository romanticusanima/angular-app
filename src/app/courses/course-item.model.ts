export interface CourseItem {
    id: number;
    name: string;
    description: string;
    isTopRated: boolean;
    date: any;
    length: number;
    //duration: number;
    authors: [
        {
          id: number;
          firstName: string;
          lastName: string;
        }
    ]
}
