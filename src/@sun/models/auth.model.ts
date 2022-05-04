export interface Permission {
    sect: string;
    funcs: string[];
}

export const AUTH_PERMISSION_DATA: Permission[] = [
    {
        sect: 'dashboard',
        funcs: []
    },
    {
        sect: 'customer',
        funcs: [
            'ctm_datail',
            'ctm_remark',
        ]
    },
    {
        sect: 'ctm_datail',
        funcs: [
            'ctm_acct_reset',
            'ctm_acct_remark',
            'ctm_people_update',
            'ctm_role_add',
            'ctm_role_update',
            'ctm_role_delete',
            'ctm_ctt_add',
            'ctm_ctt_update',
        ]
    },
    {
        sect: 'program',
        funcs: [
            'pgm_add',
            'pgm_update',
            'pgm_cfg',
            'pgm_delete',
        ]
    },
    {
        sect: 'pgm_cfg',
        funcs: [
            'pgm_sect_add',
            'pgm_sect_update',
            'pgm_func_add',
            'pgm_sect_delete',
            'pgm_func_update',
            'pgm_func_delete',
        ]
    },
    {
        sect: 'system',
        funcs: [
            'sys_add',
            'sys_update',
            'sys_logo',
            'sys_pgm_cfg',
            'sys_role',
            'sys_delete',
        ]
    },
    {
        sect: 'sys_pgm_cfg',
        funcs: [
            'sys_pgm_add',
            'sys_pgm_delete',
        ]
    },
    {
        sect: 'sys_role',
        funcs: [
            'sys_role_add',
            'sys_role_update',
            'sys_role_delete',
            'sys_role_cfg',
        ]
    },
    {
        sect: 'sys_role_cfg',
        funcs: [
            'sys_role_func_save',
        ]
    },
    {
        sect: 'constraint',
        funcs: [
            'ctt_delete',
        ]
    },
];