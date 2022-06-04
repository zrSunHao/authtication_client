import { CttCategory, CttMethod } from "./constraint.model";
import { OptionItem } from "./paging.model";
import { RoleRank } from "./system.model";

export enum GenderType {
    male = 1,     // 男
    female = 2,   // 女
    other = '',     // 默认
}

export enum EducationType {
    none = 0,             // 无
    primary = 1,          // 小学
    middle = 2,           // 初中
    high = 3,             // 高中
    college = 4,          // 大专
    undergraduate = 5,    // 本科
    master = 6,           // 硕士
    doctor = 7,           // 博士
    other = '',             // 默认
}

export class CtmElet {
    id: string | null = '';
    avatar: string = '';
    name: string = '';
    nickname: string = '';
    limited: CttMethod = CttMethod.other;
    lastLoginAt: Date | null = null;
    remark: string = '';
    createdAt: Date | null = null;
}

export interface CtmRoleElet {
    id: string;
    sysLogo: string;
    sysId: string;
    sysName: string;
    roleId: string;
    roleName: string;
    rank: RoleRank;
    remark: string;
    createdAt: Date; //关联时间
}

export interface CtmCttElet {
    id: string;
    category: CttCategory; // 账号->所有系统 账号->某系统
    method: CttMethod;
    sysName: string | null;
    origin: string;
    expiredAt: Date | null;
    createdAt: Date;
    remark: string;
}

export interface CtmLogElet {
    id: string;
    operate: string;
    sysName: string;
    roleName: string;
    roleRank: RoleRank;
    createdAt: Date;
    remark: string;
}

export class PeopleElet {
    ctmId: string = '';
    fullName: string = '';
    gender: GenderType = GenderType.other; // 男 女
    birthday: Date = new Date();
    education: string = '';
    profession: string = '';
    intro: string = '';
}

export const CTM_GENDER_OPS: OptionItem[] = [
    { key: GenderType.other, value: '- - -' },
    { key: GenderType.male, value: '男' },
    { key: GenderType.female, value: '女' },
];

export const CTM_EDUCATION_OPS: OptionItem[] = [
    { key: EducationType.other, value: '- - -' },
    { key: EducationType.none, value: '无' },
    { key: EducationType.primary, value: '小学' },
    { key: EducationType.middle, value: '初中' },
    { key: EducationType.high, value: '高中' },
    { key: EducationType.college, value: '大专' },
    { key: EducationType.undergraduate, value: '本科' },
    { key: EducationType.master, value: '硕士' },
    { key: EducationType.doctor, value: '博士' },
];



export class CtmFilter {
    nameOrNickname: string = '';
    limited?: boolean = undefined;
    remark: string = '';
    startAt: Date | null = null;
    endAt: Date | null = null;
}

export class CtmRoleFilter {
    customerId: string = '';
    sysName: string | null = '';
    roleName: string | null = '';
}

export class CtmCttFilter {
    customerId: string = '';
    category: CttCategory = CttCategory.other; //账号->所有系统 账号->某系统
    sysName: string = '';
}

export class CtmLogFilter {
    customerId: string = '';
    operate: string = '';
    sysName: string = '';
    startAt: Date | null = null;
    endAt: Date | null = null;
}

export class CtmCttAddDto {
    customerId: string = '';
    category: CttCategory = CttCategory.other;  //账号->所有系统 账号->某系统
    method: CttMethod = CttMethod.other;
    sysId: string | null = '';
    expiredAt: Date | null = null;
    remark: string = '';
}

export class CtmRoleAddDto {
    customerId: string = '';
    sysId: string = '';
    roleId: string = '';
}



