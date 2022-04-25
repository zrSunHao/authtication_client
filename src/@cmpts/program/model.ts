export interface ProgramElement {
    id: string | null;
    name: string;
    type: '1' | '2' | '3' | '4'; // 网页端 桌面端 移动端 服务端
    code: string;
    intro: string;
    remark: string;
    createdAt: Date | null;
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

export class ProgramSearchDto {
    nameOrCode: string = '';
    type: '' | '1' | '2' | '3' | '4' = '';
    introOrRemark: string = '';
    startAt: Date | null = null;
    endAt: Date | null = null;
}

export interface SectionElement {
    id: string | null;
    programId: string;
    name: string;
    code: string;
    remark: string;
}

export const SECTION_ELEMENT_DATA: SectionElement[] = [
    { id: '1', name: '模块_1', programId: '1', code: 'page_1', remark: '啦啦d啦fsdfsdf啦人羊肉汤羊肉汤羊肉汤啦sdfrsdfsdfsdfsd啦啦啦啦啦' },
    { id: '2', name: '模块_2', programId: '1', code: 'page_2', remark: '啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦' },
    { id: '3', name: '模块_3', programId: '1', code: 'page_3', remark: '啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦' },
    { id: '4', name: '模块_4', programId: '1', code: 'page_4', remark: '啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦' },
    { id: '5', name: '模块_5', programId: '1', code: 'page_5', remark: '啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦' },
    { id: '6', name: '模块_6', programId: '1', code: 'page_6', remark: '啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦' },
    { id: '7', name: '模块_7', programId: '1', code: 'page_7', remark: '啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦' },
    { id: '8', name: '模块_8', programId: '1', code: 'page_8', remark: '啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦啦啦d啦fsdfsdf啦啦sdfrsdfsdfsdfsd啦啦啦啦啦' },
]

export interface FunctionElement {
    id: string | null;
    programId: string;
    sectionId: string;
    name: string;
    code: string;
    constraint: '' | '1' | '2';
    limitedExpireAt: Date | null;
    remark: string;
}

export const FUNCTION_ELEMENT_DATA: FunctionElement[] = [
    { id: '1', name: '页面数据', programId: '1', sectionId: '1', code: 'page_list', constraint: '', limitedExpireAt: null, remark: '梵蒂冈地方韩国人的好地方恢复的很好地方天热问个问题温特沃' },
    { id: '2', name: '添加模块', programId: '1', sectionId: '1', code: 'add_section', constraint: '', limitedExpireAt: null, remark: '梵蒂冈地方韩国人的好地方恢复的很好地方天热问个问题温特沃' },
    { id: '3', name: '删除模块', programId: '1', sectionId: '1', code: 'remove_section', constraint: '', limitedExpireAt: null, remark: '梵蒂冈地方韩国人的好地方恢复的很好地方天热问个问题温特沃' },
    { id: '4', name: '添加功能', programId: '1', sectionId: '1', code: 'add_function', constraint: '', limitedExpireAt: null, remark: '梵蒂冈地方韩国人的好地方恢复的很好地方天热问个问题温特沃' },
    { id: '5', name: '添加约束', programId: '1', sectionId: '1', code: 'add_constraint', constraint: '', limitedExpireAt: null, remark: '梵蒂冈地方韩国人的好地方恢复的很好地方天热问个问题温特沃' },
];