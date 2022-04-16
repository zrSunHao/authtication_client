export interface CustomerElement {
    avatar: string;
    name: string;
    nickname: string;
    constraint: string;
    constraintEndAt: Date;
    lastLoginAt: Date;
    remark: string;
}

export const CUSTOMER_ELEMENT_DATA: CustomerElement[] = [
    { avatar: '/assets/images/people_1.jpg', name: 'zhangsan', nickname: '张三', 
    constraint:'锁定', constraintEndAt: new Date(),lastLoginAt: new Date() ,remark:'撒看见打撒萨达萨达撒旦撒旦' },
    { avatar: '/assets/images/logo_256.png', name: 'zhangsan', nickname: '认识的v', 
    constraint:'锁定', constraintEndAt: new Date(),lastLoginAt: new Date() ,remark:'撒看见打撒萨达萨达撒旦撒旦' },
    { avatar: '/assets/images/people_1.jpg', name: 'zhangsan', nickname: '是发', 
    constraint:'锁定', constraintEndAt: new Date(),lastLoginAt: new Date() ,remark:'撒看见打撒萨达萨达撒旦撒旦' },
    { avatar: '/assets/images/logo_256.png', name: 'zhangsan', nickname: '张三', 
    constraint:'锁定', constraintEndAt: new Date(),lastLoginAt: new Date() ,remark:'撒看见打撒萨达萨达撒旦撒旦' },
    { avatar: '/assets/images/people_1.jpg', name: 'zhangsan', nickname: '王五打赏', 
    constraint:'锁定', constraintEndAt: new Date(),lastLoginAt: new Date() ,remark:'撒看见打撒萨达萨达撒旦撒旦' },
    { avatar: '/assets/images/logo_256.png', name: 'zhangsan', nickname: '浮点数', 
    constraint:'锁定', constraintEndAt: new Date(),lastLoginAt: new Date() ,remark:'撒看见打撒萨达萨达撒旦撒旦' },
    { avatar: '/assets/images/people_1.jpg', name: 'zhangsan', nickname: '个位数', 
    constraint:'锁定', constraintEndAt: new Date(),lastLoginAt: new Date() ,remark:'撒看见打撒萨达萨达撒旦撒旦' },
    { avatar: '/assets/images/logo_256.png', name: 'zhangsan', nickname: '方法', 
    constraint:'锁定', constraintEndAt: new Date(),lastLoginAt: new Date() ,remark:'撒看见打撒萨达萨达撒旦撒旦' },
    { avatar: '/assets/images/people_1.jpg', name: 'zhangsan', nickname: '更好的四个', 
    constraint:'锁定', constraintEndAt: new Date(),lastLoginAt: new Date() ,remark:'撒看见打撒萨达萨达撒旦撒旦' },
    { avatar: '/assets/images/logo_256.png', name: 'zhangsan', nickname: '法撒撒旦', 
    constraint:'锁定', constraintEndAt: new Date(),lastLoginAt: new Date() ,remark:'撒看见打撒萨达萨达撒旦撒旦' },
];