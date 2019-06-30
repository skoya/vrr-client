import EventBus from 'vertx3-eventbus-client';

export const eb = new EventBus("http://localhost:10062");


eb.onerror = (error) => {
    console.log(error);
};

eb.onopen = () => {
    eb.enableReconnect(true);
    eb.enablePing(true);
    console.log('Socket connected');

    eb.registerHandler('out.periodicMessage', (error, message) => {
        console.log('received a message: ' + JSON.stringify(message));
    });

    
};

eb.onclose = () => {
    console.log('Socket closed');
};
