import { CttMethod } from "./constraint.model";
import { OptionItem } from "./paging.model";
import { PgmElet, PgmCategory } from "./program.model";

export enum RoleRank {
    default = 1,            // 默认/普通用户
    member = 10,            // 会员
    business = 100,         // 业务员
    manager = 1000,         // 管理员
    sys_manager = 10000,     // 系统管理员
    super_manager = 100000,  // 超级管理员
    other = 0,              // 其他
}

export class SysElet {
    id: string | null = '';
    logo: string | null = '';
    name: string = '';
    code: string = '';
    createdAt: Date | null = null;
    intro: string = '';
    remark: string = '';
}

export class SysPgmElet extends PgmElet {
    systemId: string | null = '';
}

export class RoleElet {
    id: string = '';
    rank: RoleRank = RoleRank.other;
    name: string = '';
    sysId: string | null = '';
    code: string = '';
    intro: string = '无';
    cttMethod: CttMethod = CttMethod.other;
    limitedExpiredAt: Date | null = null;
    createdAt: Date | null = null;
    remark: string = '';
}

export class SysRoleFunctElet {
    id: string = '';
    name: string = '';
    pgmId: string = '';
    sectId: string = '';
    checked: boolean = false;
}

export interface SysRoleSectElet {
    id: string;
    name: string;
    pgmId: string;
    checked: boolean;
    functs: Array<SysRoleFunctElet>;
}

export interface SysRolePgmElet {
    id: string;
    name: string;
    sects: Array<SysRoleSectElet>;
}

export class SysRoleRelation {
    roleId: string = '';
    pgmId: string = '';
    sectIds: string[] = [];
    functIds: string[] = [];
}

export const ROLE_RANK_OPS: OptionItem[] = [
    { key: RoleRank.other, value: '- - -' },
    { key: RoleRank.default, value: '默认/普通用户' },
    { key: RoleRank.member, value: '会员' },
    { key: RoleRank.business, value: '业务员' },
    { key: RoleRank.manager, value: '管理员' },
    { key: RoleRank.sys_manager, value: '系统管理员' },
    { key: RoleRank.super_manager, value: '超级管理员' },
];




export class SysFilter {
    name: string = '';
    code: string = '';
    introOrRemark: string = '';
    startAt: Date | null = null;
    endAt: Date | null = null;
}

export class SysNotOwnedPgmFilter {
    sysId: string = '';
    nameOrCode: string = '';
    category: PgmCategory = PgmCategory.other;
}

export class SysOwnedPgmFilter {
    sysId: string = '';
    nameOrCode: string = '';
    category: PgmCategory = PgmCategory.other;
    introOrRemark: string = '';
}

export class SysRoleFilter {
    sysId: string = '';
    nameOrCode: string = '';
    cttMethod: CttMethod = CttMethod.other;
    rank: RoleRank = RoleRank.other;// 0：全部 1：默认 2：普通用户 10：会员  100：业务员  1000：管理员 10000：超级管理员
    startAt: Date | null = null;
    endAt: Date | null = null;
}



export const SYSTEM_ELEMENT_DATA: SysElet[] = [
    { id: '1', logo: '', name: 'dgsddgds', code: 'hjrewe', createdAt: new Date(), intro: '他共为山豆根山豆根山豆根是德国i九二共识大锅饭时代吧', remark: '赴德国大使馆大使馆大使馆是豆腐干山豆根根深蒂固的是公司的' },
    { id: '1', logo: '', name: 'dfgdhwer', code: 'dfgghdfg', createdAt: new Date(), intro: '特温特沃特污染问题威特沃特问题问题', remark: '人格问题热热特热天热温特沃' },
    { id: '1', logo: '', name: 'gdffgdf', code: 'heggwe', createdAt: new Date(), intro: '而歌特我认为天文台威特沃特违规', remark: '而问题为特维格无人过问过问各有威威特委为' },
    { id: '1', logo: '', name: 'dgsddgds', code: 'hjrewe', createdAt: new Date(), intro: '他共为山豆根山豆根山豆根是德国i九二共识大锅饭时代吧', remark: '赴德国大使馆大使馆大使馆是豆腐干山豆根根深蒂固的是公司的' },
    { id: '1', logo: '', name: 'dfgdhwer', code: 'dfgghdfg', createdAt: new Date(), intro: '特温特沃特污染问题威特沃特问题问题', remark: '人格问题热热特热天热温特沃' },
    { id: '1', logo: '', name: 'gdffgdf', code: 'heggwe', createdAt: new Date(), intro: '而歌特我认为天文台威特沃特违规', remark: '而问题为特维格无人过问过问各有威威特委为' },
    { id: '1', logo: '', name: 'dgsddgds', code: 'hjrewe', createdAt: new Date(), intro: '他共为山豆根山豆根山豆根是德国i九二共识大锅饭时代吧', remark: '赴德国大使馆大使馆大使馆是豆腐干山豆根根深蒂固的是公司的' },
    { id: '1', logo: '', name: 'dfgdhwer', code: 'dfgghdfg', createdAt: new Date(), intro: '特温特沃特污染问题威特沃特问题问题', remark: '人格问题热热特热天热温特沃' },
    { id: '1', logo: '', name: 'gdffgdf', code: 'heggwe', createdAt: new Date(), intro: '而歌特我认为天文台威特沃特违规', remark: '而问题为特维格无人过问过问各有威威特委为' },
    { id: '1', logo: '', name: 'gdffgdf', code: 'heggwe', createdAt: new Date(), intro: '而歌特我认为天文台威特沃特违规', remark: '而问题为特维格无人过问过问各有威威特委为' },
];

