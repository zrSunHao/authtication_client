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
        id: '1', avatar: '', name: 'zhangsan', nickname: '张三',
        limited: '0', lastLoginAt: new Date(), createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', avatar: '', name: 'zhangsan', nickname: '认识的v',
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
    id: string;
    sysLogo: string;
    sysName: string;
    roleName: string;
    rank: number;// 0：全部 1：默认 2：普通用户 10：会员  100：业务员  1000：管理员 10000：超级管理员
    remark: string;
    createdAt: Date; //关联时间
}

export const CUSTOMER_ROLE_ELEMENT_DATA: CustomerRoleElement[] = [
    {
        id: '1', sysLogo: '', sysName: 'app-111', roleName: '管理员',
        rank: 1, createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦撒看见打撒萨达萨达撒旦撒旦撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', sysLogo: '', sysName: 'app-222', roleName: '超级管理员',
        rank: 2, createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', sysLogo: '', sysName: 'app-333', roleName: '业务员',
        rank: 10, createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', sysLogo: '', sysName: 'app-444', roleName: '开发工程师',
        rank: 100, createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', sysLogo: '', sysName: 'app-555', roleName: '产品设计工程师',
        rank: 1000, createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
];

export interface ConstraintElement {
    id: string;
    category: '1' | '2'; //账号->所有系统 账号->某系统
    method: '1' | '2';//禁用 锁定
    sysName: string | null;
    origin: string;
    expiredAt: Date | null;
    createdAt: Date;
    remark: string;
}

export const CONSTRAINT_ELEMENT_DATA: ConstraintElement[] = [
    {
        id: '1', category: '1', method: '1', sysName: '', expiredAt: null, origin: '【业务员】李四', createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', category: '2', method: '1', sysName: 'app-111', expiredAt: null, origin: '【业务员】李四', createdAt: new Date(), remark: '撒看见打撒撒看见打撒萨达萨达撒旦撒旦萨达萨达撒旦撒旦'
    },
    {
        id: '1', category: '2', method: '2', sysName: 'app-111', expiredAt: new Date(), origin: '【后台服务】【service2】', createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', category: '1', method: '1', sysName: '', expiredAt: null, origin: '【业务员】李四', createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦撒看见打撒萨达萨达撒旦撒旦'
    },
    {
        id: '1', category: '2', method: '1', sysName: 'app-111', expiredAt: null, origin: '【业务员】李四', createdAt: new Date(), remark: '撒看见打撒撒看见打撒萨达萨达撒旦撒旦萨达萨达撒旦撒旦'
    },
];

export interface LogElement {
    id: string;
    operate: string;
    sysName: string;
    roleName: string;
    roleRank: number;// 1：默认 2：普通用户 10：会员  100：业务员  1000：管理员 10000：超级管理员
    createdAt: Date;
    remark: string;
}

export const LOG_ELEMENT_DATA: LogElement[] = [
    { id: '1', operate: '查询列表', sysName: 'app-111', roleName: '普通用户', roleRank: 1, createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦' },
    { id: '1', operate: '查询列表', sysName: 'app-222', roleName: '管理员', roleRank: 2, createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦' },
    { id: '1', operate: '查询列表', sysName: 'app-333', roleName: '业务员', roleRank: 10, createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦' },
    { id: '1', operate: '查询列表', sysName: 'app-444', roleName: '设计师', roleRank: 100, createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦' },
    { id: '1', operate: '查询列表', sysName: 'app-555', roleName: '工程师', roleRank: 1000, createdAt: new Date(), remark: '撒看见打撒萨达萨达撒旦撒旦' },

];

export interface PeopleElement {
    id: string;
    customerId: string;
    fullName: string;
    gender: '1' | '2';//男 女
    birthday: Date;
    education: string;
    profession: string;
    intro: string;
}

export class CustomerSearchDto {
    nameOrNickname: string = '';
    limited: '' | '0' | '1' = '';
    remark: string = '';
    startAt: Date | null = null;
    endAt: Date | null = null;
}

export class CustomerRoleSearchDto {
    customerId: string = '';
    sysName: string | null = '';
    roleName: string | null = '';
}

export class CustomerConstraintSearchDto {
    customerId: string = '';
    category: '' | '1' | '2' = ''; //账号->所有系统 账号->某系统
    sysName: string = '';
}

export class CustomerLogSearchDto {
    customerId: string = '';
    operate: string = '';
    sysName: string = '';
    startAt: Date | null = null;
    endAt: Date | null = null;
}
