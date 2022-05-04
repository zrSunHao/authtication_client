export interface WidgetElet {
    title: string;
    icon: string;
    color: string;
}

export interface ReportCtmElet {
    avatar: string;
    name: string;
    sysName: string;
    createdAt: Date;
}

export interface ReportLogElet {
    name: string;
    sysName: string;
    operate: string;
    createdAt: Date;
}

export const LOG_ELEMENT_DATA: ReportLogElet[] = [
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

export const CUSTOMER_ELEMENT_DATA: ReportCtmElet[] = [
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