export const PROGRAM_ELEMENT_DATA: SysPgmElet[] = [
    { id: '1', name: 'client_1', category: PgmCategory.web, systemId: '', code: 'customer_angular', intro: '认证中心Angular版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '2', name: 'desktop_2', category: PgmCategory.desktop, systemId: '', code: 'customer_wpf', intro: '认证中心WPF版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '3', name: 'mobile_3', category: PgmCategory.mobile, systemId: '', code: 'customer_android', intro: '认证中心android版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '4', name: 'service_4', category: PgmCategory.service, systemId: '', code: 'customer_net6', intro: '认证中心net6版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '5', name: 'client_5', category: PgmCategory.web, systemId: '', code: 'customer_angular', intro: '认证中心Angular版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '6', name: 'desktop_6', category: PgmCategory.desktop, systemId: '', code: 'customer_wpf', intro: '认证中心WPF版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '7', name: 'mobile_7', category: PgmCategory.mobile, systemId: '', code: 'customer_android', intro: '认证中心android版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '8', name: 'service_8', category: PgmCategory.service, systemId: '', code: 'customer_net6', intro: '认证中心net6版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '9', name: 'mobile_9', category: PgmCategory.mobile, systemId: '', code: 'customer_android', intro: '认证中心android版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '10', name: 'service_10', category: PgmCategory.service, systemId: '', code: 'customer_net6', intro: '认证中心net6版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
];

export const ROLE_SECTION_ELEMENT_DATA: SysRolePgmElet[] = [
    {
        id: '1',
        name: 'web端',
        sects: [
            {
                id: '1', name: '模块1', pgmId: '1', checked: false, functs: [
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '1', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '1', checked: false },
                    { id: '1', name: '功能/操作2', pgmId: '1', sectId: '1', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '1', checked: false },
                    { id: '1', name: '功能/操作3', pgmId: '1', sectId: '1', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '1', checked: false },
                    { id: '1', name: '功能/操作4', pgmId: '1', sectId: '1', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '1', checked: false },
                    { id: '1', name: '功能/操作5', pgmId: '1', sectId: '1', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '1', checked: false },
                ]
            },
            {
                id: '2', name: '模块1', pgmId: '1', checked: false, functs: [
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '2', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '2', checked: false },
                    { id: '1', name: '功能/操作2', pgmId: '1', sectId: '2', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '2', checked: false },
                    { id: '1', name: '功能/操作3', pgmId: '1', sectId: '2', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '2', checked: false },
                    { id: '1', name: '功能/操作4', pgmId: '1', sectId: '2', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '2', checked: false },
                    { id: '1', name: '功能/操作5', pgmId: '1', sectId: '2', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '2', checked: false },
                ]
            },
            {
                id: '3', name: '模块1', pgmId: '1', checked: false, functs: [
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '3', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '3', checked: false },
                    { id: '1', name: '功能/操作2', pgmId: '1', sectId: '3', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '3', checked: false },
                    { id: '1', name: '功能/操作3', pgmId: '1', sectId: '3', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '3', checked: false },
                    { id: '1', name: '功能/操作4', pgmId: '1', sectId: '3', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '3', checked: false },
                    { id: '1', name: '功能/操作5', pgmId: '1', sectId: '3', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '3', checked: false },
                ]
            },
            {
                id: '4', name: '模块1', pgmId: '1', checked: false, functs: [
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '4', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '4', checked: false },
                    { id: '1', name: '功能/操作2', pgmId: '1', sectId: '4', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '4', checked: false },
                    { id: '1', name: '功能/操作3', pgmId: '1', sectId: '4', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '4', checked: false },
                    { id: '1', name: '功能/操作4', pgmId: '1', sectId: '4', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '4', checked: false },
                    { id: '1', name: '功能/操作5', pgmId: '1', sectId: '4', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '4', checked: false },
                ]
            },
            {
                id: '5', name: '模块1', pgmId: '1', checked: false, functs: [
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '5', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '5', checked: false },
                    { id: '1', name: '功能/操作2', pgmId: '1', sectId: '5', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '5', checked: false },
                    { id: '1', name: '功能/操作3', pgmId: '1', sectId: '5', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '5', checked: false },
                    { id: '1', name: '功能/操作4', pgmId: '1', sectId: '5', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '5', checked: false },
                    { id: '1', name: '功能/操作5', pgmId: '1', sectId: '5', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '1', sectId: '5', checked: false },
                ]
            },
        ]
    },
    {
        id: '2',
        name: '移动端',
        sects: [
            {
                id: '1', name: '模块1', pgmId: '2', checked: false, functs: [
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '1', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '1', checked: false },
                    { id: '1', name: '功能/操作2', pgmId: '2', sectId: '1', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '1', checked: false },
                    { id: '1', name: '功能/操作3', pgmId: '2', sectId: '1', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '1', checked: false },
                    { id: '1', name: '功能/操作4', pgmId: '2', sectId: '1', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '1', checked: false },
                    { id: '1', name: '功能/操作5', pgmId: '2', sectId: '1', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '1', checked: false },
                ]
            },
            {
                id: '2', name: '模块1', pgmId: '2', checked: false, functs: [
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '2', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '2', checked: false },
                    { id: '1', name: '功能/操作2', pgmId: '2', sectId: '2', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '2', checked: false },
                    { id: '1', name: '功能/操作3', pgmId: '2', sectId: '2', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '2', checked: false },
                    { id: '1', name: '功能/操作4', pgmId: '2', sectId: '2', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '2', checked: false },
                    { id: '1', name: '功能/操作5', pgmId: '2', sectId: '2', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '2', checked: false },
                ]
            },
            {
                id: '3', name: '模块1', pgmId: '2', checked: false, functs: [
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '3', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '3', checked: false },
                    { id: '1', name: '功能/操作2', pgmId: '2', sectId: '3', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '3', checked: false },
                    { id: '1', name: '功能/操作3', pgmId: '2', sectId: '3', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '3', checked: false },
                    { id: '1', name: '功能/操作4', pgmId: '2', sectId: '3', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '3', checked: false },
                    { id: '1', name: '功能/操作5', pgmId: '2', sectId: '3', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '3', checked: false },
                ]
            },
            {
                id: '4', name: '模块1', pgmId: '2', checked: false, functs: [
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '4', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '4', checked: false },
                    { id: '1', name: '功能/操作2', pgmId: '2', sectId: '4', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '4', checked: false },
                    { id: '1', name: '功能/操作3', pgmId: '2', sectId: '4', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '4', checked: false },
                    { id: '1', name: '功能/操作4', pgmId: '2', sectId: '4', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '4', checked: false },
                    { id: '1', name: '功能/操作5', pgmId: '2', sectId: '4', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '4', checked: false },
                ]
            },
            {
                id: '5', name: '模块1', pgmId: '2', checked: false, functs: [
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '5', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '5', checked: false },
                    { id: '1', name: '功能/操作2', pgmId: '2', sectId: '5', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '5', checked: false },
                    { id: '1', name: '功能/操作3', pgmId: '2', sectId: '5', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '5', checked: false },
                    { id: '1', name: '功能/操作4', pgmId: '2', sectId: '5', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '5', checked: false },
                    { id: '1', name: '功能/操作5', pgmId: '2', sectId: '5', checked: false },
                    { id: '1', name: '功能/操作1', pgmId: '2', sectId: '5', checked: false },
                ]
            },
        ]
    },
];

