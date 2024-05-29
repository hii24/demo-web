export interface IClient {
  id: number;
  created: number;
  name: string;
  description: string;
  notes?: string;
}

interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

export interface ClientsResponse {
  success: boolean;
  clients: {
    current_page: number;
    data: IClient[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
}
export interface ClientResponse {
  success: boolean;
  client: IClient;
}
