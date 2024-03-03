import {
  Model,
  Table,
  Column,
  IsUUID,
  DataType,
  UpdatedAt,
  CreatedAt,
  PrimaryKey,
  DeletedAt,
  BelongsTo
} from 'sequelize-typescript';
import { City } from './City';

export interface IBannerEntity {
  readonly id: string;
  readonly image: string;
  readonly url: string;
  readonly city: number;
  readonly status: string;
  readonly created_at: Date;
  readonly updated_at: Date;
  readonly deleted_at: Date;
}

@Table({
  tableName: 'banners',
  timestamps: true
})
export class Banner extends Model<Banner> implements IBannerEntity {
  @IsUUID(4)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  image: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  url: string;

  @BelongsTo(() => City, 'city_id')
  city: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  status: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
