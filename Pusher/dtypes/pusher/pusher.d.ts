declare module 'pusher' {
    export = pusher;
}

declare module pusher {

    interface IPusher {
        subscribe(channel: string): IChannel;
    }

    interface IChannel {
        bind(event: string, callback: (data: any) => any);
    }
}