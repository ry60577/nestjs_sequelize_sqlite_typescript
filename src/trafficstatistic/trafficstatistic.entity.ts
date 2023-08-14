import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Trafficstatistic extends Model {
  @Column
  timeStamp: string;

  @Column
  appName: string;

  @Column
  Tx: number;

  @Column
  Rx: number;

  @Column
  srcMac: string;

  @Column
  destMac: string;

  @Column
  Type: string;
}
