const amqp = require('amqplib/callback_api');

//create connection 
amqp.connect('amqp://localhost',(Connectionerror,connect) => {
    if(Connectionerror){
        throw Connectionerror;
    }
    // create channel
    connect.createChannel((channelError, channel)=>{
        if(channelError){
            throw channelError;
        }
        // create queue
        const QUEUE = 'test';
        channel.assertQueue(QUEUE);
        // send messege to queue
        channel.sendToQueue(QUEUE, Buffer.from('hello it\'s just test'))
        console.log('messege is sent');
    })
})