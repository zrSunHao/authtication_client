import { OptionItem } from "./paging.model";

export enum CttCategory {
    customer_all_system = 1,  // 账号->所有系统
    customer_one_system = 2,  // 账号->某系统
    program_function = 3,     // 程序->功能
    system_role = 4,          // 系统->角色
    other = '',                // 默认
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
    userName: string;
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

export const CONSTRAINT_ELEMENT_DATA: CttElet[] = [
    { id: '1', category: CttCategory.customer_all_system, method: CttMethod.forbid, userName: 'lisi01', sysName: '- - -', functionName: '- - -', origin: '安全服务添加', expiredAt: null, createdAt: new Date(), remark: '识别为爬虫' },
    { id: '2', category: CttCategory.customer_one_system, method: CttMethod.forbid, userName: 'zhangsan', sysName: 'sys-1', functionName: '- - -', origin: '业务管理员张三添加', expiredAt: null, createdAt: new Date(), remark: '恶意言论' },
    { id: '3', category: CttCategory.program_function, method: CttMethod.lock, userName: '- - -', sysName: 'sys-2', functionName: '添加', origin: '业务管理员张三添加', expiredAt: new Date(), createdAt: new Date(), remark: '升级' },
    { id: '4', category: CttCategory.system_role, method: CttMethod.lock, userName: 'lisi01', sysName: 'sys-3', functionName: '管理员', origin: '业务管理员张三添加', expiredAt: new Date(), createdAt: new Date(), remark: '职能调整' },
    { id: '1', category: CttCategory.customer_all_system, method: CttMethod.forbid, userName: 'lisi01', sysName: '- - -', functionName: '- - -', origin: '安全服务添加', expiredAt: null, createdAt: new Date(), remark: '识别为爬虫' },
    { id: '2', category: CttCategory.customer_one_system, method: CttMethod.forbid, userName: 'zhangsan', sysName: 'sys-1', functionName: '- - -', origin: '业务管理员张三添加', expiredAt: null, createdAt: new Date(), remark: '恶意言论' },
    { id: '3', category: CttCategory.program_function, method: CttMethod.lock, userName: '- - -', sysName: 'sys-2', functionName: '添加', origin: '业务管理员张三添加', expiredAt: new Date(), createdAt: new Date(), remark: '升级' },
    { id: '4', category: CttCategory.system_role, method: CttMethod.lock, userName: 'lisi01', sysName: 'sys-3', functionName: '管理员', origin: '业务管理员张三添加', expiredAt: new Date(), createdAt: new Date(), remark: '职能调整' },
    { id: '1', category: CttCategory.customer_all_system, method: CttMethod.forbid, userName: 'lisi01', sysName: '- - -', functionName: '- - -', origin: '安全服务添加', expiredAt: null, createdAt: new Date(), remark: '识别为爬虫' },
    { id: '2', category: CttCategory.customer_one_system, method: CttMethod.forbid, userName: 'zhangsan', sysName: 'sys-1', functionName: '- - -', origin: '业务管理员张三添加', expiredAt: null, createdAt: new Date(), remark: '恶意言论' },
];

