import { FileInterface } from './file.interface';
import { ArticleInterface } from './article.interface';
import { SectionInterface } from './section.interface';
import { UserInfoInterface } from './userInfos.interface';

export interface UserInterface {
  id: number;
  name: string;
  email: string;
  type: string;
  secteur?: string;
  profession?: string;
  bio?: string;

  createdAt: Date;
  updatedAt: Date;

  articles: ArticleInterface[];
  files: FileInterface[];
  sections: SectionInterface[];
  userInfos?: UserInfoInterface;
}
