import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript';
import { City } from './City';

export interface IUserEntity {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly city: string;
  readonly address: string;
  readonly remember_token: string;
  readonly created_at: Date;
  readonly updated_at: Date;
  readonly deleted_at: Date;
}

@Table({
  tableName: 'users',
  timestamps: true
})
export class User extends Model<User> implements IUserEntity {
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
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password: string;

  @BelongsTo(() => City, 'city_id')
  city: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  address: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  remember_token: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
