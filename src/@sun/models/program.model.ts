import { CttMethod } from "./constraint.model";
import { OptionItem } from "./paging.model";

export enum PgmCategory {
    web = 1,      // 网页端
    desktop = 2,  // 桌面端
    mobile = 3,   // 移动端
    service = 4,  // 服务端
    other = 0,     // 默认
}

export class PgmElet {
    id: string | null = '';
    name: string = '';
    category: PgmCategory = PgmCategory.other;
    code: string = '';
    intro: string = '';
    remark: string = '';
    createdAt: Date | null = null;
}

export interface SectElet {
    id: string | null;
    pgmId: string;
    name: string;
    code: string;
    remark: string;
}

export interface FunctElet {
    id: string | null;
    pgmId: string;
    sectId: string;
    name: string;
    code: string;
    cttMethod: CttMethod;
    limitedExpiredAt: Date | null;
    remark: string;
}

export class PgmCtmElet {
    id: string | null = '';
    avatar: string = '';
    name: string = '';
    nickname: string = '';
    remark: string = '';
    intro: string = '';
    createdAt: Date | null = null;
}


export class PgmFilter {
    nameOrCode: string = '';
    category: PgmCategory = PgmCategory.other;
    introOrRemark: string = '';
    startAt: Date | null = null;
    endAt: Date | null = null;
}

export class PgmCtmFilter {
    pgmId: string = '';
    name: string = '';
    nickname: string = '';
}

export const PGM_TYPE_OPS: OptionItem[] = [
    { key: PgmCategory.other, value: '- - -' },
    { key: PgmCategory.web, value: '网页端' },
    { key: PgmCategory.desktop, value: '桌面端' },
    { key: PgmCategory.mobile, value: '移动端' },
    { key: PgmCategory.service, value: '服务端' },
];