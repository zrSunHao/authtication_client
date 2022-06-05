export interface WidgetElet {
    title: string;
    icon: string;
    color: string;
}

export interface ReportCtmElet {
    avatar: string;
    name: string;
    roleName: string;
    sysName: string;
    lastLoginAt: Date;
}

export interface ReportLogElet {
    name: string;
    sysName: string;
    operate: string;
    createdAt: Date;
}