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

export interface ICategoryEntity {
  readonly id: string;
  readonly name_en: string;
  readonly name_ar: string;
  readonly parent: string;
  readonly order: number;
  readonly icon: string;
  readonly status: string;
  readonly created_at: Date;
  readonly updated_at: Date;
  readonly deleted_at: Date;
}

@Table({
  tableName: 'categories',
  timestamps: true
})
export class Category extends Model<Category> implements ICategoryEntity {
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

  @BelongsTo(() => Category, 'parent_id')
  parent: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  order: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  icon: string;

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
