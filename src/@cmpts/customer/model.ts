export interface CustomerElement {
    id: string | null;
    avatar: string;
    name: string;
    nickname: string;
    limited: '0' | '1';
    lastLoginAt: Date;
    remark: string;
    createdAt: Date | null;
}

export const CUSTOMER_ELEMENT_DATA: CustomerElement[] = [
    {
        id: '1', avatar: '/assets/images/people_1.jpg', name: 'zhangsan', nickname: '张三',
        limited: '0', lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', avatar: '/assets/images/logo_256.png', name: 'zhangsan', nickname: '认识的v',
        limited: '1', lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', avatar: '/assets/images/people_1.jpg', name: 'zhangsan', nickname: '是发',
        limited: '0', lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', avatar: '/assets/images/logo_256.png', name: 'zhangsan', nickname: '张三',
        limited: '1', lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', avatar: '/assets/images/people_1.jpg', name: 'zhangsan', nickname: '王五打赏',
        limited: '0', lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', avatar: '/assets/images/logo_256.png', name: 'zhangsan', nickname: '浮点数',
        limited: '1', lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', avatar: '/assets/images/people_1.jpg', name: 'zhangsan', nickname: '个位数',
        limited: '0', lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', avatar: '/assets/images/logo_256.png', name: 'zhangsan', nickname: '方法',
        limited: '1', lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', avatar: '/assets/images/people_1.jpg', name: 'zhangsan', nickname: '更好四个',
        limited: '1', lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', avatar: '/assets/images/logo_256.png', name: 'zhangsan', nickname: '法撒撒旦',
        limited: '0', lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦撒看见打撒萨达萨达撒旦撒旦'
    },
];

export interface CustomerRoleElement {
    avatar: string;
    appName: string;
    roleName: string;
    remark: string;
    createdAt: Date;
}

export const CUSTOMER_ROLE_ELEMENT_DATA: CustomerRoleElement[] = [
    {
        avatar: '/assets/images/people_1.jpg', appName: 'app-111', roleName: '管理员',
        createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        avatar: '/assets/images/people_1.jpg', appName: 'app-222', roleName: '超级管理员',
        createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        avatar: '/assets/images/people_1.jpg', appName: 'app-333', roleName: '业务员',
        createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        avatar: '/assets/images/people_1.jpg', appName: 'app-444', roleName: '开发工程师',
        createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        avatar: '/assets/images/people_1.jpg', appName: 'app-555', roleName: '产品设计工程师',
        createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
];

export interface ConstraintElement {
    category: '1' | '2';
    method: '1' | '2';
    appName: string;
    origin: string;
    expiredAt: Date;
    createdAt: Date;
    remark: string;
}

export const CONSTRAINT_ELEMENT_DATA: ConstraintElement[] = [
    {
        category: '1', method: '1', appName: 'app-111', expiredAt: new Date(), origin: '【业务员】李四', createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        category: '1', method: '1', appName: 'app-111', expiredAt: new Date(), origin: '【业务员】李四', createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        category: '2', method: '2', appName: 'app-111', expiredAt: new Date(), origin: '【后台服务】【service2】', createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        category: '1', method: '1', appName: 'app-111', expiredAt: new Date(), origin: '【业务员】李四', createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        category: '1', method: '1', appName: 'app-111', expiredAt: new Date(), origin: '【业务员】李四', createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
];

export interface LogElement {
    operate: string;
    appName: string;
    roleName: string;
    createdAt: Date;
    remark: string;
}

export const LOG_ELEMENT_DATA: LogElement[] = [
    { operate: '查询列表', appName: 'app-111', roleName: '普通用户', createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦' },
    { operate: '查询列表', appName: 'app-222', roleName: '管理员', createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦' },
    { operate: '查询列表', appName: 'app-333', roleName: '业务员', createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦' },
    { operate: '查询列表', appName: 'app-444', roleName: '设计师', createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦' },
    { operate: '查询列表', appName: 'app-555', roleName: '工程师', createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦' },

];

export class CustomerSearchDto {
    nameOrNickname: string = '';
    limited: '' | '0' | '1' = '';
    remark: string = '';
    startAt: Date | null = null;
    endAt: Date | null = null;
}
