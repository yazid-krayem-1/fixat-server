import {
  Model,
  Table,
  Column,
  IsUUID,
  DataType,
  UpdatedAt,
  CreatedAt,
  PrimaryKey,
  DeletedAt
} from 'sequelize-typescript';

export interface ICountryEntity {
  readonly id: string;
  readonly name_en: string;
  readonly name_ar: string;
  readonly flag: string;
  readonly code_ar: string;
  readonly code_en: string;
  readonly time_zone: string;
  readonly iso: string;
  readonly currency: string;
  readonly currency_symbol: string;
  readonly created_at: Date;
  readonly updated_at: Date;
  readonly deleted_at: Date;
}

@Table({
  tableName: 'countries',
  timestamps: true
})
export class Country extends Model<Country> implements ICountryEntity {
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

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  flag: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  code_ar: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  code_en: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  time_zone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  iso: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  currency: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  currency_symbol: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
