import { Sequelize } from 'sequelize';

interface UploadOptions {
    /**
     * 主键冲突时，是否更新 默认否
     */
    updateOnDuplicateKeys?: boolean;
    /**
     * 主键冲突时，更新的字段 默认全部更新
     */
    updateColumnList?: Array<string>;
    /**
     * 上传的数据库名称
     */
    database: string;
    /**
     * 上传的表名称
     */
    table: string;
}

export class DynamicSeqlize {
    public sequelize: Sequelize;

    constructor(sequelize: Sequelize) {
        this.sequelize = sequelize;
    }

    /**
     * 转换对象数组 成 sql
     * @param data
     * @returns
     */
    private transformArrayToSql(data: Array<Record<string, any>>): { keys: string; values: string } {
        const keys = Object.keys(data[0]).join(',');
        const values = data
            .map(
                (v) =>
                    `(${Object.values(v)
                        .map((i) => (typeof i == 'string' ? `"${i}"` : i))
                        .join(',')})`,
            )
            .join(',');
        return {
            keys,
            values,
        };
    }

    /**
     * @desc 动态指定库 表 上传
     * @param data 上传数组对象
     * @param uploadOpt 上传参数 见UploadOptions
     */
    async upload(data: Array<Record<string, any>>, uploadOpt: UploadOptions) {
        const { database, table, updateColumnList, updateOnDuplicateKeys } = uploadOpt;
        const { keys, values } = this.transformArrayToSql(data);
        let updateSql = '';

        if (updateOnDuplicateKeys) {
            const updateColumn = updateColumnList || Object.keys(data[0]);
            updateSql = 'ON DUPLICATE KEY UPDATE' + updateColumn.map((c) => `${c} = VALUES(${c})`).join(',');
        }

        return await this.sequelize.query(`INSERT INTO ${database}.${table}(${keys}) VALUES ${values} ${updateSql}`);
    }
}
