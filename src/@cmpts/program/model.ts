export interface ProgramElement {
    name: string;
    type: '1' | '2' | '3' | '4';
    code: string;
    intro: string;
    remark: string;
    createdAt: Date;
}

export const PROGRAM_ELEMENT_DATA: ProgramElement[] = [
    { name: 'client_1', type: '1', code: 'code1', intro: '图片管理', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { name: 'client_2', type: '1', code: 'code2', intro: '图片管理', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { name: 'desktop_1', type: '3', code: 'code3', intro: '文件云盘', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { name: 'mobile_4', type: '4', code: 'code4', intro: '图片管理', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { name: 'client_5', type: '1', code: 'code1', intro: '图片管理', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { name: 'service_1', type: '2', code: 'code1', intro: '图片管理', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { name: 'service_1', type: '2', code: 'code1', intro: '图片管理', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { name: 'service_1', type: '2', code: 'code1', intro: '图片管理', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { name: 'service_1', type: '2', code: 'code1', intro: '图片管理', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
    { name: 'service_1', type: '2', code: 'code1', intro: '图片管理', createdAt: new Date(), remark: '啦啦啦啦啦啦啦啦啦啦' },
];

export interface SectionElement {
    name: string;
    type: '1' | '2';
    code: string;
    remark: string;
}

export const SECTION_ELEMENT_DATA: SectionElement[] = [
    { name: '页面/模块_1', type: '1', code: 'code1', remark: '啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦' },
    { name: '页面/模块_2', type: '1', code: 'code1', remark: '啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦' },
    { name: '页面/模块_3', type: '1', code: 'code1', remark: '啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦' },
    { name: '页面/模块_4', type: '1', code: 'code1', remark: '啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦' },
    { name: '页面/模块_5', type: '1', code: 'code1', remark: '啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦' },
    { name: '页面/模块_6', type: '1', code: 'code1', remark: '啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦' },
    { name: '页面/模块_7', type: '1', code: 'code1', remark: '啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦' },
    { name: '页面/模块_8', type: '1', code: 'code1', remark: '啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦' },
    { name: '页面/模块_9', type: '1', code: 'code1', remark: '啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦' },
    { name: '页面/模块_10', type: '1', code: 'code1', remark: '啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦' },
]

export interface FunctionElement {
    name: string;
    code: string;
    constraint: '1' | '2';
    limitedExpireAt: Date;
    remark: string;
}

export const FUNCTION_ELEMENT_DATA: FunctionElement[] = [
    { name: '添加', code: 'add', constraint: '1', limitedExpireAt: new Date(), remark: '梵蒂冈地方韩国人的好地方恢复的很好地方天热问个问题温特沃' },
    { name: '添加', code: 'add', constraint: '1', limitedExpireAt: new Date(), remark: '梵蒂冈地方韩国人的好地方恢复的很好地方天热问个问题温特沃' },
    { name: '添加', code: 'add', constraint: '1', limitedExpireAt: new Date(), remark: '梵蒂冈地方韩国人的好地方恢复的很好地方天热问个问题温特沃' },
    { name: '添加', code: 'add', constraint: '1', limitedExpireAt: new Date(), remark: '梵蒂冈地方韩国人的好地方恢复的很好地方天热问个问题温特沃' },
    { name: '添加', code: 'add', constraint: '1', limitedExpireAt: new Date(), remark: '梵蒂冈地方韩国人的好地方恢复的很好地方天热问个问题温特沃' },
    { name: '添加', code: 'add', constraint: '1', limitedExpireAt: new Date(), remark: '梵蒂冈地方韩国人的好地方恢复的很好地方天热问个问题温特沃' },
    { name: '添加', code: 'add', constraint: '1', limitedExpireAt: new Date(), remark: '梵蒂冈地方韩国人的好地方恢复的很好地方天热问个问题温特沃' },
    { name: '添加', code: 'add', constraint: '1', limitedExpireAt: new Date(), remark: '梵蒂冈地方韩国人的好地方恢复的很好地方天热问个问题温特沃' },
    { name: '添加', code: 'add', constraint: '1', limitedExpireAt: new Date(), remark: '梵蒂冈地方韩国人的好地方恢复的很好地方天热问个问题温特沃' },
    { name: '添加', code: 'add', constraint: '1', limitedExpireAt: new Date(), remark: '梵蒂冈地方韩国人的好地方恢复的很好地方天热问个问题温特沃' },
];