/* eslint-disable @typescript-eslint/no-var-requires */
const { createConnection } = require('mysql2');
const uuid = require('uuid');

async function getConnection() {
  const conn = createConnection({
    host: '192.168.0.132',
    port: 3306,
    user: 'root',
    password: 'Leaper@123',
  });

  setInterval(() => {
    const data = genData();
    const values = Object.values(data)
      .map(
        (v) =>
          `(${Object.values(v)
            .map((v) => `"${v}"`)
            .join(',')})`,
      )
      .join(',');

    conn
      .promise()
      .query(
        `insert into now_forge.training_list(training_uuid, coco_dir, status) values ${values} `,
      );
    console.log('success');
  }, 2000);
}

function genData() {
  return [
    {
      training_uuid: uuid.v4(),
      coco_dir: 'ddddd',
      status: 'done',
    },
    {
      training_uuid: uuid.v4(),
      coco_dir: 'ccccc',
      status: 'done',
    },
    {
      training_uuid: uuid.v4(),
      coco_dir: 'tttt',
      status: 'done',
    },
  ];
}

getConnection();
