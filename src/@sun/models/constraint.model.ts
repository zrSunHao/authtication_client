import { OptionItem } from "./paging.model";

export enum CttCategory {
    customer_all_system = 1,  // 账号->所有系统
    customer_one_system = 2,  // 账号->某系统
    program_function = 3,     // 程序->功能
    system_role = 4,          // 系统->角色
    other = 0,                // 默认
}

export enum CttMethod {
    forbid = 1,   // 禁用 
    lock = 2,     // 锁定
    other = 0,     // 默认
}

export interface CttElet {
    id: string;
    category: CttCategory;
    method: CttMethod;
    ctmName: string;
    sysName: string;
    functionName: string;
    origin: string;
    expiredAt: Date | null; // 锁定时需要
    createdAt: Date;
    remark: string;
}

export class CttFilter {
    name: string = '';
    category: CttCategory = CttCategory.other;
    originOrRemark: string = '';
    startAt: Date | null = null;
    endAt: Date | null = null;
}

export const CTT_CATEGERY_OPS: OptionItem[] = [
    { key: CttCategory.other, value: '- - -' },
    { key: CttCategory.customer_all_system, value: '账号  - >  所有系统' },
    { key: CttCategory.customer_one_system, value: '账号  - >  某系统' },
    { key: CttCategory.program_function, value: '程序  - >  功能' },
    { key: CttCategory.system_role, value: '系统  - >  角色' },
];

export const CTT_METHOD_OPS: OptionItem[] = [
    { key: CttMethod.other, value: '- - -' },
    { key: CttMethod.forbid, value: '禁用' },
    { key: CttMethod.lock, value: '锁定' },
];

