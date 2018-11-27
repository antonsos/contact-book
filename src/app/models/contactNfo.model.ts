export class ContactNfo {
  name: string;
  phone: string;
  email: string;
  avatar: string;
  id: number;
  accountHistory: any[];
  address: object;
  company: object;
  favorite: boolean;
  posts: any[];
  website: string;

  constructor(
    name: string,
    phone: string,
    email: string,
    avatar: string,
    id?: number,
    accountHistory?: any[],
    address?: object,
    company?: object,
    favorite?: boolean,
    posts?: any[],
    website?: string,
  ) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.avatar = avatar;
    this.id = id;
    this.accountHistory = accountHistory;
    this.address = address;
    this.company = company;
    this.favorite = favorite;
    this.posts = posts;
    this.website = website;
  }
}
