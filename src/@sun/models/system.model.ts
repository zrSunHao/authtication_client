import { CttMethod } from "./constraint.model";
import { OptionItem } from "./paging.model";
import { PgmElet, PgmType } from "./program.model";

export enum RoleRank {
    default = 1,            // 默认/普通用户
    member = 10,            // 会员
    business = 100,         // 业务员
    manager = 1000,         // 管理员
    sysManager = 10000,     // 系统管理员
    superManager = 100000,  // 超级管理员
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
    systemId: string | null = '';
    code: string = '';
    limitedMethod: CttMethod = CttMethod.other;
    limitedExpiredAt: Date | null = null;
    createdAt: Date | null = null;
    remark: string = '';
}

export class SysFunctElet {
    id: string = '';
    name: string = '';
    programId: string = '';
    sectionId: string = '';
    checked: boolean = false;
}

export interface SysSectElet {
    id: string;
    name: string;
    programId: string;
    checked: boolean;
    functions: Array<SysFunctElet>;
}

export interface RoleFunctElet {
    id: string;
    programName: string;
    sections: Array<SysSectElet>;
}

export const ROLE_RANK_OPS: OptionItem[] = [
    { key: RoleRank.other, value: '- - -' },
    { key: RoleRank.default, value: '默认/普通用户' },
    { key: RoleRank.member, value: '会员' },
    { key: RoleRank.business, value: '业务员' },
    { key: RoleRank.manager, value: '管理员' },
    { key: RoleRank.sysManager, value: '系统管理员' },
    { key: RoleRank.superManager, value: '超级管理员' },
];




export class SysSearchDto {
    name: string = '';
    code: string = '';
    introOrRemark: string = '';
    startAt: Date | null = null;
    endAt: Date | null = null;
}

export class SysPgmSearchDto {
    systemId: string = '';
    nameOrCode: string = '';
    type: '' | '1' | '2' | '3' | '4' = '';
}

export class SysPgmGetDto {
    systemId: string = '';
    nameOrCode: string = '';
    type: '' | '1' | '2' | '3' | '4' = '';
    introOrRemark: string = '';
}

export class RoleSearchDto {
    systemId: string = '';
    nameOrCode: string = '';
    type: '' | '1' | '2' | '3' = '';
    rank: number = 0;// 0：全部 1：默认 2：普通用户 10：会员  100：业务员  1000：管理员 10000：超级管理员
    startAt: Date | null = null;
    endAt: Date | null = null;
}

