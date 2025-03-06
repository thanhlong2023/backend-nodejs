// import yargs from "yargs"; 
//es6

const yargs = require('yargs'); //es5 (common js)

//tạo lệnh test
//node app/index.js test
yargs.command({
    command: 'test',
    handler: () => {
        console.log("hello world");
    }
})


//crud

//create - node app/index.js create --title="Hoc" --description="Hoc nodejs đâu khó lắm đâu"
yargs.command({
    command: 'create',
    builder: {
        title: {
            type: 'string',
        },
        description: {
            type: 'string',
        }
    },
    handler: (args) => {
        const { title, description } = args;
        console.log("create");
        console.log(title);
        console.log(description);
    }
})

//read-all - node app/index.js read-all
yargs.command({
    command: 'read-all',
    handler: () => {
        console.log("read-all");
    }
})

//read-detail - node app/index.js read-detail --id="123"
yargs.command({
    command: 'read-detail',
    builder: {
        id: {
            type: 'string',
        }
    },
    handler: (args) => {
        console.log("read-detail");
        const { id } = args;
        console.log(id);
    }
})

//update - node app/index.js update --id="123" --title="Hoc" --description="Hoc nodejs đâu khó lắm đâu"
yargs.command({
    command: 'update',
    builder: {
        id: {
            type: 'string',
        },
        title: {
            type: 'string',
        },
        description: {
            type: 'string',
        }
    },
    handler: (args) => {
        console.log("update");
        const { id, title, description } = args;
        console.log(id);
        console.log(title);
        console.log(description);
    }
})

//delete - node app/index.js delete --id="123"
yargs.command({
    command: 'delete',
    builder: {
        id: {
            type: 'string',
        }
    },
    handler: (args) => {
        console.log("delete");
        const { id } = args;
        console.log(id);
    }
})


//lưu lại các lệnh vừa tạo
yargs.parse();