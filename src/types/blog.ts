interface IOrganization {
    name: string;
    profile_image: string;
    profile_image_90: string;
    slug: string;
    username: string;
  }
  
  interface IUser {
    github_username: string;
    name: string;
    profile_image: string;
    profile_image_90: string;
    twitter_username: string | null;
    user_id: number;
    username: string;
    website_url: string | null;
  }
  
  export interface IBlog {
    canonical_url: string;
    collection_id: number | null;
    comments_count: number;
    cover_image: string;
    created_at: string;
    crossposted_at: string | null;
    description: string;
    edited_at: string | null;
    id: number;
    language: string;
    last_comment_at: string;
    organization?: IOrganization;
    path: string;
    positive_reactions_count: number;
    public_reactions_count: number;
    published_at: string;
    published_timestamp: string;
    readable_publish_date: string;
    reading_time_minutes: number;
    slug: string;
    social_image: string;
    subforem_id: number;
    tag_list: string[];
    tags: string;
    title: string;
    type_of: string;
    url: string;
    user: IUser;
    body_markdown: string;
    body_html: string;
}  