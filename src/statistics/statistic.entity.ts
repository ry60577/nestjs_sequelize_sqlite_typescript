import { Column, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';

@Table({ timestamps: false })
export class Statistic extends Model {
  @PrimaryKey
  @Unique
  @Column
  SerialNumber: string;
  @Column
  UUID: number;
  @Column
  Data: string;
  @Column
  Recorded: number;
}