export const CUSTOMER_ELEMENT_DATA: CtmElet[] = [
    {
        id: '1', avatar: '', name: 'zhangsan', nickname: '张三',
        limited: CttMethod.other, lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', avatar: '', name: 'zhangsan', nickname: '认识的v',
        limited: CttMethod.forbid, lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', avatar: '/assets/images/people_1.jpg', name: 'zhangsan', nickname: '是发',
        limited: CttMethod.other, lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', avatar: '/assets/images/logo_256.png', name: 'zhangsan', nickname: '张三',
        limited: CttMethod.forbid, lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', avatar: '/assets/images/people_1.jpg', name: 'zhangsan', nickname: '王五打赏',
        limited: CttMethod.other, lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', avatar: '/assets/images/logo_256.png', name: 'zhangsan', nickname: '浮点数',
        limited: CttMethod.forbid, lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', avatar: '/assets/images/people_1.jpg', name: 'zhangsan', nickname: '个位数',
        limited: CttMethod.other, lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', avatar: '/assets/images/logo_256.png', name: 'zhangsan', nickname: '方法',
        limited: CttMethod.forbid, lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', avatar: '/assets/images/people_1.jpg', name: 'zhangsan', nickname: '更好四个',
        limited: CttMethod.forbid, lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', avatar: '/assets/images/logo_256.png', name: 'zhangsan', nickname: '法撒撒旦',
        limited: CttMethod.other, lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦撒看见打撒萨达萨达撒旦撒旦'
    },
];

export const CUSTOMER_ROLE_ELEMENT_DATA: CtmRoleElet[] = [
    {
        id: '1', sysLogo: '', sysId: '1', sysName: 'app-111', roleId: '1', roleName: '管理员',
        rank: RoleRank.manager, createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦撒看见打撒萨达萨达撒旦撒旦撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', sysLogo: '', sysId: '1', sysName: 'app-222', roleId: '1', roleName: '超级管理员',
        rank: RoleRank.super_manager, createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', sysLogo: '', sysId: '1', sysName: 'app-333', roleId: '1', roleName: '业务员',
        rank: RoleRank.business, createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', sysLogo: '', sysId: '1', sysName: 'app-444', roleId: '1', roleName: '开发工程师',
        rank: RoleRank.business, createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', sysLogo: '', sysId: '1', sysName: 'app-555', roleId: '1', roleName: '产品设计工程师',
        rank: RoleRank.business, createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
];

export const CONSTRAINT_ELEMENT_DATA: CtmCttElet[] = [
    {
        id: '1', category: CttCategory.customer_all_system, method: CttMethod.forbid, sysName: '', expiredAt: null, origin: '【业务员】李四', createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', category: CttCategory.customer_one_system, method: CttMethod.forbid, sysName: 'app-111', expiredAt: null, origin: '【业务员】李四', createdAt: new Date(), remark: '撒看见打撒撒看见打撒萨达萨达撒旦撒旦萨达萨达撒旦撒旦'
    },
    {
        id: '1', category: CttCategory.customer_one_system, method: CttMethod.lock, sysName: 'app-111', expiredAt: new Date(), origin: '【后台服务】【service2】', createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', category: CttCategory.customer_all_system, method: CttMethod.forbid, sysName: '', expiredAt: null, origin: '【业务员】李四', createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', category: CttCategory.customer_one_system, method: CttMethod.forbid, sysName: 'app-111', expiredAt: null, origin: '【业务员】李四', createdAt: new Date(), remark: '撒看见打撒撒看见打撒萨达萨达撒旦撒旦萨达萨达撒旦撒旦'
    },
];

export const LOG_ELEMENT_DATA: CtmLogElet[] = [
    { id: '1', operate: '查询列表', sysName: 'app-111', roleName: '普通用户', roleRank: 1, createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦' },
    { id: '1', operate: '查询列表', sysName: 'app-222', roleName: '管理员', roleRank: 2, createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦' },
    { id: '1', operate: '查询列表', sysName: 'app-333', roleName: '业务员', roleRank: 10, createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦' },
    { id: '1', operate: '查询列表', sysName: 'app-444', roleName: '设计师', roleRank: 100, createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦' },
    { id: '1', operate: '查询列表', sysName: 'app-555', roleName: '工程师', roleRank: 1000, createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦' },

];