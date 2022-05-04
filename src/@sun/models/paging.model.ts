export class ResponseResult<T>{
    data: T | null = null;
    statusCode: number | null = null;
    messages: Array<string> = [];
    success: boolean = false;
    allMessages: string = '';
}

export class ResponsePagingResult<T> {
    data: Array<T> = [];
    statusCode: number | null = null;
    messages: Array<string> = [];
    success: boolean = false;
    allMessages: string = '';
    rowsCount: number = 0;
}

export class PagingParameter<T>{
    pageIndex: number = 0;
    pageSize: number = 10;
    filter: T | null = null;
    sort: 'desc' | 'asc' = 'desc';
    sortColumn: string = 'default'
}

export interface OptionItem {
    key: string | number;
    value: string;
}