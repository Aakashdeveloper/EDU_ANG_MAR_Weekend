import {MessageService} from './message.service';

describe('Message Service', () => {
    let service: MessageService;

    beforeEach(() => {
        service = new MessageService();
    });

    it('should have no message', () => {
        expect(service.messages.length).toBe(0);
    });
    it('should add a message', () => {
        service.add('ok working');
        expect(service.messages.length).toBe(1);
    });
    it('should remove message', () => {
        service.clear();
        expect(service.messages.length).toBe(0);
    });
});
