import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    freezeTableName: true,
    tableName: 'flaw',
    createdAt: false,
    updatedAt: false,
})
export class Flaw extends Model<Flaw> {
    @Column({
        primaryKey: true,
        type: 'number',
    })
    uid: number;

    @Column({
        type: 'number',
    })
    sheet_id: number;

    @Column({
        type: 'number',
    })
    job_id: number;
}
