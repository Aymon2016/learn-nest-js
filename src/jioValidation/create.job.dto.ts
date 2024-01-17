

export class CreateJobDTO {
  companyName: string;
  title: string;
  email: string;
  experience: number;
  salary: number;
  tags?: string[];
  isActive?: boolean;
}