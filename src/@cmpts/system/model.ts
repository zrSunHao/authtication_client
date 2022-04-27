export interface SystemElement {
    id: string | null;
    logo: string | null;
    name: string;
    code: string;
    createdAt: Date | null;
    intro: string;
    remark: string;
}

export const SYSTEM_ELEMENT_DATA: SystemElement[] = [
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

export interface ProgramElement {
    id: string;
    name: string;
    type: '' | '1' | '2' | '3' | '4'; // 网页端 桌面端 移动端 服务端
    code: string;
    intro: string;
    remark: string;
    createdAt: Date;
}

export const PROGRAM_ELEMENT_DATA: ProgramElement[] = [
    { id: '1', name: 'client_1', type: '1', code: 'customer_angular', intro: '认证中心Angular版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '2', name: 'desktop_2', type: '2', code: 'customer_wpf', intro: '认证中心WPF版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '3', name: 'mobile_3', type: '3', code: 'customer_android', intro: '认证中心android版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '4', name: 'service_4', type: '4', code: 'customer_net6', intro: '认证中心net6版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '5', name: 'client_5', type: '1', code: 'customer_angular', intro: '认证中心Angular版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '6', name: 'desktop_6', type: '2', code: 'customer_wpf', intro: '认证中心WPF版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '7', name: 'mobile_7', type: '3', code: 'customer_android', intro: '认证中心android版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '8', name: 'service_8', type: '4', code: 'customer_net6', intro: '认证中心net6版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '9', name: 'mobile_9', type: '3', code: 'customer_android', intro: '认证中心android版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { id: '10', name: 'service_10', type: '4', code: 'customer_net6', intro: '认证中心net6版', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
];

export interface RoleElement {
    name: string;
    code: string;
    limitedMethod: '1' | '2' | '';//禁用 锁定
    limitedExpiredAt: Date;
    createdAt: Date;
    remark: string;
}

export const ROLE_ELEMENT_DATA: RoleElement[] = [
    { name: '普通用户', code: 'default', limitedMethod: '1', limitedExpiredAt: new Date(), createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
    { name: '会员', code: 'default', limitedMethod: '1', limitedExpiredAt: new Date(), createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
    { name: '管理员', code: 'default', limitedMethod: '1', limitedExpiredAt: new Date(), createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
    { name: '超级管理员', code: 'default', limitedMethod: '1', limitedExpiredAt: new Date(), createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
    { name: '业务员', code: 'default', limitedMethod: '1', limitedExpiredAt: new Date(), createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
    { name: '测试人员', code: 'default', limitedMethod: '1', limitedExpiredAt: new Date(), createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
    { name: '设计人员', code: 'default', limitedMethod: '1', limitedExpiredAt: new Date(), createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
    { name: '开发人员', code: 'default', limitedMethod: '1', limitedExpiredAt: new Date(), createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
    { name: '普通用户', code: 'default', limitedMethod: '1', limitedExpiredAt: new Date(), createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
    { name: '普通用户', code: 'default', limitedMethod: '1', limitedExpiredAt: new Date(), createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
    { name: '普通用户', code: 'default', limitedMethod: '1', limitedExpiredAt: new Date(), createdAt: new Date(), remark: '对方是个士大夫敢死队敢死队山豆根山豆根' },
];

export interface FunctionElement {
    id: string;
    name: string;
    checked: boolean;
}

export interface SectionElement {
    id: string;
    name: string;
    functions: Array<FunctionElement>;
}

export interface RoleSectionElement {
    id: string;
    systemName: string;
    sections: Array<SectionElement>;
}

export const ROLE_SECTION_ELEMENT_DATA: RoleSectionElement[] = [
    {
        id: '1',
        systemName: 'web端',
        sections: [
            {
                id: '1', name: '模块1', functions: [
                    { id: '1', name: '功能/操作1', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作2', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作3', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作4', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作5', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                ]
            },
            {
                id: '1', name: '模块1', functions: [
                    { id: '1', name: '功能/操作1', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作2', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作3', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作4', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作5', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                ]
            },
            {
                id: '1', name: '模块1', functions: [
                    { id: '1', name: '功能/操作1', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作2', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作3', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作4', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作5', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                ]
            },
            {
                id: '1', name: '模块1', functions: [
                    { id: '1', name: '功能/操作1', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作2', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作3', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作4', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作5', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                ]
            },
            {
                id: '1', name: '模块1', functions: [
                    { id: '1', name: '功能/操作1', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作2', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作3', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作4', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作5', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                ]
            },
        ]
    },
    {
        id: '2',
        systemName: '移动端',
        sections: [
            {
                id: '1', name: '模块1', functions: [
                    { id: '1', name: '功能/操作1', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作2', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作3', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作4', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作5', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                ]
            },
            {
                id: '1', name: '模块1', functions: [
                    { id: '1', name: '功能/操作1', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作2', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作3', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作4', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作5', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                ]
            },
            {
                id: '1', name: '模块1', functions: [
                    { id: '1', name: '功能/操作1', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作2', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作3', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作4', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作5', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                ]
            },
            {
                id: '1', name: '模块1', functions: [
                    { id: '1', name: '功能/操作1', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作2', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作3', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作4', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作5', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                ]
            },
            {
                id: '1', name: '模块1', functions: [
                    { id: '1', name: '功能/操作1', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作2', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作3', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作4', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作5', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                ]
            },
        ]
    },
    {
        id: '2',
        systemName: '服务端',
        sections: [
            {
                id: '1', name: '模块1', functions: [
                    { id: '1', name: '功能/操作1', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作2', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作3', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作4', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作5', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                ]
            },
            {
                id: '1', name: '模块1', functions: [
                    { id: '1', name: '功能/操作1', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作2', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作3', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作4', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作5', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                ]
            },
            {
                id: '1', name: '模块1', functions: [
                    { id: '1', name: '功能/操作1', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作2', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作3', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作4', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作5', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                ]
            },
            {
                id: '1', name: '模块1', functions: [
                    { id: '1', name: '功能/操作1', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作2', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作3', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作4', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作5', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                ]
            },
            {
                id: '1', name: '模块1', functions: [
                    { id: '1', name: '功能/操作1', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作2', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作3', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作4', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                    { id: '1', name: '功能/操作5', checked: false }, { id: '1', name: '功能/操作1', checked: false },
                ]
            },
        ]
    },
];

export class SystemSearchDto {
    name: string = '';
    code: string = '';
    introOrRemark: string = '';
    startAt: Date | null = null;
    endAt: Date | null = null;
}

export class SystemProgramSearchDto {
    nameOrCode: string = '';
    type: '' | '1' | '2' | '3' | '4' = '';
    introOrRemark: string = '';
}

export class RoleSearchDto {
    systemId: string = '';
    nameOrCode: string = '';
    type: '' | '1' | '2' | '3' | '4' = '';
    introOrRemark: string = '';
    startAt: Date | null = null;
    endAt: Date | null = null;
}