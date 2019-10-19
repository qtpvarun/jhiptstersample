import { IPassport } from 'app/shared/model/passport.model';
import { IReview } from 'app/shared/model/review.model';
import { ICourse } from 'app/shared/model/course.model';

export interface IStudent {
  id?: number;
  name?: string;
  description?: string;
  passport?: IPassport;
  reviews?: IReview[];
  courses?: ICourse[];
}

export const defaultValue: Readonly<IStudent> = {};
