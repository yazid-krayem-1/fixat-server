export interface IRequestCreate {
  readonly user_id: string;
  readonly title: string;
  readonly description: string;
  readonly category_id: string;
  readonly country_id: string;
  readonly city_id: string;
  readonly address: string;
  readonly main_image: string;
}
