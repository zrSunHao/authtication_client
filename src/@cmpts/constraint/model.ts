export interface ConstraintElement {
    category: '1' | '2' | '3';//app 账号 功能
    method: '1' | '2';//禁用 锁定
    userName: string;
    appName: string;
    functionName: string;
    origin: string;
    expiredAt: Date | null;
    createdAt: Date;
    remark: string;
}

export const CONSTRAINT_ELEMENT_DATA: ConstraintElement[] = [
    { category: '1', method: '2', userName: 'lisi01', appName: 'app1', functionName: '------', origin: '业务管理员张三添加', expiredAt: new Date(), createdAt: new Date(), remark: '恶意言论' },
    { category: '2', method: '1', userName: 'zhangsan', appName: '----', functionName: '------', origin: '安全服务添加', expiredAt: null, createdAt: new Date(), remark: '识别为爬虫' },
    { category: '3', method: '2', userName: '------', appName: 'app1', functionName: '添加', origin: '业务管理员张三添加', expiredAt: new Date(), createdAt: new Date(), remark: '升级' },
    { category: '1', method: '2', userName: 'lisi01', appName: 'app1', functionName: '------', origin: '业务管理员张三添加', expiredAt: new Date(), createdAt: new Date(), remark: '恶意言论' },
    { category: '2', method: '1', userName: 'zhangsan', appName: '----', functionName: '------', origin: '安全服务添加', expiredAt: null, createdAt: new Date(), remark: '识别为爬虫' },
    { category: '3', method: '2', userName: '------', appName: 'app1', functionName: '添加', origin: '业务管理员张三添加', expiredAt: new Date(), createdAt: new Date(), remark: '升级' },
    { category: '1', method: '2', userName: 'lisi01', appName: 'app1', functionName: '------', origin: '业务管理员张三添加', expiredAt: new Date(), createdAt: new Date(), remark: '恶意言论' },
    { category: '2', method: '1', userName: 'zhangsan', appName: '----', functionName: '------', origin: '安全服务添加', expiredAt: null, createdAt: new Date(), remark: '识别为爬虫' },
    { category: '3', method: '2', userName: '------', appName: 'app1', functionName: '添加', origin: '业务管理员张三添加', expiredAt: new Date(), createdAt: new Date(), remark: '升级' },
    { category: '3', method: '2', userName: '------', appName: 'app1', functionName: '添加', origin: '业务管理员张三添加', expiredAt: new Date(), createdAt: new Date(), remark: '升级' },
];