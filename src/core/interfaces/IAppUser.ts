export interface IAppUserCreate {
  readonly avatar: string | null;
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string | null;
  readonly phone_number: number;
  readonly password: string;
  readonly device_type: string;
  readonly notification_status: string | null;
  readonly device_language: string;
  readonly affiliation_id: string | null;
}

export interface IAppUserUpdate {
  readonly avatar: string | null;
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string | null;
  readonly phone_number: number;
  readonly password: string;
  readonly device_type: string;
  readonly notification_status: string | null;
  readonly device_language: string;
  readonly affiliation_id: string | null;
}

export interface IAppUserLogin {
  readonly phone_number: number;
  readonly password: string;
}
