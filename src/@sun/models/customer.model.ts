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
    limited?: boolean = undefined;
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
    ctmId: string = '';
    sysName: string | null = '';
    roleName: string | null = '';
}

export class CtmCttFilter {
    ctmId: string = '';
    category: CttCategory = CttCategory.other; //账号->所有系统 账号->某系统
    sysName: string = '';
}

export class CtmLogFilter {
    ctmId: string = '';
    operate: string = '';
    sysName: string = '';
    startAt: Date | null = null;
    endAt: Date | null = null;
}

export class CtmCttAddDto {
    ctmId: string = '';
    category: CttCategory = CttCategory.other;  //账号->所有系统 账号->某系统
    method: CttMethod = CttMethod.other;
    sysId: string | null = '';
    expiredAt: Date | null = null;
    remark: string = '';
}

export class CtmRoleUpdateDto {
    ctmId: string = '';
    sysId: string = '';
    roleId: string = '';
}