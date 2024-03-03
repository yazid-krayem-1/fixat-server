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
import { Country } from './Country';

export interface ICityEntity {
  readonly id: string;
  readonly name_en: string;
  readonly name_ar: string;
  readonly country: Country;
  readonly created_at: Date;
  readonly updated_at: Date;
  readonly deleted_at: Date;
}

@Table({
  tableName: 'cities',
  timestamps: true
})
export class City extends Model<City> implements ICityEntity {
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
  name_en: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name_ar: string;

  @BelongsTo(() => Country, 'country_id')
  country: Country;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
