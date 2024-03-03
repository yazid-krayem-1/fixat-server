import { de } from 'date-fns/locale';
import {
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

export interface IAppUserEntity {
  readonly id: string;
  readonly avatar: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly phone_number: number;
  readonly phone_verified_at: Date;
  readonly verification_code: number;
  readonly password: string;
  readonly remember_token: string;
  readonly device_type: string;
  readonly notification_status: string;
  readonly device_language: string;
  readonly affiliation_id: string;
  readonly created_at: Date;
  readonly updated_at: Date;
  readonly deleted_at: Date;
}

@Table({
  tableName: 'app_user',
  timestamps: true
})
export class AppUser extends Model<AppUser> implements IAppUserEntity {
  @IsUUID(4)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: 'default.jpg'
  })
  avatar: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true
  })
  phone_number: number;

  @Column({
    type: DataType.DATE,
    allowNull: true
  })
  phone_verified_at: Date;

  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  verification_code: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  remember_token: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  device_type: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  notification_status: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  device_language: string;

  @Column({
    type: DataType.UUID,
    allowNull: true
  })
  affiliation_id: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
