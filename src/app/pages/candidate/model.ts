export class Education {
    institute: string | undefined;
    degree: string | undefined;
    percentage: string | undefined;
    pass_out_year: string | undefined;
}

export class Skills {
    name: string | undefined;
    experience: any | number;
}

export class Experience {
    company: string | undefined;
    project: string | undefined;
    role: string | undefined;
    team_size: string | undefined;
    duration_from: string | undefined;
    duration_to: string | undefined;
}
export class Candidate {
    profile_picture: string | undefined;
    name: string | undefined;
    address: string | undefined;
    phone: string | undefined;
    email: string | undefined;
    gender: string | undefined;
    hobbies: string[] | undefined;
    education: Education[] | undefined;
    skills: Skills[] | undefined;
    experience: Experience[] | undefined;
    id?: string | undefined;
}
