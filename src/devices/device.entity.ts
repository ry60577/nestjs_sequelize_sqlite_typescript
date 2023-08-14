import { Column, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';

@Table({ timestamps: false })
export class Device extends Model {
  @PrimaryKey
  @Unique
  @Column
  SerialNumber: string;

  @Column
  DeviceType: string;
  @Column
  MACAddress: string;
  @Column
  Manufacturer: string;
  @Column
  Configuration: string;
  @Column
  Notes: string;
  @Column
  Owner: string;
  @Column
  Location: string;
  @Column
  Venue: string;
  @Column
  DevicePassword: string;
  @Column
  Firmware: string;
  @Column
  Compatible: string;
  @Column
  FWUpdatePolicy: string;
  @Column
  UUID: number;
  @Column
  CreationTimestamp: number;
  @Column
  LastConfigurationChange: number;
  @Column
  LastConfigurationDownload: number;
  @Column
  LastFWUpdate: number;
  @Column
  subscriber: string;
  @Column
  entity: string;
  @Column
  modified: number;
  @Column
  locale: string;
  @Column
  onboard: number;
  @Column
  latestFirmwareAvailable: number;
  @Column
  latestFirmwareURI: string;
}