export class RoleFunctDto {
    roleId: string = '';
    programId: string = '';
    sectionIds: string[] = [];
    functionIds: string[] = [];
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
    { id: '1', name: 'client_1', type: PgmType.web, systemId: '', code: 'customer_angular', intro: '认证中心Angular版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '2', name: 'desktop_2', type: PgmType.desktop, systemId: '', code: 'customer_wpf', intro: '认证中心WPF版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '3', name: 'mobile_3', type: PgmType.mobile, systemId: '', code: 'customer_android', intro: '认证中心android版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '4', name: 'service_4', type: PgmType.service, systemId: '', code: 'customer_net6', intro: '认证中心net6版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '5', name: 'client_5', type: PgmType.web, systemId: '', code: 'customer_angular', intro: '认证中心Angular版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '6', name: 'desktop_6', type: PgmType.desktop, systemId: '', code: 'customer_wpf', intro: '认证中心WPF版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '7', name: 'mobile_7', type: PgmType.mobile, systemId: '', code: 'customer_android', intro: '认证中心android版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '8', name: 'service_8', type: PgmType.service, systemId: '', code: 'customer_net6', intro: '认证中心net6版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '9', name: 'mobile_9', type: PgmType.mobile, systemId: '', code: 'customer_android', intro: '认证中心android版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '10', name: 'service_10', type: PgmType.service, systemId: '', code: 'customer_net6', intro: '认证中心net6版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
];

export const ROLE_ELEMENT_DATA: RoleElet[] = [
    { id: '1', rank: RoleRank.default, name: '普通用户', systemId: '', code: 'default', limitedMethod: CttMethod.forbid, limitedExpiredAt: null, createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
    { id: '1', rank: RoleRank.member, name: '会员', systemId: '', code: 'default', limitedMethod: CttMethod.lock, limitedExpiredAt: new Date(), createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
    { id: '1', rank: RoleRank.manager, name: '管理员', systemId: '', code: 'default', limitedMethod: CttMethod.forbid, limitedExpiredAt: null, createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
    { id: '1', rank: RoleRank.superManager, name: '超级管理员', systemId: '', code: 'default', limitedMethod: CttMethod.lock, limitedExpiredAt: new Date(), createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
    { id: '1', rank: RoleRank.business, name: '业务员', systemId: '', code: 'default', limitedMethod: CttMethod.other, limitedExpiredAt: null, createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
    { id: '1', rank: RoleRank.business, name: '测试人员', systemId: '', code: 'default', limitedMethod: CttMethod.other, limitedExpiredAt: null, createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
    { id: '1', rank: RoleRank.business, name: '设计人员', systemId: '', code: 'default', limitedMethod: CttMethod.other, limitedExpiredAt: null, createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
    { id: '1', rank: RoleRank.business, name: '开发人员', systemId: '', code: 'default', limitedMethod: CttMethod.other, limitedExpiredAt: null, createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
    { id: '1', rank: RoleRank.default, name: '普通用户', systemId: '', code: 'default', limitedMethod: CttMethod.other, limitedExpiredAt: null, createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
    { id: '1', rank: RoleRank.default, name: '普通用户', systemId: '', code: 'default', limitedMethod: CttMethod.forbid, limitedExpiredAt: null, createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
    { id: '1', rank: RoleRank.default, name: '普通用户', systemId: '', code: 'default', limitedMethod: CttMethod.lock, limitedExpiredAt: new Date(), createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
];

export const ROLE_SECTION_ELEMENT_DATA: RoleFunctElet[] = [
    {
        id: '1',
        programName: 'web端',
        sections: [
            {
                id: '1', name: '模块1', programId: '1', checked: false, functions: [
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '1', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '1', checked: false },
                    { id: '1', name: '功能/操作2', programId: '1', sectionId: '1', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '1', checked: false },
                    { id: '1', name: '功能/操作3', programId: '1', sectionId: '1', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '1', checked: false },
                    { id: '1', name: '功能/操作4', programId: '1', sectionId: '1', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '1', checked: false },
                    { id: '1', name: '功能/操作5', programId: '1', sectionId: '1', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '1', checked: false },
                ]
            },
            {
                id: '2', name: '模块1', programId: '1', checked: false, functions: [
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '2', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '2', checked: false },
                    { id: '1', name: '功能/操作2', programId: '1', sectionId: '2', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '2', checked: false },
                    { id: '1', name: '功能/操作3', programId: '1', sectionId: '2', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '2', checked: false },
                    { id: '1', name: '功能/操作4', programId: '1', sectionId: '2', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '2', checked: false },
                    { id: '1', name: '功能/操作5', programId: '1', sectionId: '2', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '2', checked: false },
                ]
            },
            {
                id: '3', name: '模块1', programId: '1', checked: false, functions: [
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '3', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '3', checked: false },
                    { id: '1', name: '功能/操作2', programId: '1', sectionId: '3', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '3', checked: false },
                    { id: '1', name: '功能/操作3', programId: '1', sectionId: '3', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '3', checked: false },
                    { id: '1', name: '功能/操作4', programId: '1', sectionId: '3', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '3', checked: false },
                    { id: '1', name: '功能/操作5', programId: '1', sectionId: '3', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '3', checked: false },
                ]
            },
            {
                id: '4', name: '模块1', programId: '1', checked: false, functions: [
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '4', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '4', checked: false },
                    { id: '1', name: '功能/操作2', programId: '1', sectionId: '4', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '4', checked: false },
                    { id: '1', name: '功能/操作3', programId: '1', sectionId: '4', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '4', checked: false },
                    { id: '1', name: '功能/操作4', programId: '1', sectionId: '4', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '4', checked: false },
                    { id: '1', name: '功能/操作5', programId: '1', sectionId: '4', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '4', checked: false },
                ]
            },
            {
                id: '5', name: '模块1', programId: '1', checked: false, functions: [
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '5', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '5', checked: false },
                    { id: '1', name: '功能/操作2', programId: '1', sectionId: '5', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '5', checked: false },
                    { id: '1', name: '功能/操作3', programId: '1', sectionId: '5', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '5', checked: false },
                    { id: '1', name: '功能/操作4', programId: '1', sectionId: '5', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '5', checked: false },
                    { id: '1', name: '功能/操作5', programId: '1', sectionId: '5', checked: false },
                    { id: '1', name: '功能/操作1', programId: '1', sectionId: '5', checked: false },
                ]
            },
        ]
    },
    {
        id: '2',
        programName: '移动端',
        sections: [
            {
                id: '1', name: '模块1', programId: '2', checked: false, functions: [
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '1', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '1', checked: false },
                    { id: '1', name: '功能/操作2', programId: '2', sectionId: '1', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '1', checked: false },
                    { id: '1', name: '功能/操作3', programId: '2', sectionId: '1', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '1', checked: false },
                    { id: '1', name: '功能/操作4', programId: '2', sectionId: '1', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '1', checked: false },
                    { id: '1', name: '功能/操作5', programId: '2', sectionId: '1', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '1', checked: false },
                ]
            },
            {
                id: '2', name: '模块1', programId: '2', checked: false, functions: [
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '2', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '2', checked: false },
                    { id: '1', name: '功能/操作2', programId: '2', sectionId: '2', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '2', checked: false },
                    { id: '1', name: '功能/操作3', programId: '2', sectionId: '2', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '2', checked: false },
                    { id: '1', name: '功能/操作4', programId: '2', sectionId: '2', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '2', checked: false },
                    { id: '1', name: '功能/操作5', programId: '2', sectionId: '2', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '2', checked: false },
                ]
            },
            {
                id: '3', name: '模块1', programId: '2', checked: false, functions: [
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '3', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '3', checked: false },
                    { id: '1', name: '功能/操作2', programId: '2', sectionId: '3', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '3', checked: false },
                    { id: '1', name: '功能/操作3', programId: '2', sectionId: '3', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '3', checked: false },
                    { id: '1', name: '功能/操作4', programId: '2', sectionId: '3', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '3', checked: false },
                    { id: '1', name: '功能/操作5', programId: '2', sectionId: '3', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '3', checked: false },
                ]
            },
            {
                id: '4', name: '模块1', programId: '2', checked: false, functions: [
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '4', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '4', checked: false },
                    { id: '1', name: '功能/操作2', programId: '2', sectionId: '4', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '4', checked: false },
                    { id: '1', name: '功能/操作3', programId: '2', sectionId: '4', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '4', checked: false },
                    { id: '1', name: '功能/操作4', programId: '2', sectionId: '4', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '4', checked: false },
                    { id: '1', name: '功能/操作5', programId: '2', sectionId: '4', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '4', checked: false },
                ]
            },
            {
                id: '5', name: '模块1', programId: '2', checked: false, functions: [
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '5', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '5', checked: false },
                    { id: '1', name: '功能/操作2', programId: '2', sectionId: '5', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '5', checked: false },
                    { id: '1', name: '功能/操作3', programId: '2', sectionId: '5', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '5', checked: false },
                    { id: '1', name: '功能/操作4', programId: '2', sectionId: '5', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '5', checked: false },
                    { id: '1', name: '功能/操作5', programId: '2', sectionId: '5', checked: false },
                    { id: '1', name: '功能/操作1', programId: '2', sectionId: '5', checked: false },
                ]
            },
        ]
    },
];

