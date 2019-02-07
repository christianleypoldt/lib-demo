export interface UserPagination {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
}

export interface User {
    id: number;
    first_name: string;
    last_name: string;

    /**
     * Url til bilde (jpg) av en avatar
     */
    avatar: string;
}
