import { GenderType, PeopleElet } from "./customer.model";
import { RoleRank } from "./system.model";

export class AcctElet {
    id: string | null = '';
    avatar: string = '';
    name: string = '';
    nickname: string = '';
    remark: string = '';
    createdAt: Date | null = null;
}

export class AuthRoleElet {
    id: string = '';
    rank: RoleRank = RoleRank.other;
    name: string = '';
}

export class AuthResult {
    customer: AcctElet | null = null;    // 账号信息
    people: PeopleElet | null = null;   // 个人信息
    role: AuthRoleElet | null = null;   // 角色
    sectCodes: string[] = [];           // 可进入模块
    functCodes: string[] = [];          // 可操作功能
    token: string = '';                 // JWT
    loginId: string = '';                   // 本次登录主键
}

export interface LoginDto {
    userName: string;
    password: string;
    sysCode: string;
    pgmCode: string;
}

export interface RegisterDto {
    userName: string;
    fullName: string;
    nickName: string;
    gender: GenderType;
    birthday: Date;
    password: string;
    education: string;
}

export interface Permission {
    sect: string;
    funcs: string[];
}

export interface UserLogElet {
    ctmId: string;
    ctmName: string;
    ctmNickname: string;
    operate: string;
    sysName: string | null;
    pgmName: string | null;
    roleName: string | null;
    roleRank: RoleRank;
    remoteAddress: string | null;
    remark: string | null;
    createdAt: Date;
}

export class UserLogFilter {
    sysId: string | null = '';
    name: string | null = '';
    operateOrRemark: string | null = '';
    startAt: Date | null = null;
    endAt: Date | null = null;
}


export const AUTH_PERMISSION_DATA: Permission[] = [
    {
        sect: 'dashboard',      /** 起始页-------------*/ 
        funcs: []
    },
    {
        sect: 'customer',       /** 客户管理-----------*/ 
        funcs: [
            'ctm_datail',           // 查看客户详情
            'ctm_remark',           // 添加客户备注
        ]
    },
    {
        sect: 'ctm_datail',     /** 客户详情------------*/ 
        funcs: [
            'ctm_acct_reset',       // 重置密码
            'ctm_acct_remark',      // 添加备注
            'ctm_people_update',    // 修改客户个人信息
            'ctm_role_add',         // 添加客户角色
            'ctm_role_update',      // 修改客户角色
            'ctm_role_delete',      // 删除客户角色
            'ctm_ctt_add',          // 添加客户约束
            'ctm_ctt_update',       // 撤销客户约束
        ]
    },
    {
        sect: 'program',        /** 程序管理------------*/ 
        funcs: [
            'pgm_add',              // 添加程序
            'pgm_update',           // 更新程序 
            'pgm_cfg',              // 程序功能配置
            'pgm_ctm',              // 程序关联人员配置
            'pgm_delete',           // 删除程序
        ]
    },
    {
        sect: 'pgm_cfg',        /** 程序功能配置---------*/ 
        funcs: [
            'pgm_sect_add',         // 添加模块/页面
            'pgm_sect_update',      // 更新模块/页面
            'pgm_func_add',         // 添加功能
            'pgm_sect_delete',      // 删除模块/页面
            'pgm_func_update',      // 更新功能
            'pgm_func_delete',      // 删除功能
        ]
    },
    {
        sect: 'pgm_ctm',        /** 程序关联用户---------*/ 
        funcs: [
            'pgm_ctm_add',          // 添加关联人员
            'pgm_ctm_delete',       // 删除关联人员
        ]
    },
    {
        sect: 'system',         /** 系统管理-------------*/ 
        funcs: [
            'sys_add',              // 添加系统
            'sys_update',           // 更新系统
            'sys_logo',             // 上传logo
            'sys_pgm_cfg',          // 系统程序配置
            'sys_role',             // 系统角色管理
            'sys_delete',           // 删除系统
            'sys_ctms'              // 系统客户管理
        ]
    },
    {
        sect: 'sys_ctms',       /** 系统客户管理----------*/ 
        funcs: [
            'sys_ctm_role',         // 更改客户角色
            'sys_ctt_add',          // 添加客户约束
            'sys_ctt_delete',       // 删除客户约束
        ]
    },
    {
        sect: 'sys_pgm_cfg',    /** 系统程序配置-----------*/ 
        funcs: [
            'sys_pgm_add',          // 添加关联程序
            'sys_pgm_delete',       // 删除关联程序
        ]
    },
    {
        sect: 'sys_role',       /** 系统角色管理-----------*/ 
        funcs: [
            'sys_role_add',         // 添加角色
            'sys_role_update',      // 更新角色
            'sys_role_delete',      // 删除角色
            'sys_role_cfg',         // 配置角色权限
        ]
    },
    {
        sect: 'sys_role_cfg',   /** 系统角色权限配置--------*/ 
        funcs: [
            'sys_role_func_save',   // 保存角色在某关联程序权限
        ]
    },
    {
        sect: 'constraint',     /** 约束管理----------------*/ 
        funcs: [
            'ctt_delete',           // 撤销约束
        ]
    },
    {
        sect: 'log',            /** 日志管理----------------*/ 
        funcs: []
    },
];