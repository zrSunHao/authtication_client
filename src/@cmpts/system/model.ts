export interface SystemElement {
    icon: string;
    name: string;
    code: string;
    createdAt: Date;
    intro: string;
    remark: string;
}

export const SYSTEM_ELEMENT_DATA: SystemElement[] = [
    { icon: '/assets/images/people_1.jpg', name: 'dgsddgds', code: 'hjrewe', createdAt: new Date(), intro: '他共为山豆根山豆根山豆根是德国i九二共识大锅饭时代吧', remark: '赴德国大使馆大使馆大使馆是豆腐干山豆根根深蒂固的是公司的' },
    { icon: '/assets/icons/program.png', name: 'dfgdhwer', code: 'dfgghdfg', createdAt: new Date(), intro: '特温特沃特污染问题威特沃特问题问题', remark: '人格问题热热特热天热温特沃' },
    { icon: '/assets/icons/program.png', name: 'gdffgdf', code: 'heggwe', createdAt: new Date(), intro: '而歌特我认为天文台威特沃特违规', remark: '而问题为特维格无人过问过问各有威威特委为' },
    { icon: '/assets/icons/history.png', name: 'dgsddgds', code: 'hjrewe', createdAt: new Date(), intro: '他共为山豆根山豆根山豆根是德国i九二共识大锅饭时代吧', remark: '赴德国大使馆大使馆大使馆是豆腐干山豆根根深蒂固的是公司的' },
    { icon: '/assets/icons/constraint.png', name: 'dfgdhwer', code: 'dfgghdfg', createdAt: new Date(), intro: '特温特沃特污染问题威特沃特问题问题', remark: '人格问题热热特热天热温特沃' },
    { icon: '/assets/icons/customer.png', name: 'gdffgdf', code: 'heggwe', createdAt: new Date(), intro: '而歌特我认为天文台威特沃特违规', remark: '而问题为特维格无人过问过问各有威威特委为' },
    { icon: '/assets/icons/customer.png', name: 'dgsddgds', code: 'hjrewe', createdAt: new Date(), intro: '他共为山豆根山豆根山豆根是德国i九二共识大锅饭时代吧', remark: '赴德国大使馆大使馆大使馆是豆腐干山豆根根深蒂固的是公司的' },
    { icon: '/assets/images/people_1.jpg', name: 'dfgdhwer', code: 'dfgghdfg', createdAt: new Date(), intro: '特温特沃特污染问题威特沃特问题问题', remark: '人格问题热热特热天热温特沃' },
    { icon: '/assets/images/people_1.jpg', name: 'gdffgdf', code: 'heggwe', createdAt: new Date(), intro: '而歌特我认为天文台威特沃特违规', remark: '而问题为特维格无人过问过问各有威威特委为' },
    { icon: '/assets/icons/analytcis.png', name: 'gdffgdf', code: 'heggwe', createdAt: new Date(), intro: '而歌特我认为天文台威特沃特违规', remark: '而问题为特维格无人过问过问各有威威特委为' },
];

export interface ProgramElement {
    name: string;
    type: '1' | '2' | '3' | '4';
    code: string;
    intro: string;
    remark: string;
}

