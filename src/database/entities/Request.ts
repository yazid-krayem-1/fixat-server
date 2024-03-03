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
import { Category } from './Category';
import { User } from './User';

export interface IRequestEntity {
  readonly id: string;
  readonly user_id: string;
  readonly title: string;
  readonly description: string;
  readonly address: string;
  readonly main_image: string;
  readonly category: string;
  readonly approvedBy: string;
  readonly updatedBy: string;
  readonly status: string;
  readonly phone_number: number;

  readonly rejected_reason: string;
  readonly rejectedBy: string;
  readonly rejected_at: Date;
  readonly created_at: Date;
  readonly updated_at: Date;
  readonly deleted_at: Date;
}

@Table({
  tableName: 'requests',
  timestamps: true
})
export class Request extends Model<Request> implements IRequestEntity {
  @IsUUID(4)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  id: string;

  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  user_id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  address: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  main_image: string;

  @BelongsTo(() => Category, 'category_id')
  category: string;

  @BelongsTo(() => User, 'approved_by')
  approvedBy: string;

  @BelongsTo(() => User, 'updated_by')
  updatedBy: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  status: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  phone_number: number;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  rejected_reason: string;

  @BelongsTo(() => User, 'rejected_by')
  rejectedBy: string;

  @Column({
    type: DataType.DATE,
    allowNull: true
  })
  rejected_at: Date;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
