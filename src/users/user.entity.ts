import {
  Model,
  Table,
  Column,
  AutoIncrement,
  PrimaryKey,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  email: string;

  @Column
  password: string;
}
