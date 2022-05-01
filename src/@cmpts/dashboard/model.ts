export interface WidgetElement {
    title: string;
    icon: string;
    color: string;
}

export interface CustomerElement {
    avatar: string;
    name: string;
    sysName: string;
    createdAt: Date;
}

export const CUSTOMER_ELEMENT_DATA: CustomerElement[] = [
    { avatar: '/assets/images/people_1.jpg', name: 'zhangsan', sysName: '文件存储', createdAt: new Date() },
    { avatar: '/assets/images/logo_256.png', name: 'lisi', sysName: '档案存储', createdAt: new Date() },
    { avatar: '/assets/images/people_1.jpg', name: 'zhangsan', sysName: '音乐中心', createdAt: new Date() },
    { avatar: '/assets/icons/customer.png', name: 'zhangsan', sysName: '博客', createdAt: new Date() },
    { avatar: '/assets/images/people_1.jpg', name: 'wangwu', sysName: '仓储中心档案存储', createdAt: new Date() },
    { avatar: '/assets/images/logo_256.png', name: 'zhangsan', sysName: '仓仓储中心储中心', createdAt: new Date() },
    { avatar: '/assets/images/people_1.jpg', name: 'haha', sysName: '仓储中心', createdAt: new Date() },
    { avatar: '/assets/images/logo_256.png', name: 'dede', sysName: '仓储中心', createdAt: new Date() },
    { avatar: '/assets/icons/customer.png', name: 'lucas', sysName: '仓储中心', createdAt: new Date() },
    { avatar: '/assets/images/people_1.jpg', name: 'zhangsan', sysName: '仓储中心', createdAt: new Date() },
];

export interface LogElement {
    name: string;
    sysName: string;
    operate: string;
    createdAt: Date;
}

export const LOG_ELEMENT_DATA: LogElement[] = [
    { name: 'zhangsan', operate: '查询列表', sysName: '文件存储', createdAt: new Date() },
    { name: 'zhangsan', operate: '查询列表', sysName: '文件存储', createdAt: new Date() },
    { name: 'zhangsan', operate: '查询列表', sysName: '文件存储', createdAt: new Date() },
    { name: 'zhangsan', operate: '查询列表', sysName: '文件存储', createdAt: new Date() },
    { name: 'zhangsan', operate: '查询列表', sysName: '文件存储', createdAt: new Date() },
    { name: 'zhangsan', operate: '查询列表', sysName: '文件存储', createdAt: new Date() },
    { name: 'zhangsan', operate: '查询列表', sysName: '文件存储', createdAt: new Date() },
    { name: 'zhangsan', operate: '查询列表', sysName: '文件存储', createdAt: new Date() },
    { name: 'zhangsan', operate: '查询列表', sysName: '文件存储', createdAt: new Date() },
    { name: 'zhangsan', operate: '查询列表', sysName: '文件存储', createdAt: new Date() },
];

export interface ConstraintElement {
    id: string;
    category: '1' | '2' | '3' | '4';//账号->所有系统 账号->某系统 程序->功能 系统->角色 
    method: '1' | '2'; //禁用 锁定
    userName: string;
    sysName: string;
    functionName: string;
    origin: string;
    expiredAt: Date | null; // 锁定时需要
    createdAt: Date;
    remark: string;
}

export const CONSTRAINT_ELEMENT_DATA: ConstraintElement[] = [
    { id: '1', category: '1', method: '1', userName: 'lisi01', sysName: '- - -', functionName: '- - -', origin: '安全服务添加', expiredAt: null, createdAt: new Date(), remark: '识别为爬虫' },
    { id: '2', category: '2', method: '1', userName: 'zhangsan', sysName: 'sys-1', functionName: '- - -', origin: '业务管理员张三添加', expiredAt: null, createdAt: new Date(), remark: '恶意言论' },
    { id: '3', category: '3', method: '2', userName: '- - -', sysName: 'sys-2', functionName: '添加', origin: '业务管理员张三添加', expiredAt: new Date(), createdAt: new Date(), remark: '升级' },
    { id: '4', category: '4', method: '2', userName: 'lisi01', sysName: 'sys-3', functionName: '管理员', origin: '业务管理员张三添加', expiredAt: new Date(), createdAt: new Date(), remark: '职能调整' },
    { id: '1', category: '1', method: '1', userName: 'lisi01', sysName: '- - -', functionName: '- - -', origin: '安全服务添加', expiredAt: null, createdAt: new Date(), remark: '识别为爬虫' },
    { id: '2', category: '2', method: '1', userName: 'zhangsan', sysName: 'sys-1', functionName: '- - -', origin: '业务管理员张三添加', expiredAt: null, createdAt: new Date(), remark: '恶意言论' },
    { id: '3', category: '3', method: '2', userName: '- - -', sysName: 'sys-2', functionName: '添加', origin: '业务管理员张三添加', expiredAt: new Date(), createdAt: new Date(), remark: '升级' },
    { id: '4', category: '4', method: '2', userName: 'lisi01', sysName: 'sys-3', functionName: '管理员', origin: '业务管理员张三添加', expiredAt: new Date(), createdAt: new Date(), remark: '职能调整' },
    { id: '1', category: '1', method: '1', userName: 'lisi01', sysName: '- - -', functionName: '- - -', origin: '安全服务添加', expiredAt: null, createdAt: new Date(), remark: '识别为爬虫' },
    { id: '2', category: '2', method: '1', userName: 'zhangsan', sysName: 'sys-1', functionName: '- - -', origin: '业务管理员张三添加', expiredAt: null, createdAt: new Date(), remark: '恶意言论' },
];