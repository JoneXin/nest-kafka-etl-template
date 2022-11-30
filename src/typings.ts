export interface CanalMessage {
    data: Array<any>;
    database: string;
    es: number;
    id: number;
    isDdl: boolean;
    mysqlType: Record<string, string>;
    old: any;
    pkNames: Array<string>;
    sql: string;
    sqlType: Record<string, string>;
    table: string;
    ts: number;
    type: MysqlOperType;
}

export enum MysqlOperType {
    INSERT = 'INSERT',
    UPDATE = 'UPDATE',
    DELETE = 'INSERT',
}