export const PROGRAM_ELEMENT_DATA: ProgramElement[] = [
    { name: 'client_1', type: '1', code: 'code1', intro: '图片管理', remark: '啦啦啦啦啦啦啦啦啦啦' },
    { name: 'client_2', type: '1', code: 'code2', intro: '图片图片管理图片管理图片管理管理', remark: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦' },
    { name: 'desktop_1', type: '3', code: 'code3', intro: '文件云盘', remark: '啦啦啦啦啦啦啦啦啦啦' },
    { name: 'mobile_4', type: '4', code: 'code4', intro: '图片管理', remark: '啦啦啦啦啦啦啦啦啦啦' },
    { name: 'client_5', type: '1', code: 'code1', intro: '图片管理', remark: '啦啦啦啦啦啦啦啦啦啦' },
    { name: 'service_1', type: '2', code: 'code1', intro: '图片管理', remark: '啦啦啦啦啦啦啦啦啦啦' },
    { name: 'service_1', type: '2', code: 'code1', intro: '图片管理', remark: '啦啦啦啦啦啦啦啦啦啦' },
    { name: 'service_1', type: '2', code: 'code1', intro: '图片管理', remark: '啦啦啦啦啦啦啦啦啦啦' },
    { name: 'service_1', type: '2', code: 'code1', intro: '图片管理', remark: '啦啦啦啦啦啦啦啦啦啦' },
    { name: 'service_1', type: '2', code: 'code1', intro: '图片管理', remark: '啦啦啦啦啦啦啦啦啦啦' },
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
    name: string;
    checked: boolean;
}

export interface SectionElement {
    name: string;
    functions: Array<FunctionElement>;
}

export interface RoleSectionElement {
    name: string;
    section: Array<SectionElement>;
}

export const ROLE_SECTION_ELEMENT_DATA: RoleSectionElement[] = [
    {
        name: '角色1',
        section: [
            {
                name: '模块1', functions: [
                    { name: '功能/操作1', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作2', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作3', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作4', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作5', checked: false }, { name: '功能/操作1', checked: false },
                ]
            },
            {
                name: '模块1', functions: [
                    { name: '功能/操作1', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作2', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作3', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作4', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作5', checked: false }, { name: '功能/操作1', checked: false },
                ]
            },
            {
                name: '模块1', functions: [
                    { name: '功能/操作1', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作2', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作3', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作4', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作5', checked: false }, { name: '功能/操作1', checked: false },
                ]
            },
            {
                name: '模块1', functions: [
                    { name: '功能/操作1', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作2', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作3', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作4', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作5', checked: false }, { name: '功能/操作1', checked: false },
                ]
            },
            {
                name: '模块1', functions: [
                    { name: '功能/操作1', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作2', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作3', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作4', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作5', checked: false }, { name: '功能/操作1', checked: false },
                ]
            },
        ]
    },
    {
        name: '角色1',
        section: [
            {
                name: '模块1', functions: [
                    { name: '功能/操作1', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作2', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作3', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作4', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作5', checked: false }, { name: '功能/操作1', checked: false },
                ]
            },
            {
                name: '模块1', functions: [
                    { name: '功能/操作1', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作2', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作3', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作4', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作5', checked: false }, { name: '功能/操作1', checked: false },
                ]
            },
            {
                name: '模块1', functions: [
                    { name: '功能/操作1', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作2', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作3', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作4', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作5', checked: false }, { name: '功能/操作1', checked: false },
                ]
            },
            {
                name: '模块1', functions: [
                    { name: '功能/操作1', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作2', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作3', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作4', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作5', checked: false }, { name: '功能/操作1', checked: false },
                ]
            },
            {
                name: '模块1', functions: [
                    { name: '功能/操作1', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作2', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作3', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作4', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作5', checked: false }, { name: '功能/操作1', checked: false },
                ]
            },
        ]
    },
    {
        name: '角色1',
        section: [
            {
                name: '模块1', functions: [
                    { name: '功能/操作1', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作2', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作3', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作4', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作5', checked: false }, { name: '功能/操作1', checked: false },
                ]
            },
            {
                name: '模块1', functions: [
                    { name: '功能/操作1', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作2', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作3', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作4', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作5', checked: false }, { name: '功能/操作1', checked: false },
                ]
            },
            {
                name: '模块1', functions: [
                    { name: '功能/操作1', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作2', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作3', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作4', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作5', checked: false }, { name: '功能/操作1', checked: false },
                ]
            },
            {
                name: '模块1', functions: [
                    { name: '功能/操作1', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作2', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作3', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作4', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作5', checked: false }, { name: '功能/操作1', checked: false },
                ]
            },
            {
                name: '模块1', functions: [
                    { name: '功能/操作1', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作2', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作3', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作4', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作5', checked: false }, { name: '功能/操作1', checked: false },
                ]
            },
        ]
    },
    {
        name: '角色1',
        section: [
            {
                name: '模块1', functions: [
                    { name: '功能/操作1', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作2', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作3', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作4', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作5', checked: false }, { name: '功能/操作1', checked: false },
                ]
            },
            {
                name: '模块1', functions: [
                    { name: '功能/操作1', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作2', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作3', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作4', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作5', checked: false }, { name: '功能/操作1', checked: false },
                ]
            },
            {
                name: '模块1', functions: [
                    { name: '功能/操作1', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作2', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作3', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作4', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作5', checked: false }, { name: '功能/操作1', checked: false },
                ]
            },
            {
                name: '模块1', functions: [
                    { name: '功能/操作1', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作2', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作3', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作4', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作5', checked: false }, { name: '功能/操作1', checked: false },
                ]
            },
            {
                name: '模块1', functions: [
                    { name: '功能/操作1', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作2', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作3', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作4', checked: false }, { name: '功能/操作1', checked: false },
                    { name: '功能/操作5', checked: false }, { name: '功能/操作1', checked: false },
                ]
            },
        ]
    },
];