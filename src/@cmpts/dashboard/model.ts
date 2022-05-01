export interface WidgetElement {
    title: string;
    icon: string;
    color: string;
}

export interface CustomerElement {
    avatar: string;
    name: string;
    app: string;
    createdAt: Date;
}

export const CUSTOMER_ELEMENT_DATA: CustomerElement[] = [
    { avatar: '/assets/images/people_1.jpg', name: 'zhangsan', app: '文件存储', createdAt: new Date() },
    { avatar: '/assets/images/logo_256.png', name: 'lisi', app: '档案存储', createdAt: new Date() },
    { avatar: '/assets/images/people_1.jpg', name: 'zhangsan', app: '音乐中心', createdAt: new Date() },
    { avatar: '/assets/icons/customer.png', name: 'zhangsan', app: '博客', createdAt: new Date() },
    { avatar: '/assets/images/people_1.jpg', name: 'wangwu', app: '仓储中心档案存储', createdAt: new Date() },
    { avatar: '/assets/images/logo_256.png', name: 'zhangsan', app: '仓仓储中心储中心', createdAt: new Date() },
    { avatar: '/assets/images/people_1.jpg', name: 'haha', app: '仓储中心', createdAt: new Date() },
    { avatar: '/assets/images/logo_256.png', name: 'dede', app: '仓储中心', createdAt: new Date() },
    { avatar: '/assets/icons/customer.png', name: 'lucas', app: '仓储中心', createdAt: new Date() },
    { avatar: '/assets/images/people_1.jpg', name: 'zhangsan', app: '仓储中心', createdAt: new Date() },
];

export interface LogElement {
    name: string;
    app: string;
    operate: string;
    createdAt: Date;
}

export const LOG_ELEMENT_DATA: LogElement[] = [
    { name: 'zhangsan', operate: '查询列表', app: '文件存储', createdAt: new Date() },
    { name: 'zhangsan', operate: '查询列表', app: '文件存储', createdAt: new Date() },
    { name: 'zhangsan', operate: '查询列表', app: '文件存储', createdAt: new Date() },
    { name: 'zhangsan', operate: '查询列表', app: '文件存储', createdAt: new Date() },
    { name: 'zhangsan', operate: '查询列表', app: '文件存储', createdAt: new Date() },
    { name: 'zhangsan', operate: '查询列表', app: '文件存储', createdAt: new Date() },
    { name: 'zhangsan', operate: '查询列表', app: '文件存储', createdAt: new Date() },
    { name: 'zhangsan', operate: '查询列表', app: '文件存储', createdAt: new Date() },
    { name: 'zhangsan', operate: '查询列表', app: '文件存储', createdAt: new Date() },
    { name: 'zhangsan', operate: '查询列表', app: '文件存储', createdAt: new Date() },
];

export interface ConstraintElement {
    type: string;
    name: string;
    method: string;
    expireAt: Date;
    origin: string;
    createdAt: Date;
    remark: string;
}

export const CONSTRAINT_ELEMENT_DATA: ConstraintElement[] = [
    { type: 'APP级别', name: 'APP-1', method: '禁用', expireAt: new Date(), origin: '【业务管理员】【李四】', remark: '恶意言论', createdAt: new Date() },
    { type: '账号级别', name: 'zhangsan', method: '锁定', expireAt: new Date(), origin: '【后台服务】【service-2】', remark: '识别为网络爬虫', createdAt: new Date() },
    { type: '功能级别', name: '删除', method: '锁定', expireAt: new Date(), origin: '【开发管理员】【张三】', remark: '出现bug', createdAt: new Date() },
    { type: 'APP级别', name: 'APP-1', method: '禁用', expireAt: new Date(), origin: '【业务管理员】【李四】', remark: '恶意言论', createdAt: new Date() },
    { type: '账号级别', name: 'zhangsan', method: '锁定', expireAt: new Date(), origin: '【后台服务】【service-2】', remark: '识别为网络爬虫', createdAt: new Date() },
    { type: '功能级别', name: '删除', method: '锁定', expireAt: new Date(), origin: '【开发管理员】【张三】', remark: '出现bug', createdAt: new Date() },
    { type: 'APP级别', name: 'APP-1', method: '禁用', expireAt: new Date(), origin: '【业务管理员】【李四】', remark: '恶意言论', createdAt: new Date() },
    { type: '账号级别', name: 'zhangsan', method: '锁定', expireAt: new Date(), origin: '【后台服务】【service-2】', remark: '识别为网络爬虫', createdAt: new Date() },
    { type: '功能级别', name: '删除', method: '锁定', expireAt: new Date(), origin: '【开发管理员】【张三】', remark: '出现bug', createdAt: new Date() },
    { type: 'APP级别', name: 'APP-1', method: '禁用', expireAt: new Date(), origin: '【业务管理员】【李四】', remark: '恶意言论', createdAt: new Date() },
    { type: '账号级别', name: 'zhangsan', method: '锁定', expireAt: new Date(), origin: '【后台服务】【service-2】', remark: '识别为网络爬虫', createdAt: new Date() },
    { type: '功能级别', name: '删除', method: '锁定', expireAt: new Date(), origin: '【开发管理员】【张三】', remark: '出现bug', createdAt: new Date() },
]